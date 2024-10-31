import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  return (
    <div id="wd-account-navigation">
      <Link to={`/Kanbas/Account/Signin`}  className="account-navigation-link bordered-link"> Signin  </Link> <br/>
      <Link to={`/Kanbas/Account/Signup`}  className="account-navigation-link text-danger"> Signup  </Link> <br/>
      <Link to={`/Kanbas/Account/Profile`} className="account-navigation-link text-danger"> Profile </Link> <br/>
    </div>
);}