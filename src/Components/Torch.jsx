import { useEffect, useState } from "react";

export default function Torch() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[9999] mix-blend-screen"
      style={{
   background: `
radial-gradient(
  circle 500px at ${position.x}px ${position.y}px,
  rgba(0,255,255,.15) 0%,
  rgba(0,120,255,.18) 30%,
  rgba(153,69,255,.14) 55%,
  transparent 80%
)
`
      }}
    />
  );
}