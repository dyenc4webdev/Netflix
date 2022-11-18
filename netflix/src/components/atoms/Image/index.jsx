import React from "react";

export const Image = ({ src, alt, className }) => (
  <img
    src={src}
    className={className}
    alt={alt}
    style={{ width: "100%", height: "100%" }}
  />
);
