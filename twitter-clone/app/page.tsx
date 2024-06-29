import LoginPage from "./login_page";
import LoginPageFooter from "./login_page_footer";

export default function Home() {
  return (
    <div className="flex flex-wrap flex-col">
      <LoginPage/>
      <LoginPageFooter/>
    </div>
  );
}
