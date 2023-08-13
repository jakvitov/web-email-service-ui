
const  OktaConfig = {
    domain : process.env.REACT_APP_OAUTH_DOMAIN,
    clientId : process.env.REACT_APP_OAUTH_CLIENT_ID,
    redirectUri: window.location.origin
}

export {OktaConfig}