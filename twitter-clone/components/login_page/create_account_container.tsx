import CreateAccountButton from "./create_account_button";
import SignInButton from "./sign_in_button";

export default function CreateAccountContainer() {
	return (
        <div>
            <CreateAccountButton/>
            <p>
                By signing up, you agree to the <a href="#" className="text-sky-500">Terms of Service</a> and <a href="#" className="text-sky-500">Privacy Policy</a>, including <a href="#" className="text-sky-500">Cookie Use</a>.
            </p>
        </div>
	);
}
  