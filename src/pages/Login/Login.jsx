//hooks
import { useCallback, useState } from "react";
//assets
import logo from "../../assets/netflix_logo.svg";
import spiner from "../../assets/spiner.gif";
//components
import Input from "./components/Input";
//firebase
import { login, signup } from "../../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [variant, setVariant] = useState("login"); //toggle variant
  const [loding, setLoding] = useState(false); //toggle loding animation

  //toggle variant
  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  //auth function
  const user_auth = useCallback(
    async (e) => {
      e.preventDefault();
      setLoding(true);
      if (variant === "login") {
        await login(email, password);
      } else {
        await signup(email, name, password);
      }
      setTimeout(() => setLoding(false), 1000);
    },
    [email, name, password, variant]
  );

  return (
    <>
      {loding ? ( //toggle loding animation
        <div className="bg-black  flex items-center justify-center h-full">
          <img src={spiner} alt="spiner"></img>
        </div>
      ) : (
        <div className="relative h-full w-full bg-login_bg bg-no-repeat bg-center bg-cover">
          <div className="bg-black  w-full h-full md:bg-opacity-50">
            {/* logo */}
            <nav className="px-12 py-5">
              <img src={logo} alt="logo" className="h-12" />
            </nav>
            {/* form */}
            <div className="flex justify-center">
              <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5  lg:max-w-md md:w-3/5 md:max-w-lg  rounded-md w-full">
                <h2 className="text-white text-4xl mb-8 font-semibold">
                  {variant === "login" ? "Login" : "Register"}
                </h2>

                <div className="flex flex-col gap-4">
                  {variant === "register" && (
                    <Input
                      label="User name"
                      id="name"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />
                  )}
                  <Input
                    label="Email"
                    type="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                  <Input
                    label="password"
                    type="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>

                <button
                  onClick={user_auth}
                  type="submit"
                  className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
                >
                  {variant === "login" ? "Login" : "Sign Up"}
                </button>

                <p className="text-neutral-500 mt-12">
                  {variant === "login"
                    ? " First time using Netflix? "
                    : "Already have an account "}

                  <span
                    onClick={toggleVariant}
                    className="text-white ml-1 hover:underline cursor-pointer"
                  >
                    {variant === "login" ? "Create an account" : "Login"}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
