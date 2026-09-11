"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { Float, Environment, OrbitControls } from "@react-three/drei";

function FloatingFood() {
  return (
    <Float
      speed={2}
      rotationIntensity={1.5}
      floatIntensity={2}
    >
      <mesh rotation={[0.3, 0.5, 0.2]}>
        <torusGeometry args={[0.7, 0.18, 24, 48]} />

        <meshStandardMaterial
          color="#ff9d00"
          metalness={0.4}
          roughness={0.25}
        />
      </mesh>
    </Float>
  );
}

function Hero3D() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 4],
        fov: 45,
      }}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <ambientLight intensity={2} />

      <directionalLight
        position={[3, 3, 3]}
        intensity={4}
      />

      <Environment preset="sunset" />

      <FloatingFood />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={2}
      />
    </Canvas>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Top Circle */}
      <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full border-8 border-orange-300/20" />

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[100px]" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-10 px-5 pt-28 md:grid-cols-2 md:px-10">

        {/* LEFT */}
        <div className="relative z-20">

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-orange-400">
            Welcome to UrbanBites
          </p>

          <h1 className="text-5xl font-black leading-[1.05] text-orange-500 sm:text-6xl lg:text-7xl">
            Delicious Food
            <br />
            Is Waiting
            <br />
            <span className="text-white">
              For You
            </span>
          </h1>

          <p className="my-6 max-w-xl text-base leading-7 text-gray-300 sm:text-lg">
            Freshly prepared, full of flavour, and made to satisfy
            every craving. Discover delicious food made fresh at
            UrbanBites.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="rounded-full bg-orange-500 px-7 py-3 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-orange-400">
              Order Now
            </button>

            <button className="rounded-full border border-white/20 bg-white/5 px-7 py-3 font-bold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/10">
              Explore Menu
            </button>
          </div>

          <div className="mt-10 flex gap-8">
            <div>
              <h3 className="text-2xl font-black text-white">
                50+
              </h3>
              <p className="text-sm text-gray-400">
                Food Items
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-black text-white">
                4.9
              </h3>
              <p className="text-sm text-gray-400">
                Customer Rating
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-black text-white">
                24/7
              </h3>
              <p className="text-sm text-gray-400">
                Fresh Taste
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex min-h-[500px] items-center justify-center">

          {/* HERO IMAGE */}
          <img
            src="/img/hero.png"
            alt="UrbanBites delicious food"
            className="relative z-10 w-full max-w-[550px] drop-shadow-[0_30px_40px_rgba(0,0,0,0.5)]"
          />

          {/* THREE JS - VISIBLE */}
          <div className="absolute right-0 top-0 z-20 h-40 w-40">
            <Hero3D />
          </div>

          {/* Another Three.js object */}
          <div className="absolute bottom-5 left-0 z-20 h-32 w-32">
            <Hero3D />
          </div>

          {/* Badge */}
          <div className="absolute right-0 top-32 z-30 rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-white shadow-xl backdrop-blur-md">
            <p className="text-xs text-gray-300">
              Fresh & Hot
            </p>

            <p className="font-black text-orange-400">
              Made Daily 🔥
            </p>
          </div>

        </div>
      </div>

      {/* Bottom Circle */}
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full border-8 border-orange-300/20" />

    </section>
  );
}

export default Hero;