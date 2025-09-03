export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveDemo: string;
  github: string;
  category: 'react' | 'vue' | 'html-css' | 'javascript';
}

export interface Skill {
  name: string;
  level: number;
  category: 'languages' | 'frameworks' | 'tools';
  icon: string;
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  year: string;
  highlight: string;
  icon: string;
}

export interface Interest {
  id: number;
  title: string;
  emoji: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
}

export interface PersonalityTrait {
  id: number;
  title: string;
  emoji: string;
  description: string;
}