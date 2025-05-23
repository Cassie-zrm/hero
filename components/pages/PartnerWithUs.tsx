import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { Card, CardBody, Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import { CTASection } from '../components/CTASection';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const PartnerWithUs = () => {
  // Investor value props
  const investorValueProps = [
    {
      title: "Secured Lending",
      description: "All loans backed by first mortgages over Australian real estate.",
      icon: "lucide:shield"
    },
    {
      title: "Regular Income",
      description: "Attractive monthly or quarterly returns with fixed income characteristics.",
      icon: "lucide:calendar"
    },
    {
      title: "Co-Investment Model",
      description: "Tenstar aligns interest by investing alongside capital partners.",
      icon: "lucide:handshake"
    },
    {
      title: "Full Transparency",
      description: "Live reporting, direct access to loan-level data and borrower due diligence.",
      icon: "lucide:eye"
    }
  ];

  // Investment process steps
  const investmentProcessSteps = [
    {
      title: "Register Interest",
      description: "Submit your investor profile through our secure portal.",
      icon: "lucide:user-plus"
    },
    {
      title: "KYC & Onboarding",
      description: "We conduct AML/CTF checks and establish your account.",
      icon: "lucide:shield-check"
    },
    {
      title: "Access Deal Room",
      description: "Review current opportunities, IMs and loan terms.",
      icon: "lucide:folder-open"
    },
    {
      title: "Invest & Monitor",
      description: "Receive legal documents, fund your investment and track performance.",
      icon: "lucide:bar-chart-2"
    }
  ];

  // Reporting features
  const reportingFeatures = [
    {
      title: "Monthly Statements",
      description: "Detailed capital and interest payment reports.",
      icon: "lucide:file-text"
    },
    {
      title: "Loan Book Overview",
      description: "Complete visibility of the entire portfolio.",
      icon: "lucide:book-open"
    },
    {
      title: "Project Status Updates",
      description: "Regular progress reports on funded projects.",
      icon: "lucide:activity"
    },
    {
      title: "Due Diligence Access",
      description: "Full access to borrower documentation, valuations, and legal reports.",
      icon: "lucide:search"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection 
        title="A Transparent Gateway for Our Investors"
        subtitle="Access exclusive opportunities in Australian real estate credit, backed by secured lending and disciplined risk control."
        backgroundImage="https://img.heroui.chat/image/places?w=1920&h=1080&u=sydney-opera-house-cityscape"
      />

      {/* Investor Value Props Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">Why Invest with Tenstar</h2>
            <p className="section-subtitle mx-auto">
              Our investment approach is designed to deliver consistent returns with strong risk management.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {investorValueProps.map((prop, index) => (
              <motion.div 
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full" radius="sm" shadow="sm">
                  <CardBody className="p-6">
                    <div className="mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon icon={prop.icon} className="text-2xl text-primary" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{prop.title}</h3>
                    <p className="text-foreground-600 text-sm">{prop.description}</p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};