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
      <div className=" flex gap-3 mb-6    ">
        <input
          onChange={(e) => setText(e.target.value)}
          className=" w-[20rem] text-black border-none outline-none p-3 rounded-lg text-lg "
          type="text"
        />
        <Button Text="Submit" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Model;
