import React from 'react';
import { Card, CardBody } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  delay?: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <Card 
        className="card-hover h-full"
        radius="sm"
        shadow="sm"
      >
        <CardBody className="p-6">
          <div className="mb-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon icon={icon} className="text-2xl text-primary" />
            </div>
          </div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-foreground-600 text-sm">{description}</p>
        </CardBody>
      </Card>
    </motion.div>
  );
};