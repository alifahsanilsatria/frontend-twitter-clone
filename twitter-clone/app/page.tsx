import HomepageBeforeLoginContainer from "../components/homepage_before_login/homepage_before_login_container";
import HomepageBeforeLoginFooter from "../components/homepage_before_login/homepage_before_login_footer";
import "../components/homepage_before_login/homepage_before_login.css"


export default function Home() {
  return (
    <div className="homepage-before-login">
      <HomepageBeforeLoginContainer/>
      <HomepageBeforeLoginFooter/>
    </div>
  );
}
