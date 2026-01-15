import React, { useState, useEffect } from "react";

const carouselData = [
    {
        src: "https://png.pngtree.com/png-vector/20230628/ourmid/pngtree-little-girl-reading-and-studying-illustration-png-image_7333845.png",
        title: "Personalized Home Learning",
        desc: "We match your child with expert tutors for a stress-free, effective study experience at home.",
    },
    {
        src: "https://www.pngall.com/wp-content/uploads/5/Education-Learning-PNG-Image.png",
        title: "Professional Academic Support",
        desc: "Access a network of verified instructors dedicated to academic excellence and student growth.",
    },
    {
        src: "https://e7.pngegg.com/pngimages/82/964/png-clipart-globe-with-educational-hat-illustration-distance-education-teacher-school-training-education-icon-miscellaneous-globe-thumbnail.png",
        title: "Global Standards, Local Tutors",
        desc: "Bridge the gap between international education standards and personalized 1-on-1 instruction.",
    },
    {
        src: "https://png.pngtree.com/png-vector/20210722/ourmid/pngtree-ready-for-study-illustration-with-bag-books-thropy-rocket-png-image_3628348.png",
        title: "Launch Your Teaching Career",
        desc: "Are you an educator? Join our platform to connect with students and share your expertise.",
    }
];

const Hero: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === carouselData.length - 1 ? 0 : prev + 1));
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="min-h-screen flex items-center bg-gradient-to-r from-amber-200 to-indigo-300 text-black pt-20">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

                <div className="z-10">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                        Your Gateway to International Education
                    </h2>
                    <p className="mb-8 text-lg font-medium opacity-90">
                        We connect students with trusted instructors for personalized home tutoring.
                    </p>
                    <a
                        href="#contact"
                        className="inline-block bg-amber-600 text-black px-8 py-3 rounded-full font-bold shadow-lg hover:bg-gray-100 transition-all hover:scale-105"
                    >
                        Get Started
                    </a>
                </div>

                <div className="relative w-full overflow-hidden rounded-2xl bg-white/20 backdrop-blur-sm p-4 h-[450px] flex items-center justify-center">
                    {carouselData.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 p-6 ${index === currentSlide ? "opacity-100" : "opacity-0"
                                }`}
                        >
                            <img
                                src={slide.src}
                                alt={slide.title}
                                className="max-h-[250px] w-auto mix-blend-multiply object-contain drop-shadow-2xl mb-6 transform transition-transform duration-700 hover:scale-110"
                            />
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{slide.title}</h3>
                                <p className="text-gray-800 font-medium">{slide.desc}</p>
                            </div>
                        </div>
                    ))}

                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {carouselData.map((_, idx) => (
                            <div
                                key={idx}
                                className={`h-2 w-2 rounded-full transition-all ${idx === currentSlide ? "bg-indigo-600 w-6" : "bg-gray-400"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
