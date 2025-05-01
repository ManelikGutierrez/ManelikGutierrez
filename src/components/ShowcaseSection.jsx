import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

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
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  
  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          
          {/*Project Blackhole Here */}
          <div ref={rydeRef} className="Black-Hole-project-wrapper">
          <a href="https://github.com/BobaTino/RayTrace_BlackHole/tree/baseCode" >
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Black Hole RayTracer" />
            </div>
            <div className="text-content">
              
              <h2>
                Relativistic Black Hole Renderer with Particle-Based Accretion Disk in JCuda
              </h2>
              <p className="text-white-50 md:text-xl">
              This project is a GPU-accelerated black hole renderer using JCuda 
              and custom CUDA kernels to simulate relativistic light bending and 
              particle-based accretion disks. It supports textured 3D models via 
              OBJ files and renders cinematic animations with customizable camera paths. 
              </p>
            </div>
              </a>
          </div>
          
          <div className="project-list-wrapper overflow-hidden">
            <a href="https://github.com/Mclovin0213/fash_dash_app/tree/final_product">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project3.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2>Fash Dash</h2>
              <p>
              Fash Dash is a fashion focused platform that leverages machine learning, image classification, and 
              user interaction to enhance the user's experience with clothing recommendations. 
              It includes features like swiping through dress recommendations, classifying clothing items, 
              managing a lookbook, and viewing liked or starred items.
              </p>
            </div>
            </a>

          {/*Project of M5 Core*/}
          <a href="https://github.com/ManelikGutierrez/M5-walkie-talkie.git">
            <div className="project" ref={ycDirectoryRef}>
              
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project2.png" alt="UTalk" />
              </div>
              <h2>UTalk</h2>
            </div>
          </a>  
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;