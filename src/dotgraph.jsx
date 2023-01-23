import React from "react";

function Dotgraph({ props }) {
  return (
    <div
      className="bg-black/60 w-4/5 h-[calc(100vh/2)] relative mx-auto my-14 before:absolute before:w-full before:h-1
      before:bg-white before:bottom-0 before:left-0 after:absolute after:w-1 after:h-full after:bg-white after:bottom-0 after:left-0"
      style={{
        overflow: "hidden",
      }}
    >
      {props?.map((val) => {
        return (
          <span
            className={`mx-2 p-1 rounded-md absolute 
       after:left-1/2 after:-translate-x-1/2 group brightness-150
       shadow-inner`}
            style={{
              bottom: val.y * 5 + "pt",
              left: val.x * 3 + "rem",
              backgroundColor: val.color || "cyan",
            }}
          >
            <span
              className="dots-line"
              style={{
                position: "absolute",
                height: "50vh",
                width: "1.2pt",
                backgroundColor: val.color || "cyan",
                boxShadow: `0 0 10px 1px ${val.color || "cyan"}`,
                left: "50%",
                top: "50%",
                opacity: 0.5,
                transform: "translateX(-50%)",
              }}
            ></span>
            <span
              className="absolute opacity-0 
              bottom-full group-hover:opacity-80 transition-all
              delay-500"
            >
              {val.x},{val.y}
            </span>
          </span>
        );
      })}
    </div>
  );
}

export default Dotgraph;
