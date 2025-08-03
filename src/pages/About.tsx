import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-6 text-center">About Me</h1>
        <div className="max-w-3xl mx-auto bg-card p-6 sm:p-8 rounded-lg shadow-md border border-border">
          <p className="text-lg mb-4">
            Hi, I’m Muppalla Saiprasanna, a passionate Cybersecurity Enthusiast and aspiring SOC Analyst.
          </p>
          <p className="text-lg mb-4">
            I specialize in defensive security with a focus on threat detection, incident response, and SIEM analysis.
          </p>
          <p className="text-lg mb-4">
            As a devotee of Lord Shiva and Hanuman, I follow discipline and focus in both my personal and professional life.
          </p>
          <p className="text-lg mb-4">
            I have completed virtual internships and hands-on projects in areas like phishing detection, firewall log analysis, and real-world attack simulations.
          </p>
          <p className="text-lg mb-4">
            I’m currently building a strong portfolio of SOC Analyst projects and working towards certifications including ISC2 CC and OCI Cloud Security.
          </p>
          <p className="text-lg mb-4">
            Through this blog, I share SOC Analyst insights, real-world cyberattack case studies, cybersecurity tools & techniques, and my personal journey in the field.
          </p>
          <p className="text-lg">
            My mission is to inspire and educate others while sharpening my own expertise in protecting digital assets against evolving threats.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;