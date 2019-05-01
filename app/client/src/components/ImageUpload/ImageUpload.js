import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

function MyDropzone() {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    let listing = {
      address: {
        street: '299229 S. Main St.',
        city: 'Chicago',
        state: 'Illinois',
        zipCode: '60616'
      },
      price: '499',
      squareFootage: '1239',
      bedrooms: '3',
      bathrooms: '2',
      amenities: {
        wifi: 'true',
        heating: 'true',
        cooling: 'true',
        washer: 'true',
        indoorFireplace: 'true',
        parkingType: ['street', 'garage'],
        petsAllowed: ['Small dogs', 'Small Cats']
      },
      listingType: 'condo',
      name: 'Listing 1',
      dateAvailable: '04-05-2019'
    };

    var formData = new FormData();
    console.log(acceptedFiles);
    acceptedFiles.forEach(photo => {
      formData.append('photos', photo);
    });

    // Object.entries(listing).forEach(entry => {
    //   // console.log(entry);
    //   if (entry[1].keys().length > 1) {
    //     console.log(entry);

    //     // formData.append("listing", entry[0]:entry[1]);
    //   } else {
    //     // formData.append('listing', entry[0]: entry[1]);
    //   }
    // });

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'x-auth-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYmViNmQyZThkMDk3NTM5NGM1NWY2NyIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwiZmlyc3ROYW1lIjoiSm9obiIsImxhc3ROYW1lIjoiRG9lIiwicGhvbmVOdW1iZXIiOiIxMjMtNDU2LTc4OTAiLCJyb2xlcyI6WyJhZG1pbiJdLCJpYXQiOjE1NTY1NjUzNTMsImV4cCI6MTU1NjgyNDU1M30.7qfK73ZEWpLME53xeRZk1FQ-tyjd2XECQfdek0OuExQ'
      }
    };
    axios.put(
      'http://localhost:5000/api/listings/5cbfab2d40641142acdc8e51',
      formData,
      config
    );
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
}

export default MyDropzone;
