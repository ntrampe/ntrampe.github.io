export interface Link {
  title: string;
  url: string;
}

export interface Project {
  id: string;
  icon: string;
  title: string;
  overview: string;
  links: Link[];
  achievements: string[];
  skills: string[];
}

export const projects: Project[] = [
  {
    id: "slides",
    icon: "slides.png",
    title: "Slides",
    overview:
      "Designed and built a configurable slideshow application for Immich photo libraries, intended for digital photo frames, kiosks, and display systems. Focused on architecture and security while using AI-assisted development for implementation.",
    links: [
      {
        title: "GitHub",
        url: "https://github.com/ntrampe/slides",
      },
      {
        title: "Interactive Demo",
        url: "https://ntrampe-slides.netlify.app/",
      },
    ],
    achievements: [
      "Designed a feature-first modular architecture with clear separation of concerns",
      "Built a Backend-for-Frontend using Node.js and Express to proxy API requests and keep credentials secure",
      "Implemented three-tier configuration (localStorage, URL parameters, environment variables) for flexible deployment",
      "Added slideshow features including shuffle, custom transitions, Ken Burns animations, and Live Photo playback",
      "Built filtering by albums, people, locations, and date ranges using the Immich API",
      "Supports single-image and split-screen layouts with optional overlays for clock, weather, and metadata",
      "Containerized with Docker for easy deployment",
    ],
    skills: [
      "System Architecture",
      "React & TypeScript",
      "Vite",
      "Node.js & Express",
      "Backend-for-Frontend (BFF)",
      "TanStack Query",
      "API Integration",
      "Docker",
      "AI-Assisted Development",
      "Immich API",
    ],
  },
  {
    id: "chatmcp",
    icon: "chat-mcp.png",
    title: "ChatMCP",
    overview:
      "Built an iOS application using Flutter that connects large language models with native iOS capabilities through the Model Context Protocol (MCP), allowing AI to interact with system services like Calendar and Photos.",
    links: [
      {
        title: "App Store",
        url: "https://apps.apple.com/us/app/chatmcp/id6745196560",
      },
    ],
    achievements: [
      "Implemented the Model Context Protocol on iOS to standardize how AI models interact with external tools and data",
      "Built local tool integrations with iOS frameworks like EventKit and PhotoKit, giving LLMs access to calendar events and photos",
      "Added support for connecting to external MCP servers to extend functionality beyond local resources",
      "Designed security boundaries to safely manage interaction between AI models and system-level data",
      "Created an extensible framework allowing developers to add or modify tools",
    ],
    skills: [
      "Flutter",
      "iOS Development",
      "Model Context Protocol (MCP)",
      "AI Integration",
      "EventKit",
      "PhotoKit",
      "API Design",
      "Security Architecture",
      "Protocol Implementation",
    ],
  },
  {
    id: "eager-website",
    icon: "eager.png",
    title: "nicholaseager.com",
    overview:
      "Designed and developed a modern, interactive promotional website for my YouTube channel using Astro, React, and Tailwind CSS. The site showcases a cohesive design system with elegant components while delivering optimal user experience.",
    links: [
      {
        title: "Showcase",
        url: "https://nicholaseager.com/guides/how-to-hike-the-upper-mustang-trek/",
      },
    ],
    achievements: [
      "Architected a cohesive design system featuring interactive components that enhance user engagement while maintaining visual consistency across the platform",
      "Engineered an innovative static comment system allowing visitors to engage without authentication barriers while effectively mitigating spam",
      "Leveraged AI tools (Continue extension in VSCode) to streamline development while maintaining focus on system architecture",
      "Created an automated content pipeline using Python and Anthropic to transform trip reports into comprehensive hiking guides",
      "Optimized deployment with Netlify hosting and Edge Functions for authentication and secure comment submissions",
      "Implemented SEO best practices and conducted market research that successfully ranked multiple articles in top Google search positions",
    ],
    skills: [
      "UI/UX Design",
      "Web Development & Deployment",
      "Architecture Design",
      "SEO",
      "Astro",
      "React",
      "Tailwind CSS",
      "Netlify",
      "Python",
      "AI Integration",
      "Authentication",
      "Performance Optimization",
      "JAMstack",
    ],
  },
  {
    id: "comment-connect",
    icon: "comment-connect-icon.png",
    title: "Comment Connect",
    overview:
      "Designed and developed a comprehensive iOS application that empowers content creators to intelligently generate contextual responses to audience comments across multiple social media platforms from a single interface.",
    links: [
      {
        title: "App Store",
        url: "https://apps.apple.com/us/app/comment-connect/id6478116756",
      },
      {
        title: "Interactive Demo",
        url: "https://commentconnect-442f6.web.app/",
      },
    ],
    achievements: [
      "Designed the complete user experience and established a cohesive design system from the ground up, ensuring intuitive navigation and consistent visual language throughout the application",
      "Engineered an advanced prompt system that synthesizes video metadata, creator biography, and customizable response guidelines to produce highly personalized AI-generated replies",
      "Implemented robust authentication flows using OAuth2 and constructed scalable API integrations for multi-platform comment management",
      "Built with Flutter and Riverpod for state management, creating a responsive and maintainable codebase with clean separation of concerns",
    ],
    skills: [
      "AI Engineering",
      "Flutter",
      "UX/UI Design",
      "iOS Deployment",
      "AI Integration",
      "Prompt Engineering",
      "RESTful API integration",
      "OAuth2 authentication",
      "Riverpod State Management",
    ],
  },
  {
    id: "nunci",
    icon: "nunci-icon.png",
    title: "nunci",
    overview:
      "Engineered an innovative language learning application leveraging AI and advanced pedagogical methodologies to enhance pronunciation, listening, reading, and writing skills.",
    links: [
      {
        title: "Demo Video",
        url: "https://www.youtube.com/watch?v=AjvgqlVAlgw",
      },
    ],
    achievements: [
      "Architected the core learning engine using natural language processing, spaced-repetition algorithms, and dynamic programming techniques to create personalized learning paths",
      "Implemented secure authentication and scalable database architecture utilizing Firebase services",
      "Developed cross-platform payment verification system for subscription management with server-side validation",
      "Crafted visually engaging UI components with custom animations using Flutter's advanced rendering capabilities",
      "Designed intuitive user experiences with a focus on gamification principles to maximize learner engagement and retention",
    ],
    skills: [
      "Flutter",
      "Firebase",
      "UI/UX Design",
      "Animation",
      "AI Implementation",
      "NLP",
      "Spaced Repetition",
      "Database Architecture",
      "Subscription Management",
      "Dynamic Programming",
    ],
  },
  {
    id: "runprints",
    icon: "runprints-icon.png",
    title: "RunPrints",
    overview:
      "Designed and developed a cross-platform mobile application (iOS/Android) using Flutter that transforms athletic activities into personalized artwork.",
    links: [
      {
        title: "App Store",
        url: "https://apps.apple.com/US/app/id1589367390?mt=8",
      },
    ],
    achievements: [
      "Engineered robust API integrations with Strava and Garmin platforms to securely retrieve users' GPS activity data in GPX format",
      "Implemented an interactive Google Maps interface with custom styling options allowing users to visualize and creatively annotate their routes",
      "Developed high-resolution export functionality, enabling users to generate print-quality artwork suitable for canvas printing or social media sharing",
      "Conducted user research with local running communities in Vietnam to validate features and refine the user experience",
      "Created a polished UI/UX that appeals to runners, cyclists, hikers, and outdoor enthusiasts looking to memorialize their achievements",
    ],
    skills: [
      "Flutter Mobile Development",
      "UX/UI Design",
      "Google Maps API",
      "GPS Visualization",
      "User Research",
      "Prototyping",
      "iOS Development",
      "Android Development",
      "Graphic Export",
    ],
  },
  {
    id: "two-foxes-cafe",
    icon: "two-foxes-logo.png",
    title: "Two Foxes Cafe",
    overview:
      "Designed and developed a responsive, multi-lingual website for Two Foxes Cafe, a hospitality venture I co-founded and operated with my wife during our time in Vietnam.",
    links: [
      {
        title: "Website",
        url: "https://twofoxescafe.github.io/",
      },
    ],
    achievements: [
      "Created an elegant, responsive design that showcased the cafe's unique ambiance and offerings",
      "Implemented comprehensive internationalization (i18n) to serve both English and Vietnamese-speaking customers",
      "Produced professional photography for the website and marketing materials",
      "Established and managed the cafe's digital presence across multiple social media platforms",
    ],
    skills: [
      "UI/UX Design",
      "Web Development",
      "Jekyll",
      "HTML/CSS",
      "Multi-lingual i18n",
      "Photography",
      "SEO Optimization",
      "Social Media Management",
      "Digital Marketing",
    ],
  },
];
