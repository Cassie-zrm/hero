import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { Card, CardBody, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import { CTASection } from '../components/CTASection';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const LendingSolutions = () => {
  // Loan products data
  const loanProducts = [
    {
      title: "Bridge Loans",
      details: [
        { label: "Term", value: "3–6 months" },
        { label: "Loan Size", value: "AUD 1M – 10M" },
        { label: "Security", value: "First Mortgage" },
        { label: "Use Cases", value: "Site acquisition, refinance, pre-construction capital" },
        { label: "LVR", value: "Up to 65%" },
        { label: "Turnaround", value: "Indicative term sheet in 48 hours" },
        { label: "Target Borrowers", value: "Developers, asset owners facing timing gaps" }
      ],
      icon: "lucide:clock"
    },
    {
      title: "Construction Loans",
      details: [
        { label: "Stage", value: "DA-approved or shovel-ready projects" },
        { label: "Loan Size", value: "AUD 2M – 30M" },
        { label: "Structure", value: "Progressive drawdowns with QS oversight" },
        { label: "LTC", value: "Up to 70%" },
        { label: "Duration", value: "6–24 months" },
        { label: "Target Borrowers", value: "Developers with experience and equity stake" },
        { label: "Notes", value: "Prefer metro Sydney or tier-one suburban corridors" }
      ],
      icon: "lucide:building"
    },
    {
      title: "Large Commercial Loans",
      details: [
        { label: "Loan Size", value: "AUD 10M+" },
        { label: "Borrower Type", value: "Institutional, REITs, multi-asset developers" },
        { label: "Purpose", value: "Site refinance, project recapitalisation, acquisition bridge" },
        { label: "Structure", value: "Syndicated or bilateral; open to preferred equity layers" },
        { label: "Features", value: "Bespoke term sheets, co-investment from Tenstar optional" },
        { label: "Governance", value: "Managed via SPVs with full investor visibility" }
      ],
      icon: "lucide:landmark"
    }
  ];

  // Lending process steps
  const lendingProcessSteps = [
    {
      title: "Initial Inquiry",
      description: "We receive a brief project summary including loan purpose, asset details, and borrower profile.",
      icon: "lucide:file-question"
    },
    {
      title: "Indicative Term Sheet",
      description: "An initial offer is issued within 48–72 hours, outlining proposed terms, conditions, and next steps.",
      icon: "lucide:file-text"
    },
    {
      title: "Due Diligence & Valuation",
      description: "We conduct legal review, valuation, background checks on the builder/developer, and quantity surveyor (QS) assessment where required.",
      icon: "lucide:search"
    },
    {
      title: "Funding & Settlement",
      description: "Upon satisfactory due diligence, funds are deployed and settlement is completed. Ongoing loan monitoring ensures adherence to milestones and covenants.",
      icon: "lucide:check-circle"
    }
  ];

  // Product comparison data
  const productComparisonData = [
    { 
      type: "Bridge Loans", 
      term: "3–6 months", 
      loanSize: "$1M–$10M", 
      security: "First Mortgage", 
      lvrLtc: "Up to 65%", 
      idealBorrower: "Time-sensitive needs" 
    },
    { 
      type: "Construction Loans", 
      term: "6–24 months", 
      loanSize: "$2M–$30M", 
      security: "First Mortgage", 
      lvrLtc: "Up to 70% LTC", 
      idealBorrower: "DA-approved projects" 
    },
    { 
      type: "Commercial Loans", 
      term: "12–36 months", 
      loanSize: "$10M+", 
      security: "Flexible", 
      lvrLtc: "Case-by-case", 
      idealBorrower: "Institutions / REITs" 
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection 
        title="Strategic Credit Solutions Backed by Real Assets"
        subtitle="We structure and manage real estate credit products tailored to time-sensitive, asset-secured transactions."
        backgroundImage="https://img.heroui.chat/image/places?w=1920&h=1080&u=sydney-opera-house-aerial"
      />

      {/* Loan Products Overview Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">Loan Products Overview</h2>
            <p className="section-subtitle mx-auto">
              Our lending solutions are designed to meet the specific needs of real estate developers and investors.
            </p>
          </motion.div>
          
          <div className="space-y-12">
            {loanProducts.map((product, index) => (
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
                      <div className="w-full md:w-1/3 bg-primary p-8 text-white flex flex-col justify-center">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                            <Icon icon={product.icon} className="text-2xl text-white" />
                          </div>
                          <h3 className="text-2xl font-semibold">{product.title}</h3>
                        </div>
                        <p className="text-gray-200">
                          {product.title === "Bridge Loans" && "Short-term financing for time-sensitive opportunities."}
                          {product.title === "Construction Loans" && "Funding for development projects with structured drawdowns."}
                          {product.title === "Large Commercial Loans" && "Substantial financing for institutional-grade borrowers."}
                        </p>
                      </div>
                      <div className="w-full md:w-2/3 p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {product.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="mb-3">
                              <p className="text-sm text-foreground-500 mb-1">{detail.label}</p>
                              <p className="font-medium">{detail.value}</p>
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

      {/* Product Comparison Table Section */}
      <section className="py-16 md:py-24 bg-content2">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">Loan Product Comparison</h2>
            <p className="section-subtitle mx-auto">
              Compare our loan products to find the solution that best fits your needs.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card radius="sm" shadow="sm">
              <CardBody className="p-0">
                <Table removeWrapper aria-label="Loan product comparison table">
                  <TableHeader>
                    <TableColumn>PRODUCT TYPE</TableColumn>
                    <TableColumn>TERM</TableColumn>
                    <TableColumn>LOAN SIZE</TableColumn>
                    <TableColumn>SECURITY</TableColumn>
                    <TableColumn>LVR / LTC</TableColumn>
                    <TableColumn>IDEAL BORROWER</TableColumn>
                  </TableHeader>
                  <TableBody>
                    {productComparisonData.map((product, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{product.type}</TableCell>
                        <TableCell>{product.term}</TableCell>
                        <TableCell>{product.loanSize}</TableCell>
                        <TableCell>{product.security}</TableCell>
                        <TableCell>{product.lvrLtc}</TableCell>
                        <TableCell>{product.idealBorrower}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardBody>
            </Card>
            <p className="text-sm text-foreground-500 mt-4 text-center">
              All loans are subject to credit assessment and due diligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lending Process Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">Our Lending Process</h2>
            <p className="section-subtitle mx-auto">
              Our streamlined process enables timely execution while maintaining strong credit discipline.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            {lendingProcessSteps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex mb-12 relative"
              >
                {/* Step number circle */}
                <div className="mr-6 relative">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-semibold">
                    {index + 1}
                  </div>
                  {/* Vertical line connecting steps */}
                  {index < lendingProcessSteps.length - 1 && (
                    <div className="absolute top-12 left-1/2 w-0.5 h-16 bg-gray-200 -translate-x-1/2"></div>
                  )}
                </div>
                
                {/* Step content */}
                <div className="flex-1 pt-1">
                  <div className="flex items-center mb-2">
                    <Icon icon={step.icon} className="text-xl text-primary mr-2" />
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-foreground-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Co-Lending Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Institutional Co-Lending</h2>
            <p className="text-lg mb-8">
              We invite professional and institutional funders to co-lend on a deal-by-deal basis or through forward commitment structures. SPV-based governance, reporting tools, and transparency are at the core of our model.
            </p>
            <Button
              as={Link}
              to="/partner-with-us"
              color="default"
              variant="bordered"
              radius="sm"
              className="font-medium bg-transparent text-white border-white"
            >
              Request Institutional Deck
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Need fast, flexible capital secured by real assets?"
        subtitle="Let's structure a deal that works."
        buttonText="Submit a Loan Request"
        buttonLink="/contact"
        secondaryButtonText="Talk to a Specialist"
        secondaryButtonLink="/contact"
        lightBackground={true}
      />
    </div>
  );
};