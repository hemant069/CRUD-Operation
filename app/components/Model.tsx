"use client";
import React, { useState } from "react";
import Button from "./Button";
import axios from "axios";
import toast from "react-hot-toast";

interface modal {
  ShowModal: () => void;
}
const Model = ({ ShowModal }: modal) => {
  const [text, setText] = useState("");

  const handleSubmit = async () => {
    try {
      const data = await axios.post("api/crud", { message: text });

      if (data.status == 201) {
        toast.success("Message is Created Successfully");
        ShowModal();
      }
    } catch (error) {
      console.log("Error in Message", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-[#BCCCDC] bg-opacity-75 flex flex-col justify-center items-center z-50">
      <div className="  mb-2   ">
        <input
          onChange={(e) => setText(e.target.value)}
          className=" lg:w-[20rem] font-sans  text-black border-none outline-none p-1 lg:p-3 rounded-lg text-lg "
          type="text"
          placeholder="Enter a Message"
        />
      </div>
      <div className="flex gap-2">
        <Button color="03045e" Text="Submit" onClick={handleSubmit} />
        <Button color="6d6865" Text="Cancel" onClick={() => ShowModal()} />
      </div>
    </div>
  );
};

export default Model;
