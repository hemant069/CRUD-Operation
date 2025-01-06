import { Toaster } from "react-hot-toast";
import Card from "./components/Card";
import Image from "next/image";
import design from "../public/exceildraw.svg";
import DarkMode from "./components/DarkMode";
import { Title } from "./components/Title";

const page = () => {
  return (
    <>
      {/* For the toaster position */}
      <Toaster position="top-center" />

      <div className="dark:bg-black lg:p-32">
        <div className="flex justify-end fixed top-2  right-5 ">
          <DarkMode />
        </div>
        <Title />
        <div className="mb-10 flex justify-center ">
          <Image
            className="opacity-80 lg:rounded-3xl object-fill "
            src={design}
            alt="design"
            width={600}
            height={300}
          />
        </div>
        <div className=" ring-2   lg:h-[30rem]  p-2 rounded-xl ">
          <Card />
        </div>
      </div>
    </>
  );
};

export default page;
