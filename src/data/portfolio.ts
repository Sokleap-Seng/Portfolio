import { Project, Skill, Interest, PersonalityTrait } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Agriculture System",
    description: "A smart platform that helps farmers monitor resources, track inventory, and making agriculture more efficient and productive.",
    image: "/images/farm.jpg",
    techStack: ["React.js", "TypeScript", "Tailwind CSS", "python", "GitHub", "Jira"],
    liveDemo: "https://example.com",
    github: "https://github.com/Kin-Doung/VC2-Agriculture",
    category: "react"
  },
  {
    id: 2,
    title: "POS System",
    description: "A comprehensive management system for cafe operations with revenue analysis and inventory tracking.",
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800",
    techStack: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "PHP", "MySQL", "GitHub", "Jira"],
    liveDemo: "https://example.com",
    github: "https://github.com/Mengseu-Sork/VC1-G7",
    category: "vue"
  },
  {
    id: 3,
    title: "Note Taker App",
    description: "A web application that allow users to write, save, and delete notes for personal use.",
    image: "/images/Note.jpg",
    techStack: ["JavaScript", "HTML", "CSS", "Bootstrap", "GitHub"],
    liveDemo: "https://note-taker-app-group5.netlify.app/",
    github: "https://github.com/Sokleap-Seng/project-Note-Taker-G5",
    category: "javascript"
  },
  {
    id: 4,
    title: "School Management System",
    description: "To simplify and organize school operations by managing relationships between students, teachers, subjects, and classes.",
    image: "/images/oop.avif",
    techStack: ["OOP TypeScript", "GitHub", "Git board"],
    liveDemo: "https://example.com",
    github: "https://github.com/selatorm/School-Management-System",
    category: "html-css"
  },
  {
    id: 5,
    title: "Algorithm project",
    description: "A Windows tool for checking CPU/RAM, monitoring system performance, testing Wi-Fi speed, and retrieving Wi-Fi passwords.",
    image: "/images/wifi.jpg",
    techStack: ["Algorithm Basic", "GitHub", "Git board"],
    liveDemo: "https://example.com",
    github: "https://github.com/Seavmey-Yem/Algorithm-G23",
    category: "react"
  },
  {
    id: 6,
    title: "Canteen",
    description: "A website that provides information about food, daily meal schedules, and popular dishes.",
    image: "/images/food.jpg",
    techStack: ["HTML", "CSS", "SASS", "GitHub"],
    liveDemo: "https://sokleap-seng.github.io/PNC-CANTEEN/",
    github: "https://github.com/Sokleap-Seng/PNC-CANTEEN",
    category: "vue"
  }
];

export const skills: Skill[] = [
  // Languages
  { name: "HTML", level: 95, category: "languages", icon: "code" },
  { name: "CSS", level: 90, category: "languages", icon: "palette" },
  { name: "JavaScript", level: 88, category: "languages", icon: "zap" },
  { name: "TypeScript", level: 85, category: "languages", icon: "shield" },
  
  // Frameworks
  { name: "React", level: 85, category: "frameworks", icon: "atom" },
  { name: "Vue", level: 85, category: "frameworks", icon: "layers" },
  { name: "Tailwind CSS", level: 92, category: "frameworks", icon: "wind" },
  { name: "Bootstrap", level: 80, category: "frameworks", icon: "layout" },
  
  // Tools
  { name: "Git", level: 88, category: "tools", icon: "git-branch" },
  { name: "Figma", level: 85, category: "tools", icon: "figma" },
  { name: "VS Code", level: 95, category: "tools", icon: "code-2" },
];

export const interests: Interest[] = [
  {
    id: 1,
    title: "Coding",
    emoji: "👨‍💻",
    description: "Building cool projects and learning new technologies"
  },
  {
    id: 2,
    title: "Reading",
    emoji: "📚",
    description: "Reading book for get new knowledge"
  },
  {
    id: 3,
    title: "Drawing",
    emoji: "🎨",
    description: "Digital art and UI/UX design sketching"
  },
  {
    id: 4,
    title: "Researching",
    emoji: "🔎",
    description: "Find new technology and new information"
  },
  {
    id: 5,
    title: "Traveling",
    emoji: "✈️",
    description: "Exploring new places and experiencing different cultures"
  },
  {
    id: 6,
    title: "Photography",
    emoji: "📸",
    description: "Capturing moments and street photography"
  }
];

export const personalityTraits: PersonalityTrait[] = [
  {
    id: 1,
    title: "Creative",
    emoji: "🎨",
    description: "Always finding innovative solutions and thinking outside the box"
  },
  {
    id: 2,
    title: "Curious",
    emoji: "🧠",
    description: "Constantly learning new technologies and exploring possibilities"
  },
  {
    id: 3,
    title: "Team",
    emoji: "👥",
    description: "Collaborative mindset with excellent communication skills"
  },
  {
    id: 4,
    title: "Detail-Oriented",
    emoji: "🔍",
    description: "Meticulous attention to code quality and user experience"
  }
];