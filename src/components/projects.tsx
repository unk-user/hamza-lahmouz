import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    name: "Shopify Storefront",
    github: "https://github.com/unk-user/shopify-storefront",
    thumbnail: "/images/shopify-storefront.png",
  },
  {
    name: "Lingo",
    github: "https://github.com/unk-user/lingo",
    thumbnail: "/images/lingo.png",
  },
  {
    name: "Uroom",
    github: "https://github.com/unk-user/student-rent",
    thumbnail: "/images/uroom.png",
  },
];

export function Projects() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <div className="grid w-full grid-cols-3 max-sm:grid-cols-1 gap-2" ref={containerRef}>
      {projects.map(({ name, github, thumbnail }, index) => (
        <motion.a
          variants={{
            hidden: { y: "50%", opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 1.2,
                delay: index * 0.1,
              },
            },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          href={github}
          key={name}
          title={name}
          className="aspect-[3/2] w-full overflow-hidden rounded-sm"
          target="_blank"
        >
          <img
            src={thumbnail}
            alt={name}
            className="h-full w-full object-cover opacity-60 transition-opacity duration-200 hover:opacity-100"
            decoding="sync"
            loading="eager"
          />
        </motion.a>
      ))}
    </div>
  );
}
