export interface Experience {
  period: string;
  icon: string;
  description: string;
  skills: string[];
}

export const experiences: Experience[] = [
  {
    period: "2025 - Present",
    icon: "google.png",
    description:
      "I am a Software Engineer (L4) at Google in Boulder, Colorado, on **Google Drive for iOS**. I led client-side development of the **Sources** feature in **AI Mode**, so users can incorporate Drive files, Gmail threads, and external data sources into AI interactions. I designed and implemented integrations across multiple data providers (Drive, Gmail, and extensible sources such as web, calendar, and chat) for flexible context aggregation. I work closely with **product and UX** to define user-facing behavior and interaction patterns for AI-powered features. I also develop core **latency instrumentation** infrastructure across Google Workspace apps—including ways to measure rendering and interaction latency—and have done low-level analysis of **iOS rendering** (run loops, render server) to improve the accuracy of performance metrics.",
    skills: [
      "iOS Development",
      "Swift & SwiftUI",
      "Google Drive",
      "AI Mode & Sources",
      "Multi-service Integration",
      "Performance Instrumentation",
      "Product & UX Collaboration",
    ],
  },
  {
    period: "2022 - 2025",
    icon: "yt.png",
    description:
      "Alongside other roles, I was self-employed as a software engineer, product designer, and content creator. I built and shipped multiple applications and systems across **mobile and web**, designed **AI-powered tools and content pipelines** to automate workflows and improve experiences, and engineered **full-stack** work—frontends, backends, and deployment pipelines. As a [content creator](https://www.youtube.com/NicholasEager), I grew my YouTube channel to **100k+ subscribers** through technical storytelling and product-driven content, with cinematic filming and editing. I [designed and engineered a brand website](#eager-website) from the ground up and [automated repetitive tasks](#comment-connect) such as comment responses with generative AI. I have also collaborated with local businesses in Nepal, Peru, and elsewhere to strengthen audience engagement and brand visibility.",
    skills: [
      "Full-stack Development",
      "AI Engineering",
      "Product Design",
      "Web & Mobile",
      "Content Pipelines",
      "DevOps & Deployment",
      "Technical Storytelling",
      "Video Production",
    ],
  },
  {
    period: "2022 - 2023",
    icon: "bs.png",
    description:
      "I was an iOS software engineer at Bending Spoons in Milan, Italy. I developed features for [AlightMotion](https://alightmotion.com/), a **large-scale motion graphics** iOS app in Swift. I refactored legacy areas feature by feature toward more scalable architectures and practices such as [Swift Composable Architecture](https://github.com/pointfreeco/swift-composable-architecture). I implemented **SwiftUI** flows including **paywalls** and other user-facing surfaces, and integrated internal tooling for **analytics, experimentation, and feature iteration**—including Tuist for iOS project generation. After my wife's immigrant visa was approved, we moved back to the United States.",
    skills: [
      "iOS Development",
      "Swift & SwiftUI",
      "Motion Graphics",
      "Scalable Architecture",
      "Swift Composable Architecture",
      "Tuist & Tooling",
      "Analytics & Experimentation",
    ],
  },
  {
    period: "2021 - 2022",
    icon: "computer-emoji.png",
    description:
      "I was a freelance software engineer remotely based in Vietnam. After moving to reunite with my wife during during the pandemic, I spent most of my time developing my skills in Flutter, and UI/UX. Freelancing with Flutter has given me the opportunity to master reactive programming, build robust and scalable backend services with Firebase, and learn about app marketing, all while wearing the hat of a UI/UX designer. Check out some of my [personal projects](#projects) below to see more.",
    skills: [
      "Flutter",
      "UI/UX Design",
      "Reactive Programming",
      "Firebase",
      "App Marketing",
      "Freelance Development",
    ],
  },
  {
    period: "2018 - 2020",
    icon: "maps-logo.png",
    description:
      "I was a Software Engineer (L3) at Google in **Seattle**, Washington, on **Google Maps for iOS**. I shipped user-facing features in a large production codebase and contributed to the architecture of scalable mobile systems. I contributed to launching [Live View](https://blog.google/products/maps/new-sense-direction-live-view/) by designing a remote asset caching system. I designed, developed, advocated for, and mentored best practices for a native iPad app using the Google Maps first-party SDK to surface richer traffic congestion. I developed an **internal research iOS application** and contributed to **supporting backend services**. I helped run **global research studies** to improve Maps UX and product direction. I also built critical COVID-19 awareness functionality.",
    skills: [
      "iOS Development",
      "Swift & SwiftUI",
      "Google Maps SDK",
      "Scalable Mobile Architecture",
      "Backend Services",
      "Architecture Design",
      "Mentorship",
      "Global UX Research",
    ],
  },
  {
    period: "2015 - 2017",
    icon: "wwt-logo.png",
    description:
      "I was a software engineer on an internal team responsible for building an iPad application for a private company. The application allowed employees in meetings to create polls, ask questions, rate others, and view beautiful analytics of data gathered. My role was primarily focused on scaling previous features, building new features, and improving performance.",
    skills: [
      "iOS Development",
      "Swift & SwiftUI",
      "Feature Scaling",
      "Performance Optimization",
      "UI/UX Design",
    ],
  },
  {
    period: "2011 - 2015",
    icon: "mst-logo.jpg",
    description:
      "I received a **B.S. in Computer Science** from Missouri University of Science and Technology with a **4.0 / 4.0 major GPA** and **3.973 / 4.0 overall GPA**.\n\nWithin the major, I earned a 4.0/4.0 GPA in Algorithms, Data Structures, Operating Systems, Artificial Intelligence, Theory of Computer Science, Software Engineering, Databases, Object Oriented Numerical Modeling, Software Systems Design, and Evolutionary Computing.\n\nI was fortunate enough to have three internships along the way. My first was at [Garmin](https://www.garmin.com/) developing software for the user interface of an integrated flight deck. My second was at [Boeing](https://www.boeing.com/) working on an internal .NET application responsible for organizing business leader's schedules at an internal conference. My final was also at Boeing managing a project that involved streaming video while training mechanics in confined spaces.",
    skills: [
      "Algorithms & Data Structures",
      "Operating Systems",
      "Artificial Intelligence",
      "Software Engineering",
      "Databases",
      "Object-Oriented Programming",
      "Software Systems Design",
      "Evolutionary Computing",
    ],
  },
  {
    period: "2014",
    icon: "hkust-logo.png",
    description:
      "I completed a semester abroad at [Hong Kong University of Science and Technology](https://hkust.edu.hk/), gaining valuable exposure to global technological perspectives, developed cross-cultural communication skills while collaborating with diverse international teams on technical projects. This experience enhanced adaptability and problem-solving capabilities in multicultural environments.",
    skills: [
      "Cross-cultural Communication",
      "Global Networking",
      "Adaptability",
      "Cultural Fluency",
      "Language Exposure",
    ],
  },
];
