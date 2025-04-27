"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, FileText, Sparkles, Globe, Mail, Phone } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"
import { useState } from "react";

export default function HeroPage() {
  const [aboutOpen, setAboutOpen] = useState(false)
  const [featuresOpen, setFeaturesOpen] = useState(false)
  const [privacyOpen, setPrivacyOpen] = useState(false)
  const [termsOpen, setTermsOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  const scrollToSignUp = () => {
    document
      .getElementById("sign-up-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <header className="container mx-auto py-6 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-8 w-8 text-purple-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
            />
          </svg>
          <h1 className="text-2xl font-bold">Collaborix</h1>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => setAboutOpen(true)}>
            About
          </Button>
          <Button variant="ghost" size="sm" onClick={() => setFeaturesOpen(true)}>
            Features
          </Button>
          <Link href="/playground">
            <Button size="lg" variant="outline" className="gap-2">
              Playground <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Build Together.
          <span className="text-purple-600"> Collaborate Better</span>
        </h1>
        <p className="mt-6 text-xl text-slate-600 dark:text-slate-400 max-w-3xl">
          Collaborix brings the power of structured collaboration to your teams
          fingertips. Plan, write, brainstorm, or build — all in one unified
          space.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700"
            onClick={scrollToSignUp}
          >
            Get Started
          </Button>
          <Link href="/playground">
            <Button size="lg" variant="outline" className="gap-2">
              Playground <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-16">
          Powerful Features for Modern Collaboration
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Users className="h-10 w-10 text-purple-600" />}
            title="Real-time Collaboration"
            description="Work together with your team in real-time with live cursors, simultaneous editing, and conflict resolution."
          />
          <FeatureCard
            icon={<FileText className="h-10 w-10 text-purple-600" />}
            title="Rich Document Editing"
            description="Create beautiful documents with comprehensive formatting options and organization tools."
          />
          <FeatureCard
            icon={<Sparkles className="h-10 w-10 text-purple-600" />}
            title="AI-Powered Features"
            description="Generate summaries, translations, and get AI assistance with your documents."
          />
          <FeatureCard
            icon={<Globe className="h-10 w-10 text-purple-600" />}
            title="Accessible Anywhere"
            description="Access your documents from any device with our responsive, cloud-based platform."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section id="sign-up-section" className="container mx-auto px-4 py-20">
        <div className="bg-purple-600 rounded-2xl p-10 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Experience Collaborix?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of teams who are already using Collaborix to
            streamline their document workflows.
          </p>
          <Link href="/playground">
            <Button
              size="lg"
              variant="secondary"
              className="gap-2 bg-white text-purple-600 hover:bg-slate-100"
            >
              Try Playground <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-10 border-t border-slate-200 dark:border-slate-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6 text-purple-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
            <span className="font-semibold">Collaborix</span>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Collaborix. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Button variant="ghost" size="sm" onClick={() => setPrivacyOpen(true)}>
              Privacy
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setTermsOpen(true)}>
              Terms
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setContactOpen(true)}>
              Contact
            </Button>
          </div>
        </div>
      </footer>

      {/* About Dialog */}
      <Dialog open={aboutOpen} onOpenChange={setAboutOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>About Collaborix</DialogTitle>
            <DialogDescription>
              Learn more about our platform and mission
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <p>
              Collaborix is a modern document collaboration platform built for
              teams who value simplicity and power. Our platform combines
              real-time editing capabilities with AI-powered features to create
              a seamless collaborative experience.
            </p>
            <p>
              <strong>Our Mission:</strong> To make collaborative document
              editing effortless and accessible to everyone.
            </p>
            <p>
              <strong>Our Team:</strong> We are a group of passionate developers
              and designers who believe that great software should be both
              powerful and easy to use.
            </p>
            <p>
              <strong>Our Technology:</strong> Built with Next.js 14,
              TypeScript, Tailwind CSS, and integrated with cutting-edge AI
              capabilities.
            </p>
          </div>
          <DialogClose asChild>
            <Button variant="outline" className="w-full">
              Close
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>

      {/* Features Dialog */}
      <Dialog open={featuresOpen} onOpenChange={setFeaturesOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Collaborix Features</DialogTitle>
            <DialogDescription>
              Discover what makes Collaborix special
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">🔄 Real-time Collaboration</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                See whos editing in real-time with live cursors, collaborative
                editing, and conflict-free updates.
              </p>
            </div>
            <div>
              <h3 className="font-medium">📝 Rich Document Editing</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Create beautiful documents with comprehensive formatting
                options, media embedding, and organization tools.
              </p>
            </div>
            <div>
              <h3 className="font-medium">✨ AI-Powered Features</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Generate summaries, get translations, and receive AI assistance
                with your documents using OpenAI and Cloudflare AI Workers.
              </p>
            </div>
            <div>
              <h3 className="font-medium">🔒 Secure Authentication</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Protect your documents with Clerk Authentication and granular
                permission controls.
              </p>
            </div>
            <div>
              <h3 className="font-medium">📱 Responsive Design</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Access your documents from any device with our fully responsive
                interface.
              </p>
            </div>
          </div>
          <DialogClose asChild>
            <Button variant="outline" className="w-full">
              Close
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>

      {/* Privacy Dialog */}
      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Privacy Policy</DialogTitle>
            <DialogDescription>How we handle your data</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
            <p>
              <strong>Last Updated:</strong> April 27, 2023
            </p>
            <p>
              At Collaborix, we take your privacy seriously. This Privacy Policy
              explains how we collect, use, and protect your personal
              information.
            </p>
            <h3 className="font-medium mt-4">Information We Collect</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              We collect information you provide directly to us, such as your
              name, email address, and any content you create or upload to our
              platform.
            </p>
            <h3 className="font-medium mt-4">How We Use Your Information</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              We use your information to provide, maintain, and improve our
              services, communicate with you, and personalize your experience.
            </p>
            <h3 className="font-medium mt-4">Data Security</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              We implement appropriate security measures to protect your
              personal information from unauthorized access, alteration, or
              disclosure.
            </p>
          </div>
          <DialogClose asChild>
            <Button variant="outline" className="w-full">
              Close
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>

      {/* Terms Dialog */}
      <Dialog open={termsOpen} onOpenChange={setTermsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Terms of Service</DialogTitle>
            <DialogDescription>
              Rules and guidelines for using Collaborix
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
            <p>
              <strong>Last Updated:</strong> April 27, 2023
            </p>
            <p>
              By using Collaborix, you agree to these Terms of Service. Please
              read them carefully.
            </p>
            <h3 className="font-medium mt-4">Account Registration</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              You may need to create an account to use some features of our
              platform. You are responsible for maintaining the security of your
              account.
            </p>
            <h3 className="font-medium mt-4">User Content</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              You retain ownership of any content you create or upload to our
              platform. By uploading content, you grant us a license to use,
              store, and display that content.
            </p>
          </div>
          <DialogClose asChild>
            <Button variant="outline" className="w-full">
              Close
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>

      {/* Contact Dialog */}
      <Dialog open={contactOpen} onOpenChange={setContactOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Contact Us</DialogTitle>
            <DialogDescription>Get in touch with our team</DialogDescription>
          </DialogHeader>
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-slate-500" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  nayankatiyara03@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-slate-500" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  +91-9561884240
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col items-center text-center">
      {icon}
      <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400">{description}</p>
    </div>
  );
}
