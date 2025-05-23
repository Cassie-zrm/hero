import React from 'react';
import { Button } from '@heroui/react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  lightBackground?: boolean;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  secondaryButtonText,
  secondaryButtonLink,
  lightBackground = false
}) => {
  return (
    <section className={`py-16 ${lightBackground ? 'bg-content2' : 'bg-primary'}`}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={`text-3xl md:text-4xl font-semibold mb-4 ${lightBackground ? 'text-primary' : 'text-white'}`}>
            {title}
          </h2>
          <p className={`text-lg mb-8 ${lightBackground ? 'text-foreground-600' : 'text-gray-200'}`}>
            {subtitle}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              as={Link}
              to={buttonLink}
              color={lightBackground ? "primary" : "default"}
              variant={lightBackground ? "solid" : "bordered"}
              radius="sm"
              className={`font-medium ${!lightBackground && 'bg-transparent text-white border-white'}`}
            >
              {buttonText}
            </Button>
            
            {secondaryButtonText && secondaryButtonLink && (
              <Button
                as={Link}
                to={secondaryButtonLink}
                color={lightBackground ? "default" : "primary"}
                variant={lightBackground ? "bordered" : "solid"}
                radius="sm"
                className="font-medium"
              >
                {secondaryButtonText}
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};