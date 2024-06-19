import { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
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
              <span> {active ? "Tem conta?" : "Não tem conta?"}</span>
              <span
                onClick={() => setActive(!active)}
                className=" ml-2 cursor-pointer text-muted-foreground font-semibold"
              >
                {active ? "Entrar" : "Criar"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
