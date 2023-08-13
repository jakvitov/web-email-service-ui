import ReactDOM from 'react-dom/client';
import {Auth0Provider} from "@auth0/auth0-react";
import App from './App';
import {OktaConfig} from "./config/OktaConfig";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider
        domain={OktaConfig.domain}
        clientId={OktaConfig.clientId}
        //Redirect after login
        authorizationParams={{
            redirect_uri: OktaConfig.redirectUri,
            audience: "https://" + OktaConfig.domain + "/api/v2/",
        }}
    >
        <App />
    </Auth0Provider>,
);

