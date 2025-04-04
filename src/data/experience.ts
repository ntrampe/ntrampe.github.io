export interface Experience {
  period: string;
  icon: string;
  description: string;
  skills: string[];
}

export const experiences: Experience[] = [
  {
    period: "2023 - Present",
    icon: "yt.png",
    description:
      "I am currently a content creator, designer, and software developer with expertise in front-end development, UI/UX design, and AI automation. As a [content creator](https://www.youtube.com/NicholasEager), I specialize in cinematic storytelling, leveraging creative filming, editing, and social media strategies to engage a global audience. I [designed and engineered a brand website](#eager-website) from the ground up, focusing on user experience and performance optimization. Additionally, I [automated repetitive tasks](#comment-connect), such as comment responses, using generative AI. Through strategic market research, I grew my channel by 44.7k subscribers (373%) in six months. I have also collaborated with local businesses in Nepal, Peru, and other countries to build business relationships that enhance audience engagement and brand visibility.",
    skills: [
      "AI Engineering",
      "Product Design",
      "Automation",
      "Web Development",
      "Video Editing",
      "Visual Composition",
      "Market Research",
      "Business Management",
    ],
  },
  {
    period: "2022 - 2023",
    icon: "bs.png",
    description:
      "I was an iOS software engineer at Bending Spoons in Milan, Italy. I developed features for [AlightMotion](https://alightmotion.com/), a native motion graphics iOS application in Swift. During my time here, I refactored the application, feature by feature, to implement more scalable architectures and practices such as [Swift Composable Architecture](https://github.com/pointfreeco/swift-composable-architecture). Additionally, I implemented the design for paywalls, and other features using SwiftUI. I introduced iOS tooling such as Tuist, and internal tools for analytics and running experiments. After my wife's immigrant visa was approved, we moved back to the United States.",
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
      "I was a software engineer on two Google Maps teams. I developed features for the Google Maps Navigation iOS platform team. I contributed to launching [Live View](https://blog.google/products/maps/new-sense-direction-live-view/) by designing a remote asset caching system. I designed, developed, advocated for, and mentored best practices for the architecture for a native iPad application responsible for using the Google Maps first-part SDK to show more robust traffic congestion. I helped conduct global research studies to provide a better Google Maps experience. I also developed critical COVID-19 awareness functionality.",
    skills: [
      "iOS Development",
      "Swift & SwiftUI",
      "Google Maps SDK",
      "Architecture Design",
      "Mentorship",
      "Global UX Research Studies",
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
      "I received a B.S. in computer science with a 4.0/4.0 GPA in Algorithms, Data Structures, Operating Systems, Artificial Intelligence, Theory of Computer Science, Software Engineering, Databases, Object Oriented Numerical Modeling, Software Systems Design, and Evolutionary Computing.\n\nI was fortunate enough to have three internships along the way. My first was at [Garmin](https://www.garmin.com/) developing software for the user interface of an integrated flight deck. My second was at [Boeing](https://www.boeing.com/) working on an internal .NET application responsible for organizing business leader's schedules at an internal conference. My final was also at Boeing managing a project that involved streaming video while training mechanics in confined spaces.",
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
