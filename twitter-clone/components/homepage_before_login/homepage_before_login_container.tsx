import HomepageBeforeLoginSignInContainer from "./homepage_before_login_sign_in_container";
import HomepageBeforeLoginSignUpContainer from "./homepage_before_login_sign_up_container";

export default function HomepageBeforeLoginContainer() {
  return (
    <div className="homepage-before-login__login-page-container">
      <img src="/images/x_logo.png" alt="X Logo" className="homepage-before-login__x-logo"/>
      <div className="homepage-before-login__sign-in-sign-up-container">
        <h1 className="homepage-before-login__happening-now-wording">Happening now</h1>
        <HomepageBeforeLoginSignUpContainer/>
        <HomepageBeforeLoginSignInContainer/>
      </div>
    </div>
  );
}
