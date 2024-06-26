import Image from "next/image";
import SignInButton from "../components/login_page/sign_in_button";
import CreateAccountButton from "../components/login_page/create_account_button";
import RightSideContainer from "@/components/login_page/right_side_container";
import LeftSideContainer from "@/components/login_page/left_side_container";

export default function LoginPage() {
  return (
    <div className="bg-black text-white flex items-center justify-center" style={{width: "100%", height: "95%"}}>
        <div className="flex items-center">
            <LeftSideContainer/>
            <RightSideContainer/>
        </div>
        {/* <footer className="absolute bottom-0 w-full text-gray-500 text-xs text-center py-4 space-x-4">
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Download the X app</a>
            <a href="#" className="hover:underline">Help Center</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Cookie Policy</a>
            <a href="#" className="hover:underline">Accessibility</a>
            <a href="#" className="hover:underline">Ads info</a>
            <a href="#" className="hover:underline">Blog</a>
            <a href="#" className="hover:underline">Careers</a>
            <a href="#" className="hover:underline">Brand Resources</a>
            <a href="#" className="hover:underline">Advertising</a>
            <a href="#" className="hover:underline">Marketing</a>
            <a href="#" className="hover:underline">X for Business</a>
            <a href="#" className="hover:underline">Developers</a>
            <a href="#" className="hover:underline">Directory</a>
            <a href="#" className="hover:underline">Settings</a>
            <span>© 2024 X Corp.</span>
        </footer> */}
    </div>
  );
}
