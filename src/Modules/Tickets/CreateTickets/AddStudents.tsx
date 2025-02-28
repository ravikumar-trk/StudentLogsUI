import { useEffect } from "react";
import { Grid } from "@mui/material";
import SLButton from "../../../Common/Components/Button/Button";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Empty } from 'antd';

const AddStudents = () => {
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
  return (
    <div>
      <Grid container>
        <Grid item md={6} sm={6} xs={6} className="mt_12 display_align_center">
          <span className="title_heading">Add Students</span>
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
export default AddStudents;
