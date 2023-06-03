import React from "react";

const Register = () => {
  return (
    <div className="flex flex-items bg-[#00968B] h-screen text-white font-Mate place-content-center align-middle">
      <h1 className="flex basis-1/2 justify-center mt-[350px] text-5xl">
        Register
      </h1>

      <div className="basis-1/2 mt-40 mx-40">
        <div className="flex flex-col items-center bg-[#5FB37F] rounded-3xl text-2xl flex-row flex-items place-content-center pb-5">
          <div className="flex justify-center mt-20">
            <h3 class="mr-10">Fitst Name</h3>
            <input
              class="bg-[#D9D444] rounded-md"
              type="text"
              id="FName"
              name="FName"
            ></input>
          </div>
          <div className="flex justify-center mt-10">
            <h3 class="mr-10">Last Name</h3>
            <input
              class="bg-[#D9D444] rounded-md"
              type="text"
              id="LName"
              name="LName"
            ></input>
          </div>
          <div className="flex justify-center mt-10">
            <h3 class="mr-10">Email</h3>
            <input
              class="bg-[#D9D444] rounded-md"
              type="text"
              id="email"
              name="email"
            ></input>
          </div>
          <div className="flex justify-center mt-10">
            <h3 class="mr-10">Password</h3>
            <input
              class="bg-[#D9D444] rounded-md"
              type="text"
              id="pw"
              name="pw"
            ></input>
          </div>
          <div className="flex justify-center mt-10">
            <button class="bg-[#163A4A] rounded-md px-10 py-2 text-white">
              <a href="/otp">Register</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
