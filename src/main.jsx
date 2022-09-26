import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "tippy.js/animations/scale-extreme.css";
import './index.css'
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider, useMsal } from "@azure/msal-react";

import { msalConfig } from "./authConfig";
import { HashRouter } from "react-router-dom";

const msalInstance = new PublicClientApplication(msalConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <HashRouter>
 <MsalProvider instance={msalInstance}>
    <App/>
    </MsalProvider>
    </HashRouter>
)
