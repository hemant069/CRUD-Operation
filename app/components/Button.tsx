"use client";

interface btn {
  Text: string;
  onClick?: () => void;
  width?: number;
}
const Button = ({ Text, onClick, width }: btn) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#271f0b] w-[${width}rem]  py-1 px-2  lg:py-2 lg:px-10 rounded-md`}
    >
      {Text}
    </button>
  );
};

export default Button;
