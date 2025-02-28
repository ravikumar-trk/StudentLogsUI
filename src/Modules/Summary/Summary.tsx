import { Grid, Paper } from "@mui/material";
import "./Summary.css";
import { Link } from "react-router-dom";
import CustomizedTypography from "../../Common/Components/Typography/Typography";

const Summary = () => {
  const data = [
    {
      text: "Studentwise Summary",
      desc: "Classwise Summary Classwise Summary Classwise Summary",
      link: "StudentwiseSummary",
    },
    {
      text: "Monthwise Summary",
      desc: "Classwise Summary Classwise Summary Classwise Summary",
      link: "MonthwiseSummary",
    },
    {
      text: "Daywise Summary",
      desc: "Daywise Summary Daywise Summary Daywise Summary ",
      link: "DaywiseSummary",
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

export default Summary;
