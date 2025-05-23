import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { Card, CardBody, Divider } from '@heroui/react';
import { Icon } from '@iconify/react';
import { CTASection } from '../components/CTASection';
import { motion } from 'framer-motion';

export const About = () => {
  // Mission values data
  const missionValues = [
    {
      title: "Capital Discipline",
      description: "We apply strict credit evaluation and manage risk conservatively.",
      icon: "lucide:shield"
    },
    {
      title: "Real Partnership",
      description: "We invest alongside clients and maintain long-term relationships.",
      icon: "lucide:handshake"
    },
    {
      title: "Speed with Integrity",
      description: "Our platform enables fast execution without compromising standards.",
      icon: "lucide:timer"
    }
  ];

  // Governance features
  const governanceFeatures = [
    {
      title: "SPV Model",
      description: "Clear legal separation for each investment",
      icon: "lucide:layers"
    },
    {
      title: "Third-Party Custodian",
      description: "Independent oversight of all transactions",
      icon: "lucide:lock"
    },
    {
      title: "Quarterly Reporting",
      description: "Regular, transparent performance updates",
      icon: "lucide:file-text"
    },
    {
      title: "Co-investment Disclosure",
      description: "Full transparency on internal capital commitments",
      icon: "lucide:eye"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection 
        title="A Real Estate Credit Platform Built on Trust and Execution"
        subtitle="We originate, manage, and co-invest in credit strategies backed by real property assets."
        backgroundImage="https://img.heroui.chat/image/places?w=1920&h=1080&u=sydney-opera-house-night"
      />

      {/* Company Overview Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-semibold mb-8 text-primary"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Company Overview
            </motion.h2>
            
            <motion.div 
              className="space-y-6 text-foreground-700"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p>
                Tenstar is a real estate fund management company that provides secured lending solutions to commercial borrowers and delivers consistent, risk-adjusted returns to its capital partners.
              </p>
              <p>
                We focus on first-mortgage lending to experienced developers and asset owners across Australia's major markets. Our investment approach is underpinned by disciplined underwriting, active risk management, and direct borrower engagement.
              </p>
              <p>
                For institutional and professional investors, Tenstar offers access to carefully selected lending opportunities, supported by transparency, strong governance, and a commitment to long-term capital alignment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};