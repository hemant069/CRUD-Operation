import { Toaster } from "react-hot-toast";
import Card from "./components/Card";

const page = () => {
  return (
    <div className="p-32">
      <Toaster position="top-center" />
      <div className=" border h-[30rem]  p-2 rounded-xl ">
        <Card />
      </div>
    </div>
  );
};

export default page;
