const Hero: React.FC = () => (
<section className="min-h-screen flex items-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white pt-20">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
<div>
<h2 className="text-4xl md:text-5xl font-bold mb-6">
Your Gateway to International Education
</h2>
<p className="mb-6 text-lg">
We connect students with trusted universities and agents worldwide.
</p>
<a
href="#contact"
className="inline-block bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100"
>
Get Started
</a>
</div>
<div>
<img
src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
alt="Students"
className="rounded-xl shadow-lg"
/>
</div>
</div>
</section>
);

export default Hero;