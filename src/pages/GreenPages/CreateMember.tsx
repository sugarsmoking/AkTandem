import React, { useState } from "react";

const CreateMember = () => {
  const [role, setRole] = useState("");
  const [category, setCategory] = useState("");
  const [rukovoditelj, setRukovoditelj] = useState(false);

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
          required
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
          type="tel"
          id="phoneNo"
          name="phoneNo"
          placeholder="Broj mobitela"
          pattern="\+?[0-9]*"
          className="h-6 border-black border-2 rounded-sm w-1/2"
        ></input>
        <input
          id="adress"
          name="adress"
          placeholder="Adresa"
          className="h-6 border-black border-2 rounded-sm w-1/2"
        ></input>
        <label> datum isteka ljecnickog</label>
        <input
          required
          type="date"
          id="dateOfPhysical"
          name="dateOfPhysical"
          placeholder="Datum isteka ljecnickog"
          className="h-6 border-black border-2 rounded-sm w-1/2"
        ></input>
        <select
          onChange={(e) => {
            setRole(e.target.value);
          }}
          required
          className="border-black border-2 rounded-sm"
        >
          <option />
          <option>Ucenik</option>
          <option>Clan</option>
        </select>
        {role === "Ucenik" ? (
          <div>
            <select
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              required
              className="border-black border-2 rounded-sm"
            >
              <option />
              <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
            </select>

            <input
              type="date"
              id="StartDate"
              name="StartDate"
              className="h-6 border-black border-2 rounded-sm w-1/2"
            ></input>
            <input
              type="date"
              id="EndDate"
              name="EndDate"
              className="h-6 border-black border-2 rounded-sm w-1/2"
            ></input>
            <input
              type="date"
              id="JumpStartDate"
              name="JumpStartDate"
              className="h-6 border-black border-2 rounded-sm w-1/2"
            ></input>
            <input
              placeholder="Hitni Kontakt"
              id="EmergencyContact"
              name="EmergencyContact"
              className="h-6 border-black border-2 rounded-sm w-1/2"
            ></input>
          </div>
        ) : (
          ""
        )}
        {role === "Clan" ? (
          <div>
            <select
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              required
              className="border-black border-2 rounded-sm"
            >
              <option />
              <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
            </select>
            <label htmlFor="Rukovoditelj">Clan je rukovoditelj:</label>
            <input
              className="h-20 w-20"
              type="checkbox"
              id="Rukovoditelj"
              name="Rukovoditelj"
              checked={rukovoditelj}
              onChange={(e) => {
                setRukovoditelj(!rukovoditelj);
              }}
            />
          </div>
        ) : (
          ""
        )}
        <button className="flex justify-center items-center h-6 border-black border-2 rounded-sm bg-[#ea612c]">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateMember;
