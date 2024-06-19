import { useRef, useState, useEffect } from "react";
import { TextBox } from "./generator";
import { motion } from "framer-motion";

export function Display({
  imgUrl,
  textBoxes,
  width,
  height,
}: {
  imgUrl: string;
  textBoxes: TextBox[];
  width: number;
  height: number;
}) {
  const ref = useRef(null);
  const containerRef = useRef(null);

  const [imgWidth, setImgWidth] = useState(0);
  const [imgHeight, setImgHeight] = useState(0);

  useEffect(() => {
    const containerWidth = containerRef.current.clientWidth;

    if (width > containerWidth) {
      setImgWidth(containerWidth);
    } else {
      setImgWidth(width);
    }

    if (height > 600) {
      setImgHeight(600);
    } else {
      setImgHeight(height);
    }
  }, [width, height]);

  return (
    <div className="px-8" ref={containerRef}>
      <div
        id="meme"
        className="relative overflow-x-hidden overflow-y-auto mx-auto"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: imgHeight,
          width: imgWidth,
        }}
        ref={ref}
      >
        {textBoxes.map((textBox) => (
          <motion.p
            drag
            dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
            dragConstraints={ref}
            key={textBox.id}
            style={{
              translate: "translate(-50%, -50%)",
              top: 0,
              left: "50%",
            }}
            className="memeText"
          >
            {textBox.text}
          </motion.p>
        ))}
      </div>
    </div>
  );
}
