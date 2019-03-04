export default {
    // The URL we're connecting to
  
    //local Dev  
   hostname:'http://localhost:8032/api',

    errors: {
      // Defaults
      default: "Hmm, an unknown error occured",
      timeout: "Server Timed Out. Check your internet connection",
      invalidJson: "Response returned is not valid JSON",
      authFailed: "Unauthorized Access"
    },
    endpoints: new Map([
      //auth  
      ["auth", "/oauth/token"],
      //users CRUD
      ["users", "/users"],     
    ]),
    tokenKey: "auth"
  };
  