import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <section className="grid place-content-center gap-4 bg-green-300 px-8 py-24 text-black">
      <FlipLink 
        href="https://www.linkedin.com/in/kesare-cooray-544424256/" 
        icon={<FaLinkedin />} 
        label="LinkedIn" 
      />
      <FlipLink 
        href="https://www.facebook.com/share/ruzo72ndNcdkmwD1/?mibextid=qi2Omg" 
        icon={<FaFacebook />} 
        label="Facebook" 
      />
      <FlipLink 
        href="https://wa.me/qr/WT7Q3WU3K6FYM1" 
        icon={<FaWhatsapp />} 
        label="+(94) 77 056 8688" 
      />
      <FlipLink 
        href="mailto:sahasrakesara@gmail.com" 
        label="sahasrakesara@gmail.com" 
      />
    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ href, icon, label }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl flex items-center"
      style={{
        lineHeight: 0.75,
      }}
    >
      {icon && <span className="mr-4">{icon}</span>} {/* Display the icon if provided */}
      <div className="relative">
        {label.split("").map((l, i) => (
          <motion.span
            key={i}
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {label.split("").map((l, i) => (
          <motion.span
            key={i}
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export default SocialLinks;
