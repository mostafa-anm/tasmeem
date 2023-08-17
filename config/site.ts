export interface SiteConfig {
  siteName: string;
  description: string;
  currentlyAt: string;
  socialLinks: {
    twitter: string;
    youtube: string;
    github: string;
    linkedin: string;
    instagram: string;
  };
}

export const siteConfig: SiteConfig = {
  siteName: "بيت الأحلام",
  description:
    "A minimal and lovely blog which shares expierences and cities around the world.",
  currentlyAt: "Berlin, Germany",
  socialLinks: {
    twitter: "https://twitter.com/your-twitter",
    youtube: "https://youtube.com/your-youtube",
    github: "https://github.com/your-github",
    linkedin: "https://linkedin.com/your-linkedin",
    instagram: "https://instagram.com/your-instagram",
  },
};

export default siteConfig;
