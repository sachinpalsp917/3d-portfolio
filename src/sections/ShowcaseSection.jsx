import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const appleRef = useRef(null);
  const brainwaveRef = useRef(null);
  const leetlabRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [appleRef.current, brainwaveRef.current, leetlabRef.current];

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
          <div
            ref={appleRef}
            className="first-project-wrapper overflow-hidden "
          >
            <div className="image-wrapper">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="/images/project1.png" alt="Apple website" />
              </a>
            </div>
            <div className="text-content">
              <h2>A Modern Platform to learn DSA problems</h2>
              <p className="text-white-50 md:text-xl">
                An app built with React, Judge0, DaisyUI & TailwindCSS for a
                fast, user-friendly experience learning Modern Data Structure
                problems.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={brainwaveRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <a
                  href="https://apple-iphone-16-pro-nine.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/project2.png" alt="" />
                </a>
              </div>
              <h2>A Modern Apple page showcasing new model of iphone 16</h2>
            </div>
            <div className="project" ref={brainwaveRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <a
                  href="https://brainwave-seven-gamma.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/project3.png" alt="" />
                </a>
              </div>
              <h2>A Modern UI/UX Platform built using GSAP</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
