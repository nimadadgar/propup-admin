import React,{useState,useEffect} from 'react'
import {useForm,Controller} from 'react-hook-form'
import { ClipLoader } from "react-spinners";
import {useApi ,userCommand} from '../../Api'
import { useParams } from "react-router-dom";
import NotFound from '../NotFound'

function AcceptInviteUser()
{

  const [status,setStatus]=useState(0);
  const [success,setSuccess]=useState(false);

  const [error,setError]=useState("");
  const { handleSubmit,watch,register,control,setValue ,getValues,formState: { isValid, errors }, reset } = useForm({
    defaultValues:{} });

    

  const [loading,callApi]=useApi();
  let params = useParams();


  useEffect(()=>{
  var id=params.id;
  loadInviteUser(id);
 
  },[])

  const loadInviteUser=async (id)=>{
 var result=await   callApi(userCommand.inviteInfo(id));
 console.log(result);
 if (!result.success)
 {
  setStatus(2);
 }
 else
 {
  setStatus(1);
 }

  }


  const onSubmitHandler=async (data)=>{

    var result=await   callApi(userCommand.acceptInvite({id:params.id,password:data.password}));
    console.log(result);
    if (!result.success)
    {
  setError(result.message);
  return;
    }

    

    setSuccess(true);


  }
    return (
      <section class="h-full  md:h-screen bg-backgroundGray">
        {status===0 && 
        <div style={{ height: 30 }} className="mx-2 pt-12 mb-1 flex justify-center items-center h-screen" >
        <ClipLoader size={30} color={'red'} />
      </div>
        }
    {status===2 && <NotFound />}


    <downloadAppPage />


    {status===1 && 
    <div class="container py-12 px-6 h-full ">
    <div class="flex justify-center flex-wrap  g-6  " >
    <div class="lg:w-4/12 w-full
     pb-8 px-4 md:px-0 border border-2 shadow-lg border border-2 rounded-lg relative bg-backgroundGray overflow-hidden">
      <div className="flex">
      <div className="bg-yellowColor w-32 h-32 rounded-full -mt-16"></div>
      <div className="bg-yellowColor w-32 h-32 rounded-full -ml-48"></div>
      </div>

      {success && <DownloadAppPage />}

    {!success &&
    <>
    <div className="flex flex-col items-center justify-center ">
      <div className="pt-4 text-lg font-black">Welcome Onboard!</div>
      <div className="pt-4 text-lg font-black">Change Password</div>
      </div>

      <div className="flex px-4 flex-col items-center justify-center ">
      {error && <div className="pt-4 text-red-500 text-sm font-black">{error}</div>}
      </div>
      <form onSubmit={handleSubmit(onSubmitHandler)} className="flex flex-col items-center justify-center px-8 pt-8 ">
        <input 
        options={{
          required: true,
        }} 
        {...register("password", { required: true })}
      msg="Password is required"
        
        placeholder="New Password" className="shadow-lg border border-2 rounded-3xl h-14 text-center w-full text-black text-lg focus:outline-none focus:border-gray-300"/>
        { errors.password && <span className="text-red-500">Password is required</span>}


      
        <input placeholder="Confirm Password"
                {...register("confirmPassword", { required:  "Cofirm Password  is required",
                  validate: (val) => {
                    if (watch('password') != val) {
                      return "Your passwords do no match";
                    }
                  },
                
                
                })}

        className="shadow-lg mt-6 border border-2 rounded-3xl h-14 text-center w-full text-black text-lg focus:outline-none focus:border-gray-300"/>
        { errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword.message}</span>}



<div>
  <button  type='submit'  
  value="Submit"
   className="w-64 active:opacity-70 px-2 transition-all cursor-pointer w-full flex items-center border shadow-lg justify-center bg-yellowSubmit h-14 mt-16 rounded-lg font-black text-lg" >
    <span className="px-4">Submit</span>
     {loading &&  <span  className="px-4">      <ClipLoader size={20} color={'red'} /></span>}
   </button >
  
      </div>
      </form>
</>
         }
  
      
      </div>

  
  
        </div>
  
      </div>}
      </section>
    )
  }



  const DownloadAppPage=()=>{
    return (
      <div className="flex justify-center items-center flex-col">
        <div className="font-black text-lg text-sm text-green-500" >successful</div>
        <a className="pt-5 text-blue-700" href="www.google.com">Please Download App and Sign in with your mail</a>

      </div>
    )
  }
  export default AcceptInviteUser;
  