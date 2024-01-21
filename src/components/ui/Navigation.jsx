import { Link } from "react-router-dom";
// import React from "react";
// import { useNavigate } from "react-router-dom";
import Logo from "../Logo";

function Navigation() {
  // const [user, setUser] = React.useState(null);

  // const navigate = useNavigate();

  // React.useEffect(() => {
  //   const getCurrentUser = () => {
  //     onAuthStateChanged(auth, (user) => {
  //       if (user) {
  //         const userDetails = {
  //           name: user.name,
  //           uid: user.uid,
  //         };

  //         setUser(userDetails);
  //         console.log("user", user);
  //       } else {
  //         console.log("no user");
  //         navigate("/sign-in");
  //       }
  //     });
  //   };

  //   return () => getCurrentUser();
  // }, [navigate]);

  // console.log("state", user);

  return (
    <div className="navbar bg-base-200 md:px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-end">
        <Logo />
      </div>
    </div>
  );
}

export default Navigation;
