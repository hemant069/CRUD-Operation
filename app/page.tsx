import { Toaster } from "react-hot-toast";
import Card from "./components/Card";
import Image from "next/image";
import design from "../public/exceildraw.svg";

const page = () => {
  return (
    <div className="p-32">
      <Toaster position="top-center" />
      <div className="mb-10 flex justify-center ">
        <Image
          className="opacity-80 rounded-3xl object-fill "
          src={design}
          alt="design"
          width={600}
          height={300}
        />
      </div>
      <div className=" border h-[30rem]  p-2 rounded-xl ">
        <Card />
      </div>
    </div>
  );
};

export default page;
