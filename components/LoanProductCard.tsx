import React from 'react';
import { Card, CardBody, CardFooter, Button } from '@heroui/react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface LoanProductCardProps {
  title: string;
  description: string;
  features: string[];
  link: string;
  delay?: number;
}

export const LoanProductCard: React.FC<LoanProductCardProps> = ({ 
  title, 
  description, 
  features, 
  link,
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="h-full"
    >
      <Card className="card-hover h-full" radius="sm" shadow="sm">
        <CardBody className="p-6">
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-foreground-600 text-sm mb-6">{description}</p>
          
          <div className="space-y-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="mt-1 mr-3 text-primary">•</div>
                <p className="text-sm text-foreground-700">{feature}</p>
              </div>
            ))}
          </div>
        </CardBody>
        
        <CardFooter className="pt-0 pb-6 px-6">
          <Button 
            as={Link} 
            to={link}
            color="primary"
            variant="flat"
            radius="sm"
            className="w-full mt-4"
          >
            Learn More
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};