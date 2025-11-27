import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { MapPin, Phone, Mail, Gamepad2, Code, Bug, Star } from 'lucide-react';
import { FloatingBird, BouncingPlayer, SwayingTree, FloatingCoin, GameController, PixelHeart } from './GameElements';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ParallaxBackground } from './ParallaxBackground';
import { GameDevLogo, CompactLogo } from './GameDevLogo';
import { GamerMascot, MiniGamerIcon } from './GamerMascot';

export default function Portfolio() {
  const services = [
    {
      title: "Game Development",
      description: "Creating immersive gaming experiences from concept to completion",
      icon: <Gamepad2 className="w-6 h-6" />,
      color: "bg-blue-500",
      image: "https://images.unsplash.com/photo-1594501252028-2bb7b21d01b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGdhbWUlMjBkZXZlbG9wbWVudCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTk3MzM2OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Game Testing",
      description: "Thorough QA testing to ensure bug-free and polished gameplay",
      icon: <Bug className="w-6 h-6" />,
      color: "bg-green-500",
      image: "https://images.unsplash.com/photo-1661110442426-f984c2ec4475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lJTIwdGVzdGluZyUyMHF1YWxpdHklMjBhc3N1cmFuY2V8ZW58MXx8fHwxNzU5NzMzNzAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Game Design",
      description: "Innovative game mechanics and engaging user experience design",
      icon: <Code className="w-6 h-6" />,
      color: "bg-purple-500",
      image: "https://images.unsplash.com/photo-1752443560089-d9e99bc74049?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lJTIwZGVzaWduJTIwY29uY2VwdCUyMGFydHxlbnwxfHx8fDE3NTk3MzM3MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const portfolio = [
    {
      title: "Mobile Game Project",
      description: "Developed an engaging mobile puzzle game with over 100 levels",
      image: "https://images.unsplash.com/photo-1640187128454-1d7c462ede26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBnYW1lJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzU5NzMzNjk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tech: ["Unity", "C#", "Android", "iOS"]
    },
    {
      title: "Unity 3D Adventure",
      description: "Built a complete 3D adventure game with custom physics and AI",
      image: "https://images.unsplash.com/photo-1618422168439-4b03d3a05b15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml0eSUyMGdhbWUlMjBlbmdpbmUlMjBjb2Rpbmd8ZW58MXx8fHwxNzU5NzMzNzAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tech: ["Unity", "C#", "3D Modeling", "AI"]
    },
    {
      title: "Retro Arcade Game",
      description: "Created a nostalgic arcade-style game with pixel-perfect graphics",
      image: "https://images.unsplash.com/photo-1698273300787-f698a50bb250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGFyY2FkZSUyMGdhbWluZ3xlbnwxfHx8fDE3NTk3MzM3MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tech: ["JavaScript", "HTML5", "Pixel Art", "Sound Design"]
    }
  ];

  const skills = ["Unity", "C#", "JavaScript", "Python", "Game Design", "3D Modeling", "UI/UX", "Mobile Games"];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Parallax Background */}
      <ParallaxBackground />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-5">
        <div className="absolute top-20 left-10">
          <FloatingBird delay={0} />
        </div>
        <div className="absolute top-40 right-20">
          <FloatingBird delay={1} />
        </div>
        <div className="absolute bottom-40 left-20">
          <SwayingTree delay={0} />
        </div>
        <div className="absolute bottom-60 right-40">
          <SwayingTree delay={1.5} />
        </div>
        <div className="absolute top-60 left-1/3">
          <FloatingCoin delay={0.5} />
        </div>
        <div className="absolute bottom-80 right-1/3">
          <FloatingCoin delay={2} />
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="relative z-20 px-6 py-4">
        <div className="container mx-auto max-w-6xl flex justify-between items-center">
          <div className="flex items-center gap-3">
            <MiniGamerIcon />
            <CompactLogo />
          </div>
          <motion.div
            className="flex gap-6 text-gray-300"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a href="#about" className="hover:text-cyan-400 transition-colors cursor-pointer">About</a>
            <a href="#services" className="hover:text-cyan-400 transition-colors cursor-pointer">Services</a>
            <a href="#portfolio" className="hover:text-cyan-400 transition-colors cursor-pointer">Portfolio</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors cursor-pointer">Contact</a>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Logo and Info */}
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="mb-8">
                <GameDevLogo size="large" />
              </div>
              
              <h2 className="text-2xl md:text-3xl text-white mb-4">
                Passionate Game Developer
              </h2>
              
              <div className="flex items-center justify-center md:justify-start gap-2 text-gray-300 mb-6">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">Kozhikode, India</span>
              </div>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Crafting immersive gaming experiences with <span className="text-cyan-400">2+ years</span> of expertise. 
                From mobile puzzlers to epic adventures - I bring any game idea to life!
              </p>

              <div className="flex justify-center md:justify-start mb-8">
                <BouncingPlayer />
              </div>
            </motion.div>

            {/* Right Side - Gaming Mascot */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <GamerMascot />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 px-6 py-16">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-black/50 backdrop-blur-md border-yellow-400/30 text-white">
              <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-3">
                  <Star className="w-8 h-8 text-yellow-400" />
                  About Me
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <p className="text-lg leading-relaxed mb-4">
                      🎮 Passionate Game Developer with a love for creating immersive digital experiences
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                      ⚡ +2 years of experience in the gaming industry
                    </p>
                    <p className="text-lg leading-relaxed mb-6">
                      🚀 Can make any kind of game - from mobile puzzlers to epic RPGs
                    </p>
                    <h3 className="text-xl mb-4 text-yellow-400">Skills & Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="bg-purple-600/50 text-white border-purple-400/50">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="relative">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1594501252028-2bb7b21d01b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGdhbWUlMjBkZXZlbG9wbWVudCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTk3MzM2OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Game Development Workspace"
                        className="w-full h-48 object-cover rounded-lg border-2 border-yellow-400/30 shadow-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 px-6 py-16">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl mb-4 text-white">Services</h2>
            <p className="text-gray-300 text-lg">Bringing your game ideas to life</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="bg-black/50 backdrop-blur-md border-cyan-400/30 text-white h-full hover:border-cyan-400/60 transition-all duration-300 overflow-hidden">
                  <div className="relative h-48">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className={`absolute top-4 left-4 w-12 h-12 rounded-lg ${service.color} flex items-center justify-center text-white shadow-lg`}>
                      {service.icon}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="relative z-10 px-6 py-16">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl mb-4 text-white">Portfolio</h2>
            <p className="text-gray-300 text-lg">Showcasing my latest game development projects</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -8 }}
              >
                <Card className="bg-black/60 backdrop-blur-md border-pink-400/30 text-white h-full hover:border-pink-400/60 transition-all duration-300 overflow-hidden">
                  <div className="relative h-48">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-pink-300">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-gray-300">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="border-pink-400/50 text-pink-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 px-6 py-16">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-black/50 backdrop-blur-md border-green-400/30 text-white">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl flex items-center justify-center gap-3">
                  <Phone className="w-8 h-8 text-green-400" />
                  Let's Create Something Amazing
                </CardTitle>
                <CardDescription className="text-gray-300 text-lg">
                  Ready to bring your game idea to life? Get in touch!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-300">Phone</p>
                        <p className="text-lg">9567429451</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-300">Email</p>
                        <p className="text-lg">asheede1@gmail.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="relative">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1610561212775-b191f21b6998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxyZXRybyUyMGdhbWluZyUyMGNvbnRyb2xsZXJ8ZW58MXx8fHwxNzU5NzMzNTY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Gaming Controller"
                        className="w-64 h-48 object-cover rounded-lg border-2 border-green-400/50 shadow-xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent rounded-lg"></div>
                      <motion.div
                        className="absolute top-4 right-4"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        🎮
                      </motion.div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center gap-4 mt-8">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                  <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 text-gray-400">
        <div className="flex justify-center items-center gap-4 mb-4">
          <MiniGamerIcon />
          <CompactLogo />
        </div>
        <div className="flex justify-center items-center gap-2 mb-4">
          <span>Made with</span>
          <PixelHeart />
          <span>by Asheed Eliyangod</span>
        </div>
        <p>© 2024 Game Developer Portfolio. Level up your games!</p>
      </footer>
    </div>
  );
}