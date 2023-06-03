import React from "react";

const OTP = () => {
  return (
    <div className="flex flex-items bg-[#00968B] h-screen text-white font-Mate place-content-center align-middle">
      <div className="basis-1/2 mt-40 mx-40">
        <div className="flex flex-col items-center bg-[#5FB37F] rounded-3xl text-2xl flex-row flex-items place-content-center pb-5">
          <div className="flex justify-center mt-20">
            <h3 class="mr-10">Enter OTP sent to your email</h3>
            <input
              class="bg-[#D9D444] rounded-md"
              type="text"
              id="FName"
              name="FName"
            ></input>
          </div>

          <div className="flex justify-center mt-10">
            <button class="bg-[#163A4A] rounded-md px-10 py-2 text-white">
              Verify
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTP;
