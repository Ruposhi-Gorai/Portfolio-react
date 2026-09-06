import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function ProjectCard({ item }) {
  const isCompleted = item.status?.toLowerCase() === "completed";

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/40 hover:shadow-[0_20px_50px_rgba(139,92,246,0.15)]">

      {/* Background glow */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl group-hover:bg-violet-500/20 transition" />

      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-violet-400">
            Featured
          </span>

          <h2 className="mt-2 text-2xl font-bold text-white">
            {item.title}
          </h2>

          <p className="mt-2 text-sm font-medium text-emerald-300">
            {item.category}
          </p>
        </div>

        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="flex h-11 w-11 items-center justify-center cursor-pointer rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-violet-500"
        >
          <FaGithub size={18} />
        </a>
      </div>

      {/* Description */}
      <p className="text-gray-400 leading-7 text-sm min-h-[84px]">
        {item.description}
      </p>

      {/* Tech Stack */}
      <div className="mt-6 flex flex-wrap gap-2">
        {item.tech?.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Divider */}
      <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* CTA */}
      {isCompleted ? (
        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 rounded-xl bg-violet-500 py-3 font-medium text-white transition hover:bg-violet-600"
        >
          View Live Project
          <FaArrowUpRightFromSquare size={13} />
        </a>
      ) : (
        <button
          type="button"
          disabled
          className="flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 font-medium text-gray-300"
        >
          In Progress
        </button>
      )}
    </div>
  );
}