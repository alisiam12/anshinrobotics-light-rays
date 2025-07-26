import Image from "next/image";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
      {/* Logo */}
      <div className="mb-20">
        <Image
          src="/logo.svg"
          alt="Anshin Robotics Logo"
          width={250}
          height={120}
          className="mx-auto drop-shadow-2xl"
          priority
        />
      </div>

      {/* Main Headline */}
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
        Shaping What&apos;s <span className="text-white">Next</span>.
      </h1>

      {/* Subtext */}
      <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
        Redefining assistive technology through empathy and precision.
      </p>

      {/* CTA Button */}
      <Button>Discover Our Vision</Button>
    </div>
  );
}
