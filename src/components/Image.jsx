import React from "react";

export const Imagen = (prop) => {
  return (
    <>
      <img
        className="absolute object-cover w-full h-full rounded"
        src={prop.src}
        width={prop.width}
        height={prop.width}
      />
    </>
  );
};