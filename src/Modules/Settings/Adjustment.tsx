import { Card } from "antd";
import { Divider, Grid, TextField } from "@mui/material";
import SLButton from "../../Common/Components/Button/Button";
import CustomizedTypography from "../../Common/Components/Typography/Typography";
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

const Adjustment = () => {
  return (
    <>
      <Card className="body-card">
        <Grid container spacing={2}>
          <Grid item md={3} sm={3} xs={12}>
            <TextField id="outlined-basic" label="Class" variant="outlined" />
          </Grid>
          <Grid item md={3} sm={3} xs={12}>
            <TextField id="outlined-basic" label="Student" variant="outlined" />
          </Grid>
        </Grid>
        <Grid container className="pt_32" spacing={2}>
          <Grid item md={3} sm={3} xs={12}>
            <CustomizedTypography className="columnTitle">
              Name
            </CustomizedTypography>
            <CustomizedTypography className="columnValue">
              Ravi Kumar Tyadi
            </CustomizedTypography>
          </Grid>
          <Grid item md={3} sm={3} xs={12}>
            <CustomizedTypography className="columnTitle">
              Admission No.
            </CustomizedTypography>
            <CustomizedTypography className="columnValue">
              1234357
            </CustomizedTypography>
          </Grid>
          <Grid item md={3} sm={3} xs={12}>
            <CustomizedTypography className="columnTitle">
              Class
            </CustomizedTypography>
            <CustomizedTypography className="columnValue">
              First Class
            </CustomizedTypography>
          </Grid>
          <Grid item md={3} sm={3} xs={12}>
            <CustomizedTypography className="columnTitle">
              Roll No.
            </CustomizedTypography>
            <CustomizedTypography className="columnValue">
              12
            </CustomizedTypography>
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <Divider />
          </Grid>
          {/* <Grid item md={3} sm={3} xs={12}>
            <CustomizedTypography className="columnTitle">
              Date
            </CustomizedTypography>
            <CustomizedTypography className="columnValue">
              22-Dec-2023
            </CustomizedTypography>
          </Grid> */}
          <Grid item md={3} sm={3} xs={12}>
            <CustomizedTypography className="columnTitle">
              Select In Time
            </CustomizedTypography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                components={[
                  'DatePicker',
                  'TimePicker',
                  'DateTimePicker',
                  'DateRangePicker',
                ]}
              >
                <DemoItem>
                  <TimePicker />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
          <Grid item md={3} sm={3} xs={12}>
            <CustomizedTypography className="columnTitle">
              Select Out Time
            </CustomizedTypography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                components={[
                  'DatePicker',
                  'TimePicker',
                  'DateTimePicker',
                  'DateRangePicker',
                ]}
              >
                <DemoItem>
                  <TimePicker />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
          <Grid item md={6} sm={6} xs={12} className="">
            <CustomizedTypography className="columnTitle">
              Reason
            </CustomizedTypography>
            <div className="pt_8">
              <TextField
                id="outlined-multiline-static"
                label="Reason"
                variant="outlined"
                multiline
                maxRows={4}
                defaultValue=""
              />
            </div>
          </Grid>
          <Grid item md={12} sm={12} xs={12} className="mt_12">
            <SLButton
              className="contained"
            >Save
            </SLButton>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};
export default Adjustment;
