import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { motion } from "framer-motion";
import { FaLeaf, FaHeart, FaUtensils, FaShoppingBag } from "react-icons/fa";

/* =========================
   FLOATING FOOD IMAGE
========================= */

function FloatingFood({
  image,
  position = [0, 0, 0],
  size = 3,
  speed = 1,
  movement = 0.15,
}) {
  const foodRef = useRef();
  const texture = useTexture(image);

  useFrame((state) => {
    if (!foodRef.current) return;

    const time = state.clock.elapsedTime;

    foodRef.current.position.y =
      position[1] + Math.sin(time * speed) * movement;

    foodRef.current.position.x =
      position[0] + Math.cos(time * speed * 0.7) * 0.08;

    const scale = 1 + Math.sin(time * speed) * 0.025;

    foodRef.current.scale.set(
      size * scale,
      size * scale,
      1
    );
  });

  return (
    <mesh ref={foodRef} position={position}>
      <planeGeometry args={[1, 1]} />

      <meshBasicMaterial
        map={texture}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
}

/* =========================
   FLOATING PARTICLES
========================= */

function FloatingParticles() {
  const particlesRef = useRef();

  const positions = new Float32Array([
    -4, 2, 0,
    -3, 0.5, 0,
    -2, 2.5, 0,
    -1, -2, 0,
    0, 2.2, 0,
    1.5, -2.2, 0,
    2.5, 2, 0,
    3.5, 0.5, 0,
    4, -1.5, 0,
    -3.5, -2, 0,
  ]);

  useFrame((state) => {
    if (!particlesRef.current) return;

    particlesRef.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.5) * 0.12;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.07}
        color="#ffe866"
        transparent
        opacity={0.8}
      />
    </points>
  );
}

/* =========================
   THREE.JS MENU SCENE
========================= */

function MenuScene() {
  return (
    <>
      <ambientLight intensity={2} />

      <FloatingFood
        image="/img/ray.png"
        position={[0, 0, 0]}
        size={4.8}
        speed={1.3}
        movement={0.18}
      />

      <FloatingFood
        image="/img/brownie.png"
        position={[-1.7, -1.1, 0.3]}
        size={2.2}
        speed={1.8}
        movement={0.22}
      />

      <FloatingFood
        image="/img/matcha.png"
        position={[1.8, 1.1, 0.2]}
        size={2}
        speed={1.6}
        movement={0.2}
      />

      <FloatingFood
        image="/img/bread.png"
        position={[2, -1.5, 0.4]}
        size={1.5}
        speed={2}
        movement={0.25}
      />

      <FloatingParticles />
    </>
  );
}

/* =========================
   MENU DATA - 10 DISHES
========================= */

const menu = [
  {
    id: 1,
    name: "Classic Cheeseburger",
    category: "Burgers",
    desc: "Juicy grilled patty, melted cheese, fresh lettuce and special sauce.",
    price: "$8.90",
    image: "/img/buger.png",
  },
  {
    id: 2,
    name: "Chripy Cheese Rolls",
    category: "Burgers",
    desc: "Crispy chicken fillet with fresh vegetables and creamy mayo.",
    price: "$9.50",
    image: "/img/rolls.png",
  },
  {
    id: 3,
    name: "Loaded French Fries",
    category: "Snacks",
    desc: "Golden crispy fries topped with cheese, herbs and special seasoning.",
    price: "$5.50",
    image: "/img/fries.png",
  },
  {
    id: 4,
    name: "Margherita Pizza",
    category: "Pizza",
    desc: "Fresh tomato sauce, mozzarella cheese and aromatic basil.",
    price: "$11.90",
    image: "/img/ray.png",
  },
  {
    id: 5,
    name: "Chocolate Brownie",
    category: "Desserts",
    desc: "Soft chocolate brownie served with rich chocolate sauce.",
    price: "$6.50",
    image: "/img/brownie.png",
  },
  {
    id: 6,
    name: "Strawberry Cheesecake",
    category: "Desserts",
    desc: "Creamy cheesecake with fresh strawberry topping and berry sauce.",
    price: "$7.90",
    image: "/img/cake.png",
  },
  {
    id: 7,
    name: "Cold Coffee",
    category: "Drinks",
    desc: "Chilled creamy coffee blended with milk and premium coffee beans.",
    price: "$4.90",
    image: "/img/matcha.png",
  },
  {
    id: 8,
    name: "Fresh Fruit Shake",
    category: "Drinks",
    desc: "Refreshing fruit shake prepared with fresh seasonal fruits.",
    price: "$5.90",
    image: "/img/mojito.png",
  },
  {
    id: 9,
    name: "Veggie Sandwich",
    category: "Sandwich",
    desc: "Fresh vegetables, cheese and homemade sauce inside toasted bread.",
    price: "$7.50",
    image: "/img/sand.png",
  },
  {
    id: 10,
    name: "Chocolate Macarons",
    category: "Desserts",
    desc: "Soft almond cookies filled with delicious chocolate cream.",
    price: "$6.90",
    image: "/img/cake.png",
  },
];

/* =========================
   MENU COMPONENT
========================= */

