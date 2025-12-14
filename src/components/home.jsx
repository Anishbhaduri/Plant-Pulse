import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useScroll, useTransform, motion } from "framer-motion";
import farming3 from "../assets/images/farming3.jpg";
import home from "../assets/video/home.mp4";
import Friendly from "../assets/images/Friendly.jpeg";
import anishImg from "../assets/images/anish.jpg";
import priantuImg from "../assets/images/priantu.jpg";
import nitalImg from "../assets/images/nital.jpg";
import biswajitImg from "../assets/images/biswajit.jpg";
import aritraImg from "../assets/images/aritra.jpg";
import Innovative from "../assets/images/Innovative.webp";
import plant_disease from "../assets/images/plant_disease.webp";
import "../css/home.css";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScrollBtn, setShowScrollBtn] = useState(false); // 🔹 NEW STATE
  const { scrollY } = useScroll();

  // Header scroll effect (adds/removes .scrolled)
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }

      // 🔹 NEW: Show Scroll-to-Top Button
      if (window.scrollY > 200) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // run once to set initial state
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [menuOpen]);

  // Close menu automatically if window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 880 && menuOpen) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  const handleMenuClick = () => setMenuOpen((prev) => !prev);

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const yParallax = useTransform(scrollY, [0, 800], [0, -40]);

  const features = [
    {
      title: "Plant Disease Identification",
      desc: `Keeping crops healthy is the key to a successful harvest. Our AI-powered Plant Disease Identification system helps farmers detect crop problems early — just by uploading a photo of the affected plant. Within seconds, you’ll receive accurate disease detection, causes, and practical treatment recommendations.
By identifying issues before they spread, you can reduce crop loss, improve yield quality, and save time and resources. Whether it’s pests, nutrient deficiencies, or fungal infections, our intelligent system ensures your fields stay green and productive.
Empowering farmers with technology that works in the field, not just in theory — because every healthy plant matters.`,
      img: plant_disease,
    },
    {
      title: "Smart Farming, Simple Guidance",
      desc: "Discover how technology can make farming easier. Our smart plant disease identification tool helps you detect problems early, protect your crops, and improve yield — all with simple, easy-to-follow guidance.",
      img: farming3,
    },
    {
      title: "Innovations for Modern Farms",
      desc: "Farming today is more than hard work — it’s about working smart. Our modern innovations bring the power of technology to your fingertips, helping you identify plant diseases, monitor field conditions, and protect your crops with ease. By combining traditional farming knowledge with advanced AI tools, we’re making it simple for farmers to grow healthier crops and achieve better harvests season after season.",
      img: Innovative,
    },
    {
      title: "User-Friendly Interface",
      desc: "Our platform is designed with farmers in mind. With an easy-to-use interface, you can quickly upload plant images, view instant disease reports, and access solutions — all in just a few taps. No complex tools or technical skills needed — just clear, simple guidance to help you protect your crops.",
      img: Friendly,
    },
  ];

  return (
    <div>
       {/* 🔹 Scroll to Home Button (Visible in Features Section) */}
      <button
        className={`scroll-to-home-btn ${showScrollBtn ? "show" : ""}`}
        onClick={() => document.getElementById("home").scrollIntoView({ behavior: "smooth" })}
        aria-label="Scroll to Home"
      >
        ▲
      </button>
      {/* Header */}
      <header className="header" role="banner" aria-label="Main Header">
        <div className="logo">
          <h1>🌿 Plant Pulse</h1>
        </div>

        <nav className={`navbar${menuOpen ? " active" : ""}`} role="navigation" aria-label="Main Navigation">
          <a href="#home" className="nav-link">Home</a>
          <a href="#features" className="nav-link">Features</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#footer" className="nav-link">Contact</a>
          <Link to="/upload" className="btn nav-link">Model</Link>
        </nav>

        <button
          id="menu-btn"
          className={`menu-icon ${menuOpen ? "open" : ""}`}
          onClick={handleMenuClick}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className="bar bar1" />
          <span className="bar bar2" />
          <span className="bar bar3" />
        </button>
      </header>

      {/* Hero Section */}
      <section className="home" id="home" aria-label="Hero">
        <video className="video" src={home} autoPlay loop muted playsInline aria-hidden />
        <motion.div
          className="content"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 1 }}
        >
          <motion.h1 variants={fadeUp} transition={{ duration: 1.2 }}>
            YOUR SMART FARMING ASSISTANT
          </motion.h1>
          <motion.p variants={fadeUp} transition={{ delay: 0.2, duration: 1 }}>
            Smart Crops, Smart Choices with Plant Pulse!
          </motion.p>
          <motion.div variants={fadeUp} transition={{ delay: 0.4 }}>
            <Link to="/guidepage" className="home-btn" >
              Smart Farming Guide
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
        <section className="features" id="features" aria-label="Features">
          <motion.div
            className="heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 1 }}
          >
            <h1 align="center" style={{ fontSize: "2rem", fontWeight: "bold" }}>Features</h1>
            <p>
          PlantPulse empowers farmers with AI-driven crop recommendations, disease detection,
          and climate insights to make smarter, sustainable farming decisions.
            </p>
          </motion.div>

          <div className="button-container0" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/Weatherforcast" className="buttonn active">Weather Forcasting</Link>
            <Link to="/upload" className="buttonn">Identify Diseases</Link>
            <Link to="/guidepage" className="buttonn">Smart Farming Guidance</Link>
          </div>

          <div className="row" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
            {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            className={`feature-row ${index % 2 !== 0 ? "reverse" : ""}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <div className="image">
              <motion.img
            src={feature.img}
            alt={feature.title}
            className="rounded-corner-image parallax-img"
            style={{ y: yParallax }}
            whileHover={{ scale: 1.05 }}
              />
            </div>
            <div className="content">
              <h1>{feature.title}</h1>
              <p>{feature.desc}</p>
              <Link to="#" className="all-btn">More Info</Link>
            </div>
          </motion.div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="about" id="about" aria-label="About">
          <div className="responsive-container-block outer-container">
            <div className="responsive-container-block inner-container">
              <h1 className="text-blk section-head-text">Meet Our Team</h1>
              <p className="text-blk section-subhead-text">
                A passionate team of innovators blending agriculture and technology to help
              </p>
              <div className="responsive-container-block team-list">
                {[
                  { name: "Anish Bhaduri", role: "Web Developer", img: anishImg },
                  { name: "Priantu Das", role: "ML Engineer", img: priantuImg },
                  { name: "Nital Kumari", role: "UX/UI Designer", img: nitalImg },
                  { name: "Biswajyoti Ray", role: "ML Engineer", img: biswajitImg },
                  { name: "Aritra Kar", role: "ML Engineer", img: aritraImg },
                ].map((member) => (
                  <div key={member.name} className="responsive-cell-block team-card-container">
                    <div className="team-card">
                      <div className="img-wrapper">
                        <img className="team-img" src={member.img} alt={member.name} />
                      </div>
                      <p className="text-blk name">{member.name}</p>
                      <p className="text-blk position">{member.role}</p>
                      <div className="social-media-links">
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                          <img
                            src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg"
                            alt="LinkedIn"
                          />
                        </a>
                        <a href="mailto:example@gmail.com">
                          <img
                            src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg"
                            alt="Email"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
      <footer className="footer" id="footer" aria-label="Footer">
        <div className="box-container">
          <div className="box">
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#about">About</a>
          </div>
          <div className="box">
            <h3>Extra Links</h3>
            <a href="#">Ask Questions</a>
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
          </div>
          <div className="box">
            <h3>Helpful Resources</h3>
            <a href="#">FAQs</a>
            <a href="#">User Guides</a>
            <a href="#">Support Center</a>
          </div>
          <div className="box">
            <h3>Stay Connected</h3>
            <a href="#">Future Scope</a>
            <a href="#">Community Forum</a>
            <a href="#">Newsletter</a>
          </div>
        </div>

        <div className="credit">
          © 2025 <span>Plant Pulse</span> — All Rights Reserved
        </div>
      </footer>
    </div>

      
  );
}

export default Home;
