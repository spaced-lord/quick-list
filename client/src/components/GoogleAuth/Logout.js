import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId =
  "659871250507-bokvnt4700ki1lu59kp9h50ccro3g721.apps.googleusercontent.com";

function Logout({ logout }) {
  const onSuccess = () => {
    console.log("Logout made successfully");
    logout();
    alert("Logout made successfully ✌");
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
