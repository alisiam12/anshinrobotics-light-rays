export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 ease-out bg-black rounded-full hover:bg-gray-800 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-500/50 shadow-2xl hover:shadow-gray-500/25 ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 rounded-full bg-gray-700 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
    </button>
  );
}
