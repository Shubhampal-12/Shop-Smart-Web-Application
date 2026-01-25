// src/components/Heropage.jsx

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowLeft, ArrowRight } from "lucide-react";

import tend1 from "../assets/tend1.avif";
import tend2 from "../assets/tend2.jpg";
import tend3 from "../assets/tend3.jpg";
import tend4 from "../assets/tend4.jpg";
import tend5 from "../assets/tend5.jpg";

import Navbar from "./Navbar";

const team = [
  { name: "Ava Sinclair", role: "Creative Director", img: tend2 },
  { name: "Saanvi", role: "  Director", img: tend3 },
  { name: "Raha Sinclair", role: " Director", img: tend4 },
  { name: "Sophia Sinclair", role: " Director", img: tend5 },
  { name: "Amelia Slide", role: "Special", img: tend1 },
];


/* -------------------------
   ✓ Marquee Reveal Animation
-------------------------*/
const animateSlide = (slideNumber, reveal) => {
  const marquee = document.querySelector(`.t-${slideNumber}.marquee-wrapper`);

  if (!marquee) return;

  const clipPathValue = reveal
    ? "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" // open
    : "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)"; // closed

  gsap.to(marquee, {
    clipPath: clipPathValue,
    duration: 2.2,
    ease: "power7.out",
    delay: 2.2,
  });
};

export default function Heropage() {
  const heroRef = useRef(null);
  const cursorRef = useRef(null);
  const colorLayerRef = useRef(null);
  const colorWipeRef = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(1);
  const [cursorDirection, setCursorDirection] = useState("right");

  const totalSlides = team.length;

  /* -------------------------
      Auto Marquee Movement
  --------------------------*/
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".marquee-text", {
        xPercent: -100,
        repeat: -1,
        ease: "linear",
        duration: 12,
      });
    });
    return () => ctx.revert();
  }, []);

  /* -------------------------
      Cursor Animation
  --------------------------*/
  useEffect(() => {
    const hero = heroRef.current;
    const cursor = cursorRef.current;
    if (!hero || !cursor) return;

    const onMove = (e) => {
      gsap.to(cursor, {
        left: e.clientX - 70,
        top: e.clientY - 80,
        duration: 0.15,
        ease: "power3.out",
      });

      const winHalf = window.innerWidth / 2;

      if (e.clientX > winHalf) {
        setCursorDirection("right");
      } else {
        setCursorDirection("left");
      }
    };

    const onEnter = () => {
      gsap.to(cursor, { opacity: 1, scale: 1 });
    };

    const onLeave = () => {
      gsap.to(cursor, { opacity: 0, scale: 0.85 });
    };

    hero.addEventListener("mousemove", onMove);
    hero.addEventListener("mouseenter", onEnter);
    hero.addEventListener("mouseleave", onLeave);

    return () => {
      hero.removeEventListener("mousemove", onMove);
      hero.removeEventListener("mouseenter", onEnter);
      hero.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  /* -------------------------
      On Click → Change Slide
  --------------------------*/
  const handleScreenClick = (e) => {
    const half = window.innerWidth / 2;

    if (e.clientX > half && currentSlide < totalSlides) {
      animateSlide(currentSlide + 1, true); // reveal next
      animateSlide(currentSlide, false); // hide current
      setCurrentSlide((p) => p + 1);
    } else if (e.clientX <= half && currentSlide > 1) {
      animateSlide(currentSlide - 1, true); // reveal previous
      animateSlide(currentSlide, false); // hide current
      setCurrentSlide((p) => p - 1);
    }
  };

  /* -------------------------
     Background Wipe
  --------------------------*/
  useEffect(() => {
    const layer = colorLayerRef.current;
    const wipe = colorWipeRef.current;
    if (!layer || !wipe) return;

    gsap.set(wipe, { y: "100%" });
    gsap.to(wipe, {
      y: "0%",
      duration: 0.9,
      ease: "power2.out",
      onComplete: () => {
        gsap.set(wipe, { y: "100%" });
      },
    });
  }, [currentSlide]);

  return (
    <div
      className="main-wrapper relative text-center w-full min-h-screen overflow-hidden select-none"
    >
      <div ref={colorLayerRef} className="bg-layer" />
      <div ref={colorWipeRef} className="bg-wipe" />

      <div className="px-6 md:px-10  relative z-40">
        <Navbar />
      </div>
      <hr className=" relative bg-black "  />

      {/* Hero */}
      <div
        ref={heroRef}
        className="relative mt-4 w-full h-[500px] md:h-screen overflow-hidden"
         onClick={handleScreenClick}
      >
        {/* MULTIPLE MARQUEE WRAPPERS */}
        {team.map((_, i) => (
          <div
            key={i}
            className={`marquee-wrapper t-${i + 1} absolute top-[8%] left-0 w-full overflow-hidden whitespace-nowrap select-none pointer-events-none`}
          >
            <p className="marquee-text text-[160px] mt-[65px] md:text-[200px] font-bold uppercase  tracking-tight text-black">
              SHOP-SMART SHOP-SMART SHOP-SMART SHOP-SMART SHOP-SMART
            </p>

        {/* Center Image */}
        <div className="absolute inset-0 flex justify-center z-20select-none ">
          <div className="relative w-[337px] md:w-[560px] h-[434px] md:h-[540px] rounded-2xl shadow-2xl overflow-hidden bg-black">
            <img
              key={team[currentSlide - 1].img}
              src={team[currentSlide - 1].img}
              className="object-cover w-full h-full "
            />
          </div>
        </div>
          </div>
        ))}


        {/* Info */}
        <div className="absolute  bottom-0 left-6 md:left-12 lg:bottom-32  z-40 text-left">
          <p className="text-3xl md:text-4xl font-bold text-black">
            {team[currentSlide - 1].name}
          </p>
          <p className="text-lg md:text-xl opacity-70 text-black">
            {team[currentSlide - 1].role}
          </p>
        </div>

        {/* Custom Cursor */}
        <div
          ref={cursorRef}
          className="pointer-events-none fixed top-0 left-0 w-[56px] h-[56px] rounded-full bg-black/10 backdrop-blur-md flex items-center justify-center z-[999]"
          style={{ opacity: 0, scale: 0.8 }}
        >
          {cursorDirection === "right" ? (
            <ArrowRight />
          ) : (
            <ArrowLeft />
          )}
        </div>
      </div>
    </div>
  );
}
