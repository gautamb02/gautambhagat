import Image from "next/image";
import { FaLinkedin, FaGithub, FaTwitter, FaMailchimp } from "react-icons/fa";

export default function Profile() {
  return (
    <div className="w-full md:w-3/4 mx-auto bg-white rounded-2xl shadow-lg px-4 sm:px-6 py-6 sm:py-8 text-center">
      {/* Image container with aspect ratio control */}
      <div className="w-full aspect-square md:aspect-auto mx-auto md:w-3/4">
        <Image 
          src="/gautam1.png" 
          width={900}
          height={500} 
          alt="Gautam" 
          className="w-full h-full md:h-auto rounded-xl object-cover"
          style={{
            objectPosition: 'center' // Ensures the focus remains on faces/important parts
          }}
        />
      </div>

      <h2 className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl font-bold text-black">
        Gautam Bhagat
      </h2>
      <p className="mt-2 sm:mt-4 text-sm sm:text-base md:text-xl text-[var(--secondary-fg-grey)]">
        A Product Manager and Designer who transforms data into compelling experiences. I weave creativity and marketing savvy to craft products that connect and inspire.
      </p>
      <div className="mt-4 sm:mt-6 flex justify-center space-x-6 text-purple-600">
        <a href="https://linkedin.com/in/igautambhagat" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5 hover:text-purple-800 transition" />
        </a>
        <a href="mailto:sam@example.com">
          <FaMailchimp className="w-4 h-4 sm:w-5 sm:h-5 hover:text-purple-800 transition" />
        </a>
      </div>
    </div>
  )
}