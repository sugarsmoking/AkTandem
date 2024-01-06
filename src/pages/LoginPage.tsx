import React, { useState } from "react";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  return (
    <div className="w-full flex justify-center items-center h-dvh">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const obj = {
            username: formData.get("username") ?? "",
            password: formData.get("password") ?? "",
          };
          console.log(obj);
        }}
        className="bg-[#0170B9] w-1/2 h-1/2 border-black border-2 rounded-lg flex flex-col justify-center items-center content-around"
      >
        <h1 className="text-2xl mb-8">Login</h1>
        <input
          id="username"
          name="username"
          placeholder="Username"
          className="h-6 border-black border-2 rounded-sm w-1/2"
        ></input>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          className="h-6 border-black border-2 rounded-sm my-8 w-1/2"
        ></input>
        <button className="flex justify-center items-center h-6 border-black border-2 rounded-sm bg-[#ea612c]">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
