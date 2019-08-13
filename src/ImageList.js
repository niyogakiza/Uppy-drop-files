import React, { useState, Fragment } from "react";
import DropArea from "./DropArea";

const initialState = [
  { id: "1", url: "1.jpg" },
  { id: "2", url: "2.jpg" },
  { id: "3", url: "3.jpg" }
];
const ImageList = () => {
  const [images, setImages] = useState(initialState);

  const handleUploadCompleted = (id, url) => {
    let allImages = images;
    allImages.push({ id, url });
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
            <tr key={image.id}>
              <td>
                {image.id} - {image.url}
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
