import HomepageBeforeLoginSignInContainer from "./homepage_before_login_sign_in_container";

export default function HomepageBeforeLoginSignUpContainer() {
	return (
        <div className="homepage-before-login__sign-up-container">
            <h2 className="homepage-before-login__join-today-wording">Join today.</h2>
            <button className="homepage-before-login__create-account-wording">Create account</button>
            <p className="homepage-before-login__signup-tnc-wording">By signing up, you agree to the <a href="#" className="text-sky-500">Terms of Service</a> and <a href="#" className="text-sky-500">Privacy Policy</a>, including <a href="#" className="text-sky-500">Cookie Use</a>.</p>
        </div>
	);
}
  