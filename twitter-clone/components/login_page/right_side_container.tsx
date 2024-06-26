import CreateAccountButton from "./create_account_button";
import CreateAccountContainer from "./create_account_container";
import SignInButton from "./sign_in_button";

export default function RightSideContainer() {
	return (
        <div className="flex flex-col mb-48" style={{paddingLeft: "450px"}}>
            <h1 className="text-7xl font-bold mb-20">Happening now</h1>
            <h2 className="text-4xl font-semibold mb-8">Join today.</h2>
            <CreateAccountContainer/>
            <p className="text-2xl text-white mb-4">Already have an account?</p>
            <SignInButton/>
        </div>
	);
}
  