import Image from "next/image";
import SignInContainer from "../components/login_page/sign_in_container";
import XLogoContainer from "@/components/login_page/x_logo_container";
import SignUpContainer from "@/components/login_page/sign_up_container";

export default function LoginPage() {
  return (
    <div className="login-page-container">
      <img src="/images/x_logo.png" alt="X Logo" className="w-11 h-10"/>
      <h1 className="happening-now-wording">Happening now</h1>
      <SignUpContainer/>
      <SignInContainer/>
    </div>
  );
}
