import React, { useState, Fragment } from "react";
import DropArea from "./DropArea";

const ImageList = () => {
  const [images, setImages] = useState([]);

  const handleUploadCompleted = (name, url) => {
    let allImages = images;
    allImages.push({ name, url });
    setImages(allImages);
  };

  return (
    <Fragment>
      <p>
        <b>Image List</b>
      </p>
      <table>
        <tbody>
          {images.map(image => (
            <tr key={image.name}>
              <td>
                {image.name} - {image.url}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <DropArea handleUploadCompleted={handleUploadCompleted} />
    </Fragment>
  );
};

export default ImageList;
