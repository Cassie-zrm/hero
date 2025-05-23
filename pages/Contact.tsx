import React from 'react';
import { Card, CardBody, Input, Textarea, Button, Select, SelectItem } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

export const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    enquiryType: '',
    message: ''
  });

  const handleChange = (key: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for your message. We will get back to you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      enquiryType: '',
      message: ''
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h1>
            <p className="text-lg md:text-xl text-gray-200">
              Whether you're an investor, borrower, or industry partner — we're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card radius="sm" shadow="sm">
                <CardBody className="p-8">
                  <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <Input
                      label="Full Name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onValueChange={handleChange('name')}
                      isRequired
                    />
                    
                    <Input
                      label="Email Address"
                      placeholder="Enter your email"
                      type="email"
                      value={formData.email}
                      onValueChange={handleChange('email')}
                      isRequired
                    />
                    
                    <Input
                      label="Phone Number (optional)"
                      placeholder="Enter your phone number"
                      type="tel"
                      value={formData.phone}
                      onValueChange={handleChange('phone')}
                    />
                    
                    <Select
                      label="Enquiry Type"
                      placeholder="Select an enquiry type"
                      value={formData.enquiryType}
                      onChange={(e) => handleChange('enquiryType')(e.target.value)}
                      isRequired
                    >
                      <SelectItem key="investment" value="Investment Opportunity">Investment Opportunity</SelectItem>
                      <SelectItem key="loan" value="Loan Request">Loan Request</SelectItem>
                      <SelectItem key="partnership" value="Partnership">Partnership</SelectItem>
                      <SelectItem key="media" value="Media / PR">Media / PR</SelectItem>
                      <SelectItem key="other" value="Other">Other</SelectItem>
                    </Select>
                    
                    <Textarea
                      label="Message"
                      placeholder="How can we help you?"
                      value={formData.message}
                      onValueChange={handleChange('message')}
                      minRows={4}
                      isRequired
                    />
                    
                    <Button
                      type="submit"
                      color="primary"
                      radius="sm"
                      className="w-full"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardBody>
              </Card>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-semibold mb-6">Tenstar Finance – Head Office</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Icon icon="lucide:map-pin" className="text-primary mt-1 mr-3" />
                    <p>Level 12, 123 Example Street, Sydney NSW 2000</p>
                  </div>
                  
                  <div className="flex items-center">
                    <Icon icon="lucide:phone" className="text-primary mr-3" />
                    <p>+61 2 8000 1234</p>
                  </div>
                  
                  <div className="flex items-center">
                    <Icon icon="lucide:mail" className="text-primary mr-3" />
                    <p>hello@tenstarfinance.com.au</p>
                  </div>
                  
                  <div className="flex items-center">
                    <Icon icon="lucide:clock" className="text-primary mr-3" />
                    <p>Mon – Fri | 9:00am – 5:30pm (AEST)</p>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="h-64 bg-gray-200 rounded-lg relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Icon icon="lucide:map" className="text-4xl text-gray-400 mb-2" />
                    <p className="text-gray-600">Google Map location</p>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground-500 hover:text-primary">
                    <Icon icon="logos:linkedin-icon" className="text-2xl" />
                  </a>
                </div>
              </div>
              
              {/* Legal Info */}
              <div className="pt-4 border-t border-divider">
                <p className="text-sm text-foreground-500">
                  ABN: 12 345 678 901 | AFSL: 123456
                </p>
                <div className="flex mt-2 space-x-4">
                  <a href="#" className="text-sm text-foreground-500 hover:text-primary">Terms & Conditions</a>
                  <a href="#" className="text-sm text-foreground-500 hover:text-primary">Privacy Policy</a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};