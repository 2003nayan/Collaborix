"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, FileText, Sparkles, Globe, Mail, Phone, Atom, Crown, Star, Check, User, Lightbulb } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"
import { useState, useEffect } from "react";

export default function HeroPage() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [pricingOpen, setPricingOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Add scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>
        <div className="gradient-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>
      </div>

      {/* Header */}
      <header className="header glass-morphic fixed top-0 left-0 right-0 z-50 transition-all duration-500">
        <nav className="nav container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="nav__brand">
            <Link href="/" className="nav__logo flex items-center gap-3 text-decoration-none">
              <div className="logo-icon w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white text-xl relative overflow-hidden">
                <Atom className="w-6 h-6" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shine"></div>
              </div>
              <span className="logo-text text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Collaborix
              </span>
            </Link>
          </div>

          <div className={`nav__menu ${mobileMenuOpen ? 'active' : ''} hidden md:flex items-center gap-8`}>
            <ul className="nav__list flex gap-6 list-none">
              <li className="nav__item">
                <button
                  className={`nav__link relative px-4 py-2 rounded-xl transition-all duration-300 overflow-hidden ${activeNavItem === 'home' ? 'active' : ''}`}
                  onClick={() => setActiveNavItem('home')}
                >
                  <span className="relative z-10">Home</span>
                  <div className="nav__link-bg absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl opacity-0 transform scale-75 transition-all duration-300"></div>
                </button>
              </li>
              <li className="nav__item">
                <button
                  className={`nav__link relative px-4 py-2 rounded-xl transition-all duration-300 overflow-hidden ${activeNavItem === 'features' ? 'active' : ''}`}
                  onClick={() => { setFeaturesOpen(true); setActiveNavItem('features'); }}
                >
                  <span className="relative z-10">Features</span>
                  <div className="nav__link-bg absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl opacity-0 transform scale-75 transition-all duration-300"></div>
                </button>
              </li>
              <li className="nav__item">
                <button
                  className={`nav__link relative px-4 py-2 rounded-xl transition-all duration-300 overflow-hidden ${activeNavItem === 'about' ? 'active' : ''}`}
                  onClick={() => { setAboutOpen(true); setActiveNavItem('about'); }}
                >
                  <span className="relative z-10">About</span>
                  <div className="nav__link-bg absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl opacity-0 transform scale-75 transition-all duration-300"></div>
                </button>
              </li>
              <li className="nav__item">
                <button
                  className={`nav__link relative px-4 py-2 rounded-xl transition-all duration-300 overflow-hidden ${activeNavItem === 'pricing' ? 'active' : ''}`}
                  onClick={() => { setPricingOpen(true); setActiveNavItem('pricing'); }}
                >
                  <span className="relative z-10">Pricing</span>
                  <div className="nav__link-bg absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl opacity-0 transform scale-75 transition-all duration-300"></div>
                </button>
              </li>
              <li className="nav__item">
                <button
                  className={`nav__link relative px-4 py-2 rounded-xl transition-all duration-300 overflow-hidden ${activeNavItem === 'contact' ? 'active' : ''}`}
                  onClick={() => { setContactOpen(true); setActiveNavItem('contact'); }}
                >
                  <span className="relative z-10">Contact</span>
                  <div className="nav__link-bg absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl opacity-0 transform scale-75 transition-all duration-300"></div>
                </button>
              </li>
            </ul>
            <div className="nav__actions flex gap-3">
              <Link href="/playground">
                <button className="btn btn--ghost relative px-6 py-3 rounded-2xl font-semibold transition-all duration-300 overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 hover:transform hover:-translate-y-1">
                  <span className="relative z-10">Sign In</span>
                  <div className="btn__glow absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl opacity-0 transition-opacity duration-300"></div>
                </button>
              </Link>
              <Link href="/playground">
                <button className="btn btn--primary relative px-6 py-3 rounded-2xl font-semibold transition-all duration-300 overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/25">
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </span>
                  <div className="btn__glow absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl opacity-0 transition-opacity duration-300"></div>
                </button>
              </Link>
            </div>
          </div>

          <div className="nav__toggle md:hidden flex flex-col gap-1 cursor-pointer p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </nav>
      </header>

      <main className="main pt-20">
        {/* Hero Section */}
        <section className="hero min-h-screen flex items-center py-20">
          <div className="container mx-auto px-6">
            <div className="hero__content grid lg:grid-cols-2 gap-16 items-center">
              <div className="hero__text">
                <div className="hero__badge glass-morphic inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 bg-white/10 backdrop-blur-md border border-white/20 animate-bounce">
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                  <span>New: AI-Powered Collaboration</span>
                </div>
                <h1 className="hero__title text-5xl lg:text-7xl font-extrabold leading-tight mb-8">
                  <span className="text-reveal block">Transform Your Team&apos;s</span>
                  <span className="text-gradient bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent animate-pulse">
                    Collaboration
                  </span>
                </h1>
                <p className="hero__subtitle text-xl lg:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed mb-10 max-w-2xl">
                  Experience the next generation of document collaboration with real-time editing,
                  AI assistance, and seamless team workflows that feel like magic.
                </p>
                <div className="hero__actions flex flex-col sm:flex-row gap-4 mb-12">
                  <Link href="/playground">
                    <button className="btn btn--large relative px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/25 group">
                      <span className="relative z-10 flex items-center gap-3">
                        Start Free Trial
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <div className="btn__glow absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </Link>
                  <button
                    className="btn btn--large relative px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 hover:transform hover:-translate-y-1"
                    onClick={() => setFeaturesOpen(true)}
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      Explore Features
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </button>
                </div>
                <div className="hero__stats flex flex-wrap gap-6">
                  <div className="stat glass-morphic p-4 rounded-2xl text-center min-w-[120px] bg-white/10 backdrop-blur-md border border-white/20 hover:transform hover:-translate-y-2 transition-all duration-300">
                    <div className="stat__number text-2xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">50k+</div>
                    <div className="stat__label text-sm text-slate-600 dark:text-slate-300 font-medium">Active Teams</div>
                  </div>
                  <div className="stat glass-morphic p-4 rounded-2xl text-center min-w-[120px] bg-white/10 backdrop-blur-md border border-white/20 hover:transform hover:-translate-y-2 transition-all duration-300">
                    <div className="stat__number text-2xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">99.9%</div>
                    <div className="stat__label text-sm text-slate-600 dark:text-slate-300 font-medium">Uptime</div>
                  </div>
                  <div className="stat glass-morphic p-4 rounded-2xl text-center min-w-[120px] bg-white/10 backdrop-blur-md border border-white/20 hover:transform hover:-translate-y-2 transition-all duration-300">
                    <div className="stat__number text-2xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">100M+</div>
                    <div className="stat__label text-sm text-slate-600 dark:text-slate-300 font-medium">Documents</div>
                  </div>
                </div>
              </div>
              <div className="hero__visual flex justify-center lg:justify-end">
                <div className="hero__mockup relative transform hover:scale-105 transition-transform duration-700">
                  <div className="mockup-glow absolute -inset-8 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-3xl blur-2xl opacity-50 animate-pulse"></div>
                  <div className="mockup-browser relative w-[500px] max-w-full bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden shadow-2xl">
                    <div className="browser-bar glass-morphic p-4 flex items-center gap-4 border-b border-white/20 bg-white/5">
                      <div className="browser-dots flex gap-2">
                        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                      <div className="browser-url flex-1 glass-morphic px-3 py-2 rounded-lg bg-white/10 flex items-center gap-2 text-sm">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-slate-600 dark:text-slate-300">app.collaborix.com</span>
                      </div>
                    </div>
                    <div className="browser-content bg-gradient-to-br from-slate-50/90 to-white/90 dark:from-slate-800/90 dark:to-slate-900/90 p-6 min-h-[300px]">
                      <div className="editor-interface rounded-xl overflow-hidden border border-white/20">
                        <div className="editor-toolbar glass-morphic p-3 flex gap-4 bg-white/20 backdrop-blur-sm border-b border-white/20">
                          <div className="toolbar-group flex gap-2">
                            <button className="tool-btn w-9 h-9 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white flex items-center justify-center font-bold text-sm hover:scale-110 transition-transform">
                              B
                            </button>
                            <button className="tool-btn w-9 h-9 rounded-lg bg-white/20 text-slate-600 dark:text-slate-300 flex items-center justify-center italic text-sm hover:scale-110 transition-transform">
                              I
                            </button>
                            <button className="tool-btn w-9 h-9 rounded-lg bg-white/20 text-slate-600 dark:text-slate-300 flex items-center justify-center underline text-sm hover:scale-110 transition-transform">
                              U
                            </button>
                          </div>
                          <div className="toolbar-group flex gap-2">
                            <button className="tool-btn w-9 h-9 rounded-lg bg-white/20 text-slate-600 dark:text-slate-300 flex items-center justify-center hover:scale-110 transition-transform">
                              🔗
                            </button>
                            <button className="tool-btn w-9 h-9 rounded-lg bg-white/20 text-slate-600 dark:text-slate-300 flex items-center justify-center hover:scale-110 transition-transform">
                              🖼️
                            </button>
                            <button className="ai-btn w-9 h-9 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white flex items-center justify-center hover:scale-110 transition-transform animate-pulse">
                              ✨
                            </button>
                          </div>
                        </div>
                        <div className="editor-content p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm relative">
                          {/* Collaborator Cursors */}
                          <div className="collaborator-cursor absolute top-16 left-32 pointer-events-none z-10">
                            <div className="cursor-pointer w-0.5 h-5 bg-gradient-to-b from-purple-600 to-purple-400 mb-1 animate-pulse"></div>
                            <div className="cursor-label bg-gradient-to-r from-purple-600 to-purple-400 text-white px-2 py-1 rounded-lg text-xs font-semibold">
                              Sarah
                            </div>
                          </div>
                          <div className="collaborator-cursor absolute top-24 right-24 pointer-events-none z-10">
                            <div className="cursor-pointer w-0.5 h-5 bg-gradient-to-b from-blue-600 to-blue-400 mb-1 animate-pulse"></div>
                            <div className="cursor-label bg-gradient-to-r from-blue-600 to-blue-400 text-white px-2 py-1 rounded-lg text-xs font-semibold">
                              Mike
                            </div>
                          </div>

                          <div className="document-text">
                            <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-200">Project Roadmap Q1 2025</h3>
                            <p className="typing-text text-slate-600 dark:text-slate-300 mb-4 border-r-2 border-purple-600 pr-1 animate-pulse">
                              Real-time collaboration made simple...
                            </p>
                            <div className="ai-suggestion glass-morphic inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 border border-emerald-200 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300 text-sm animate-bounce">
                              <Lightbulb className="w-4 h-4" />
                              <span>AI suggests: Add milestone dates</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features py-24">
          <div className="container mx-auto px-6">
            <div className="section-header text-center mb-20">
              <h2 className="section-title text-4xl lg:text-6xl font-extrabold mb-8">
                <span className="text-gradient bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Powerful Features</span> for Modern Teams
              </h2>
              <p className="section-subtitle text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Everything you need to collaborate effectively, powered by cutting-edge technology
              </p>
            </div>
            <div className="features__grid grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
              <FeatureCard
                icon={<Users className="w-12 h-12" />}
                title="Real-time Collaboration"
                description="See your team's changes instantly with live cursors, conflict-free editing, and seamless synchronization across all devices."
                tags={["Live Cursors", "Instant Sync", "Multi-device"]}
                gradient="from-purple-600 to-pink-600"
              />
              <FeatureCard
                icon={<Sparkles className="w-12 h-12" />}
                title="AI-Powered Features"
                description="Leverage advanced AI to generate summaries, translate content, and get intelligent suggestions for better documents."
                tags={["Smart Summaries", "Auto Translation", "Content AI"]}
                gradient="from-emerald-500 to-teal-500"
              />
              <FeatureCard
                icon={<FileText className="w-12 h-12" />}
                title="Rich Document Editing"
                description="Create beautiful documents with comprehensive formatting, media embedding, and advanced organization tools."
                tags={["Rich Formatting", "Media Support", "Templates"]}
                gradient="from-blue-600 to-cyan-500"
              />
              <FeatureCard
                icon={<Globe className="w-12 h-12" />}
                title="Universal Access"
                description="Access your documents anywhere, anytime, on any device with our responsive cloud-based platform."
                tags={["Cloud Sync", "Mobile Apps", "Offline Access"]}
                gradient="from-orange-500 to-red-500"
              />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials py-24 bg-slate-50/50 dark:bg-slate-900/50">
          <div className="container mx-auto px-6">
            <div className="section-header text-center mb-20">
              <h2 className="section-title text-4xl lg:text-5xl font-extrabold mb-8">
                Trusted by <span className="text-gradient bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Teams Worldwide</span>
              </h2>
              <p className="section-subtitle text-xl text-slate-600 dark:text-slate-300">See what our users are saying about their experience</p>
            </div>
            <div className="testimonials__grid grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <TestimonialCard
                rating={5}
                quote="Collaborix has revolutionized how our team works together. The real-time features are incredible and the AI assistance saves us hours every week."
                author="Sarah Chen"
                role="Product Manager, TechCorp"
              />
              <TestimonialCard
                rating={5}
                quote="The best collaboration tool we've ever used. It's intuitive, powerful, and reliable. Our productivity has increased by 40%."
                author="Michael Rodriguez"
                role="Content Director, Creative Agency"
              />
            </div>
          </div>
        </section>

        {/* Pricing Preview */}
        <section className="pricing-preview py-24">
          <div className="container mx-auto px-6">
            <div className="section-header text-center mb-20">
              <h2 className="section-title text-4xl lg:text-5xl font-extrabold mb-8">
                Simple, <span className="text-gradient bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Transparent Pricing</span>
              </h2>
              <p className="section-subtitle text-xl text-slate-600 dark:text-slate-300">Choose the plan that&apos;s right for your team</p>
            </div>
            <div className="pricing-cards grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <PricingCard
                title="Starter"
                price="0"
                period="month"
                description="Perfect for individuals and small teams"
                features={[
                  "Up to 5 documents",
                  "Basic collaboration",
                  "1GB storage",
                  "Email support"
                ]}
                buttonText="Get Started Free"
                buttonVariant="ghost"
              />
              <PricingCard
                title="Professional"
                price="15"
                period="month"
                description="Advanced features for growing teams"
                features={[
                  "Unlimited documents",
                  "Advanced collaboration",
                  "100GB storage",
                  "Priority support",
                  "AI features"
                ]}
                buttonText="Start Free Trial"
                buttonVariant="primary"
                featured={true}
              />
              <PricingCard
                title="Enterprise"
                price="Custom"
                period=""
                description="Custom solutions for large organizations"
                features={[
                  "Everything in Pro",
                  "Custom integrations",
                  "Advanced security",
                  "Dedicated support",
                  "SLA"
                ]}
                buttonText="Contact Sales"
                buttonVariant="ghost"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="sign-up-section" className="cta-section py-24">
          <div className="container mx-auto px-6">
            <div className="glass-morphic bg-gradient-to-r from-purple-600/90 to-blue-600/90 backdrop-blur-xl rounded-3xl p-12 text-white text-center border border-white/20 shadow-2xl">
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">
                Ready to Experience Collaborix?
              </h2>
              <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed opacity-90">
                Join thousands of teams who are already using Collaborix to
                streamline their document workflows and boost productivity.
              </p>
              <Link href="/playground">
                <button className="btn btn--large relative px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 overflow-hidden bg-white text-purple-600 hover:transform hover:-translate-y-1 hover:shadow-2xl group">
                  <span className="relative z-10 flex items-center gap-3">
                    Try Playground Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer glass-morphic mt-24 py-16 border-t border-white/10 bg-white/5 backdrop-blur-xl">
        <div className="container mx-auto px-6">
          <div className="footer-content grid lg:grid-cols-3 gap-12 mb-12">
            <div className="footer-brand">
              <div className="footer-logo flex items-center gap-3 mb-4">
                <Atom className="w-8 h-8 text-purple-600" />
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Collaborix</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-lg">Build Together. Collaborate Better</p>
            </div>
            <div className="footer-links grid grid-cols-2 gap-8">
              <div className="footer-section">
                <h4 className="font-semibold mb-4 text-slate-800 dark:text-slate-200">Product</h4>
                <ul className="space-y-2 list-none">
                  <li>
                    <button
                      onClick={() => setFeaturesOpen(true)}
                      className="text-slate-600 dark:text-slate-300 hover:text-purple-600 transition-colors"
                    >
                      Features
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setPricingOpen(true)}
                      className="text-slate-600 dark:text-slate-300 hover:text-purple-600 transition-colors"
                    >
                      Pricing
                    </button>
                  </li>
                </ul>
              </div>
              <div className="footer-section">
                <h4 className="font-semibold mb-4 text-slate-800 dark:text-slate-200">Company</h4>
                <ul className="space-y-2 list-none">
                  <li>
                    <button
                      onClick={() => setAboutOpen(true)}
                      className="text-slate-600 dark:text-slate-300 hover:text-purple-600 transition-colors"
                    >
                      About
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setContactOpen(true)}
                      className="text-slate-600 dark:text-slate-300 hover:text-purple-600 transition-colors"
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom text-center pt-8 border-t border-white/10">
            <p className="text-slate-600 dark:text-slate-300">
              &copy; {new Date().getFullYear()} Collaborix. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Dialogs */}
      <Dialog open={aboutOpen} onOpenChange={setAboutOpen}>
        <DialogContent className="sm:max-w-lg glass-morphic bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-white/20">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">About Collaborix</DialogTitle>
            <DialogDescription className="text-slate-600 dark:text-slate-300">
              Building the future of collaborative document editing
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-slate-200">Our Mission</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                To make collaborative document editing effortless and accessible to everyone. We believe great ideas emerge when teams can work together seamlessly.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-slate-200">Innovation at Core</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Built with cutting-edge technology and powered by AI to provide the most intuitive collaboration experience possible.
              </p>
            </div>
            <div className="team-showcase glass-morphic p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border border-purple-200/20 dark:border-purple-700/20">
              <div className="team-member flex flex-col items-center text-center">
                <div className="member-avatar w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white text-2xl font-bold mb-4">
                  <User className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200">Nayan Katiyara</h4>
                <p className="text-slate-600 dark:text-slate-300">Founder & CEO</p>
              </div>
            </div>
          </div>
          <DialogClose asChild>
            <Button variant="outline" className="w-full mt-6">
              Close
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>

      <Dialog open={featuresOpen} onOpenChange={setFeaturesOpen}>
        <DialogContent className="sm:max-w-2xl glass-morphic bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-white/20 max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Powerful Features</DialogTitle>
            <DialogDescription className="text-slate-600 dark:text-slate-300">
              Discover all the tools that make Collaborix extraordinary
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6">
            <FeatureDetailCard
              icon={<Users className="w-8 h-8 text-purple-600" />}
              title="Real-time Magic"
              description="Experience seamless collaboration with live cursors, instant updates, and conflict-free editing that just works."
              features={["Live cursor tracking", "Instant synchronization", "Smart conflict resolution"]}
            />
            <FeatureDetailCard
              icon={<Sparkles className="w-8 h-8 text-emerald-600" />}
              title="AI-Powered Intelligence"
              description="Leverage advanced AI to enhance your documents and streamline your workflow."
              features={["Smart content suggestions", "Automatic summaries", "Multi-language translation"]}
            />
            <FeatureDetailCard
              icon={<FileText className="w-8 h-8 text-blue-600" />}
              title="Rich Document Creation"
              description="Create beautiful, professional documents with comprehensive tools."
              features={["Advanced formatting", "Media embedding", "Template library"]}
            />
          </div>
          <DialogClose asChild>
            <Button variant="outline" className="w-full mt-6">
              Close
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>

      <Dialog open={pricingOpen} onOpenChange={setPricingOpen}>
        <DialogContent className="sm:max-w-4xl glass-morphic bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-white/20">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Choose Your Plan</DialogTitle>
            <DialogDescription className="text-slate-600 dark:text-slate-300">
              Transparent pricing that scales with your team
            </DialogDescription>
          </DialogHeader>
          <div className="grid md:grid-cols-3 gap-6 py-6">
            <PricingCard
              title="Starter"
              price="0"
              period="month"
              description="Perfect for individuals"
              features={["Up to 5 documents", "Basic collaboration", "1GB storage", "Email support"]}
              buttonText="Get Started"
              buttonVariant="ghost"
              compact={true}
            />
            <PricingCard
              title="Professional"
              price="15"
              period="month"
              description="For growing teams"
              features={["Unlimited documents", "Advanced features", "100GB storage", "Priority support", "AI features"]}
              buttonText="Start Trial"
              buttonVariant="primary"
              featured={true}
              compact={true}
            />
            <PricingCard
              title="Enterprise"
              price="Custom"
              period=""
              description="For large organizations"
              features={["Everything in Pro", "Custom integrations", "Advanced security", "Dedicated support"]}
              buttonText="Contact Sales"
              buttonVariant="ghost"
              compact={true}
            />
          </div>
          <DialogClose asChild>
            <Button variant="outline" className="w-full">
              Close
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>

      <Dialog open={contactOpen} onOpenChange={setContactOpen}>
        <DialogContent className="sm:max-w-lg glass-morphic bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-white/20">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Get in Touch</DialogTitle>
            <DialogDescription className="text-slate-600 dark:text-slate-300">
              We&apos;d love to hear from you
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6">
            <div className="contact-info">
              <div className="contact-item flex items-start gap-4 p-4 glass-morphic rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border border-purple-200/20 dark:border-purple-700/20 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">Email</h4>
                  <p className="text-slate-600 dark:text-slate-300">nayankatiyara03@gmail.com</p>
                </div>
              </div>
              <div className="contact-item flex items-start gap-4 p-4 glass-morphic rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border border-purple-200/20 dark:border-purple-700/20">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">Phone</h4>
                  <p className="text-slate-600 dark:text-slate-300">+91-9561884240</p>
                </div>
              </div>
            </div>
          </div>
          <DialogClose asChild>
            <Button variant="outline" className="w-full mt-6">
              Close
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// Component Types
type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
  gradient: string;
};

