"use client";

import icons from "@/lib/icons";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

export default function ProfileAndPortfolio() {
  return <ProfileSvg />;
}

const ProfileSvg = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <motion.div
      style={{ y: 40 }}
      className="fixed bottom-0 left-32 w-52"
      onMouseLeave={() => setToggle(false)}
    >
      <AnimatePresence>
        {toggle && (
          <div className="flex items-center justify-center">
            <motion.span
              className="inline-block"
              key="web"
              initial={{ opacity: 0, x: 0, y: 100 }}
              animate={{ opacity: 1, x: -40, y: 40 }}
              exit={{ opacity: 0, x: 0, y: 100 }}
              whileHover={{ scale: 1.5 }}
            >
              <Link href={"https://stepasidelil.vercel.app/"} target="_blank">
                <icons.Web size={24} />
              </Link>
            </motion.span>

            <motion.span
              className="inline-block"
              key="github"
              initial={{ opacity: 0, x: 0, y: 100 }}
              animate={{ opacity: 1, x: 0, y: -10 }}
              exit={{ opacity: 0, x: 0, y: 100 }}
              whileHover={{ scale: 1.5 }}
            >
              <Link href={"https://github.com/StepAsideLiL/"} target="_blank">
                <icons.Github size={24} />
              </Link>
            </motion.span>

            <motion.span
              className="inline-block"
              key="xsocial"
              initial={{ opacity: 0, x: 0, y: 100 }}
              animate={{ opacity: 1, x: 40, y: 40 }}
              exit={{ opacity: 0, x: 0, y: 100 }}
              whileHover={{ scale: 1.5 }}
            >
              <Link href={"https://x.com/StepAsideLiL/"} target="_blank">
                <icons.XSocial size={24} />
              </Link>
            </motion.span>
          </div>
        )}
      </AnimatePresence>

      <div className="place-items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          width="100"
          height="100"
          version="1.1"
          viewBox="0 0 153.383 153.383"
          className="cursor-pointer"
          onClick={() => setToggle((toggle) => !toggle)}
          onMouseEnter={() => setToggle(true)}
        >
          <g
            fillOpacity="1"
            strokeDasharray="none"
            strokeOpacity="1"
            transform="translate(-55.6 -140.57)"
          >
            <circle
              cx="132.292"
              cy="217.261"
              r="76.427"
              fill="#0ff"
              stroke="#000"
              strokeWidth="0.529"
            ></circle>

            {/* left eyeball */}
            <circle
              cx="103.669"
              cy="198.19"
              r="19.441"
              fill="#fff"
              stroke="#000"
              strokeWidth="0.27"
            ></circle>

            {/* left eyeball inner */}
            <circle
              cx="102.806"
              cy="197.328"
              r="8.194"
              fill="#000"
              stroke="none"
              strokeWidth="0.114"
            ></circle>
            <circle
              cx="102.619"
              cy="199.348"
              r="4.097"
              fill="#fff"
              stroke="none"
              strokeWidth="0.057"
            ></circle>

            {/* right eyeball */}
            <circle
              cx="162.525"
              cy="199.348"
              r="19.441"
              fill="#fff"
              stroke="#000"
              strokeWidth="0.27"
            ></circle>

            {/* right eyeball inner */}
            <circle
              cx="161.663"
              cy="198.485"
              r="8.194"
              fill="#000"
              stroke="none"
              strokeWidth="0.114"
            ></circle>
            <circle
              cx="161.475"
              cy="200.506"
              r="4.097"
              fill="#fff"
              stroke="none"
              strokeWidth="0.057"
            ></circle>
          </g>
        </svg>
      </div>
    </motion.div>
  );
};
