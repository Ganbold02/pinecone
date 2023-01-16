import { Link } from "react-router-dom";

export function SignInError() {
  return (
    <div className="w-100 min-vh-100 d-flex align-items-center justify-content-center flex-column">
      <h1>Page not found</h1>
      <div>
        <Link className="btn btn-primary me-3" to={"/signin"}>
          Sign In
        </Link>
        <Link className="btn btn-primary me-3" to={"/signup"}>
          Sign Up
        </Link>
      </div>
    </div>
  );
}
