import React, { useRef } from "react";
import { Buffer } from "buffer";
import S3 from "react-aws-s3";
function Upload() {
  // @ts-ignore
  window.Buffer = Buffer;
  const fileInput = useRef();

  const handleClick = (event) => {
    event.preventDefault();
    let file = fileInput.current.files[0];
    let newFileName = fileInput.current.files[0].name;

    const config = {
      accessKeyId: "bna/qMIboN/sptoFqhxYucGntHjmESqyN4+10OvA",
      secretAccessKey: "AKIA3TFHQ6HB6YI2MRNL",
      bucketName: "uploadphotoj",
      region: "us-east-1",
      // dirName: process.env.REACT_APP_DIR_NAME /* optional */,
    };
    // console.log(fileInput.current);

    const ReactS3Client = new S3(config);

    ReactS3Client.uploadFile(file, newFileName).then((data) => {
      console.log(data);
      if (data.status === 204) {
        console.log("Success");
      } else {
        console.log("fail");
      }
    });
  };

  return (
    <>
      <form action="upload-step" onSubmit={handleClick}>
        <label htmlFor="">
          Upload File:
          <input type="file" ref={fileInput} />
        </label>
        <br />
        <button type="submit">Upload</button>
      </form>
    </>
  );
}

export default Upload;
