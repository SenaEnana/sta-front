import { HashLink } from 'react-router-hash-link';

const services = [
    {
        title: "Smart Home Matching",
        description: "Our system pairs students with the perfect local tutor based on learning style, location, and academic goals.",
        icon: "🏠"
    },
    {
        title: "Verified Instructors",
        description: "Safety first. Every teacher undergoes rigorous background checks and credential verification for secure in-home sessions.",
        icon: "✅"
    },
    {
        title: "Curriculum Sync",
        description: "Home lessons are aligned with school syllabi to ensure students stay ahead in class while filling individual learning gaps.",
        icon: "📚"
    },
    {
        title: "Real-Time Tracking",
        description: "Monitor application status, lesson schedules, and student progress reports all in one centralized dashboard.",
        icon: "📊"
    },
];

const Services: React.FC = () => (
    <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-16">
                <h3 className="text-amber-600 font-bold tracking-wide uppercase text-2xl">Our Expertise</h3>
                <h2 className="text-4xl font-extrabold text-gray-900 mt-2">
                    Empowering Education Through Expert Home Tutoring
                </h2>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
                    We bridge the gap between classroom learning and home study with a seamless, secure, and professional system.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-20">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h4 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                        <span className="w-8 h-1 bg-amber-500 rounded mr-3"></span>
                        For Teachers
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Turn your passion for teaching into a career. Simply create an account,
                        provide your credentials, and our system will match you with students
                        that fit your expertise and schedule—no time wasted searching.
                    </p>
                    <p className="italic font-medium text-amber-600 bg-amber-50 p-3 rounded-lg border-l-4 border-amber-400">
                        "Share your knowledge to build a better future for the next generation."
                    </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h4 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                        <span className="w-8 h-1 bg-indigo-500 rounded mr-3"></span>
                        For Students & Parents
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Finding the perfect home tutor is now simple. Whether you are a student
                        striving for excellence or a parent seeking quality education for your child,
                        we provide verified, high-quality teachers tailored to your specific needs.
                    </p>
                    <p className="italic font-medium text-amber-600 bg-amber-50 p-3 rounded-lg border-l-4 border-amber-400">
                        "Work With Us For a Better Learning Experience!"
                    </p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl border border-gray-100"
                    >
                        <div className="text-4xl mb-4">{service.icon}</div>
                        <h4 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                    </div>
                ))}
            </div>

            <div className="mt-16 text-center">
                <button className="bg-amber-500 text-black px-8 py-3 rounded-full cursor-pointer font-semibold hover:bg-amber-700 transition shadow-lg">
                    <HashLink to="/signup">Get Started Today</HashLink>
                </button>
            </div>
        </div>
    </section>
);

export default Services;