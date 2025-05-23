import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { ServiceCard } from '../components/ServiceCard';
import { LoanProductCard } from '../components/LoanProductCard';
import { FeatureSection } from '../components/FeatureSection';
import { CTASection } from '../components/CTASection';

export const Home = () => {
  // Client types data
  const clientTypes = [
    {
      title: "Real Estate Developers",
      description: "Short-term capital to move fast and meet critical timelines.",
      icon: "lucide:building-2"
    },
    {
      title: "Private Credit Funds",
      description: "Co-investment and delegated origination via secure SPVs.",
      icon: "lucide:briefcase"
    },
    {
      title: "Family Offices",
      description: "Stable income with first-mortgage security.",
      icon: "lucide:home"
    },
    {
      title: "Institutional Investors",
      description: "Custom mandates and scalable deal flow.",
      icon: "lucide:landmark"
    }
  ];

  // Lending solutions data
  const lendingSolutions = [
    {
      title: "Bridge Lending",
      description: "Short-term financing solutions for time-sensitive opportunities.",
      features: [
        "Term: 3–6 months",
        "Security: First Mortgage",
        "Purpose: Acquisition, Refinance, or Interim Funding"
      ],
      link: "/lending-solutions"
    },
    {
      title: "Construction Loans",
      description: "Funding for development projects with structured drawdowns.",
      features: [
        "For DA-approved or shovel-ready projects",
        "Progressive drawdowns with site oversight",
        "Loan-to-Cost (LTC) up to 70%"
      ],
      link: "/lending-solutions"
    },
    {
      title: "Large Commercial Lending",
      description: "Substantial financing for institutional-grade borrowers.",
      features: [
        "Loans AUD 10M+",
        "Institutional-grade borrowers",
        "Custom term sheets, multi-tranche possible"
      ],
      link: "/lending-solutions"
    }
  ];

  // Why Tenstar features
  const whyTenstarFeatures = [
    {
      title: "Experienced underwriting team",
      description: "Our team brings decades of combined experience in real estate credit assessment.",
      icon: "lucide:users"
    },
    {
      title: "Transparent risk tracking",
      description: "Full visibility into loan performance and risk metrics.",
      icon: "lucide:bar-chart-2"
    },
    {
      title: "Investor-aligned governance",
      description: "Our structure ensures alignment between all stakeholders.",
      icon: "lucide:shield"
    },
    {
      title: "Competitive time-to-funding",
      description: "Streamlined processes for faster capital deployment.",
      icon: "lucide:clock"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection 
        title="Asset-Backed Lending Solutions for the Real Economy"
        subtitle="Delivering strategic credit to developers and institutions with confidence and speed."
        primaryButtonText="Explore Lending Solutions"
        primaryButtonLink="/lending-solutions"
        secondaryButtonText="Contact Tenstar"
        secondaryButtonLink="/contact"
        backgroundImage="https://img.heroui.chat/image/places?w=1920&h=1080&u=sydney-opera-house-harbor"
      />

      {/* Who We Work With Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Who We Work With</h2>
            <p className="section-subtitle mx-auto">
              We provide tailored lending solutions to a diverse range of clients across the real estate sector.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clientTypes.map((client, index) => (
              <ServiceCard 
                key={index}
                title={client.title}
                description={client.description}
                icon={client.icon}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};