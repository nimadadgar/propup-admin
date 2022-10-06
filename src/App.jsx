import { useState, useEffect } from 'react'

import 'react-toastify/dist/ReactToastify.css';
import { cssTransition, ToastContainer } from "react-toastify";
import { FiX } from "react-icons/fi";
import { Route, Routes } from "react-router-dom";
import {Dashboard} from './Pages/Dashboard'
import {MemberList} from './Pages/Member/MemberList'
import {Home} from './Pages/Home'
import { MsalAuthenticationTemplate, useMsal, useAccount } from "@azure/msal-react";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import {Button} from './Component'
import { EventType, InteractionType } from "@azure/msal-browser";
import { b2cPolicies } from "./authConfig";
import AcceptInviteUser from './Pages/AcceptInviteUser'
import { get } from 'react-hook-form';

const Splash=()=>{
  return <>
    <div>User Login Please</div>
    <AuthenticatedTemplate>

    <Button variant={'transparent'}  className=" mr-4" small={true} >
        Add a member
        </Button>
          </AuthenticatedTemplate>
          <UnauthenticatedTemplate>
              <div>Please sign-in to see your profile information.</div>
          </UnauthenticatedTemplate>
          <Button variant={'transparent'}  className=" mr-4" small={true} >
        Add a member
        </Button>
  </>
}



function App()
{   
  
  const { instance, accounts, inProgress } = useMsal();




  const account = useAccount(accounts[0] || {});

const NoMatch=()=>{
  return <div>No Match</div>
}


  return (
    <>
 <ToastContainer
        role="alert"
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={true}
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        closeOnClick
        rtl={false}
        closeButton={({ closeToast }) => <FiX onClick={() => closeToast} />}
       
        draggable
        bodyClassName="font-bold"
      />
      <Routes>
      <Route  path="/user/acceptinvite/:id" element={<AcceptInviteUser />} />
      <Route exact path="/" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="memberlist" element={<MemberList />} />
          <Route path="*" element={<NoMatch />} />
       </Route>

      

      </Routes>

         
   


 </>)

}


export default App
