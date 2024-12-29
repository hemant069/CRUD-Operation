"use client";
import React, { useState } from "react";
import Button from "./Button";
import Model from "./Model";

const Card = () => {
  const [isModal, setisModal] = useState(false);

  const ShowModal = () => {
    setisModal(!isModal);
  };

  return (
    <div>
      <div className="flex justify-center mt-2">
        <Button onClick={ShowModal} Text={"Add Message"} />
      </div>
      {isModal && <Model ShowModal={ShowModal} />}
      <div className="flex w-full justify-between  items-center">
        <div className="px-2">
          <h3 className="text-2xl font-mono mb-2">Messages</h3>
          <p className="font-sans border-b">Hello</p>
        </div>

        <div>
          <h3 className="text-2xl font-mono mb-2">Operation</h3>
          <div className="flex gap-3">
            <Button Text={"Delete"} />
            <Button Text={"Edit"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
