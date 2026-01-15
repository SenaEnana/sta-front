import React from 'react';

const Contact: React.FC = () => (
    <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-amber-600 mb-4">Get In Touch</h3>
                <p className="text-gray-600">Have questions? Our agent team is here to help you find the perfect match.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
                <div className="space-y-8">
                    <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h4>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <span className="bg-amber-100 p-3 rounded-full text-amber-600">📍</span>
                                <div>
                                    <p className="text-sm font-bold text-gray-900">Our Location</p>
                                    <p className="text-sm text-gray-600">Mexico, Addis Ababa</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <span className="bg-indigo-100 p-3 rounded-full text-indigo-600">📧</span>
                                <div>
                                    <p className="text-sm font-bold text-gray-900">Email Us</p>
                                    <p className="text-sm text-gray-600">senaenana9@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-amber-600 p-6 rounded-2xl text-white">
                        <h5 className="font-bold mb-2">Support Hours</h5>
                        <p className="text-sm opacity-90">Monday — Friday: 9am - 5pm</p>
                        <p className="text-sm opacity-90">Weekend: 9am - 12pm</p>
                    </div>
                </div>

                <div className="lg:col-span-2">
                    <form className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                            <select className="w-full border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition bg-white">
                                <option>General Inquiry</option>
                                <option>Teacher Registration</option>
                                <option>Parent/Student Support</option>
                                <option>Billing Questions</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea
                                placeholder="How can we help you today?"
                                className="w-full border border-gray-200 p-3 rounded-lg h-32 focus:ring-2 focus:ring-amber-500 outline-none transition"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full md:w-auto bg-amber-500 text-black cursor-pointer font-bold px-10 py-4 rounded-xl hover:bg-amber-600 transition-all shadow-md hover:shadow-lg active:scale-95"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
);

export default Contact;