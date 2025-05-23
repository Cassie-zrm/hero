import React from 'react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

interface FeatureProps {
  title: string;
  description: string;
  icon: string;
}

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  features: FeatureProps[];
  darkBackground?: boolean;
}

export const FeatureSection: React.FC<FeatureSectionProps> = ({ 
  title, 
  subtitle, 
  features,
  darkBackground = false
}) => {
  return (
    <section className={`py-16 md:py-24 ${darkBackground ? 'bg-primary text-white' : 'bg-background'}`}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={`text-3xl md:text-4xl font-semibold mb-4 ${darkBackground ? 'text-white' : 'text-primary'}`}>
            {title}
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${darkBackground ? 'text-gray-200' : 'text-foreground-600'}`}>
            {subtitle}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${darkBackground ? 'bg-white/10' : 'bg-primary/10'}`}>
                <Icon 
                  icon={feature.icon} 
                  className={`text-3xl ${darkBackground ? 'text-white' : 'text-primary'}`} 
                />
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${darkBackground ? 'text-white' : 'text-foreground'}`}>
                {feature.title}
              </h3>
              <p className={`text-sm ${darkBackground ? 'text-gray-200' : 'text-foreground-600'}`}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};