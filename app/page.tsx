"use client";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import React from "react";
import { motion } from "framer-motion";
import {
  Clock,
  Music,
  Volume2,
  Github,
  Download,
  Terminal,
  ExternalLink,
  CheckCircle,
  Mail,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { ThemeToggle } from "@/components/providers/theme-toggle";

const features = [
  {
    title: "Clock Display",
    description: "Real-time clock display on your OLED screen with customizable formats.",
    icon: Clock,
  },
  {
    title: "Music Integration",
    description: "Seamless control for popular music services including Spotify, iTunes, and more ...",
    icon: Music,
  },
  {
    title: "Volume Control",
    description: "Intuitive system volume control with real-time OLED feedback.",
    icon: Volume2,
  },
];

const supportedApps = [
  {
    name: "TIDAL",
    url: "https://tidal.com",
    description: "High-fidelity music streaming.",
  },
  {
    name: "MusicBee",
    url: "https://getmusicbee.com",
    description: "Advanced music management and playback.",
  },
  {
    name: "AIMP",
    url: "https://www.aimp.ru",
    description: "Lightweight audio player.",
  },
  {
    name: "YouTube Music Desktop App (th-ch)",
    url: "https://github.com/th-ch/youtube-music",
    description: "An open source, cross-platform, unofficial YouTube Music Desktop App with built-in ad blocker and downloader.",
  },
  {
    name: "YouTube Music Desktop App",
    url: "https://github.com/ytmdesktop/ytmdesktop",
    description: "Official YouTube Music desktop client.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const scaleVariants = {
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10,
    },
  },
};

