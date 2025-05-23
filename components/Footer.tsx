import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

export const Footer = () => {
  return (
    <footer className="bg-content2 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="bg-primary p-1 rounded">
                <Icon icon="lucide:check-square" className="text-white text-xl" />
              </div>
              <span className="ml-2 text-xl font-semibold text-primary">tenstar</span>
            </div>
            <p className="text-sm text-foreground-500 mt-4">
              A real estate fund management company providing secured lending solutions.
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-foreground-500 hover:text-primary">Home</Link></li>
              <li><Link to="/about" className="text-sm text-foreground-500 hover:text-primary">About</Link></li>
              <li><Link to="/lending-solutions" className="text-sm text-foreground-500 hover:text-primary">Lending Solutions</Link></li>
              <li><Link to="/track-record" className="text-sm text-foreground-500 hover:text-primary">Track Record</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Icon icon="lucide:map-pin" className="text-primary mt-1 mr-2" />
                <span className="text-sm text-foreground-500">Level 12, 123 Example Street, Sydney NSW 2000</span>
              </li>
              <li className="flex items-center">
                <Icon icon="lucide:phone" className="text-primary mr-2" />
                <span className="text-sm text-foreground-500">+61 2 8000 1234</span>
              </li>
              <li className="flex items-center">
                <Icon icon="lucide:mail" className="text-primary mr-2" />
                <span className="text-sm text-foreground-500">hello@tenstarfinance.com.au</span>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground-500 hover:text-primary">
                <Icon icon="logos:linkedin-icon" className="text-xl" />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-xs text-foreground-400">© 2025 Tenstar Finance. All rights reserved.</p>
              <div className="flex mt-2 space-x-4">
                <Link to="/terms" className="text-xs text-foreground-400 hover:text-primary">Terms</Link>
                <Link to="/privacy" className="text-xs text-foreground-400 hover:text-primary">Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};