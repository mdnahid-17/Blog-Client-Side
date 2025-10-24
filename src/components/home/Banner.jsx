// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
const Banner = () => {
  return (
    <div>
      <section className="w-full min-h-[100vh] flex flex-col md:flex-row items-center justify-between px-8 md:px-16 lg:px-24 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
        {/* Left Side - Typewriter */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Welcome to{" "}
            <span className="text-blue-400">
              <Typewriter
                options={{
                  strings: ["My Blog", "Tech Articles", "Travel Stories", "Food Reviews"],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
                
              />
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Discover insightful articles, tips, and stories from around the world 🌍
          </p>
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 transition rounded-full text-lg font-semibold shadow-lg">
            Explore Now
          </button>
        </div>

        {/* Right Side - Animated Image */}
        <div className="flex-1 mt-10 md:mt-0 flex justify-center">
          <motion.img
            src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
            alt="Animated Banner"
            className="w-[300px] md:w-[450px] drop-shadow-2xl rounded-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.05, rotate: 2 }}
          />
        </div>
      </section>
    </div>
  );
};

export default Banner;