export default function Home() {
  const handleAppSelect = (appName: string) => {
    console.log(appName);
  };

  return (
    <div className="min-h-screen bg-background text-foreground dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800 dark:text-white">
      {/* Menu Bar */}
      <div className="absolute top-4 right-4 flex gap-4 items-center text-muted-foreground">
        <div className="absolute top-4 right-4 flex items-center gap-4">
          <ThemeToggle />
          <HoverCard>
            <HoverCardTrigger asChild>
              <Link
                href="https://ko-fi.com/X8X63RV89"
                target="_blank"
                className="text-sm hover:text-orange-500 w-36 inline-flex"
              >
                Buy mtricht a Coffee
              </Link>
            </HoverCardTrigger>
            <HoverCardContent className="bg-background border-border text-foreground dark:bg-gray-900 dark:text-white p-4">
              <p className="text-sm">
                Mtricht made this incredible project. I use it everyday on my
                Steelseries GameDac so give him some love and support.❤️
              </p>
            </HoverCardContent>
          </HoverCard>
          <span>|</span>
          <Link
            href="https://github.com/mtricht/gamesense-essentials"
            target="_blank"
            className="text-sm hover:text-orange-500"
          >
            GitHub
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Hero Section */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <div className="flex items-center justify-center gap-4 mb-4"></div>
            <motion.h1
              className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600"
              whileHover={{ scale: 1.02 }}
            >
              GameSense Essentials
            </motion.h1>
            <p className="text-xl text-muted-foreground dark:text-gray-300 max-w-2xl mx-auto">
              Essential OLED integrations for SteelSeries GG. Transform your
              gaming setup with powerful customizable displays and controls.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
              <motion.div whileHover="hover" variants={scaleVariants}>
                <Button
                  asChild
                  size="lg"
                  className="bg-orange-500 hover:bg-purple-600"
                >
                  <a href="https://github.com/mtricht/gamesense-essentials/releases/download/1.15.0/gamesense-essentials-1.15.0.msi">
                    <Download className="mr-2 h-4 w-4" />
                    Download Latest
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover="hover" variants={scaleVariants}>
                <Button
                  asChild
                  className="bg-green-500 hover:bg-purple-600"
                  size="lg"
                >
                  <a href="https://github.com/mtricht/gamesense-essentials">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                whileHover="hover"
                variants={scaleVariants}
              >
                <Card className="bg-background/50 border-border dark:bg-gray-800/50 dark:border-gray-700 hover:bg-muted/70 transition-colors h-full">
                  <CardHeader>
                    <feature.icon className="h-12 w-12 text-orange-500 mb-4" />
                    <CardTitle className="text-foreground dark:text-white">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground dark:text-gray-300">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Installation & Compatibility Section */}
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto">
            <Card className="bg-background/50 border-border dark:bg-gray-800/50 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-foreground dark:text-white">
                  Installation & Compatibility:
                </CardTitle>
                <CardDescription className="text-muted-foreground dark:text-gray-300">
                  Get started with GameSense Essentials in minutes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert className="bg-background/80 border-orange-500 dark:bg-gray-900">
                  <Terminal className="h-4 w-4 stroke-current" />
                  <AlertTitle className="text-foreground dark:text-white">
                    System Requirements
                  </AlertTitle>
                  <AlertDescription className="text-muted-foreground dark:text-gray-300">
                    Requires Windows and SteelSeries GG with GameSense™ enabled
                  </AlertDescription>
                </Alert>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground dark:text-white">
                    Supported Applications
                  </h3>
                  <Accordion type="single" collapsible className="w-full">
                    {supportedApps.map((app, index) => (
                      <AccordionItem key={app.name} value={`item-${index}`}>
                        <AccordionTrigger
                          className="text-foreground hover:text-orange-500 dark:text-white"
                          onClick={() => handleAppSelect(app.name)}
                        >
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            {app.name}
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground dark:text-gray-300">
                          <div className="space-y-2">
                            <p>{app.description}</p>
                            <Button
                              asChild
                              variant="link"
                              className="text-orange-400 p-0"
                            >
                              <a
                                href={app.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                              >
                                Learn More <ExternalLink className="h-3 w-3" />
                              </a>
                            </Button>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Run on Windows Startup */}
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto pt-4">
            <Card className="bg-background/50 border-border dark:bg-gray-800/50 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-foreground dark:text-white">
                  Run on windows startup
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground dark:text-gray-300">
                  To run after boot, create a shortcut to gamesense-essentials
                  inside the &quot;Startup&quot; folder. Follow this{" "}
                  <Link
                    href="https://www.howtogeek.com/208224/how-to-add-a-program-to-startup-in-windows/"
                    className="text-green-600"
                  >
                    tutorial
                  </Link>{" "}
                  if you&apos;re having trouble.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          {/* Demo Video */}
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto pt-4">
            <Card className="bg-background/50 border-border dark:bg-gray-800/50 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-foreground dark:text-white underline">
                  Demo Video:
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground dark:text-gray-300 flex justify-center items-center">
                  <video controls width="500">
                    <source src="/DemoVideo.mp4" type="video/mp4" />
                    Your browser does not support the video tag. Check the repo
                    instead.
                  </video>
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          {/* Footer */}
          <footer className="bg-muted dark:bg-gray-900 text-muted-foreground dark:text-gray-400 py-8 mt-12 text-center mx-auto">
            <div className="flex justify-center gap-6 items-center mb-4">
              <span className="text-foreground dark:text-white text-sm font-light max-w-3xl mx-auto p-4">
                Created by <span className="font-semibold">Jabril</span>. I only
                wanted to improve the original page. All credit to the original
                developer. I added his details at the top. 😀
              </span>
            </div>
            <div className="flex justify-center gap-6 items-center mt-4">
              <a
                href="mailto:your-email@example.com"
                className="text-foreground dark:text-white hover:text-orange-500"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/jabril-mahamud/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground dark:text-white hover:text-orange-500"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            <p className="mt-4 text-sm font-light text-muted-foreground dark:text-gray-300">
              <a
                href="https://github.com/mtricht/gamesense-essentials"
                className="text-orange-500 hover:underline"
              >
                Check out the GitHub repository
              </a>
            </p>
          </footer>
        </motion.div>
      </div>
    </div>
  );
}