import React from 'react'
import axios from "axios"
import { useEffect, useState } from "react"
//import { API_KEY } from "./MysteriousApiKey"
export const InternalCallApi = (data) => axios(data)

import {useStore} from '../Store'



export const useApi = (defaultData = null) => {

    const state = useStore()
    if (state.token!==null)
    {
        const token = state.token;
            setAuthorization(token);
    }
   
    

    const [loading, setLoading] = useState(false)
    const callApi = async (data = null) => {

        const _data = data == null ? defaultData : data
        if (_data == null || _data == undefined)
            throw Error('data must not be null')
            setLoading(true)
        const response = await InternalCallApi(_data)
        setLoading(false)

        if (response.httpCode==403)
        {
            //////////Manage Permission
            state.setPageInfo({status:'error',
            func:null,error:'دسترسی ندارید'});

        }
        
       
        return response
    }

    return [loading, callApi]
}

export const useApiInstant = (defaultData = null) => {

    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState(null)

    const callApi = async (data = null) => {

        if (data == null || data == undefined)
            throw Error('data must not be null')

        setLoading(true)
        const response = await InternalCallApi(data)
        setLoading(false)
        setResponse(response)
    }

    useEffect(() => {
        callApi(defaultData)
    },[])

    return [loading, response]
}



export const setDefaults = () => {
    axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
    axios.defaults.headers.post['Content-Type'] = 'application/json';
   // axios.defaults.headers.common['ApiKey'] = API_KEY;
    axios.defaults.timeout = 1000;
    axios.defaults.headers.common['Accept'] = 'application/json'
}

export const setAuthorization = (token) => {
    axios.defaults.headers.common['Authorization'] = `Basic ${token}`;
}

const onResponseSuccess = (response) => {
    return {...response.data,httpCode:200,success:true};
};

function onResponseError(error) {

    const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500;

    if (expectedError && error.response.status == 401) {
        
     //   window.location.replace('/#/login')
    }
    else if (expectedError && error.response.status == 403) 
    {
    //    window.location.replace('/#/login')
    }

    if (expectedError) {
        return { 
                data: error.response.data,
                httpCode: error.response.status,
                success:false,
                message: error.response.data.message
                }
    }
    else {
        return { 
                errorType:500,
                httpCode: 500,
                data:null,
                success:false,
                message: "خطای سرور ، لطفا دوباره تلاش کنید" }
    }


};

axios.interceptors.response.use(onResponseSuccess, onResponseError);


export const getAuth=()=>{
    return  axios.defaults.headers.common['Authorization'] ;
}