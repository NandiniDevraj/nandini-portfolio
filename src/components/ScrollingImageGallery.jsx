import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollingImageGallery = ({ images }) => {
  const galleryRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['-25%', '5%']);
  const y3 = useTransform(scrollYProgress, [0, 1], ['10%', '-20%']);

  const imageAnims = [
    {
      y: y1,
      // --- REDUCED WIDTH ---
      positionClasses: 'absolute top-8 left-4 w-48', // was w-72
      rotate: -6,
      zIndex: 1,
    },
    {
      y: y2,
      // --- REDUCED WIDTH ---
      positionClasses: 'absolute top-1/4 right-4 w-48', // was w-80
      rotate: 4,
      zIndex: 2,
    },
    {
      y: y3,
      // --- REDUCED WIDTH ---
      positionClasses: 'absolute top-1/2 left-1/4 w-48', // was w-64
      rotate: -3,
      zIndex: 3,
    },
  ];

  return (
    <div ref={galleryRef} className="relative h-[450px]">
      {images.map((img, i) => {
        const anim = imageAnims[i % imageAnims.length];
        return (
          <motion.div
            key={i}
            className={anim.positionClasses}
            style={{ y: anim.y, rotate: anim.rotate, zIndex: anim.zIndex }}
          >
            <img 
              src={img} 
              alt={`Experience visual ${i + 1}`} 
              className="rounded-lg shadow-xl shadow-black/40"
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default ScrollingImageGallery;