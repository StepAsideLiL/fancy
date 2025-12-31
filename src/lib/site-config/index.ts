const siteConfig = {
  title: "Fancy",
  description: "How fancy the web can be!",
  url:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "http://localhost:3000",
  author: {
    name: "StepAsideLiL",
    url: "https://github.com/StepAsideLiL",
  },
};

export type TSiteConfig = typeof siteConfig;
export default siteConfig;
