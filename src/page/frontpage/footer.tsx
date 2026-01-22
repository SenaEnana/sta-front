import React from 'react';

const Footer: React.FC = () => (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 border-b border-gray-800 pb-12">

            <div className="text-left">
                <h4 className="text-white text-xl font-bold mb-4">DTS</h4>
                <p className="text-sm leading-relaxed mb-4">
                    The Doorstep Tutors System (DTS) is dedicated to bridging
                    the gap between expert instructors and students for high-quality,
                    personalized home education.
                </p>
            </div>
            <div className="text-left">
                <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:text-amber-500 transition">Home</a></li>
                    <li><a href="#about" className="hover:text-amber-500 transition">About Us</a></li>
                    <li><a href="#services" className="hover:text-amber-500 transition">Services</a></li>
                    <li><a href="#contact" className="hover:text-amber-500 transition">Contact Support</a></li>
                </ul>
            </div>
            <div className="text-left">
                <h4 className="text-white text-lg font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:text-amber-500 transition">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-amber-500 transition">Terms of Service</a></li>
                    <li><a href="#" className="hover:text-amber-500 transition">Teacher Guidelines</a></li>
                </ul>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-8 text-center md:flex md:justify-between items-center text-xs text-gray-500 uppercase tracking-widest">
            <p>© 2026 Doorstep Tutors System. All rights reserved.</p>
            <p className="mt-4 md:mt-0">
                Developed with ❤️ by <span className="text-amber-500 font-bold">Sena Adane</span>
            </p>
        </div>
    </footer>
);

export default Footer;