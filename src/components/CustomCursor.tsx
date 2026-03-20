import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const followerXSpring = useSpring(cursorX, { damping: 20, stiffness: 250 });
  const followerYSpring = useSpring(cursorY, { damping: 20, stiffness: 250 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        id="custom-cursor"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          left: -10,
          top: -10,
        }}
      />
      <motion.div
        id="custom-cursor-follower"
        style={{
          translateX: followerXSpring,
          translateY: followerYSpring,
          left: -20,
          top: -20,
        }}
      />
    </>
  );
};
