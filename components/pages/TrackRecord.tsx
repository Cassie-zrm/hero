import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { Card, CardBody, Badge } from '@heroui/react';
import { Icon } from '@iconify/react';
import { CTASection } from '../components/CTASection';
import { motion } from 'framer-motion';

export const TrackRecord = () => {
  // Project data
  const projects = [
    {
      type: "Bridge Loan",
      location: "Chatswood, NSW",
      image: "https://img.heroui.chat/image/places?w=600&h=400&u=tenstar-project-1",
      details: {
        loanSize: "$4.2M",
        term: "4 months",
        security: "First mortgage over DA-approved townhouse site",
        useOfFunds: "Site acquisition prior to settlement",
        exit: "Settled via construction refinance",
        investorIrr: "11.2% p.a.",
        comment: "Fast execution within 5 business days."
      }
    },
    {
      type: "Construction Facility",
      location: "Bankstown, NSW",
      image: "https://img.heroui.chat/image/places?w=600&h=400&u=tenstar-project-2",
      details: {
        loanSize: "$11.5M",
        term: "18 months",
        security: "First mortgage + QS monitored drawdowns",
        project: "48-apartment residential build",
        ltc: "68%",
        coInvestment: "Yes",
        comment: "Syndicated with two family offices."
      }
    },
    {
      type: "Commercial Refinance",
      location: "Alexandria, NSW",
      image: "https://img.heroui.chat/image/places?w=600&h=400&u=tenstar-project-3",
      details: {
        loanSize: "$9.8M",
        term: "12 months",
        asset: "Mixed-use commercial property",
        purpose: "Business debt consolidation & residual equity release",
        borrower: "Local high-net-worth investor",
        exitStrategy: "Refinance via mainstream bank"
      }
    }
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "Tenstar moved fast, structured smart, and stayed responsive from day one. Will definitely work with them again.",
      author: "Borrower, Inner West project"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection 
        title="Real Capital, Real Execution"
        subtitle="Selected transactions led by the Tenstar team across bridge, construction and commercial real estate lending."
        backgroundImage="https://img.heroui.chat/image/places?w=1920&h=1080&u=sydney-opera-house-sunset"
      />

      {/* Project Highlights Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">Project Highlights</h2>
            <p className="section-subtitle mx-auto">
              A selection of recent transactions that showcase our lending capabilities and execution.
            </p>
          </motion.div>
          
          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden" radius="sm" shadow="sm">
                  <CardBody className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="w-full md:w-2/5 h-64 md:h-auto relative">
                        <img 
                          src={project.image} 
                          alt={`${project.type} in ${project.location}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge color="primary" variant="solid" className="text-xs">
                            ✓ COMPLETED
                          </Badge>
                        </div>
                      </div>
                      <div className="w-full md:w-3/5 p-8">
                        <div className="flex items-center mb-4">
                          <h3 className="text-2xl font-semibold">{project.type} – {project.location}</h3>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {Object.entries(project.details).map(([key, value], detailIndex) => (
                            <div key={detailIndex} className="mb-2">
                              <p className="text-sm text-foreground-500 mb-1">
                                {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                              </p>
                              <p className="font-medium">{value}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Map Section */}
      <section className="py-16 md:py-24 bg-content2">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">Project Locations</h2>
            <p className="section-subtitle mx-auto">
              Our lending portfolio spans across Sydney's key growth areas and established markets.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative w-full h-96 rounded-lg overflow-hidden"
          >
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <Icon icon="lucide:map" className="text-6xl text-gray-400 mb-4" />
                <p className="text-gray-600">Interactive map showing project locations in Sydney</p>
                <p className="text-sm text-gray-500 mt-2">Chatswood, Bankstown, Alexandria, and more</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      {testimonials.length > 0 && (
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="section-title">Client Testimonials</h2>
              <p className="section-subtitle mx-auto">
                Hear from our clients about their experience working with Tenstar.
              </p>
            </motion.div>
            
            <div className="max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-content2" radius="sm" shadow="sm">
                    <CardBody className="p-8">
                      <div className="flex justify-center mb-6">
                        <Icon icon="lucide:quote" className="text-4xl text-primary/30" />
                      </div>
                      <blockquote className="text-xl md:text-2xl text-center font-medium text-foreground mb-6">
                        "{testimonial.quote}"
                      </blockquote>
                      <p className="text-center text-foreground-600">— {testimonial.author}</p>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CTASection 
        title="Let's create the next success story together."
        subtitle="Partner with us for your next real estate project."
        buttonText="Submit a Deal"
        buttonLink="/contact"
        secondaryButtonText="Explore Investor Partnerships"
        secondaryButtonLink="/partner-with-us"
        darkBackground={true}
      />
    </div>
  );
};