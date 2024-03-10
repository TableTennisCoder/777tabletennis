import React from "react";
import { categoryColors } from "@/lib/utils";

const Categories = () => {
  return (
    <div className="flex flex-wrap gap-3">
      {Object.entries(categoryColors).map(([category, color]) => (
        <div
          className="hover:opacity-100 hover:scale-110 transition-transform duration-300"
          key={category}
          style={{
            cursor: "pointer",
            padding: "6px 20px",
            borderRadius: "8px",
            backgroundColor: `rgba(${parseInt(
              color.slice(-6, -4),
              16
            )}, ${parseInt(color.slice(-4, -2), 16)}, ${parseInt(
              color.slice(-2),
              16
            )}, 0.5)`,
            color: "#fff",
          }}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default Categories;
