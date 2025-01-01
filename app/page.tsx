"use client";

import { useState } from "react";
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
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  {
    title: "Clock Display",
    description:
      "Real-time clock display on your OLED screen with customizable formats",
    icon: Clock,
  },
  {
    title: "Music Integration",
    description:
      "Seamless control for popular music services including Spotify, iTunes, and more",
    icon: Music,
  },
  {
    title: "Volume Control",
    description: "Intuitive system volume control with real-time OLED feedback",
    icon: Volume2,
  },
];

const supportedApps = [
  {
    name: "TIDAL",
    url: "https://tidal.com",
    description: "High-fidelity music streaming",
  },
  {
    name: "MusicBee",
    url: "https://getmusicbee.com",
    description: "Advanced music management and playback",
  },
  {
    name: "AIMP",
    url: "https://www.aimp.ru",
    description: "Lightweight audio player",
  },
  {
    name: "YouTube Music Desktop App (th-ch)",
    url: "https://github.com/th-ch/youtube-music",
    description: "An open source, cross-platform, unofficial YouTube Music Desktop App with built-in ad blocker and downloader",
  },
  {
    name: "YouTube Music Desktop App",
    url: "https://github.com/ytmdesktop/ytmdesktop",
    description: "Official YouTube Music desktop client",
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
  const [selectedApp, setSelectedApp] = useState<string | null>(null);

  const handleAppSelect = (appName: string) => {
    setSelectedApp(appName);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Hero Section */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Badge variant="secondary" className="text-sm">
                <Download className="mr-1 h-3 w-3" />
                v1.15.0
              </Badge>
            </div>
            <motion.h1
              className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600"
              whileHover={{ scale: 1.02 }}
            >
              GameSense Essentials
            </motion.h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
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
                <Button asChild className="bg-green-500 hover:bg-purple-600" size = "lg">
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
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover="hover"
                variants={scaleVariants}
              >
                <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors h-full">
                  <CardHeader>
                    <feature.icon className="h-12 w-12 text-orange-500 mb-4" />
                    <CardTitle className="text-white">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Installation & Compatibility Section */}
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">
                  Installation & Compatibility
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Get started with GameSense Essentials in minutes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert className="bg-gray-900 border-orange-500">
                  <Terminal className="h-4 w-4 stroke-white" />
                  <AlertTitle className="text-white">
                    System Requirements
                  </AlertTitle>
                  <AlertDescription className="text-gray-300">
                    Requires Windows and SteelSeries GG with GameSense™ enabled
                  </AlertDescription>
                </Alert>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">
                    Supported Applications
                  </h3>
                  <Accordion type="single" collapsible className="w-full">
                    {supportedApps.map((app, index) => (
                      <AccordionItem key={app.name} value={`item-${index}`}>
                        <AccordionTrigger
                          className="text-white hover:text-orange-500"
                          onClick={() => handleAppSelect(app.name)}
                        >
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            {app.name}
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300">
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

                            {/* Conditionally render the alert inside the dropdown */}
                            {app.name === "YouTube Music Desktop App (th-ch)" && selectedApp === app.name && (
                              <Alert className="bg-gray-900 border-yellow-500 mt-4">
                                <Terminal className="h-4 w-4 stroke-white" />
                                <AlertTitle className="text-white">API Configuration</AlertTitle>
                                <AlertDescription className="text-gray-300">
                                  For YouTube Music Desktop App integration, ensure the API
                                  server plugin is enabled and running on port{" "}
                                  <code className="bg-gray-800 px-1.5 py-0.5 rounded">
                                    26538
                                  </code>{" "}
                                  without authentication.
                                </AlertDescription>
                              </Alert>
                            )}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
