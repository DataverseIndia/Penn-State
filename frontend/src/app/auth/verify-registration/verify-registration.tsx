import React, { useRef, useState } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/app/home/Navbar";
import Footer from "@/app/home/Footer";
import { useVerifyRegistration } from "./api/use-verify-registration";
import { Button } from "@nextui-org/button";

const Verification: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const navigate = useNavigate();
  const otpBoxReference = useRef<(HTMLInputElement | null)[]>(
    new Array(3).fill(null)
  );

  function handleChange(value: string, index: number) {
    let newArr = [...otp];
    newArr[index] = value;
    setOtp(newArr);

    if (value && index < 5) {
      otpBoxReference.current[index + 1]!.focus();
    }
  }

  function handleBackspaceAndEnter(
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) {
    if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
      otpBoxReference.current[index - 1]!.focus();
    }
    if (e.key === "Enter" && e.currentTarget.value && index < 3) {
      otpBoxReference.current[index + 1]!.focus();
    }
  }

  const createVerifyRegistrationMutation = useVerifyRegistration();
  const handleClick = async (event: any) => {
    event.preventDefault();
    const cookie = Cookies.get("dr_das_research_lab_registration_cookie");
    if (cookie) {
      const email: string = jwtDecode(cookie);
      const oneTimePass = otp.join("")
      const requestData = { email, oneTimePass };
      createVerifyRegistrationMutation.mutate(requestData);
    } else {
      navigate("/admin/register");
    }
  };

  return (
    <div className="h-screen flex flex-col justify-between">
      <Navbar />
      <div className="phone:w-[90%] tablet:w-[60%] mx-auto phone:my-[7vh] tablet:my-[7vw]">
        <div className="flex flex-col">
          <h1 className="gradient-text phone:text-3xl tablet:text-5xl font-medium leading-relaxed text-center tracking-tight">
            Please verify your email.
          </h1>
        </div>
        <motion.div className="flex justify-center space-x-3 mt-7">
          {otp.map((digit, index) => (
            <input
              key={index}
              value={digit}
              maxLength={1}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyUp={(e) => handleBackspaceAndEnter(e, index)}
              ref={(reference) => (otpBoxReference.current[index] = reference)}
              className={`phone:w-16 phone:h-16 tablet:w-20 tablet:h-20 px-5 py-5 text-black text-xl font-medium rounded-md block bg-neutral-50 drop-shadow-[0_0px_10px_rgba(0,0,0,0.15)] appearance-none text-center focus:outline-neutral-600`}
            />
          ))}
        </motion.div>
        <Button
          onClick={handleClick}
          className={`flex bg-[#202020] text-[#FAFAFA] px-6 py-3 rounded-md text-lg mt-7 w-[50%] mx-auto justify-center ${
            createVerifyRegistrationMutation.isPending ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={createVerifyRegistrationMutation.isPending}
        >
          <p className="text-center text-[#FAFAFA]">
            {createVerifyRegistrationMutation.isPending ? "Verifying..." : "Verify"}
          </p>
        </Button>
      </div>
      <Footer />
    </div>
  );
};

export default Verification;
