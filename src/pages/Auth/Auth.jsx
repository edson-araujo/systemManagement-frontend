import { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import { Button } from "../../components/ui/button";
import "./Auth.css";

function Auth() {
  const [active, setActive] = useState(true);

  return (
    <div className="loginContainer">
      <div className="box h-[30rem] w-[25rem]">
        <div className="minContainer login">
          <div className="loginBox w-full px-5 space-y-5">
            {active ? <Signup /> : <Login />}

            <div>
              <span>Não tem conta?</span>
              <Button variant="ghost" onClick={() => setActive(!active)}>
                {active ? "Signin" : "Signup"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
