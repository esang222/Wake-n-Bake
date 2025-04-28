
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';


function Login() {

  // const navigate = useNavigate(); 

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   navigate('/Landing');
  // };

  return (
   
    <div className="login-container d-flex justify-content-center align-items-center vh-100">
    <form className="login-form shadow p-4 rounded">
      <h2 className="text-center mb-2">
        <span className="brand1">Wake </span><span className="brand-black">‘n </span><span className="brand">Bake</span>
      </h2>

<p>Log in to your account and enjoy the fresh experience.</p>
  
          <div className="mb-3">
          
            <input type="text" className="form-control" id="username" placeholder="Enter your username" />
          </div>
  
          <div className="mb-3">
           
            <input type="password" className="form-control" id="password" placeholder="Enter your password" />
            <p class = "forgot">Forgot Password?</p>
          </div>
  
          <Link to="/landing" className="btn btn-primary w-100 text-center">
  Login
</Link>
          <p className="sign-up">
          New Customer?<b className="now">
            <Link to="/sign-up" className="now"> Sign Up Now</Link>
          </b>
        </p>
        </form>
      </div>
  );
}

export default Login;
