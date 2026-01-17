import React from 'react';

const About: React.FC = () => {
    const values = [
        { title: "Integrity", desc: "Verified teachers and honest feedback." },
        { title: "Quality", desc: "Only the best instructors for our students." },
        { title: "Safety", desc: "Rigorous vetting for secure home sessions." },
        { title: "Success", desc: "Focused on measurable student growth." }
    ];

    return (
        <section id="about" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    <div>
                        <h3 className="text-2xl font-bold text-amber-600 uppercase tracking-widest mb-2">Our Story</h3>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Revolutionizing Home Education Through Connection
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            The Doorstep Tutors System (DTS) was born out of a simple need: to bridge the gap
                            between passionate educators and students seeking excellence. We provide a transparent,
                            secure, and efficient platform designed to solve the challenges of modern tutoring.
                        </p>
                        <p className="text-gray-600 mb-8">
                            By using our platform, you are supporting a system that values academic integrity
                            and professional growth for our community.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            {values.map((v, i) => (
                                <div key={i} className="border-l-4 border-amber-500 pl-4">
                                    <h5 className="font-bold text-gray-900">{v.title}</h5>
                                    <p className="text-sm text-gray-500">{v.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -top-4 -left-4 w-64 h-64 bg-amber-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                        <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                        <img
                            src="/student-teacher.png"
                            alt="Teacher helping student"
                            className="relative rounded-3xl shadow-2xl border-8 border-white object-cover w-full h-auto"
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm">
                        <div className="text-amber-600 text-3xl mb-4">🎯</div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h4>
                        <p className="text-gray-600">
                            To empower students with high-quality, personalized instruction in the safety
                            of their homes, while creating career opportunities for skilled teachers.
                        </p>
                    </div>

                    <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm">
                        <div className="text-indigo-600 text-3xl mb-4">👁️</div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h4>
                        <p className="text-gray-600">
                            To become the most trusted educational agent system globally, making elite 1-on-1
                            tutoring accessible and simple for every household.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;