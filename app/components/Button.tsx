"use client";

interface btn {
  Text: string;
  onClick?: () => void;
  width?: number;
  bgcolor?: string;
  color?: string;
}
const Button = ({ Text, onClick, width, bgcolor, color }: btn) => {
  console.log(color);
  return (
    <button
      onClick={onClick}
      className={` w-[${width}rem]   py-1 px-2  lg:py-2 lg:px-10 rounded-md`}
      style={{ backgroundColor: `#${bgcolor}`, color: `${color}` }}
    >
      {Text}
    </button>
  );
};

export default Button;
