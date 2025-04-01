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
  picture: "me.jpg",
  description:
    "I like to build beautiful digital experiences, explore faraway places, and film every detail of my adventures 👨‍💻🏔🎥",
  social: [
    {
      icon: "linkedin-logo.svg",
      url: "https://www.linkedin.com/in/nicholastrampe/",
      platform: "LinkedIn",
    },
    {
      icon: "instagram-logo.svg",
      url: "https://instagram.com/nicholas.eager",
      platform: "Instagram",
    },
    {
      icon: "youtube-logo.svg",
      url: "https://youtube.com/@NicholasEager",
      platform: "YouTube",
    },
  ],
};
