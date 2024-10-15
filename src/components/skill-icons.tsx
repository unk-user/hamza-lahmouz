import { motion, stagger, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Skills = {
  name: string;
  icon: string;
}[];

const skills: Skills = [
  {
    name: "C",
    icon: "/icons/c-language.svg",
  },
  {
    name: "Javascript",
    icon: "/icons/javascript.svg",
  },
  {
    name: "Typescript",
    icon: "/icons/typescript.svg",
  },
  {
    name: "HTML",
    icon: "/icons/html.svg",
  },
  {
    name: "CSS",
    icon: "/icons/css.svg",
  },
  {
    name: "Tailwindcss",
    icon: "/icons/tailwindcss.svg",
  },
  {
    name: "React",
    icon: "/icons/react.svg",
  },
  {
    name: "Next.js",
    icon: "/icons/nextjs.svg",
  },
  {
    name: "Astro",
    icon: "/icons/astro.svg",
  },
  {
    name: "Node.js",
    icon: "/icons/nodejs.svg",
  },
  {
    name: "Express.js",
    icon: "/icons/expressjs.svg",
  },
  {
    name: "Nest.js",
    icon: "/icons/nestjs.svg",
  },
  {
    name: "MongoDB",
    icon: "/icons/mongodb.svg",
  },
  {
    name: "PostgreSQL",
    icon: "/icons/postgresql.svg",
  },
  {
    name: "Git",
    icon: "/icons/git.svg",
  },
  {
    name: "Docker",
    icon: "/icons/docker.svg",
  },
  {
    name: "Figma",
    icon: "/icons/figma.svg",
  },
  {
    name: "Nginx",
    icon: "/icons/nginx.svg",
  },
];

const loadingSkills: Skills = [
  {
    name: "aws",
    icon: "/icons/aws.svg",
  },
  {
    name: "redis",
    icon: "/icons/redis.svg",
  },
  {
    name: "kubernetes",
    icon: "/icons/kubernetes.svg",
  },
  {
    name: "kafka",
    icon: "/icons/kafka.svg",
  },
  {
    name: "elasticsearch",
    icon: "/icons/elasticsearch.svg",
  },
];

export function SkillIcon(props: { name: string; icon: string }) {
  return (
    <div
      className="h-12 w-12 sm:h-10 sm:w-10 rounded-sm p-1 transition-colors duration-200 hover:bg-primary/15"
      title={props.name}
    >
      <img src={props.icon} alt={props.name} className="h-full w-full" />
    </div>
  );
}

export function SkillIcons() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <div
      ref={containerRef}
      className="flex w-full flex-wrap max-sm:justify-between gap-1"
    >
      {skills.map(({ name, icon }, index) => (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.3,
                delay: index * 0.05,
              },
            },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          key={name}
        >
          <SkillIcon key={name} name={name} icon={icon} />
        </motion.div>
      ))}
    </div>
  );
}
