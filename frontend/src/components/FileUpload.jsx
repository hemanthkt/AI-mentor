import React from "react";

function FileUpload() {
  const handleSubmit = () => {
    console.log("submitted");
  };

  const handleFileChange = () => {
    console.log("file changed");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".pdf" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {/* {result && (
        <div>
          <h3>Extracted Text:</h3>
          <p>{result}</p>
        </div>
      )} */}
    </div>
  );
}

export default FileUpload;
