"use client";

import React, { createContext, useContext, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const FadeInStaggerContext = createContext(false);
const viewport = { once: true, margin: "0px 0px -200px" };

export const FadeIn = (props) => {
  const isInstaggerGroup = useContext(FadeInStaggerContext);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      {...(isInstaggerGroup
        ? {}
        : {
            initial: "hidden",
            whileInView: "visible",
            viewport,
          })}
      {...props}
    ></motion.div>
  );
};

export const FadeInStagger = ({ faster = false, ...props }) => {
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
        {...props}
      />
    </FadeInStaggerContext.Provider>
  );
};

export const FadeInLeftSlider = ({ children, delay = 0.5 }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, x: "-100%" },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{ duration: 0.5, delayChildren: delay }}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};