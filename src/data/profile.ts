export interface Profile {
  name: string;
  picture: string;
  description: string;
  social: {
    platform: string;
    url: string;
    icon: string;
  }[];
}

export const profile: Profile = {
  name: "Nicholas Trampe",
  picture: "/src/assets/me.jpg",
  description:
    "I like to build beautifully native mobile experiences, explore faraway places, and film every detail of my experiences 👨‍💻🏔🎥",
  social: [
    {
      icon: "/src/assets/instagram-logo.svg",
      url: "https://instagram.com/nicholas.eager",
      platform: "Instagram",
    },
    {
      icon: "/src/assets/youtube-logo.svg",
      url: "https://youtube.com/@NicholasEager",
      platform: "YouTube",
    },
  ],
};
