import React from "react";

//flex-row basis-1/2 flex-items place-content-center mt-40 mx-40

const LogIn = () => {
  return (
    <div className="flex flex-items bg-[#00968B] text-white font-Mate place-content-center align-middle h-screen">
      <h1 className="flex basis-1/2 justify-center mt-[350px] text-5xl">
        Log In
      </h1>

      <div className="basis-1/2 mt-40 mx-40">
        <div className="flex flex-col items-center bg-[#5FB37F] rounded-3xl text-2xl flex-row flex-items place-content-center pb-5">
          <div className="flex justify-center mt-20">
            <h3 class="mr-10">Username</h3>
            <input
              class="bg-[#D9D444] rounded-md"
              type="text"
              id="uname"
              name="uname"
            ></input>
          </div>
          <div className="flex justify-center mt-10">
            <h3 class="mr-10">Password</h3>
            <input
              class="bg-[#D9D444] rounded-md"
              type="password"
              id="password"
              name="password"
            ></input>
          </div>
          <div className="flex justify-center mt-10">
            <button class="bg-[#163A4A] rounded-md px-10 py-2 text-white">
              <a href="/mytask">Log In</a>
            </button>
          </div>
        </div>

        <div className="justify-center mt-10">
          <center>
            <h3 className="">Don't Have an Account?</h3>
            {/* <Link to="/register">Register</Link> */}

            <button class="mt-5 mb-10 bg-[#163A4A] rounded-md px-10 py-2 text-white">
              <a href="/register">Register</a>
            </button>
          </center>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
