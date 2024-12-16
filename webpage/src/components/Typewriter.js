import { useState, useEffect } from 'react'
import { motion } from "framer-motion";
import "./Header.css"

const Typewriter = ({ text, speed }) => {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setTypedText((prevText) => prevText + text.charAt(currentIndex));
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [currentIndex, speed, text]);

  return (
    <motion.span>
      {typedText}
      <motion.span
        style={{ display: "inline-block" }}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ repeat: Infinity, duration: 0.7 }}
      >
        |
      </motion.span>
    </motion.span>
  );
}

export default Typewriter;