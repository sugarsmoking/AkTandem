import React from "react";

const JumpList = () => {
  return (
    <div className="w-full flex justify-center items-center h-dvh">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const obj = {
            username: formData.get("name") ?? "",
            email: formData.get("email") ?? "",
          };
          console.log(obj);
        }}
        className="bg-[#d3840e] w-1/2 h-1/2 border-black border-2 rounded-lg flex flex-col justify-center items-center content-around"
      >
        <h1 className="text-2xl mb-8 text-white">UPIS AVIONA</h1>
        <input
          required
          id="model"
          name="model"
          placeholder="Model Aviona"
          className="h-6 border-black border-2 rounded-sm w-1/2"
        ></input>
        <input
          type="number"
          min={0}
          id="noSeats"
          name="noSeats"
          placeholder="Broj Sjedala"
          className="h-6 border-black border-2 rounded-sm w-1/2"
        ></input>
        <button className="flex justify-center items-center h-6 border-black border-2 rounded-sm bg-[#AEAEAE]">
          Submit
        </button>
      </form>
    </div>
  );
};

export default JumpList;
