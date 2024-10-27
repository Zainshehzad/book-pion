"use client";

import React from 'react';
import HeroSection from "@/components/Herosection"
import FeaturedCourses from '@/components/FeaturedCourses';

import TestiMonialCard from "@/components/TestMonialCard"
import UpComingWebinars from "@/components/UpComing-Webinars"

import WhyChooseUs from "@/components/whychooseUs"
import Instructor from "@/app/page"

const HomePage = () => {
  return (
    <main className='min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.07]'>
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs/>
      <TestiMonialCard />
      <UpComingWebinars />
      <Instructor/>
    </main>
  );
}

export default HomePage;