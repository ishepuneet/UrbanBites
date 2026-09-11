import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, useTexture } from "@react-three/drei";

function FriesImage({
  image,
  position,
  scale = 4.5,
  speed = 1.5,
  floatIntensity = 0.8,
}) {
  const meshRef = useRef();
  const texture = useTexture(image);

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.elapsedTime;

    // Smooth floating
    meshRef.current.position.y =
      position[1] + Math.sin(time * speed) * 0.15;

    // Very subtle breathing effect
    const scaleValue =
      1 + Math.sin(time * speed * 0.8) * 0.015;

    meshRef.current.scale.set(
      scale * scaleValue,
      scale * scaleValue,
      1
    );
  });

  return (
    <Float
      speed={speed}
      floatIntensity={floatIntensity}
      rotationIntensity={0}
    >
      <mesh
        ref={meshRef}
        position={position}
      >
        <planeGeometry args={[1, 1]} />

        <meshBasicMaterial
          map={texture}
          transparent
          depthWrite={false}
        />
      </mesh>
    </Float>
  );
}

function FriesScene() {
  return (
    <>
      <FriesImage
        image="/img/fries.png"
        position={[-1.1, 0.1, 0]}
        scale={4.8}
        speed={1.5}
        floatIntensity={0.8}
      />

      <FriesImage
        image="/img/fries2.png"
        position={[1.2, -0.4, 0.2]}
        scale={3.8}
        speed={1.8}
        floatIntensity={1}
      />
    </>
  );
}

export default function Fries() {
  return (
    <section className="relative overflow-hidden py-20">

      {/* Orange Glow */}
      <div
        className="
          absolute
          -top-40
          -left-40
          w-[500px]
          h-[500px]
          rounded-full
          bg-orange-300/30
          blur-3xl
        "
      />

      {/* Blue Glow */}
      <div
        className="
          absolute
          -bottom-40
          -right-40
          w-[500px]
          h-[500px]
          rounded-full
          bg-blue-300/20
          blur-3xl
        "
      />

      <div
        className="
          relative
          z-10
          grid
          grid-cols-1
          md:grid-cols-2
          items-center
          gap-10
          px-6
          md:px-10
        "
      >

        {/* ================= FOOD ANIMATION ================= */}

        <div className="h-[450px] w-full">

          <Canvas
            camera={{
              position: [0, 0, 7],
              fov: 45,
            }}
            dpr={[1, 1.5]}
          >
            <ambientLight intensity={2} />

            <FriesScene />
          </Canvas>

        </div>

        {/* ================= CONTENT ================= */}

        <div className="max-w-2xl">

          <span
            className="
              inline-block
              mb-4
              text-orange-500
              font-semibold
              uppercase
              tracking-[0.3em]
              text-sm
            "
          >
            Crispy & Delicious
          </span>

          <h1
            className="
              text-5xl
              md:text-6xl
              lg:text-7xl
              font-bold
              leading-tight
              text-orange-700
            "
          >
            Best Potato
            <br />
            For French Fries
          </h1>

          <p
            className="
              mt-8
              max-w-xl
              text-lg
              md:text-2xl
              leading-relaxed
              text-gray-300
            "
          >
            Crispy on the outside, soft on the inside, and
            perfectly seasoned. Our golden French fries are
            the perfect side for every delicious meal.
          </p>

          <button
            className="
              mt-8
              rounded-full
              bg-orange-600
              px-8
              py-4
              font-semibold
              text-white
              shadow-lg
              shadow-orange-600/30
              transition
              duration-300
              hover:scale-105
              hover:bg-orange-500
            "
          >
            Order Fries
          </button>

        </div>

      </div>
    </section>
  );
}