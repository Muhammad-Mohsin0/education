import { useEffect } from "react";

const HTML = () => {
  useEffect(() => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    // Example drawing: A simple rectangle
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(20, 20, 150, 100);
  }, []);

  return (
    <div>
      ss
      <canvas
        id="myCanvas"
        width="200"
        height="100"
        style={{ border: "1px solid #000000" }}
      >
        Your browser does not support the HTML canvas tag.
      </canvas>
    </div>
  );
};

export default HTML;
