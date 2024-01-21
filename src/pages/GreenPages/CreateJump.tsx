import React from "react";

const planes = [
  {
    id: 1,
    name: "Skyhawk 172",
    seats: 4,
  },
  {
    id: 2,
    name: "Super Decathlon",
    seats: 2,
  },
  {
    id: 3,
    name: "RV-7A",
    seats: 2,
  },
];
const handlers = [
  {
    id: 1,
    name: "Peter Parker",
  },
  {
    id: 2,
    name: "Tony Stark",
  },
  {
    id: 3,
    name: "Bruce Banner",
  },
];

const airports = [
  {
    id: 1,
    name: "Zagreb",
  },
  {
    id: 2,
    name: "Zadar",
  },
  {
    id: 3,
    name: "Pula",
  },
];

const CreateJump = () => {
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
        <h1 className="text-2xl mb-8 text-white">UPIS SKOKA</h1>
        <input
          required
          type="date"
          id="jumpDate"
          name="jumpDate"
          placeholder="Datum skoka"
          className="h-6 border-black border-2 rounded-sm w-1/2"
        ></input>

        <select>
          <option />
          {planes.map((airplane) => (
            <option key={airplane.id} value={airplane.id}>
              {airplane.name} - Seats: {airplane.seats}
            </option>
          ))}
        </select>
        <select required>
          <option />
          {handlers.map((handler) => (
            <option key={handler.id}>{handler.name}</option>
          ))}
        </select>
        <select>
          <option />
          {airports.map((airport) => (
            <option key={airport.id}>{airport.name}</option>
          ))}
        </select>
        <button className="flex justify-center items-center h-6 border-black border-2 rounded-sm bg-[#ea612c]">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateJump;
