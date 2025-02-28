import { Card, Col, Row, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Grid, TextField } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 20 },
  { field: "Name", headerName: "Name", width: 150 },
  { field: "School", headerName: "School", width: 150 },
  { field: "Class", headerName: "Class", width: 150 },
  { field: "Date", headerName: "Date", width: 150 },
  { field: "ApprovedBy", headerName: "Approved By", width: 150 },
  { field: "Reason", headerName: "Reason", width: 150 },
];

const rows = [
  {
    id: 1,
    Name: "Snowsdfc",
    School: "Jon",
    Class: "First",
    Date: "22-Dec-2023",
    ApprovedBy: "xxxx",
    Reason: "xxxxx"
  },
  {
    id: 2,
    Name: "Lannister",
    School: "Cersei",
    Class: "First",
    Date: "22-Dec-2023",
    ApprovedBy: "xxxx",
    Reason: "xxxxx"
  },
  {
    id: 3,
    Name: "Lannister",
    School: "Jaime",
    Class: "First",
    Date: "22-Dec-2023",
    ApprovedBy: "xxxx",
    Reason: "xxxxx"
  },
  {
    id: 4,
    Name: "Stark",
    School: "Arya",
    Class: "First",
    Date: "22-Dec-2023",
    ApprovedBy: "xxxx",
    Reason: "xxxxx"
  },
  {
    id: 5,
    Name: "Targaryen",
    School: "Daenerys",
    Class: "First",
    Date: "22-Dec-2023",
    ApprovedBy: "xxxx",
    Reason: "xxxxx"
  },
];

const AdjustmentHistory = () => {
  return (
    <Card className="body-card">
      <Grid container className="mt_10" spacing={2}>
        <Grid item md={2} sm={2} xs={12}>
          <TextField
            id="School"
            label="School"
            variant="outlined"
          />
        </Grid>
        <Grid item md={2} sm={2} xs={12}>
          <TextField
            id="Class"
            label="Class"
            variant="outlined"
          />
        </Grid>
        <Grid item md={2} sm={2} xs={12}>
          <TextField
            id="StudentName"
            label="Student Name"
            variant="outlined"
          />
        </Grid>
        <Grid item md={2} sm={2} xs={12}>
          <TextField
            id="ApprovedBy"
            label="Approved By"
            variant="outlined"
          />
        </Grid>
        <Grid item md={2} sm={2} xs={12}>
          <TextField
            id="ApprovedOn"
            label="Approved On"
            variant="outlined"
          />
        </Grid>
      </Grid>

      <Grid container className="mt_10">
        <Grid item md={12} sm={12} xs={12}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[5, 10]}
          />
        </Grid>
      </Grid>
    </Card>
  );
};
export default AdjustmentHistory;
