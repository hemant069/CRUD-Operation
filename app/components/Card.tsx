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

  const [showInput, setShowInput] = useState("");

  const [MessageData, setMessageData] = useState<messages[]>([]);
  const [EditMessage, setEditMessage] = useState("");

  const GetAllMessages = async () => {
    try {
      setLoader(true);
      await toast.promise(
        axios.get<messages[]>("api/crud").then((res) => {
          const data = res?.data?.message;
          console.log(data, res);
          setMessageData(data); // Set the message data after fetching
        }),
        {
          loading: "Loading....",
          success: <b>Data is Coming!</b>,
          error: <b>Whoops, something went wrong!</b>,
        }
      );
      setLoader(false); // Stop the loader after success
    } catch (error) {
      console.log("Error in getting the message Data", error);
      setLoader(false); // Stop the loader even on error
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

  const handleEditFn = async (id: string) => {
    setShowInput(id);
  };

  const handleSaveFn = async (id: string) => {
    try {
      const res = await axios.put(`api/crud/${id}`, { message: EditMessage });
      const data = res.data;
      toast.success("Message Updated Successfully");
      setShowInput(!showInput);
      GetAllMessages();
    } catch (error) {
      console.log("Error in Put", error);
      toast.error("Error in edit");
    }
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
              {item._id === showInput ? (
                <input
                  className="text-black px-2 rounded-md "
                  onChange={(e) => setEditMessage(e.target.value)}
                  key={item._id}
                  type="text"
                />
              ) : (
                <p className="font-sans border-b ">{item.message}</p>
              )}
            </div>
            <div className="flex gap-3 mt-2">
              <Button
                onClick={() => handleDeletefn(item._id)}
                Text={"Delete"}
              />
              {item._id === showInput ? (
                <Button onClick={() => handleSaveFn(item._id)} Text={"Save"} />
              ) : (
                <Button onClick={() => handleEditFn(item._id)} Text={"Edit"} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
