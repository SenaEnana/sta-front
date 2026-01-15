import React from 'react';

const services = [
    {
        title: "Smart Home Matching",
        description: "Our agent system pairs students with the perfect local tutor based on learning style, location, and academic goals.",
    },
    {
        title: "Verified Instructors",
        description: "Safety first. Every teacher undergoes rigorous background checks and credential verification for secure in-home sessions.",
    },
    {
        title: "Curriculum Sync",
        description: "Home lessons are aligned with school syllabi to ensure students stay ahead in class while filling individual learning gaps.",
    },
    {
        title: "Real-Time Tracking",
        description: "Monitor application status, lesson schedules, and student progress reports all in one centralized dashboard.",
    },
];

const Services: React.FC = () => (
    <section id="services" className="py-20 bg-gray-200">
        <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h3>
            <h3 className="fs-4 fw-bold text-dark mt-4 text-center">
                Empowering Education Through Expert Home Tutoring
            </h3>
            {/* Teacher Section */}
            <div className="mt-4">
                <h4 className="font-bold">For Teachers</h4>
                <p className="fs-5 ms-2 text-muted">
                    Turn your passion for teaching into a career. Simply create an account,
                    provide your credentials, and our system will match you with students
                    that fit your expertise and schedule—no time wasted searching.
                </p>
                <p className="fs-5 ms-2 italic text-primary">
                    "Share your knowledge to build a better future for the next generation."
                </p>
            </div>
            {/* Student/Parent Section */}
            <div className="mt-4">
                <h4 className="fw-bold">For Students & Parents</h4>
                <p className="fs-5 ms-2 text-muted">
                    Finding the perfect home tutor is now simple. Whether you are a student
                    striving for excellence or a parent seeking quality education for your child,
                    we provide verified, high-quality teachers tailored to your specific needs.
                </p>
                <p className="fs-5 ms-2 text-muted">
                    Sign up today to access our network of instructors and find the right
                    match in just a few clicks. Save time and study smarter.
                </p>
            </div>

            <p className="fs-4 text-center mt-5 fw-bold text-success">
                Work With Us For a Better Learning Experience!
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow border border-gray-100"
                    >
                        <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
                            {/* Optional: Add icons here later */}
                            <span className="text-blue-600 font-bold">{index + 1}</span>
                        </div>
                        <h4 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Services;




// const services = [
// {
// title: "Student Registration",
// description: "Easy onboarding and profile management for students.",
// },
// {
// title: "Agent Management",
// description: "Verified agents assisting students globally.",
// },
// {
// title: "Application Tracking",
// description: "Real-time updates on application status.",
// },
// ];


// const Services: React.FC = () => (
// <section id="services" className="py-20">
// <div className="max-w-7xl mx-auto px-6">
// <h3 className="text-3xl font-bold text-center mb-12">Our Services</h3>
// <div className="grid md:grid-cols-3 gap-8">
// {services.map((service, index) => (
// <div
// key={index}
// className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
// >
// <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
// <p className="text-gray-600">{service.description}</p>
// </div>
// ))}
// </div>
// </div>
// </section>
// );

// export default Services;