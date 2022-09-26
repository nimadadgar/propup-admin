import {useState,useEffect} from 'react'
import Div100vh, { use100vh } from 'react-div-100vh'
import {Header} from './Header'
import {Sidebar} from './Sidebar'
import {AddMember} from '../Member/AddMember'
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import { MsalAuthenticationTemplate, useMsal, useAccount } from "@azure/msal-react";
import { loginRequest, protectedResources } from "../../authConfig";
import { EventType, InteractionType } from "@azure/msal-browser";
import {useStore} from '../../Store'


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
    const [showAddMemberModal,setShowAddMemberModal]=useState(false);
const addMemberEvent=()=>{
    setShowAddMemberModal(true);
}

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
    

    <Div100vh className="flex flex-row bg-background/20">
     
      
      <MsalAuthenticationTemplate 
      interactionType={InteractionType.Redirect} 
      authenticationRequest={authRequest}
  >

    <Sidebar />
 
        <Div100vh className="flex-1 flex flex-col   scrollbar overflow-scroll" >
        <Header instance={instance} addMemberEvent={addMemberEvent} />


       <div className="px-8 scrollbar flex flex-col  overflow-scroll flex-1">    
        <AddMember onClose={()=>setShowAddMemberModal(false)} isOpen={showAddMemberModal} />

        <section name="Content" className=" pt-5   scrollbar overflow-auto  flex-1 ">
          <Outlet />
        </section>
        </div>
        
        </Div100vh>
    
        </MsalAuthenticationTemplate>

  </Div100vh>
 
  )

    
}


