import { Grid, Paper } from "@mui/material";
// import "./Summary.css";
import { Link } from "react-router-dom";
import CustomizedTypography from "../../Common/Components/Typography/Typography";

const Settings = () => {
  const data = [
    {
      text: "Add Student",
      desc: "Classwise Summary Classwise Summary Classwise Summary",
      link: "./../ClassCodes",
    },
    {
      text: "Teachers Configuration",
      desc: "Classwise Summary Classwise Summary Classwise Summary",
      link: "./../Teachers",
    },
    {
      text: "Holidays",
      desc: "Classwise Summary Classwise Summary Classwise Summary",
      link: "./../Holidays",
    },
    {
      text: "Upgrade Class",
      desc: "Daywise Summary Daywise Summary Daywise Summary ",
      link: "./../UpgradeClass",
    },
    {
      text: "Adjustment",
      desc: "AdjustmentHistory AdjustmentHistory AdjustmentHistory",
      link: "./../Adjustment",
    },
    {
      text: "Adjustment History",
      desc: "AdjustmentHistory AdjustmentHistory AdjustmentHistory",
      link: "./../AdjustmentHistory",
    },
  ];
  const cards = data.map((item) => (
    <Grid item xs={4}>
      <Link to={item.link}>
        <div className="LinkCards">
          <CustomizedTypography className="CardLinkTitle">
            {item.text}
          </CustomizedTypography>
          <CustomizedTypography className="CardLinkDesc">
            {item.desc}
          </CustomizedTypography>
        </div>
      </Link>
    </Grid>
  ));
  return (
    <>
      <Grid container spacing={2} style={{ paddingTop: '10px' }}>
        {cards}
      </Grid>
    </>
  );
};

export default Settings;
