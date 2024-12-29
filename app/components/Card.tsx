"use client";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import Model from "./Model";
import axios from "axios";
import toast from "react-hot-toast";
import { error } from "console";

interface messages {
  message: string;
  _id: string;
}

const Card = () => {
  const [isModal, setisModal] = useState(false);
  const [Loader, setLoader] = useState(false);

  const [MessageData, setMessageData] = useState<messages[]>([]);

  const GetAllMessages = async () => {
    try {
      setLoader(true);
      const res = await axios.get<messages[]>("api/crud");
      const data = res.data.message;
      console.log(data, res);
      if ((res.status = 201)) {
        setLoader(false);
      }

      setMessageData(data);
    } catch (error) {
      console.log("Error in getting the message Data", error);
      setLoader(true);
    }
  };

  useEffect(() => {
    GetAllMessages();
  }, [isModal]);

  const handleDeletefn = (id: string) => {
    axios
      .delete(`api/crud/${id}`)
      .then((res) => {
        toast.success("Message delete successfully");
        GetAllMessages();
      })
      .catch((error) => toast.error("Error"));
  };

  const ShowModal = () => {
    setisModal(!isModal);
  };

  return (
    <div>
      <div className="flex justify-center mt-2">
        <Button onClick={ShowModal} Text={"Add Message"} />
      </div>
      {isModal && <Model ShowModal={ShowModal} />}
      <div className="">
        <div className="flex justify-between px-4">
          <h3 className="text-2xl font-mono mb-2">Messages</h3>
          <h3 className="text-2xl font-mono mb-2">Operation</h3>
        </div>

        {MessageData.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-between px-5"
          >
            <div>
              <p className="font-sans border-b ">{item.message}</p>
            </div>
            <div className="flex gap-3 mt-2">
              <Button
                onClick={() => handleDeletefn(item._id)}
                Text={"Delete"}
              />
              <Button onClick={() => ""} Text={"Edit"} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
