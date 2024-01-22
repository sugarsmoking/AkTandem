import React from "react";

const dates = [
  {
    id: 1,
    value: "2018-09-28",
  },
  {
    id: 2,
    value: "2019-05-15",
  },
  {
    id: 3,
    value: "2017-12-10",
  },
  {
    id: 4,
    value: "2016-06-22",
  },
  {
    id: 5,
    value: "2015-03-05",
  },
];
const heights = [
  {
    id: 1,
    value: 1000,
  },
  {
    id: 2,
    value: 1500,
  },
  {
    id: 3,
    value: 2000,
  },
  {
    id: 4,
    value: 2500,
  },
  {
    id: 5,
    value: 3000,
  },
  {
    id: 6,
    value: 3500,
  },
  {
    id: 7,
    value: 4000,
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

const AddToJump = () => {
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
        <h1 className="text-2xl mb-8 text-white">UPIS PADOBRANCA U AVION</h1>
        <select>
          <option />
          {dates.map((date) => (
            <option key={date.id}>{date.value}</option>
          ))}
        </select>
        <select>
          <option />
          {airports.map((airport) => (
            <option key={airport.id}>{airport.name}</option>
          ))}
        </select>
        <input
          type="number"
          defaultValue={1}
          min={1}
          id="jumpNo"
          name="jumpNo"
          placeholder="Broj skoka"
          className="h-6 border-black border-2 rounded-sm w-1/2"
        ></input>
        <select>
          <option />
          {heights.map((height) => (
            <option key={height.id}>{height.value}</option>
          ))}
        </select>
        <button className="flex justify-center items-center h-6 border-black border-2 rounded-sm bg-[#AEAEAE]">
          Upisi
        </button>
      </form>
    </div>
  );
};

export default AddToJump;
