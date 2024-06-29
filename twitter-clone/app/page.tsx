import LoginPage from "./login_page";
import LoginPageFooter from "./login_page_footer";

export default function Home() {
  return (
    <div className="grid grid-flow-row gap-y-14">
      <LoginPage/>
      <LoginPageFooter/>
    </div>
  );
}
