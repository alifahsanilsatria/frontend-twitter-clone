import SignInContainer from "./sign_in_container";

export default function SignUpContainer() {
	return (
        <div>
            <h2 className="text-4xl font-semibold text-white pb-6">Join today.</h2>
            <button className="text-white font-semibold bg-sky-600 rounded-full w-full py-2">Create account</button>
            <p className="text-gray-500 text-xs pt-2"> By signing up, you agree to the <a href="#" className="text-sky-500">Terms of Service</a> and <a href="#" className="text-sky-500">Privacy Policy</a>, including <a href="#" className="text-sky-500">Cookie Use</a>.</p>
        </div>
	);
}
  