type TestimonialCardProps = {
  rating: number;
  quote: string;
  author: string;
  role: string;
};

type PricingCardProps = {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonVariant: "primary" | "ghost";
  featured?: boolean;
  compact?: boolean;
};

type FeatureDetailCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
};

// Feature Card Component
function FeatureCard({ icon, title, description, tags, gradient }: FeatureCardProps) {
  return (
    <div className="feature-card glass-morphic p-8 rounded-3xl text-center transition-all duration-500 hover:-translate-y-2 bg-white/10 backdrop-blur-xl border border-white/20 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className={`feature-icon w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${gradient} flex items-center justify-center text-white relative overflow-hidden`}>
        {icon}
        <div className="icon-glow absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      <h3 className="feature-title text-xl font-bold mb-4 text-slate-800 dark:text-slate-200 relative z-10">{title}</h3>
      <p className="feature-description text-slate-600 dark:text-slate-300 leading-relaxed mb-6 relative z-10">{description}</p>
      <div className="feature-benefits flex flex-wrap gap-2 justify-center relative z-10">
        {tags.map((tag, index) => (
          <span key={index} className="benefit-tag px-3 py-1 glass-morphic rounded-full text-xs font-medium bg-white/20 border border-white/30 text-slate-700 dark:text-slate-300">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

// Testimonial Card Component
function TestimonialCard({ rating, quote, author, role }: TestimonialCardProps) {
  return (
    <div className="testimonial-card glass-morphic p-8 rounded-3xl transition-transform duration-300 hover:-translate-y-1 bg-white/10 backdrop-blur-xl border border-white/20">
      <div className="testimonial-stars flex gap-1 mb-6 text-yellow-400">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-current" />
        ))}
      </div>
      <blockquote className="text-lg leading-relaxed mb-6 text-slate-700 dark:text-slate-300 font-medium italic">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="testimonial-author flex items-center gap-4">
        <div className="author-avatar w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold">
          <User className="w-6 h-6" />
        </div>
        <div className="author-info">
          <div className="font-semibold text-slate-800 dark:text-slate-200">{author}</div>
          <div className="text-slate-600 dark:text-slate-400 text-sm">{role}</div>
        </div>
      </div>
    </div>
  );
}

// Pricing Card Component
function PricingCard({ title, price, period, description, features, buttonText, buttonVariant, featured, compact }: PricingCardProps) {
  return (
    <div className={`pricing-card glass-morphic ${compact ? 'p-6' : 'p-8'} rounded-3xl relative transition-all duration-300 hover:-translate-y-2 bg-white/10 backdrop-blur-xl border ${featured ? 'border-purple-500/50 transform scale-105' : 'border-white/20'}`}>
      {featured && (
        <div className="popular-badge absolute -top-4 left-1/2 transform -translate-x-1/2 glass-morphic px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-sm font-semibold flex items-center gap-2">
          <Crown className="w-4 h-4" />
          <span>Most Popular</span>
        </div>
      )}
      <div className="price-header text-center mb-6">
        <h3 className={`${compact ? 'text-xl' : 'text-2xl'} font-bold mb-3 text-slate-800 dark:text-slate-200`}>{title}</h3>
        <div className="price flex items-baseline justify-center gap-1 mb-3">
          {price !== "Custom" ? (
            <>
              <span className="currency text-lg font-semibold text-slate-600 dark:text-slate-400">$</span>
              <span className={`amount ${compact ? 'text-3xl' : 'text-4xl'} font-extrabold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent`}>{price}</span>
              {period && <span className="period text-slate-600 dark:text-slate-400">/{period}</span>}
            </>
          ) : (
            <span className={`contact-price ${compact ? 'text-2xl' : 'text-3xl'} font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent`}>{price}</span>
          )}
        </div>
        <p className="text-slate-600 dark:text-slate-300">{description}</p>
      </div>
      <ul className="price-features space-y-3 mb-8 list-none">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
            <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link href="/playground">
        <button className={`btn w-full py-3 px-6 rounded-2xl font-semibold transition-all duration-300 ${
          buttonVariant === 'primary'
            ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:transform hover:-translate-y-1 hover:shadow-lg'
            : 'bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30'
        }`}>
          <span>{buttonText}</span>
        </button>
      </Link>
    </div>
  );
}

// Feature Detail Card Component
function FeatureDetailCard({ icon, title, description, features }: FeatureDetailCardProps) {
  return (
    <div className="glass-morphic p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border border-purple-200/20 dark:border-purple-700/20">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-slate-200">{title}</h3>
          <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">{description}</p>
          <ul className="space-y-2 list-none">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600"></div>
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}