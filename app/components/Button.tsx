"use client";

interface btn {
  Text: string;
  onClick?: () => void;
}
const Button = ({ Text, onClick }: btn) => {
  return (
    <button onClick={onClick} className={`bg-[#271f0b]  py-2 px-10 rounded-md`}>
      {Text}
    </button>
  );
};

export default Button;
