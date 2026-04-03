import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const boxes = document.getElementsByClassName("work-box");
    if (!boxes.length) return;
    const lastBox = boxes[boxes.length - 1];
    
    // The amount we need to translate is the distance from the viewport right edge to the last box's right edge
    const overflow = lastBox.getBoundingClientRect().right - window.innerWidth;
    translateX = Math.max(0, overflow + 120); // 120px padding at the end
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[
            { name: "React Calculator", cat: "Web App", tools: "React, Tailwind CSS" },
            { name: "MovieFinder App", cat: "Web App", tools: "JavaScript, OMDB API" },
            { name: "Expense Tracker", cat: "Web App", tools: "React" },
            { name: "AI Chatbot", cat: "AI App", tools: "React, Node.js, Express, Gemini API" },
            { name: "To-Do Productivity", cat: "Web App", tools: "HTML, CSS, JS" }
          ].map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.cat}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image="/images/placeholder.webp" alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
