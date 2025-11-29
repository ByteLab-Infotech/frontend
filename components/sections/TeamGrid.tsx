'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';
import { Linkedin, Github, Mail } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
  linkedin?: string;
  email?: string;
  github?: string;
}

interface TeamGridProps {
  members: TeamMember[];
  columns?: 2 | 3;
}

export const TeamGrid: React.FC<TeamGridProps> = ({ members, columns = 2 }) => {
  return (
    <div className={`grid md:grid-cols-${columns} gap-8`}>
      {members.map((member, index) => (
        <motion.div
          key={member.name}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-xl p-8 border border-gray-100 shadow-soft"
        >
          <div className="flex flex-col items-center text-center mb-6">
            <div className="w-32 h-32 bg-slate-grey rounded-full mb-4 flex items-center justify-center overflow-hidden">
              {member.image ? (
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              ) : (
                <span className="text-4xl font-bold text-gray-400">
                  {member.name.charAt(0)}
                </span>
              )}
            </div>
            <h3 className="text-h3 font-heading font-semibold text-navy mb-2">
              {member.name}
            </h3>
            <p className="text-body font-medium text-electric-blue mb-4">
              {member.role}
            </p>
            <p className="text-body text-gray-600 leading-relaxed mb-4">
              {member.bio}
            </p>
            <div className="flex gap-4">
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-electric-blue/10 rounded-lg flex items-center justify-center hover:bg-electric-blue/20 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-electric-blue" />
                </a>
              )}
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="w-10 h-10 bg-electric-blue/10 rounded-lg flex items-center justify-center hover:bg-electric-blue/20 transition-colors"
                >
                  <Mail className="w-5 h-5 text-electric-blue" />
                </a>
              )}
              {member.github && (
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-electric-blue/10 rounded-lg flex items-center justify-center hover:bg-electric-blue/20 transition-colors"
                >
                  <Github className="w-5 h-5 text-electric-blue" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

