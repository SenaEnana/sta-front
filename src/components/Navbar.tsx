const Navbar: React.FC = () => (
<nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-amber-200 to-indigo-300 shadow z-50">
<div className="max-w-7xl mx-auto flex justify-between items-center p-4">
<h1 className="text-xl font-bold text-gray-700">Student Teacher Agent System</h1>
<ul className="hidden md:flex space-x-6">
<li><a href="#about" className="text-black hover:text-amber-600">About</a></li>
<li><a href="#services" className="text-black hover:text-amber-600">Services</a></li>
<li><a href="#contact" className="text-black hover:text-amber-600">Contact</a></li>
</ul>
</div>
</nav>
);

export default Navbar;