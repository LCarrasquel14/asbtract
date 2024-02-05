"use client";
import Link from "next/link";
import { useState } from "react";
import { changeTypePassword } from "@/app/helpers";
import "@/app/styles/singIn.scss";

const FormSingIn = () => {
  const [typePassword, setTypePassword] = useState("password");
  const changeTypePassword = () => {
    if (typePassword === "password") {
      setTypePassword("text");
    } else {
      setTypePassword("password");
    }
  };
  return (
    <div className="singin-container">
      <div className="box">
        <div className="flex flex-col items-center mt-8">
          <h2 className="tracking-wider mb-2">Sign in to Abstract</h2>
          <Link href="/login">
            <p className="subtitle">
              <span>Switch to agent sign-in</span>
            </p>
          </Link>
        </div>
        <div className="flex justify-around mt-6">
          <Link
            className="google-container flex items-center"
            href="https://mail.google.com/mail/u/0/?hl=es#inbox"
          >
            <img
              className="google-img mr-4"
              src="https://img.icons8.com/color/48/000000/google-logo.png"
            />
            <button>Sign in with Google</button>
          </Link>

          <div className="vertical-line"></div>

          <form className="flex flex-col form">
            <label className="title" htmlFor="email">
              Email
            </label>
            <input className="input" type="text" name="email" id="email" />
            <label className="title" htmlFor="password">
              Password
            </label>
            <div className="input-container">
              <input
                className="input"
                type={typePassword} // typePassword
                name="password"
                id="password"
              />
              <span
                onClick={changeTypePassword}
                className="material-symbols-outlined visibility "
              >
                visibility
              </span>
            </div>
            <Link href="/forgot-password">
              <span className="forgot">Forgot password?</span>
            </Link>
            <button className="button" type="submit">
              Sing in
            </button>
          </form>
        </div>
        <div className="footnotes-container">
          <div>
            <span>Emailed us for support?</span>
            <Link href="/get-password">
              <span>Get a password</span>
            </Link>
          </div>
          <div>
            <span>New to Abstract?</span>
            <Link href="/registration">
              <span>Sign up</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSingIn;
