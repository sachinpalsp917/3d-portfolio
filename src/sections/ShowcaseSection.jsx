import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const appleRef = useRef(null);
  const brainwaveRef = useRef(null);
  const GTAVIRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [appleRef.current, brainwaveRef.current, GTAVIRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={appleRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Apple website" />
            </div>
            <div className="text-content">
              <h2>A Modern Apple page showcasing new model of iphone 16</h2>
              <p className="text-white-50 md:text-xl">
                An app built with React, GSAP, three.js & TailwindCSS for a
                fast, user-friendly experience.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={brainwaveRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project2.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2>A Modern UI/UX Platform built using GSAP</h2>
            </div>

            <div className="project" ref={GTAVIRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.png" alt="YC Directory App" />
              </div>
              <h2>A GTAVI landing page with selfie effect</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
