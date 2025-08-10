import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGSAP = () => {
  const ref = useRef<HTMLElement>(null);

  const animateOnScroll = (selector: string, animation: gsap.TweenVars) => {
    if (ref.current) {
      gsap.fromTo(ref.current.querySelectorAll(selector), 
        { opacity: 0, y: 50 },
        {
          ...animation,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  };

  const staggerAnimation = (selector: string, delay = 0.1) => {
    if (ref.current) {
      gsap.fromTo(ref.current.querySelectorAll(selector),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  };

  return { ref, animateOnScroll, staggerAnimation };
};