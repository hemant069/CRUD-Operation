import React from "react";
import Button from "./Button";

const Card = () => {
  return (
    <div>
      <div className="flex justify-center mt-2">
        <Button Text={"Add Message"} />
      </div>
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
