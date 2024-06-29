import Image from "next/image";
import SignInContainer from "../components/login_page/sign_in_container";
import SignUpContainer from "@/components/login_page/sign_up_container";

export default function LoginPageContainer() {
  return (
    <div className="login-page-container">
      <img src="/images/x_logo.png" alt="X Logo" className="login-page-x-logo"/>
      <div className="sign-in-sign-up-container">
        <h1 className="happening-now-wording">Happening now</h1>
        <SignUpContainer/>
        <SignInContainer/>
      </div>
    </div>
  );
}
