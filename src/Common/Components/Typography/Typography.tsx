import { Typography } from "@mui/material";
import { PropsWithChildren } from "react";
import "./Typography.css";

interface TextProps {
  variant?: string;
  className?:string;
}

const CustomizedTypography = (props: PropsWithChildren<TextProps>) => {
  const { className } = props;
  return <Typography className={className}>{props.children}</Typography>;
};
export default CustomizedTypography;
