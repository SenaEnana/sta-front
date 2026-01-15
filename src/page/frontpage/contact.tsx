const Contact: React.FC = () => (
    <section id="contact" className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6">
            <h3 className="text-3xl font-bold text-center mb-8">Contact Us</h3>
            <form className="bg-white p-8 rounded-xl shadow space-y-6">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border p-3 rounded"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full border p-3 rounded"
                />
                <textarea
                    placeholder="Your Message"
                    className="w-full border p-3 rounded h-32"
                ></textarea>
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
                >
                    Send Message
                </button>
            </form>
        </div>
    </section>
);

export default Contact;