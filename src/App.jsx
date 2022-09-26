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


useEffect(() => {
  const callbackId = instance.addEventCallback((event) => {
    if ((event.eventType === EventType.LOGIN_SUCCESS || event.eventType === EventType.ACQUIRE_TOKEN_SUCCESS) && event.payload.account) {
        /**
         * For the purpose of setting an active account for UI update, we want to consider only the auth 
         * response resulting from SUSI flow. "tfp" claim in the id token tells us the policy (NOTE: legacy 
         * policies may use "acr" instead of "tfp"). To learn more about B2C tokens, visit:
         * https://docs.microsoft.com/en-us/azure/active-directory-b2c/tokens-overview
         */
        if (event.payload.idTokenClaims['tfp'] === b2cPolicies.names.editProfile) {
          // retrieve the account from initial sing-in to the app
          const originalSignInAccount = instance.getAllAccounts()
              .find(account =>
                account.idTokenClaims.oid === event.payload.idTokenClaims.oid
                &&
                account.idTokenClaims.sub === event.payload.idTokenClaims.sub
                &&
                account.idTokenClaims['tfp'] === b2cPolicies.names.signUpSignIn
              );
          
          let signUpSignInFlowRequest = {
              authority: b2cPolicies.authorities.signUpSignIn.authority,
              account: originalSignInAccount
          };
  
          // silently login again with the signUpSignIn policy
          instance.ssoSilent(signUpSignInFlowRequest);
        }
      }
  });

  return () => {
      if (callbackId) {
          instance.removeEventCallback(callbackId);
      }
  }
// eslint-disable-next-line  
}, []);




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
      <Route path="/user/acceptinvite/:id" element={<AcceptInviteUser />} />

      <Route path="/" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="memberlist" element={<MemberList />} />
          <Route path="*" element={<NoMatch />} />
    </Route>

      </Routes>

         
   


 </>)

}


export default App
