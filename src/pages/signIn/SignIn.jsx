import Lottie from "lottie-react";
import signInLottie from "../../assets/lottie/login.json"
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {

    const {signInUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state || '/';

    const handleSignIn = (e) =>{
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
        .then(res =>{
           const  user = {email: res.user.email};
            axios.post("http://localhost:5000/jwt", user, {withCredentials: true} )
            .then(res => console.log(res.data));
            // navigate(from);
        })
        .catch(error =>{
            console.log(error.code);
        })
    }
    return (
        <div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left w-96">
              <Lottie animationData={signInLottie}></Lottie>
            </div>
            <div className="card p-6 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <h1 className="text-5xl font-bold text-center">Sign In!</h1>
              <form onSubmit={handleSignIn} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">SignIn</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignIn;