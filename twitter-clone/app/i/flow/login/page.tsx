import "@/components/login_form/login_form.css"

export default function LoginForm() {
  return (
    <div className="login-form">
      <div className="login-form-header border-white border-2">
        <p className="login-form-header__close-button border-white border-2">x</p>
        <img src="/images/x_logo.png" alt="X Logo" className="login-form-header__x-logo border-white border-2"/>
      </div>
      <div className="login-form-content border-white border-2">
        <p className="login-form-content__sign-in-to-x-wording border-white border-2">Sign in to X</p>
        <form className="login-form-content__user-input-and-submit border-white border-2">
          <input className="login-form-content__user-input-and-submit__username" type="text" placeholder="Phone, email, or username"></input>
          <button type="submit" className="login-form-content__user-input-and-submit__next-button">Next</button>
        </form>
        <p className="login-form-content__sign-up-suggestion border-white border-2 text-gray-500">Don't have an account? <a>Sign up</a></p>
      </div>
    </div>
  );
}