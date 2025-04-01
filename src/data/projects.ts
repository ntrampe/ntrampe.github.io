export interface Project {
  icon: string;
  title: string;
  description: string;
}

export const projects: Project[] = [
  {
    icon: "comment-connect-icon.png",
    title: "Comment Connect",
    description:
      "[Comment Connect](https://apps.apple.com/us/app/comment-connect/id6478116756) is an iOS app that helps YouTubers manage and reply to comments across social media channels, such as YouTube, Facebook, Instagram, and email. I used the Flutter Riverpod package for state management and dependency injection, Flutter for the interface, oauth2 for Account Sign In, various RESTful APIs for comment retrieval/posting, and OpenAI's GPT to generate a highly contextual response to a comment using prompt engineering.",
  },
  {
    icon: "eager.png",
    title: "nicholaseager.com",
    description:
      "[nicholaseager.com](https://nicholaseager.com) is a promotional website for my YouTube channel. It is built using Jekyll, and HTML/CSS/JS with no JS frameworks like React. I built functionality for auto-generated travel guides powered by GPT, content tagging, dynamic affiliate link gear lists, and a streamlined platform for purchasing photo prints.",
  },
  {
    icon: "nunci-icon.png",
    title: "nunci",
    description:
      "[nunci](https://play.google.com/store/apps/details?id=com.niftyapps.nunci&hl=en_US&gl=US) is an iOS and Android app that uses artificial intelligence and advanced learning techniques to help language learners practice and improve their pronunciation, listening, reading, and writing skills. nunci is implemented using natural language processing, spaced-repetition learning, and dynamic programming. I created robust authentication and database services using Firebase. I implemented server-side, multiple platform subscription receipt verification. I designed and built beautiful, dynamically animated widgets using custom painting in Flutter.",
  },
  {
    icon: "runprints-icon.png",
    title: "RunPrints",
    description:
      "[RunPrints](https://apps.apple.com/US/app/id1589367390?mt=8) is an iOS app that helps runners, bikers, hikers, or other athletes create beautiful artwork of their activities. Athletes can export their artwork at high-resolution for printing on canvas, or simply share with social media.",
  },
  {
    icon: "two-foxes-logo.png",
    title: "Two Foxes Cafe",
    description:
      "[Two Foxes Cafe](https://www.twofoxescafe.com/) is a cafe that my wife and I ran for eight months while living in Vietnam. I designed and built the multi-lingual website using Jekyll. I took all of the photographs and managed the social media.",
  },
  {
    icon: "evolv.png",
    title: "evolv",
    description:
      "[evolv](https://gitlab.com/nicholas.trampe/evolv) is a macOS and iOS evolution simulator that allows the user to simulate up to three different populations of creatures, controlling various attributes about them. The simulator uses genetic algorithms to evolve behaviors of each population using parse trees, subtree mutation and crossover, ramped half-and-half population initialization, and tournament selection methods.",
  },
];
