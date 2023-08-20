export interface SiteConfig {
  siteName: string;
  title: string;
  description: string;
  socialLinks: {
    twitter: string;
    youtube: string;
    github: string;
    linkedin: string;
    instagram: string;
  };
}

export const siteConfig: SiteConfig = {
  siteName: "تصميم",
  title: "تصميم غرفة باستخدام الذكاء الاصطناعي",
  description: "صمم غرفة أحلامك في ثوانٍ.",
  socialLinks: {
    twitter: "https://twitter.com/your-twitter",
    youtube: "https://youtube.com/your-youtube",
    github: "https://github.com/your-github",
    linkedin: "https://linkedin.com/your-linkedin",
    instagram: "https://instagram.com/your-instagram",
  },
};

export default siteConfig;
