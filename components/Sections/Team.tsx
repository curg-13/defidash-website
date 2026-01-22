import React from 'react';
import { Card } from '../ui/Card';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { TeamMember } from '../../types';

const members: TeamMember[] = [
  {
    id: '1',
    name: 'Jeff Lee',
    role: 'Lead Architect',
    bio: 'Core logic design & PTB composition strategist.',
    imageUrl: 'https://picsum.photos/200/200?random=1'
  },
  {
    id: '2',
    name: 'Sarah Chen',
    role: 'Smart Contract Engineer',
    bio: 'Sui Move expert. Security & Flashloan implementations.',
    imageUrl: 'https://picsum.photos/200/200?random=2'
  },
  {
    id: '3',
    name: 'Alex Kim',
    role: 'Frontend Engineer',
    bio: 'UI/UX Lead. Building intuitive interfaces for complex DeFi.',
    imageUrl: 'https://picsum.photos/200/200?random=3'
  },
  {
    id: '4',
    name: 'David Park',
    role: 'Quantitative Analyst',
    bio: 'Risk modeling and liquidation parameter optimization.',
    imageUrl: 'https://picsum.photos/200/200?random=4'
  }
];

export const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-zinc-800 pb-8">
            <div>
                <h2 className="text-4xl font-bold text-white mb-2">Team CURG'13</h2>
                <p className="text-zinc-500">Building the future of finance on Sui.</p>
            </div>
            <div className="mt-4 md:mt-0">
                <span className="text-xs uppercase tracking-widest text-zinc-600 border border-zinc-800 px-3 py-1 rounded-full">Core Contributors</span>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member) => (
            <Card key={member.id} className="group bg-zinc-900/30 border-zinc-800 overflow-hidden hover:border-zinc-600 transition-all">
              <div className="aspect-square overflow-hidden bg-zinc-800">
                <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-sm text-zinc-400 font-medium mb-3">{member.role}</p>
                <p className="text-sm text-zinc-500 leading-snug mb-4">{member.bio}</p>
                
                <div className="flex space-x-3 text-zinc-500">
                    <Github className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
                    <Twitter className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
                    <Linkedin className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};