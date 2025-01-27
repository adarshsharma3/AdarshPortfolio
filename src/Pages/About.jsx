import React, { useEffect, useRef, useState } from 'react';
import luffy from '../assets/oneP.gif';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const headingRef = useRef(null);
    const imageRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        if (headingRef.current) observer.observe(headingRef.current);
        if (imageRef.current) observer.observe(imageRef.current);
        if (contentRef.current) observer.observe(contentRef.current);

        return () => {
            if (headingRef.current) observer.unobserve(headingRef.current);
            if (imageRef.current) observer.unobserve(imageRef.current);
            if (contentRef.current) observer.unobserve(contentRef.current);
        };
    }, []);

    return (
        <div className="h-60% w-full flex flex-col bg-black text-white pt-20 pr-20 overflow-x-hidden">
            {/* Heading */}
            <div
                ref={headingRef}
                className={`text-center mb-10 ${
                    isVisible ? 'fade-slide-in-heading' : ''
                }`}
            >
                <h1 className="text-3xl sm:text-6xl font-bold">About Me</h1>
            </div>

            <div className="flex flex-col md:flex-row">
                {/* Left Section with Image */}
                <div
                    ref={imageRef}
                    className={`md:flex-1 mb-4 md:mb-0 md:mr-4 flex justify-center items-center ${
                        isVisible ? 'fade-slide-in-image' : ''
                    }`}
                >
                    <img
                        src={luffy}
                        alt=" GIF"
                        className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                    />
                </div>

                {/* Right Section with Text */}
                <div
                    ref={contentRef}
                    className={`md:flex-1 flex flex-col justify-start overflow-y-auto h-full mt-8 ${
                        isVisible ? 'fade-slide-in' : ''
                    }`}
                >
                    <h1 className="text-2xl font-bold mb-4">Hey There!</h1>
                    <p className="mb-4">
                        I'm <strong>Adarsh Sharma</strong>, a passionate Web Developer with a love for problem-solving and UI/UX designing. 
                    </p>
                    <p className="mb-4">
                        Currently pursuing Computer Science Engineering at <strong>JIIT Noida</strong> with a current CGPA of <strong>7.7</strong>.
                    </p>
                    <p className="mb-4">
                        When I'm not coding or designing user interfaces, you'll find me engaged in sports. I'm excited to connect and explore new opportunities!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
