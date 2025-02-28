import "./Button.css";
import { PropsWithChildren } from "react";

interface TextProps {
  className?: string;
  handleClick?: () => void;
}

const SLButton = (props: PropsWithChildren<TextProps>) => {
  const { handleClick, className } = props;
  const handler = () => {
    handleClick && handleClick();
  };
  return (
    <button
      onClick={handler}
      className={className}
    >
      {props.children}
    </button>
  );
};
export default SLButton;
