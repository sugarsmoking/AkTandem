import React, { useState } from "react";

const CreateMember = () => {
  return (
    <div className="w-full flex justify-center items-center h-dvh">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const obj = {
            username: formData.get("name") ?? "",
            password: formData.get("email") ?? "",
          };
          console.log(obj);
        }}
        className="bg-[#669f1e] w-1/2 h-1/2 border-black border-2 rounded-lg flex flex-col justify-center items-center content-around"
      >
        <h1 className="text-2xl mb-8 text-white">UPIS PADOBRANACA</h1>
        <input
          required
          id="name"
          name="name"
          placeholder="Ime i prezime"
          className="h-6 border-black border-2 rounded-sm w-1/2"
        ></input>
        <input
          id="email"
          name="email"
          placeholder="Email"
          className="h-6 border-black border-2 rounded-sm w-1/2"
        ></input>
        <input
          type="date"
          id="DOB"
          name="DOB"
          placeholder="Datum rodenja"
          className="h-6 border-black border-2 rounded-sm w-1/2"
        ></input>
        <input
          id="phoneNo"
          name="phoneNo"
          placeholder="Broj mobitela"
          className="h-6 border-black border-2 rounded-sm w-1/2"
        ></input>
        <input
          id="adress"
          name="adress"
          placeholder="Adresa"
          className="h-6 border-black border-2 rounded-sm w-1/2"
        ></input>
        <select
          onChange={(e) => {
            console.log(e.target.value);
          }}
          required
          className="border-black border-2 rounded-sm"
        >
          <option />
          <option value="Ucenik">Ucenik</option>
          <option>Clan</option>
          <option>Rukovoditelj</option>
        </select>
        <button className="flex justify-center items-center h-6 border-black border-2 rounded-sm bg-[#ea612c]">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateMember;
