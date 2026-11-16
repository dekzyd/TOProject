import { InputProps } from "@/types";

const Input = ({ type, label }: InputProps) => {
  return (
    <div>
      <label htmlFor="name">{label}</label>
      <input type={type} id="name" name="name" />
    </div>
  );
};

export default Input;
