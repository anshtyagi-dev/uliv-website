import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ChevronRight,
  Zap,
  CheckCircle2,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
  Shield,
  Gauge,
  Award,
  Headphones,
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Products', id: 'products' },
    { label: 'Why Choose Us', id: 'why-us' },
    { label: 'Industries', id: 'industries' },
    { label: 'Contact', id: 'contact' },
  ];

  const products = [
    { title: 'USM08 - 0.5HP', image: '/1.jpg' },
    { title: 'USM13 - 1.0HP', image: '/2.jpg' },
    { title: 'USM15 - 1.5HP', image: '/3.jpg' },
    { title: 'USM17 - 1.5HP', image: '/4.jpg' },
    { title: 'USM18 - 1.5HP', image: '/5.jpg' },
    { title: 'USW12 - 1.0HP', image: '/6.jpg' },
    { title: 'USW13 - 1.0HP', image: '/7.jpg' },
    { title: 'USW16 - 1.5HP', image: '/8.jpg' },
    { title: 'USM07+ 0.5HP', image: '/9.jpg' },
    { title: 'USM12+ 1.0HP', image: '/10.jpg' },
    { title: 'UCM08 - 0.5HP', image: '/11.jpg' },
    { title: 'UCM13 - 1.0HP', image: '/12.jpg' },
    { title: 'UCM17 - 1.5HP', image: '/13.jpg' },
    { title: 'Multistage Pressure Booster Pump', image: '/14.jpg' },
    { title: 'Drainage/Sewage Pump', image: '/15.jpg' },
    { title: 'Bore Well Submersible Pump', image: '/16.jpg' },
    { title: 'Control Panel', image: '/17.jpg' },
    { title: 'UOW08 - 0.5HP', image: '/18.jpg' },
    { title: 'UOW13 - 1.0HP', image: '/19.jpg' },
    { title: 'UOW17 - 1.5HP', image: '/20.jpg' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-lg border-b border-uliv-light-gray'
            : 'bg-white border-b border-uliv-light-gray'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('hero')}
              className="flex-shrink-0 flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="bg-uliv-red rounded-lg px-3 py-2">
                <img
                  src="/Uliv_Logo.jpg"
                  alt="ULiv Water Pumps - Home"
                  className="h-10 w-auto"
                />
              </div>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-semibold transition-colors ${
                    activeSection === item.id
                      ? 'text-uliv-red'
                      : 'text-uliv-navy hover:text-uliv-red'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-2 bg-uliv-red text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
              >
                Get in Touch
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-uliv-navy" />
              ) : (
                <Menu className="w-6 h-6 text-uliv-navy" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-uliv-light-gray py-4 bg-white">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-uliv-navy hover:text-uliv-red font-semibold transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full px-4 py-2 bg-uliv-red text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
                >
                  Get in Touch
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 bg-uliv-navy relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-uliv-blue rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-white animate-fadeInUp">
              <div className="inline-block mb-4 px-4 py-2 bg-uliv-red bg-opacity-20 rounded-full border border-uliv-red border-opacity-50">
                <span className="text-uliv-red text-sm font-semibold">
                  Trusted by Lakhs
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
                ULiv Water Pumps for Reliable and Efficient Performance
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Maximum efficiency that satisfies need of every customer in various range of applications
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 bg-uliv-red text-white rounded-lg font-semibold hover:bg-red-700 transition-all hover:shadow-lg hover:shadow-uliv-red/50 flex items-center justify-center gap-2 group"
                >
                  Contact Us
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollToSection('products')}
                  className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-uliv-navy transition-all"
                >
                  Explore Products
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="animate-slideInRight flex items-center justify-center">
              <div className="relative w-full">
                {/* Deep blue radial glow behind pump */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse 70% 60% at 55% 55%, rgba(37,99,235,0.28) 0%, rgba(29,78,216,0.12) 50%, transparent 80%)',
                  }}
                />

                {/* Ground reflection streak */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-blue-400/20 blur-2xl rounded-full pointer-events-none"></div>

                <img
                  src="/ChatGPT_Image_Jun_13,_2026,_08_57_35_PM.png"
                  alt="ULiv Water Pump"
                  className="relative w-full object-contain"
                  style={{
                    filter: 'drop-shadow(0 8px 32px rgba(37,99,235,0.5)) drop-shadow(0 2px 8px rgba(0,0,0,0.4)) brightness(1.04) contrast(1.04) saturate(1.1)',
                    maxHeight: '520px',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-uliv-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: 'Years of Experience', value: '13+' },
              { label: 'Dealers & Distributors', value: '500+' },
              { label: 'Satisfied Customers', value: '5 Lakh+' },
              { label: 'Quality Assured', value: 'ISO Certified' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow border-t-4 border-uliv-red"
              >
                <div className="text-4xl font-display font-bold text-uliv-red mb-2">
                  {stat.value}
                </div>
                <p className="text-uliv-navy font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="text-4xl font-display font-bold text-center mb-12 text-uliv-navy">
              About ULiv Water Pumps
            </h2>
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm border border-uliv-light-gray">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                With 13 years of industry expertise, ULiv Water Pumps has established itself as
                a trusted name in water pump solutions. We specialize in delivering high-quality,
                durable pumps for both residential and agricultural sectors.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div>
                  <h3 className="font-semibold text-uliv-navy mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-uliv-red" />
                    Quality Assurance
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Every pump undergoes rigorous testing to ensure peak performance and durability
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-uliv-navy mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-uliv-red" />
                    Customer Support
                  </h3>
                  <p className="text-gray-600 text-sm">
                    24/7 technical support and after-sales service for your peace of mind
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-uliv-navy mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-uliv-red" />
                    Reliability
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Built with trusted engineering, durable performance, and long-lasting reliability
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-uliv-navy mb-4">
              Our Product Range
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive water pump solutions tailored to your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-uliv-light-gray border-t-4 border-t-uliv-red group"
              >
                <div className="h-52 bg-white flex items-center justify-center p-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="px-5 py-4 border-t border-uliv-light-gray bg-white">
                  <h3 className="text-sm font-display font-bold text-uliv-navy text-center leading-snug">
                    {product.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 bg-uliv-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-uliv-navy mb-4">
              Why Choose ULiv?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Industry-leading expertise and unwavering commitment to quality
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Durable Products',
                description:
                  'Built to last with premium materials and rigorous quality testing standards',
              },
              {
                icon: Zap,
                title: 'Energy Efficient',
                description:
                  'Advanced technology reduces power consumption and operating costs significantly',
              },
              {
                icon: Gauge,
                title: 'High Suction Capacity',
                description:
                  'Powerful suction performance designed for efficient water flow across demanding applications',
              },
              {
                icon: Headphones,
                title: 'Easy Maintenance',
                description:
                  'Designed for hassle-free operation with low maintenance and long-lasting performance',
              },
              {
                icon: Award,
                title: 'Trusted Quality',
                description:
                  'Proven reliability with satisfied customers across residential and agricultural sectors',
              },
              {
                icon: Gauge,
                title: 'Affordable Pricing',
                description:
                  'Premium quality at competitive prices with flexible payment options available',
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-white hover:border-uliv-red"
                >
                  <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-uliv-red" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-uliv-navy mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-uliv-navy mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions across diverse sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Agriculture',
                description:
                  'Irrigation systems, crop watering, and farm water management solutions',
                image: '/25.jpeg',
              },
              {
                title: 'Residential',
                description:
                  'Home water supply, groundwater extraction, and household water needs',
                image: '/27.jpeg',
              },
            ].map((industry, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer border-t-4 border-uliv-red"
              >
                <div className="relative h-64 overflow-hidden bg-gray-200">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-uliv-navy via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8 bg-white">
                  <h3 className="text-2xl font-display font-bold text-uliv-navy mb-2">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Request Quote */}
      <section className="py-16 bg-uliv-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold text-white mb-4">
            Ready to Upgrade Your Water Solution?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a personalized quote from our experts today
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-10 py-4 bg-uliv-red text-white rounded-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center gap-2 group shadow-lg hover:shadow-xl"
          >
            Request a Quote
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-uliv-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-uliv-navy mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions? Our team is ready to help you find the perfect solution
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Phone,
                label: 'Phone',
                value: '+91 8588868944',
                action: 'tel:+918588868944',
              },
              {
                icon: Mail,
                label: 'Email',
                value: 'customercare@ulivgroup.com',
                action: 'mailto:customercare@ulivgroup.com',
              },
              {
                icon: MapPin,
                label: 'Address',
                value: '1/3107, Ram Nagar, Shahdara, Delhi - 110032',
                action: '#',
              },
            ].map((contact, index) => {
              const Icon = contact.icon;
              return (
                <a
                  key={index}
                  href={contact.action}
                  className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all border border-white border-t-4 border-t-uliv-red text-center group"
                >
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-uliv-red transition-colors">
                    <Icon className="w-8 h-8 text-uliv-red group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-uliv-navy mb-2">{contact.label}</h3>
                  <p className="text-gray-600 hover:text-uliv-red transition-colors font-medium">
                    {contact.value}
                  </p>
                </a>
              );
            })}
          </div>

          {/* WhatsApp CTA */}
          <div className="text-center">
            <p className="text-gray-600 mb-4">Quick Support Available on WhatsApp</p>
            <a
              href="https://wa.me/918588868944"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-uliv-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="bg-uliv-red rounded-lg px-3 py-2 mb-4 w-fit">
                <img
                  src="/Uliv_Logo.jpg"
                  alt="ULiv Water Pumps"
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Delivering premium water pump solutions for 13+ years.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-gray-300 hover:text-uliv-red transition-colors text-sm"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a
                    href="tel:+918588868944"
                    className="hover:text-uliv-red transition-colors"
                  >
                    +91 8588868944
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a
                    href="mailto:customercare@ulivgroup.com"
                    className="hover:text-uliv-red transition-colors"
                  >
                    customercare@ulivgroup.com
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5" />
                  <span>1/3107, Ram Nagar, Shahdara, Delhi - 110032</span>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-uliv-red transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-uliv-red transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-uliv-red transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 pt-8 mt-8">
            <div className="grid md:grid-cols-2 gap-4 text-center md:text-left">
              <p className="text-gray-300 text-sm">
                © 2024 ULiv Water Pumps. All rights reserved.
              </p>
              <div className="flex gap-6 justify-center md:justify-end text-sm text-gray-300">
                <a href="#" className="hover:text-uliv-red transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-uliv-red transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;