import { useEffect } from "react";
import { Grid } from "@mui/material";
import SLButton from "../../../Common/Components/Button/Button";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Empty } from 'antd';
import * as XLSX from "xlsx-color";

const AddUsers = () => {
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  useEffect(() => {
    // GetUserDataList();
  }, []);

  // const handleExport = () => {
  //   // Create a new workbook and worksheet
  //   const wb = XLSX.utils.book_new();
  //   const ws = XLSX.utils.aoa_to_sheet([
  //     ["ID", "Name", "Age"],
  //     [1, "John Doe", 28],
  //     [2, "Jane Smith", 32],
  //     [3, "Samuel Green", 24],
  //   ]);

  //   // Apply cell styles with xlsx-color
  //   ws["A1"].s = { fill: { fgColor: { rgb: "1976d2" } }, font: { bold: true, color: { rgb: "FFFFFF" } } };
  //   ws["B1"].s = { fill: { fgColor: { rgb: "1976d2" } }, font: { bold: true, color: { rgb: "FFFFFF" } } };
  //   ws["C1"].s = { fill: { fgColor: { rgb: "1976d2" } }, font: { bold: true, color: { rgb: "FFFFFF" } } };

  //   // Protect sheet and allow editing only on A, B, C columns
  //   ws["!protect"] = {
  //     //editable: false, // Lock all cells by default
  //     selectLockedCells: true, // Allow selection of locked cells
  //     selectUnlockedCells: true, // Allow selection of unlocked cells
  //   };

  //   // Unlock only columns A, B, and C
  //   const range = XLSX.utils.decode_range(ws["!ref"]);
  //   for (let R = range.s.r + 1; R <= range.e.r; R++) {
  //     ["A", "B", "C"].forEach((col) => {
  //       const cellRef = `${col}${R + 1}`;
  //       if (!ws[cellRef]) ws[cellRef] = {}; // Ensure cell exists
  //       ws[cellRef].s = { protection: { locked: false } }; // Unlock cell
  //     });
  //   }

  //   // Append the worksheet to the workbook
  //   XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

  //   // Generate Excel file and trigger download
  //   XLSX.writeFile(wb, "SampleData.xlsx");
  // };

  const handleExport = () => {
    // Create a new workbook and worksheet
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet([
      ["ID", "Name", "Age"],
      [1, "John Doe", 28],
      [2, "Jane Smith", 32],
      [3, "Samuel Green", 24],
    ]);

    // Define styles for headers
    const headerStyle = {
      fill: { fgColor: { rgb: "CCCCCC" } },
      font: { bold: true },
    };

    // Apply styles to headers
    ws["A1"].s = headerStyle;
    ws["B1"].s = headerStyle;
    ws["C1"].s = headerStyle;

    // Enable sheet protection with a password
    ws["!protect"] = {
      // password: "yourpassword", // Optional password for sheet protection
      selectLockedCells: true, // Allow selection of locked cells
      selectUnlockedCells: true, // Allow selection of unlocked cells
      formatCells: false, // Prevent formatting
      formatColumns: false, // Prevent column resizing
      formatRows: false, // Prevent row resizing
      insertColumns: false,
      insertRows: false,
      deleteColumns: false,
      deleteRows: false,
      sort: false,
      autoFilter: false,
      pivotTables: false,
    };

    // Ensure ws["!ref"] is defined before using decode_range
    if (!ws["!ref"]) {
      ws["!ref"] = "A1:C100"; // Default range if not set
    }

    // Unlock only columns A, B, and C
    const range = XLSX.utils.decode_range(ws["!ref"] || "A1:C100");
    for (let R = range.s.r; R <= range.e.r; R++) {
      ["A", "B", "C"].forEach((col) => {
        const cellRef = `${col}${R + 1}`;
        if (!ws[cellRef]) ws[cellRef] = {}; // Ensure cell exists
        ws[cellRef].s = { protection: { locked: false } }; // Unlock cell
      });
    }

    // Append worksheet to workbook
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    // Generate and download Excel file
    XLSX.writeFile(wb, "ProtectedSheet.xlsx");
  };

  return (
    <div>
      <Grid container>
        <Grid item md={6} sm={6} xs={6} className="mt_12 display_align_center">
          <span className="title_heading">Add Users</span>
        </Grid>
        <Grid item md={6} sm={6} xs={6} className="display_end mt_12">
          <Button
            className="upload_button"
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
          >
            Upload
            <VisuallyHiddenInput
              type="file"
              onChange={(event) => console.log(event.target.files)}
            />
          </Button>
          <SLButton
            className="contained mr_12"
            handleClick={handleExport}
          >
            <>
              <CloudDownloadIcon />
              &nbsp; Sample Template
            </>
          </SLButton>
        </Grid>
        <Grid item md={12} sm={12} xs={12} className="mt_64">
          <Empty description="Please download sample template and upload data." />
        </Grid>


      </Grid>
    </div>
  );
};
export default AddUsers;
