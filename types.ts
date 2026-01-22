import React from 'react';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export enum SectionId {
  HERO = 'hero',
  PROTOCOL = 'protocol',
  FEATURES = 'features',
  TEAM = 'team'
}