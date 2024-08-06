import "@/components/login_form/login_form.css"

export default function LoginForm() {
  return (
    <div className="login-form">
      <span className="login_form__close_button">x</span>
      <img src="/images/x_logo.png" alt="X Logo" className="login_form__x_logo"/>
      <div>
        <p className="login-form__sign-in-to-x-wording">Sign in to X</p>
        <form>
          <input type="text" placeholder="Phone, email, or username"></input>
          <button type="submit" className="bg-white">Next</button>
        </form>
        <p className="text-gray-500">Don't have an account? <a>Sign up</a></p>
      </div>
    </div>
  );
}