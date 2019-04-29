import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    padding: '10vh 5vh',
    paddingTop: '5vh'
  }
});

function MyDropzone(props) {
  const { classes, values, handleChange } = props;

  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    var formData = new FormData();
    console.log(acceptedFiles);
    acceptedFiles.forEach(photo => {
      formData.append('photos', photo);
    });

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'x-auth-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYmViNmQyZThkMDk3NTM5NGM1NWY2NyIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwiZmlyc3ROYW1lIjoiSm9obiIsImxhc3ROYW1lIjoiRG9lIiwicGhvbmVOdW1iZXIiOiIxMjMtNDU2LTc4OTAiLCJyb2xlcyI6WyJhZG1pbiJdLCJpYXQiOjE1NTY1NjUzNTMsImV4cCI6MTU1NjgyNDU1M30.7qfK73ZEWpLME53xeRZk1FQ-tyjd2XECQfdek0OuExQ'
      }
    };

    handleChange('photos', acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className={classes.root} {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <Typography variant="h6" color="primary" fontWeight={800}>
          Drop the files here ...
        </Typography>
      ) : (
        <Typography variant="h6" color="primary" fontWeight={800}>
          Drag 'n' drop some files here, or click to select files
        </Typography>
      )}
    </div>
  );
}

export default withStyles(styles)(MyDropzone);
