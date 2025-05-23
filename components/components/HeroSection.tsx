import React from 'react';
import { Button } from '@heroui/react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  backgroundImage?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonLink = '/',
  secondaryButtonText,
  secondaryButtonLink = '/',
  backgroundImage = 'https://img.heroui.chat/image/places?w=1920&h=1080&u=sydney-opera-house'
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div 
      className="relative w-full py-24 md:py-32 lg:py-40 flex items-center overflow-hidden"
      style={{
        background: `linear-gradient(rgba(11, 28, 44, 0.75), rgba(11, 28, 44, 0.88)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'saturate(0.85) brightness(0.95)'
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
            variants={itemVariants}
          >
            {title}
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-light leading-relaxed"
            variants={itemVariants}
          >
            {subtitle}
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            variants={itemVariants}
          >
            {primaryButtonText && (
              <Button
                as={Link}
                to={primaryButtonLink}
                color="primary"
                variant="solid"
                radius="sm"
                className="font-medium px-8 py-6 text-sm"
              >
                {primaryButtonText}
              </Button>
            )}
            
            {secondaryButtonText && (
              <Button
                as={Link}
                to={secondaryButtonLink}
                color="default"
                variant="bordered"
                radius="sm"
                className="font-medium bg-transparent text-white border-white px-8 py-6 text-sm"
              >
                {secondaryButtonText}
              </Button>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};