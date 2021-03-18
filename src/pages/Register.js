import React from "react";
import RegisterUser from "../components/RegisterUser/RegisterUser";
import ParticlesBg from "particles-bg";
import "./bg.css";

function Register() {
  return (
    <div>
      <ParticlesBg type="circle" bg={true} id="particles-js" color="#E3D0FF" />
      <RegisterUser />
    </div>
  );
}

export default Register;
