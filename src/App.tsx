import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  GamerMascot,
  MiniGamerIcon,
} from "./components/GamerMascot";
import {
  Gamepad2,
  Mail,
  Phone,
  MapPin,
  Code,
  Target,
  Sparkles,
  Star,
  Zap,
  Trophy,
  Briefcase,
  Rocket,
  ExternalLink,
} from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [score, setScore] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () =>
      window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setScore((prev) => prev + 10);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const sections = [
    { id: "home", label: "Home", icon: Gamepad2 },
    { id: "about", label: "About", icon: Target },
    { id: "projects", label: "Projects", icon: Rocket },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const professionalProjects = [
    {
      title: "Backpack Rumble",
      company: "Sandsoft",
      period: "2023 - 2024",
      description:
        "Real-time multiplayer strategy game that combines backpack inventory management and merge mechanics for an innovative gaming experience.",
      tags: ["Unity", "C#", "Mobile", "Mid-core"],
      link: "https://play.google.com/store/apps/details?id=com.quicksand.backpack&hl=en",
      image: "https://iili.io/fBtRgyl.webp",
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "Merge Rumble",
      company: "Sandsoft",
      period: "2023 - 2024",
      description:
        "Merge Rumble: Epic Real-Time PvP Strategy Game with merging mechanism.",
      tags: ["Unity", "Optimization", "SDKs"],
      link: "https://play.google.com/store/apps/details?id=com.quicksand.mergerumble&hl=en",
      image: "https://iili.io/fBZZM57.webp",
      color: "from-purple-500 to-pink-600",
    },
    {
      title: "King Of Steering - KOS Drift",
      company: "UMXStudio",
      period: "2022 - 2023",
      description:
        "Multiplayer racing game for iOS, Android, and Huawei platforms",
      tags: ["Multiplayer", "Racing", "Cross-platform"],
      link: "https://play.google.com/store/apps/details?id=com.aliha100.KingofSteering&hl=en",
      image: "https://iili.io/fBZZ00l.webp",
      color: "from-orange-500 to-red-600",
    },
    {
      title: "Climbing Sand Dune OFFROAD",
      company: "UMXStudio",
      period: "2022 - 2023",
      description: "Racing game with with arabic theme",
      tags: ["Racing", "Mobile", "Multiplayer"],
      link: "https://play.google.com/store/apps/details?id=com.aliha100.climbingsanddune3d1&hl=en",
      image: "https://iili.io/fBZDn8N.webp",
      color: "from-yellow-500 to-orange-600",
    },
    {
      title: "Perfect Store VR",
      company: "Union Coop",
      period: "2023",
      description: "VR supermarket application for Quest",
      tags: ["VR", "Quest", "Unity"],
      link: "https://queststoredb.com/app/union-coop-6246938002023894/",
      image: "https://iili.io/fBtEqTG.png",
      color: "from-green-500 to-teal-600",
    },
    {
      title: "Toyota Showroom",
      company: "Immergic (CGEVO)",
      period: "2019 - 2022",
      description:
        "touch screen application for a showroom in the automotive industry",
      tags: ["Automotive", "Unity"],
      link: "https://www.youtube.com/watch?v=ie62cWdp_i4",
      image:
        "https://img.youtube.com/vi/ie62cWdp_i4/maxresdefault.jpg",
      color: "from-red-500 to-pink-600",
    },
    {
      title: "AR Robotic Experience",
      company: "Immergic (CGEVO)",
      period: "2019 - 2022",
      description:
        "Augmented reality application with realtime movement controls",
      tags: ["AR", "Mobile", "PC"],
      link: "https://www.youtube.com/watch?v=6SxWRtBhh74",
      image: "https://iili.io/fBZtHLG.png",
      color: "from-blue-500 to-purple-600",
    },
    {
      title: "VR Slashing Game",
      company: "Immergic (CGEVO)",
      period: "2019 - 2022",
      description:
        "Virtual reality action game inspired by fruit ninja",
      tags: ["VR", "Immersive", "Action"],
      link: "https://www.youtube.com/watch?v=i3kxO41GyzU&t=56s",
      image: "https://iili.io/fBZt214.png",
      color: "from-pink-500 to-red-600",
    },
    {
      title: "FLYY",
      company: "TANTUHASCO",
      period: "2018 - 2019",
      description: "3D social media platform",
      tags: ["Unity", "Optimization", "Remote"],
      link: "https://www.flyy.life/",
      image:
        "https://images.unsplash.com/photo-1683721003111-070bcc053d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMHBsYXRmb3JtfGVufDF8fHx8MTc2NDIyOTYwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-teal-500 to-green-600",
    },
    {
      title: "Chef Battle",
      company: "5DVR",
      period: "2015 - 2017",
      description: "VR fast pace action game",
      tags: ["VR", "Action"],
      link: "https://drive.google.com/file/d/1AtOL_1bDx2sW-WK--0JCq-udN_Sp0Nef/view?usp=sharing",
      image: "https://iili.io/fBZt3rl.png",
      color: "from-indigo-500 to-blue-600",
    },
    {
      title: "Glider",
      company: "5DVR",
      period: "2015 - 2017",
      description:
        "VR flyting experience amoung the world famous landmarks",
      tags: ["Immersive", "VR", "World"],
      link: "https://drive.google.com/file/d/1gHvGNGwg3Yv0450d9-QoV_GsZyxt4vXs/view",
      image: "https://iili.io/fBZZmmX.png",
      color: "from-cyan-500 to-teal-600",
    },
  ];

  const personalProjects = [
    {
      title: "Smashable",
      description:
        "Global Game Jam 2018 - Development, level design and visual effects",
      tags: ["Game Jam", "Level Design"],
      link: "https://drive.google.com/file/d/14mWwrsoZpz3A7fo1NgY8vdqzI-o_OFKb/view",
      image: "https://iili.io/fBZtR2V.png",
      color: "from-yellow-400 to-orange-500",
    },
    {
      title: "Naughty Soul",
      description:
        "Global Game Jam 2021 - Level design, core mechanics and sound design",
      tags: ["Game Jam", "Sound Design"],
      link: "https://leckchess.itch.io/naughty-soul",
      image: "https://iili.io/fBZtNTX.png",
      color: "from-purple-400 to-pink-500",
    },
    {
      title: "Break it",
      description:
        "Global Game Jam 2020 - Game level design and development",
      tags: ["Game Jam", "Puzzle"],
      link: "https://drive.google.com/file/d/1HZH_hEFrn_t77eY7pbqsB3YHJ3xWOJun/view",
      image: "https://iili.io/fBZtLZu.png",
      color: "from-green-400 to-teal-500",
    },
    {
      title: "Camper Van",
      description:
        "Van coloring mobile game for creative entertainment",
      tags: ["Mobile", "Casual"],
      link: "https://drive.google.com/file/d/19SgZb0PnDOJs40bbYOCpyEUwWhU8ZcbB/view",
      image: "https://iili.io/fBZtXYN.png",
      color: "from-blue-400 to-cyan-500",
    },
    {
      title: "Hadotopia",
      description:
        "Kids language teaching app with educational gameplay",
      tags: ["Educational", "Mobile"],
      link: "https://drive.google.com/file/d/1XsY95TYjV6QfPPCsMedZWcEnZ7Hcbj1O/view",
      image: "https://iili.io/fBZtD6x.png",
      color: "from-red-400 to-orange-500",
    },
    {
      title: "Prevent Disaster",
      description:
        "Hyper casual puzzle game with engaging mechanics",
      tags: ["Hyper Casual", "Puzzle"],
      link: "https://drive.google.com/file/d/1ToOkYgrZgswiBnq8ez8mGUbccxzmN0Fm/view?usp=drive_link",
      image: "https://iili.io/fBZtpaV.png",
      color: "from-indigo-400 to-purple-500",
    },
    {
      title: "Waitress Run",
      description:
        "Hyper casual runner game with smooth gameplay",
      tags: ["Hyper Casual", "Runner"],
      link: "https://drive.google.com/file/d/1xGiC_MaaPs0GGZ_fSiZ8zla-JJjUVfXl/view?usp=drive_link",
      image: "https://iili.io/fBZDdwF.png",
      color: "from-pink-400 to-red-500",
    },
    {
      title: "Naho Puzzle Game",
      description: "Game level design and development project",
      tags: ["Puzzle", "Level Design"],
      link: "https://drive.google.com/file/d/1YOEDwcXawonNuYjjzNWd9sqlaoCzsAvm/view?usp=drive_link",
      image: "https://iili.io/fBZDx9I.png",
      color: "from-teal-400 to-green-500",
    },
    {
      title: "Poinky",
      description:
        "ITI graduation project - Complete game development",
      tags: ["Educational", "Graduation"],
      link: "https://youtu.be/Pz39W4Iy_xw",
      image:
        "https://img.youtube.com/vi/Pz39W4Iy_xw/maxresdefault.jpg",
      color: "from-orange-400 to-yellow-500",
    },
  ];

  const achievements = [
    { label: "Years Experience", value: "10+", icon: Trophy },
    { label: "Projects Completed", value: "50+", icon: Star },
    { label: "Games Published", value: "10+", icon: Gamepad2 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden relative">
      {/* Animated cursor trail */}
      <motion.div
        className="fixed w-4 h-4 bg-cyan-400 rounded-full pointer-events-none z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
        }}
      />

      {/* Floating particles background */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Grid background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(56, 178, 172, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 178, 172, 0.3) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* HUD - Score Display */}
      <div className="fixed top-4 right-4 z-40 bg-black/50 backdrop-blur-md border-2 border-cyan-400/50 rounded-lg px-6 py-3">
        <div className="flex items-center gap-2">
          <Star className="w-5 h-5 text-yellow-400" />
          <span className="text-cyan-400">SCORE:</span>
          <motion.span
            key={score}
            initial={{ scale: 1.5, color: "#fbbf24" }}
            animate={{ scale: 1, color: "#ffffff" }}
            className="font-mono"
          >
            {score.toString().padStart(6, "0")}
          </motion.span>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="fixed top-4 left-4 z-40 bg-black/50 backdrop-blur-md border-2 border-cyan-400/50 rounded-lg">
        <div className="flex flex-col gap-2 p-3">
          {sections.map((section) => (
            <motion.button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                activeSection === section.id
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white"
                  : "bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50"
              }`}
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <section.icon className="w-5 h-5" />
              <span>{section.label}</span>
              {activeSection === section.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute right-2 w-2 h-2 bg-yellow-400 rounded-full"
                />
              )}
            </motion.button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <AnimatePresence mode="wait">
          {/* HOME SECTION */}
          {activeSection === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="min-h-screen flex flex-col items-center justify-center"
            >
              {/* Hero Section */}
              <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
                {/* Mascot */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", duration: 1 }}
                >
                  <GamerMascot />
                </motion.div>

                {/* Hero Text */}
                <div className="flex-1 text-center lg:text-left">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-1 rounded-full text-sm mb-4">
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Saudi Arabia
                      </span>
                    </div>
                  </motion.div>

                  <motion.h1
                    className="text-6xl lg:text-8xl mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Alaa Hatata
                  </motion.h1>

                  <motion.div
                    className="text-2xl lg:text-4xl text-cyan-400 mb-6 flex items-center justify-center lg:justify-start gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Gamepad2 className="w-8 h-8" />
                    Senior Game Developer
                  </motion.div>

                  <motion.p
                    className="text-xl text-gray-400 mb-8 max-w-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    Crafting legendary gaming experiences with
                    over a decade of expertise
                  </motion.p>

                  <motion.div
                    className="flex gap-4 justify-center lg:justify-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <button
                      onClick={() =>
                        setActiveSection("projects")
                      }
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 rounded-lg hover:scale-105 transition-transform flex items-center gap-2 shadow-lg shadow-cyan-500/50"
                    >
                      <Rocket className="w-5 h-5" />
                      View Projects
                    </button>
                    <button
                      onClick={() =>
                        setActiveSection("contact")
                      }
                      className="bg-gray-800 border-2 border-cyan-400/50 px-8 py-4 rounded-lg hover:bg-gray-700 hover:scale-105 transition-all flex items-center gap-2"
                    >
                      <Mail className="w-5 h-5" />
                      Get in Touch
                    </button>
                  </motion.div>
                </div>
              </div>

              {/* Achievements Bar */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto w-full"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="bg-black/50 backdrop-blur-md border-2 border-cyan-400/30 rounded-lg p-6 text-center"
                    whileHover={{
                      scale: 1.05,
                      borderColor: "rgba(56, 178, 172, 0.8)",
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                  >
                    <achievement.icon className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
                    <div className="text-3xl text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text mb-2">
                      {achievement.value}
                    </div>
                    <div className="text-sm text-gray-400">
                      {achievement.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* ABOUT SECTION */}
          {activeSection === "about" && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="min-h-screen flex items-center justify-center"
            >
              <div className="max-w-4xl mx-auto">
                <motion.h2
                  className="text-5xl lg:text-7xl mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                >
                  About Me
                </motion.h2>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <MiniGamerIcon />
                    <div className="mt-8">
                      <div className="bg-black/50 backdrop-blur-md border-2 border-cyan-400/30 rounded-lg p-8">
                        <div className="flex items-center gap-3 mb-4">
                          <Trophy className="w-8 h-8 text-yellow-400" />
                          <h3 className="text-2xl text-cyan-400">
                            Professional Journey
                          </h3>
                        </div>
                        <div className="space-y-4 text-gray-300">
                          <p className="text-lg">
                            <span className="text-cyan-400">
                              ✦
                            </span>{" "}
                            Passionate Game Developer
                          </p>
                          <p className="text-lg">
                            <span className="text-purple-400">
                              ✦
                            </span>{" "}
                            10+ Years of Experience
                          </p>
                          <p className="text-lg">
                            <span className="text-pink-400">
                              ✦
                            </span>{" "}
                            Senior Game Developer
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="space-y-6"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="bg-gradient-to-br from-cyan-500/10 to-purple-600/10 backdrop-blur-md border-2 border-cyan-400/30 rounded-lg p-8">
                      <h3 className="text-2xl text-cyan-400 mb-4 flex items-center gap-2">
                        <Code className="w-6 h-6" />
                        Expertise & Passion
                      </h3>
                      <p className="text-gray-300 text-lg leading-relaxed mb-4">
                        With over a decade of experience in the
                        gaming industry, I bring a deep passion
                        for creating immersive and engaging
                        gaming experiences. My journey has been
                        driven by an unwavering commitment to
                        excellence and innovation.
                      </p>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        From concept to completion, I thrive on
                        transforming creative visions into
                        interactive realities that captivate
                        players around the world. Every project
                        is an opportunity to push boundaries and
                        deliver exceptional quality.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <motion.div
                        className="bg-black/50 backdrop-blur-md border-2 border-cyan-400/30 rounded-lg p-6 text-center"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Sparkles className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                        <div className="text-cyan-400">
                          Innovation
                        </div>
                      </motion.div>
                      <motion.div
                        className="bg-black/50 backdrop-blur-md border-2 border-purple-400/30 rounded-lg p-6 text-center"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Zap className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                        <div className="text-purple-400">
                          Performance
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}

          {/* PROJECTS SECTION */}
          {activeSection === "projects" && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="min-h-screen flex items-center justify-center py-20"
            >
              <div className="max-w-7xl mx-auto w-full px-4">
                <motion.h2
                  className="text-5xl lg:text-7xl mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                >
                  Projects
                </motion.h2>

                {/* Professional Projects */}
                <div className="mb-16">
                  <motion.div
                    className="flex items-center gap-3 mb-8"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <Briefcase className="w-8 h-8 text-cyan-400" />
                    <h3 className="text-3xl text-cyan-400">
                      Professional Work
                    </h3>
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-cyan-400/50 to-transparent ml-4"></div>
                  </motion.div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {professionalProjects.map(
                      (project, index) => (
                        <motion.div
                          key={index}
                          className="bg-black/50 backdrop-blur-md border-2 border-cyan-400/30 rounded-lg overflow-hidden hover:border-cyan-400 transition-all group"
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ scale: 1.02, y: -5 }}
                        >
                          {/* Image Section */}
                          <div className="relative h-48 overflow-hidden">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div
                              className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-30 group-hover:opacity-20 transition-opacity`}
                            ></div>
                            {project.link && (
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm p-2 rounded-lg text-cyan-400 hover:text-cyan-300 hover:bg-black/90 transition-all"
                                onClick={(e) =>
                                  e.stopPropagation()
                                }
                              >
                                <ExternalLink className="w-5 h-5" />
                              </a>
                            )}
                          </div>

                          {/* Content Section */}
                          <div className="p-6">
                            <div
                              className={`h-1 bg-gradient-to-r ${project.color} rounded-full mb-4`}
                            ></div>
                            <h4 className="text-xl text-cyan-400 mb-2">
                              {project.title}
                            </h4>
                            <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                              <Briefcase className="w-4 h-4" />
                              <span>{project.company}</span>
                              <span className="text-gray-600">
                                •
                              </span>
                              <span>{project.period}</span>
                            </div>
                            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                              {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {project.tags.map((tag, i) => (
                                <span
                                  key={i}
                                  className="bg-cyan-500/10 border border-cyan-400/30 px-2 py-1 rounded text-xs text-cyan-400"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      ),
                    )}
                  </div>
                </div>

                {/* Personal Projects */}
                <div>
                  <motion.div
                    className="flex items-center gap-3 mb-8"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Rocket className="w-8 h-8 text-purple-400" />
                    <h3 className="text-3xl text-purple-400">
                      Personal Projects
                    </h3>
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-purple-400/50 to-transparent ml-4"></div>
                  </motion.div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {personalProjects.map((project, index) => (
                      <motion.div
                        key={index}
                        className="bg-black/50 backdrop-blur-md border-2 border-purple-400/30 rounded-lg overflow-hidden hover:border-purple-400 transition-all group"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.3 + index * 0.05,
                        }}
                        whileHover={{ scale: 1.02, y: -5 }}
                      >
                        {/* Image Section */}
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div
                            className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-30 group-hover:opacity-20 transition-opacity`}
                          ></div>
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm p-2 rounded-lg text-purple-400 hover:text-purple-300 hover:bg-black/90 transition-all"
                              onClick={(e) =>
                                e.stopPropagation()
                              }
                            >
                              <ExternalLink className="w-5 h-5" />
                            </a>
                          )}
                        </div>

                        {/* Content Section */}
                        <div className="p-6">
                          <div
                            className={`h-1 bg-gradient-to-r ${project.color} rounded-full mb-4`}
                          ></div>
                          <h4 className="text-xl text-purple-400 mb-3">
                            {project.title}
                          </h4>
                          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                              <span
                                key={i}
                                className="bg-purple-500/10 border border-purple-400/30 px-2 py-1 rounded text-xs text-purple-400"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Skills Showcase */}
                <motion.div
                  className="mt-16 bg-black/50 backdrop-blur-md border-2 border-yellow-400/30 rounded-lg p-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <h3 className="text-2xl text-yellow-400 mb-6 text-center flex items-center justify-center gap-2">
                    <Sparkles className="w-6 h-6" />
                    Core Competencies
                    <Sparkles className="w-6 h-6" />
                  </h3>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {[
                      "Unity",
                      "C#",
                      "Game Design",
                      "AR/VR",
                      "Mobile Games",
                      "PC Games",
                      "Multiplayer",
                      "Performance Optimization",
                      "SDK Integration",
                      "Multiplayer",
                      "Cross-platform",
                      "Team Leadership",
                      "Agile Development",
                    ].map((skill, i) => (
                      <motion.span
                        key={i}
                        className="bg-gradient-to-r from-yellow-500/20 to-orange-600/20 border border-yellow-400/50 px-4 py-2 rounded-full text-sm"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.9 + i * 0.05 }}
                        whileHover={{
                          scale: 1.1,
                          borderColor: "rgba(251, 191, 36, 1)",
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* CONTACT SECTION */}
          {activeSection === "contact" && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="min-h-screen flex items-center justify-center"
            >
              <div className="max-w-4xl mx-auto w-full">
                <motion.h2
                  className="text-5xl lg:text-7xl mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                >
                  Get in Touch
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Contact Info Cards */}
                  <motion.div
                    className="space-y-6"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="bg-black/50 backdrop-blur-md border-2 border-cyan-400/30 rounded-lg p-8 hover:border-cyan-400 transition-all group">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Mail className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <div className="text-gray-400 text-sm">
                            Email
                          </div>
                          <div className="text-cyan-400 text-lg">
                            alaa.mohamed.hatata@gmail.com
                          </div>
                        </div>
                      </div>
                      <a
                        href="mailto:alaa.mohamed.hatata@gmail.com"
                        className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2 rounded-lg hover:scale-105 transition-transform text-sm"
                      >
                        Send Email
                      </a>
                    </div>

                    <div className="bg-black/50 backdrop-blur-md border-2 border-purple-400/30 rounded-lg p-8 hover:border-purple-400 transition-all group">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Phone className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <div className="text-gray-400 text-sm">
                            Phone
                          </div>
                          <div className="text-purple-400 text-lg">
                            +966509490874
                          </div>
                        </div>
                      </div>
                      <a
                        href="tel:+966509490874"
                        className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 px-6 py-2 rounded-lg hover:scale-105 transition-transform text-sm"
                      >
                        Call Now
                      </a>
                    </div>

                    <div className="bg-black/50 backdrop-blur-md border-2 border-green-400/30 rounded-lg p-8 hover:border-green-400 transition-all group">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <MapPin className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <div className="text-gray-400 text-sm">
                            Location
                          </div>
                          <div className="text-green-400 text-lg">
                            Saudi Arabia
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Interactive Contact Card */}
                  <motion.div
                    className="bg-gradient-to-br from-cyan-500/10 to-purple-600/10 backdrop-blur-md border-2 border-cyan-400/30 rounded-lg p-8"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="flex flex-col items-center text-center h-full justify-center">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      >
                        <Gamepad2 className="w-24 h-24 text-cyan-400 mb-6" />
                      </motion.div>
                      <h3 className="text-2xl text-cyan-400 mb-4">
                        Ready to Level Up?
                      </h3>
                      <p className="text-gray-300 mb-6 text-lg">
                        Let's collaborate on your next gaming
                        project and create something
                        extraordinary together!
                      </p>
                      <div className="flex gap-3 flex-wrap justify-center">
                        <motion.div
                          className="text-3xl"
                          animate={{ y: [0, -10, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: 0,
                          }}
                        >
                          🎮
                        </motion.div>
                        <motion.div
                          className="text-3xl"
                          animate={{ y: [0, -10, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: 0.3,
                          }}
                        >
                          🚀
                        </motion.div>
                        <motion.div
                          className="text-3xl"
                          animate={{ y: [0, -10, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: 0.6,
                          }}
                        >
                          ⭐
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Footer */}
                <motion.div
                  className="mt-12 text-center text-gray-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <p className="flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Senior Game Developer | 10+ Years Experience
                    <Sparkles className="w-4 h-4" />
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}