"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import TextAbout from '@/components/sections/about/TextAbout';
import { Building, Droplets, Layers, LayoutDashboard, ShieldCheck, Square } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="smallMedium"
        sizing="largeSmall"
        background="fluid"
        cardStyle="gradient-bordered"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "Services",          id: "services"},
        {
          name: "Reviews",          id: "testimonials"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="JM Roofing"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardCarousel
      background={{
        variant: "gradient-bars"}}
      title="Luxury Roofing. Built To Protect Generations."
      description="JM Roofing 3rd Generation delivers premium roof replacement, repairs, and leak protection with unmatched craftsmanship across Los Angeles."
      tag="Trusted Los Angeles Roofing Experts"
      buttons={[
        {
          text: "Get Free Inspection",          href: "#contact"},
        {
          text: "Call (323) 245-9154",          href: "tel:3232459154"},
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/glass-pyramid_1122-430.jpg",          imageAlt: "Roofing 1"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-smiley-man-working-roof_23-2149343672.jpg",          imageAlt: "Roofing 2"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-beautiful-roof-wooden-house_23-2149343706.jpg",          imageAlt: "Roofing 3"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-working-roof_23-2149343701.jpg",          imageAlt: "Roofing 4"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/rainbow-sky-residential-area-houses_169016-21426.jpg",          imageAlt: "Roofing 5"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/modern-country-houses-construction_1385-17.jpg",          imageAlt: "Roofing 6"},
      ]}
    />
  </div>

  <div id="trust" data-section="trust">
      <TextAbout
      useInvertedBackground={false}
      tag="About Us"
      title="JM Roofing: 3rd Generation Integrity"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureHoverPattern
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          icon: Building,
          title: "Roof Replacement",          description: "Complete installations with premium materials."},
        {
          icon: Droplets,
          title: "Leak Detection",          description: "Fast leak identification and repair solutions."},
        {
          icon: Square,
          title: "Flat Roofing",          description: "Durable flat roofing for long-term protection."},
        {
          icon: LayoutDashboard,
          title: "Tile Roofing",          description: "Elegant tile installations for curb appeal."},
        {
          icon: Layers,
          title: "Shingle Roofing",          description: "High-performance luxury shingle finishes."},
        {
          icon: ShieldCheck,
          title: "Insurance Assistance",          description: "Stress-free guidance for insurance claims."},
      ]}
      title="Roofing Solutions Built To Last"
      description="From emergency repairs to full luxury replacements."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",          value: "52+",          title: "5-Star Reviews",          items: [
            "Verified feedback"],
        },
        {
          id: "m2",          value: "3rd",          title: "Gen Roofing",          items: [
            "Family heritage"],
        },
        {
          id: "m3",          value: "100%",          title: "Satisfaction",          items: [
            "Guaranteed quality"],
        },
      ]}
      title="Why Los Angeles Chooses Us"
      description="Experience that matters for your property."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",          title: "Amazing Work",          quote: "Amazing work, fair pricing, and a team that cares.",          name: "Andres Gonzalez",          role: "Homeowner",          imageSrc: "http://img.b2bpic.net/free-photo/country-music-interpret-singing-outdoors_23-2149498451.jpg"},
        {
          id: "t2",          title: "Professional",          quote: "Extremely professional and responsive process.",          name: "Forrest Barnes",          role: "Homeowner",          imageSrc: "http://img.b2bpic.net/free-photo/country-music-interpret-singing-outdoors_23-2149498452.jpg"},
        {
          id: "t3",          title: "High Quality",          quote: "JM Roofing delivered high-quality work at a great price.",          name: "Maiisha Barnett",          role: "Homeowner",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-cute-beautiful-young-woman-having-fun-posing-outdoors_1153-6183.jpg"},
        {
          id: "t4",          title: "Reliable",          quote: "They came through on short notice without issues.",          name: "Chris Smith",          role: "Homeowner",          imageSrc: "http://img.b2bpic.net/free-photo/crazy-businessman-worried-expression_1194-4147.jpg"},
        {
          id: "t5",          title: "Great Team",          quote: "The entire team was diligent and honest.",          name: "Sarah Miller",          role: "Homeowner",          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-albino-woman-with-coffee-cup_23-2150170388.jpg"},
      ]}
      title="Los Angeles Homeowners Trust JM Roofing"
      description="Don't take our word for it—listen to our happy customers."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",          title: "Do you offer free estimates?",          content: "Yes, we provide free same-day estimates."},
        {
          id: "f2",          title: "Is JM Roofing licensed?",          content: "Yes, we are fully licensed and insured."},
        {
          id: "f3",          title: "What areas do you serve?",          content: "We proudly serve the greater Los Angeles area."},
      ]}
      title="Frequently Asked Questions"
      description="Common questions about our roofing services."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "rotated-rays-animated"}}
      text="Schedule your free roof inspection today and discover why homeowners across Los Angeles trust JM Roofing."
      buttons={[
        {
          text: "Book Free Estimate",          href: "#"},
        {
          text: "Call Now",          href: "tel:3232459154"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="JM Roofing"
      columns={[
        {
          title: "Quick Links",          items: [
            {
              label: "Home",              href: "#hero"},
            {
              label: "Services",              href: "#services"},
          ],
        },
        {
          title: "Contact",          items: [
            {
              label: "Call Us",              href: "tel:3232459154"},
            {
              label: "Email",              href: "mailto:info@jmroofing.com"},
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
