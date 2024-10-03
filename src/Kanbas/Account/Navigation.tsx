import { Link } from "react-router-dom";
export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation">
      <Link to={`/Kanbas/Account/Signin`}  className="account-navigation-link bordered-link"> Signin  </Link> <br/>
      <Link to={`/Kanbas/Account/Signup`}  className="account-navigation-link text-danger"> Signup  </Link> <br/>
      <Link to={`/Kanbas/Account/Profile`} className="account-navigation-link text-danger"> Profile </Link> <br/>
    </div>
);}