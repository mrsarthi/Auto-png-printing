import React, { useState } from 'react';
import './App.css'
import ImageComponent from './ImageComponent';
// import OtherComponent from './OtherComponent';



function App() {
  const defaultImage = "itachi.png"
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedFile(reader.result);
      };
      reader.readAsDataURL(file);
    }else{
      selectedFile = defaultImage;
    }
  };

  return (
    <>
      <div className='body1'></div>
      <div className='choose'>
      <h1>Image Upload</h1>
      <ImageComponent selectedFile={selectedFile} handleFileUpload={handleFileUpload} />
      {/* <OtherComponent selectedFile={selectedFile} /> */}
    </div>
    </>
  );
}

export default App;
