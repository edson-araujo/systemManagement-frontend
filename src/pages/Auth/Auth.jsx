import { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import { Button } from "../../components/ui/button";

function Auth() {
  const [active, setActive] = useState(true);

  return (
    <div className="loginContainer">
      <div className="box h-[30rem] w-[25rem]">
        <div className="loginBox w-full px-10 space-y-5">
          {active ? <Signup /> : <Login />}

          <div>
            <span>Não tem conta?</span>
            <Button variant='ghost' onClick={() => setActive(!active)}>{active? "Signin" : "Signup"}</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
