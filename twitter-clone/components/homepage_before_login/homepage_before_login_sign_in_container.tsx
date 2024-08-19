import Link from "next/link";

export default function HomepageBeforeLoginSignInContainer() {
  return (
    <div className="homepage-before-login__sign-in-container">
      <p className="homepage-before-login__already-have-an-account-wording">Already have an account?</p>
      <Link href="/i/flow/login">
        <button className="homepage-before-login__sign-in-button">Sign in</button>
      </Link>
    </div>
  );
}
