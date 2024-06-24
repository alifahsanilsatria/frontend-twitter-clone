import CreateAccountButton from "./create_account_button";
import SignInButton from "./sign_in_button";

export default function CreateAccountContainer() {
	return (
        <div className="flex flex-col gap-2 mb-12 w-80">
            <CreateAccountButton/>
            <p className="text-gray-400 text-sm">
                By signing up, you agree to the <a href="#" className="text-sky-500">Terms of Service</a> and <a href="#" className="text-sky-500">Privacy Policy</a>, including <a href="#" className="text-sky-500">Cookie Use</a>.
            </p>
        </div>
	);
}
  