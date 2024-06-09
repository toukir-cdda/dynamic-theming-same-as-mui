import React from "react";

// Define types
interface Attributes {
  [key: string]: string | string[];
}

interface Style {
  [key: string]: string;
}

interface Data {
  tagName: string;
  attributes: Attributes;
  selfClosing: boolean;
  innerHTML: string;
  style: Style;
}

const DynamicTag = ({ data }: { data: Data }) => {
  const { tagName, attributes, innerHTML, style } = data;

  // Convert attributes object to JSX attributes
  const jsxAttributes = Object.entries(attributes).reduce(
    (acc, [key, value]) => {
      if (Array.isArray(value)) {
        acc[key] = value.join(" "); // Combine array values into a string
      } else {
        acc[key] = value;
      }
      return acc;
    },
    {} as { [key: string]: string }
  );

  // Create JSX element dynamically
  const Element = tagName;

  // Return JSX with dynamic element and its attributes
  return (
    // @ts-ignore
    <Element {...jsxAttributes} style={style}>
      {innerHTML}
    </Element>
  );
};

export default DynamicTag;
