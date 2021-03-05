import React from "react";
import Login from "../components/GoogleAuth/Login";
import Logout from "../components/GoogleAuth/Logout";
import { Link, Route } from "react-router-dom";

function Home(props) {
  {
    console.log(props);
  }
  return (
    <div>
      <h2>Login</h2>
      <form>
        <Login />
        <Logout />
      </form>
      <h2>Why do we use it? </h2>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </p>
      {/* <Link to="/Signup" role="button" className="btn btn-link">
        Signup
      </Link> */}
      {/* <Link to={`${props.match.url}/signup`} role="button" className="">
        Signup
      </Link>{" "}
      <Route exact path={`${props.match.url}/signup`} component={Signup} /> */}
    </div>
  );
}

export default Home;
