import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  function loginHandler(e) {
    e.preventDefault();
    const checkLogin = true;
    if (checkLogin) {
      //  redirect
      navigate("/Dashboard");
    }
  }
  return (
    <form onSubmit={loginHandler}>
      <input type="text" name="username" />
      <input type="password" name="password" />
      <button>login</button>
    </form>
  );
}
