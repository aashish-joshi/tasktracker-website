import { storageAvailable } from "./common"


/**
 * 
 */
export const checkSignIn = () => {
    // Function to check if the user has signed in or not.

    // Check if localStorage is available.
    if(storageAvailable('localStorage')){
        if (
            localStorage.getItem("access_token") &&
            localStorage.getItem("loggedIn") === "true"
          ) {
            // TODO: check if the token is valid. If not, ask user to sign in again and return True if all is OK.
            tokenIsValid(localStorage.getItem("access_token"));
            return true;
          }
        return false;
    }

    // TODO: Show error message on UI that storge is unavailable.
    console.error('Unable to access browser storage.')
    return false;
}

export const tokenIsValid = (token) => {
    if(token){
        const { sub, email, exp, aud } = decodeJwt(token);
        console.log(sub, email, exp, aud);
    }
}

export function decodeJwt(token) {
    return JSON.parse(atob(token.split(".")[1]));
}