export default function Menu() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="
        relative
        isolate
        min-h-screen
        overflow-hidden
        bg-[#01544A]
        py-20
        text-white
      "
    >
      {/* Background Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(
              circle,
              #ffe866 1.5px,
              transparent 1.5px
            )
          `,
          backgroundSize: "35px 35px",
        }}
      />

      {/* Animated Glow */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-48
          -top-48
          h-[600px]
          w-[600px]
          rounded-full
          bg-[#ffe866]/20
          blur-3xl
        "
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, -30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -bottom-48
          -right-48
          h-[600px]
          w-[600px]
          rounded-full
          bg-orange-400/20
          blur-3xl
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-[#ffe866]
              px-5
              py-2
              text-sm
              font-bold
              uppercase
              tracking-[0.2em]
              text-[#01544A]
            "
          >
            <FaUtensils />
            Our Special Menu
          </span>

          <h1
            className="
              text-4xl
              font-black
              leading-tight
              text-[#ffe866]
              sm:text-5xl
              md:text-7xl
            "
          >
            Delicious Food
            <br />
            For Every Mood
          </h1>

          <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg">
            Explore our delicious collection of freshly prepared dishes.
            Every plate is made with premium ingredients and lots of love.
          </p>
        </motion.div>

        {/* Main Showcase */}
        <div className="mb-20 grid items-center gap-10 lg:grid-cols-2">
          {/* Three.js Image */}
          <motion.div
            initial={{ opacity: 0, x: -80, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative h-[390px] w-full sm:h-[480px]"
          >
            <div
              className="
                absolute
                bottom-10
                left-1/2
                h-10
                w-64
                -translate-x-1/2
                rounded-full
                bg-black/30
                blur-2xl
              "
            />

            <Canvas
              camera={{
                position: [0, 0, 7],
                fov: 45,
              }}
              dpr={[1, 1.5]}
            >
              <MenuScene />
            </Canvas>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                bottom-2
                left-1/2
                -translate-x-1/2
                rounded-full
                border
                border-[#ffe866]/40
                bg-[#003c35]/80
                px-5
                py-2
                text-xs
                font-bold
                tracking-widest
                text-[#ffe866]
                backdrop-blur-md
                sm:text-sm
              "
            >
              FRESHLY PREPARED
            </motion.div>
          </motion.div>

          {/* Intro Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-orange-300">
              Made With Love
            </p>

            <h2 className="text-4xl font-black leading-tight text-white sm:text-5xl">
              Taste the
              <br />
              <span className="text-[#ffe866]">Difference</span>
            </h2>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
              From juicy burgers to creamy desserts, our menu is created to
              make every bite special.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-5">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-[#ffe866] p-3 text-[#01544A]">
                  <FaLeaf />
                </span>
                <span className="text-sm font-semibold">
                  Fresh Ingredients
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="rounded-full bg-[#ffe866] p-3 text-[#01544A]">
                  <FaHeart />
                </span>
                <span className="text-sm font-semibold">
                  Made With Love
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="rounded-full bg-[#ffe866] p-3 text-[#01544A]">
                  <FaUtensils />
                </span>
                <span className="text-sm font-semibold">
                  Premium Taste
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="rounded-full bg-[#ffe866] p-3 text-[#01544A]">
                  <FaShoppingBag />
                </span>
                <span className="text-sm font-semibold">
                  Quick Service
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Menu Cards Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-300">
              Explore Our Dishes
            </p>

            <h2 className="mt-2 text-3xl font-black text-[#ffe866] sm:text-4xl">
              Our Popular Menu
            </h2>
          </div>

          <p className="max-w-md text-sm text-white/60">
            Choose your favorite dish and enjoy a delicious food experience.
          </p>
        </motion.div>

        {/* 10 Dish Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menu.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -10,
              }}
              className="
                group
                overflow-hidden
                rounded-[2rem]
                border
                border-white/15
                bg-white/10
                shadow-2xl
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-[#ffe866]/70
                hover:bg-white/15
              "
            >
              {/* Image */}
              <div className="relative flex h-64 items-center justify-center overflow-hidden bg-[#003c35]/60">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,232,102,0.15),transparent_65%)]" />

                <motion.img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  whileHover={{
                    scale: 1.12,
                    rotate: 3,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="
                    relative
                    z-10
                    h-52
                    w-52
                    object-contain
                    drop-shadow-2xl
                  "
                />

                <span
                  className="
                    absolute
                    right-4
                    top-4
                    rounded-full
                    bg-[#ffe866]
                    px-3
                    py-1
                    text-xs
                    font-bold
                    text-[#01544A]
                  "
                >
                  {item.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-bold text-white">
                    {item.name}
                  </h3>

                  <span className="whitespace-nowrap rounded-full bg-[#ffe866] px-3 py-1 text-sm font-black text-[#01544A]">
                    {item.price}
                  </span>
                </div>

                <p className="mt-4 min-h-[72px] text-sm leading-relaxed text-white/65">
                  {item.desc}
                </p>

                {/* <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    mt-5
                    w-full
                    rounded-full
                    bg-[#ffe866]
                    px-5
                    py-3
                    text-sm
                    font-bold
                    text-[#01544A]
                    transition-colors
                    duration-300
                    hover:bg-white
                  "
                >
                  Add to Cart
                </motion.button> */}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}