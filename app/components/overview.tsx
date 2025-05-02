import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Overview() {
  const words = ["SOFTWARE", "BACKEND", "AI & ML"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="flex flex-col px-4 py-10 text-center lg:text-left items-center lg:items-start mt-12">
      {/* Title */}
      <div className="relative flex flex-col justify-start leading-none min-h-[130px] sm:min-h-[150px] md:min-h-[180px] lg:min-h-[200px]">
        <AnimatePresence mode="wait">
          <motion.h1
            key={words[currentWordIndex]}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] font-extrabold"
          >
            {words[currentWordIndex]}
          </motion.h1>
        </AnimatePresence>

        <h1 className="text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-extrabold text-[var(--secondary-fg-grey)] mt-[-0.5rem] sm:mt-[-1rem]">
          ENGINEER
        </h1>
      </div>


      {/* Description */}
      <div className="mt-4 max-w-xl sm:max-w-2xl">
        <p className="text-base sm:text-lg text-[var(--secondary-fg-grey)]">
          Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.
        </p>
      </div>

      {/* Stats */}
      <div className="flex flex-wrap justify-center lg:justify-start gap-10 mt-12 sm:mt-16">
        <div className="text-center lg:text-left">
          <div className="text-4xl sm:text-5xl font-bold">+12</div>
          <div className="text-sm sm:text-base text-[var(--secondary-fg-grey)]">YEARS OF</div>
          <div className="text-sm sm:text-base text-[var(--secondary-fg-grey)]">EXPERIENCE</div>
        </div>

        <div className="text-center lg:text-left">
          <div className="text-4xl sm:text-5xl font-bold">+46</div>
          <div className="text-sm sm:text-base text-[var(--secondary-fg-grey)]">PROJECTS</div>
          <div className="text-sm sm:text-base text-[var(--secondary-fg-grey)]">COMPLETED</div>
        </div>

        <div className="text-center lg:text-left">
          <div className="text-4xl sm:text-5xl font-bold">+20</div>
          <div className="text-sm sm:text-base text-[var(--secondary-fg-grey)]">WORLDWIDE</div>
          <div className="text-sm sm:text-base text-[var(--secondary-fg-grey)]">CLIENTS</div>
        </div>
      </div>
    </div>
  );
}
