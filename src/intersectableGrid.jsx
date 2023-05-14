import React from "react";
const GridItem = ({ image, isInViewport }) => {
  return (
    <div key={image.id} id={image.id}>
      <div
        style={{
          height: image.height,
          width: " 300px",
          backgroundColor:
            isInViewport[image.id - 1] || image.shouldFetch ? "green" : "blue",
        }}
      >
        {image.id}
      </div>
    </div>
  );
};
export const GridLayout = ({ images, isInViewport }) => (
  <div
    style={{
      display: "grid",
      gridGap: "10px",
    }}
  >
    {images &&
      images.map((image) => (
        <GridItem image={image} isInViewport={isInViewport} />
      ))}
  </div>
);
