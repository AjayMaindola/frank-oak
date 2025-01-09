"use client";
import React from "react";
import Overlay from "../Componant/Overlay";

import SignupModal from "./SignupModal";
import LoginTopPat from "./LoginTopPat";
export default function LoginModal({ setLoginModal }) {
  return (
    <>
      <Overlay
        setLoginModal={setLoginModal}
        className=" cursor-pointer  hidden "
      />
     {/* login part */}
     {/* <LoginTopPat  setLoginModal={setLoginModal} /> */}

      {/* sign up part start */}
      <SignupModal setLoginModal={setLoginModal} />
    </>
  );
}
