import React from "react";

const CreateAirport = () => {
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
        className="bg-[#669f1e] w-1/2 h-1/2 border-black border-2 rounded-lg flex flex-col justify-center items-center content-around"
      >
        <h1 className="text-2xl mb-8 text-white">UPIS AERODROMA</h1>
        <input
          required
          id="name"
          name="name"
          placeholder="Ime aerodroma"
          className="h-6 border-black border-2 rounded-sm w-1/2"
        ></input>
        <input
          id="address"
          name="address"
          placeholder="Adresa"
          className="h-6 border-black border-2 rounded-sm w-1/2"
        ></input>
        <button className="flex justify-center items-center h-6 border-black border-2 rounded-sm bg-[#ea612c]">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateAirport;
