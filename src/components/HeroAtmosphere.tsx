"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

type DustFieldProps = {
  count: number;
  animate: boolean;
};

function DustField({ count, animate }: DustFieldProps) {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, seeds } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const seeds = new Float32Array(count);
    for (let i = 0; i < count; i += 1) {
      const seed = (i * 9301 + count * 49297) % 233280;
      const random = (offset: number) =>
        ((seed + offset * 7919) % 233280) / 233280;
      positions[i * 3] = (random(1) - 0.5) * 26;
      positions[i * 3 + 1] = (random(2) - 0.5) * 14;
      positions[i * 3 + 2] = (random(3) - 0.5) * 8;
      seeds[i] = random(4) * Math.PI * 2;
    }
    return { positions, seeds };
  }, [count]);

  useFrame((state) => {
    if (!animate) return;
    const points = pointsRef.current;
    if (!points) return;
    const attr = points.geometry.getAttribute("position") as THREE.BufferAttribute;
    const arr = attr.array as Float32Array;
    const t = state.clock.elapsedTime;
    for (let i = 0; i < count; i += 1) {
      const i3 = i * 3;
      arr[i3 + 1] += 0.0035;
      arr[i3] += Math.sin(t * 0.25 + seeds[i]) * 0.0018;
      if (arr[i3 + 1] > 7) arr[i3 + 1] = -7;
    }
    attr.needsUpdate = true;
    points.rotation.z = Math.sin(t * 0.02) * 0.03;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#E8CD97"
        size={0.075}
        sizeAttenuation
        transparent
        opacity={0.55}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function HeroAtmosphere() {
  const [mounted, setMounted] = useState(false);
  const [supported, setSupported] = useState(false);
  const [animate, setAnimate] = useState(true);
  const [count, setCount] = useState(120);

  useEffect(() => {
    let idleId: number | undefined;
    const frameId = window.requestAnimationFrame(() => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const isSmall = window.matchMedia("(max-width: 768px)").matches;

      let webgl = false;
      try {
        const canvas = document.createElement("canvas");
        webgl = !!(
          window.WebGLRenderingContext &&
          (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
        );
      } catch {
        webgl = false;
      }

      setAnimate(!reduced);
      setCount(isSmall || reduced ? 60 : 130);
      setSupported(webgl);

      if (!webgl) return;

      const idle =
        (window as unknown as { requestIdleCallback?: (cb: () => void) => number })
          .requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 400));
      idleId = idle(() => setMounted(true));
    });

    return () => {
      window.cancelAnimationFrame(frameId);
      if (idleId !== undefined && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
    };
  }, []);

  if (!supported || !mounted) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[5]"
    >
      <Canvas
        dpr={[1, 1.6]}
        camera={{ position: [0, 0, 8], fov: 55 }}
        gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
        frameloop={animate ? "always" : "demand"}
      >
        <DustField count={count} animate={animate} />
      </Canvas>
    </div>
  );
}
