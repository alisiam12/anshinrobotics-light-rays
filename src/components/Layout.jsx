import LightRays from "./LightRays";

export default function Layout({ children }) {
  return (
    <div
      className="w-full min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-900"
      style={{
        height: "100dvh",
        background: "linear-gradient(180deg, #1e293b 0%, #0f172a 100%)",
      }}
    >
      {/* Background Light Rays Animation - Full Screen */}
      <div className="absolute inset-0 w-full h-full z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={1.2}
          rayLength={1.5}
          followMouse={true}
          mouseInfluence={0.05}
          noiseAmount={0.1}
          distortion={0.05}
          className="w-full h-full"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
        {children}
      </div>

      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none z-5"></div>
    </div>
  );
}
