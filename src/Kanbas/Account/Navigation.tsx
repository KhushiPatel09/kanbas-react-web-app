import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const active = (path: string) => (pathname.includes(path) ? "active" : "");
  const { pathname } = useLocation();
  return (
    <div id="wd-account-navigation">
      <Link to={`/Kanbas/Account/Signin`}  className="account-navigation-link bordered-link"> Signin  </Link> <br/>
      <Link to={`/Kanbas/Account/Signup`}  className="account-navigation-link text-danger"> Signup  </Link> <br/>
      <Link to={`/Kanbas/Account/Profile`} className="account-navigation-link text-danger"> Profile </Link> <br/>
      {currentUser && currentUser.role === "ADMIN" && (
       <Link to={`/Kanbas/Account/Users`} className={`list-group-item ${active("Users")} account-navigation-link text-danger`}> Users </Link> )}

    </div>
);}