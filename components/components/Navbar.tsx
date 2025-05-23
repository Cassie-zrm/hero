import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar as HeroNavbar, NavbarBrand, NavbarContent, NavbarItem, Button, Link as HeroLink } from '@heroui/react';
import { Icon } from '@iconify/react';

export const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <HeroNavbar maxWidth="xl" className="bg-white border-b border-divider">
      <NavbarBrand>
        <Link to="/" className="flex items-center">
          <div className="flex items-center">
            <div className="bg-primary p-1 rounded">
              <Icon icon="lucide:check-square" className="text-white text-xl" />
            </div>
            <span className="ml-2 text-xl font-semibold text-primary">tenstar</span>
          </div>
        </Link>
      </NavbarBrand>
      
      <NavbarContent className="hidden md:flex gap-6" justify="center">
        <NavbarItem isActive={isActive('/')}>
          <Link to="/" className={`text-sm font-medium ${isActive('/') ? 'text-primary' : 'text-foreground-600'}`}>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={isActive('/about')}>
          <Link to="/about" className={`text-sm font-medium ${isActive('/about') ? 'text-primary' : 'text-foreground-600'}`}>
            About
          </Link>
        </NavbarItem>
        <NavbarItem isActive={isActive('/lending-solutions')}>
          <Link to="/lending-solutions" className={`text-sm font-medium ${isActive('/lending-solutions') ? 'text-primary' : 'text-foreground-600'}`}>
            Lending Solutions
          </Link>
        </NavbarItem>
        <NavbarItem isActive={isActive('/track-record')}>
          <Link to="/track-record" className={`text-sm font-medium ${isActive('/track-record') ? 'text-primary' : 'text-foreground-600'}`}>
            Track Record
          </Link>
        </NavbarItem>
        <NavbarItem isActive={isActive('/partner-with-us')}>
          <Link to="/partner-with-us" className={`text-sm font-medium ${isActive('/partner-with-us') ? 'text-primary' : 'text-foreground-600'}`}>
            Partner With Us
          </Link>
        </NavbarItem>
        <NavbarItem isActive={isActive('/contact')}>
          <Link to="/contact" className={`text-sm font-medium ${isActive('/contact') ? 'text-primary' : 'text-foreground-600'}`}>
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      
      <NavbarContent justify="end">
        <NavbarItem>
          <Button 
            as={Link} 
            to="/contact" 
            color="primary" 
            variant="solid" 
            className="font-medium"
            radius="sm"
          >
            Schedule a Call
          </Button>
        </NavbarItem>
      </NavbarContent>
    </HeroNavbar>
  );
};