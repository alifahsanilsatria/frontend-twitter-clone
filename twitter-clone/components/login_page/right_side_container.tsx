import CreateAccountButton from "./create_account_button";
import CreateAccountContainer from "./create_account_container";
import SignInButton from "./sign_in_button";

export default function RightSideContainer() {
	return (
        <div className="border border-black">
            <h1>Happening now</h1>
            <h2>Join today.</h2>
            <CreateAccountContainer/>
            <p>Already have an account?</p>
            <SignInButton/>
        </div>
	);
}
  