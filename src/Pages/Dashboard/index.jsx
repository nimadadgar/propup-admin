import {useState,useEffect} from 'react'
import Div100vh, { use100vh } from 'react-div-100vh'
import {Header} from './Header'
import {Sidebar} from './Sidebar'
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import { MsalAuthenticationTemplate,useMsal, useAccount } from "@azure/msal-react";
import { loginRequest, protectedResources } from "../../authConfig";
import { EventType, InteractionType } from "@azure/msal-browser";
import {useStore} from '../../Store'

import {Home, Logo,ArrowLeft,ArrowRight,Icon,UserLogo,WorkOrder,Tech,Mach,Report,Inventory,FiMoreHorizontal} from '../../assets/icons'

export const Dashboard=()=>{


  const { instance, accounts, inProgress } = useMsal();
  const account = useAccount(accounts[0] || {});
const store=useStore();
  const authRequest = {
    ...loginRequest
};

useEffect(()=>{
  instance.acquireTokenSilent({
    scopes: protectedResources.apiHello.scopes,
    account: account
}).then((response) => {

  console.log(response.accessToken);
  store.setToken(response.accessToken);


});
},[])


    if (account===null)
    {       

      return   ( <MsalAuthenticationTemplate 
      interactionType={InteractionType.Redirect} 
      authenticationRequest={authRequest}
  >
      <div>Please Wait to redirect sign in</div>
      </MsalAuthenticationTemplate>)
    }



    return (
    

    <Div100vh className="flex flex-col bg-background/20 ">
      <MsalAuthenticationTemplate 
      interactionType={InteractionType.Redirect} 
      authenticationRequest={authRequest}
  >        

<Header instance={instance}  />

<Div100vh className="flex-1 flex flex-row z-[0] bg-gray-100  overflow-hidden " >       
<Sidebar />
        <div className="px-8  flex flex-row  flex-1  ">    
        <section name="Content" className=" pt-5     flex-1 ">
       <Outlet />
        </section>

        </div>

        </Div100vh>
        </MsalAuthenticationTemplate>
      
  </Div100vh>
 
  )

    
}


