import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary mb-6 text-center">About Me</h1>
        <div className="max-w-3xl mx-auto bg-card p-8 rounded-lg shadow-md border border-border">
          <p className="text-lg mb-4">
            Hello! I'm Saiprasanna, a passionate cybersecurity enthusiast and aspiring professional. This blog is my personal space to share insights, document my learning journey, and discuss various topics within the cybersecurity domain.
          </p>
          <p className="text-lg mb-4">
            My interests span across SOC analysis, understanding real-world cyberattacks, exploring new security tools and techniques, and staying updated with the latest cybersecurity news. I believe in continuous learning and sharing knowledge with the community.
          </p>
          <p className="text-lg">
            Through this blog, I aim to provide valuable content for fellow learners, share my experiences, and contribute to the ever-evolving field of cybersecurity.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;