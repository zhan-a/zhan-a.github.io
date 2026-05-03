// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-started-b-sc-in-data-science-at-kbtu",
          title: 'Started B.Sc. in Data Science at KBTU.',
          description: "",
          section: "News",},{id: "news-continuing-research-on-conformal-prediction-pipelines-for-garch-har-volatility-models-and-their-extensions",
          title: 'Continuing research on conformal prediction pipelines for GARCH / HAR volatility models and...',
          description: "",
          section: "News",},{id: "news-selected-as-a-finalist-at-the-resna-student-design-competition-for-kozha-an-open-source-sign-language-translator",
          title: 'Selected as a finalist at the RESNA Student Design Competition for Kozha, an...',
          description: "",
          section: "News",},{id: "projects-kozha",
          title: 'Kozha',
          description: "Open-source sign language translator. RESNA Student Design Competition Finalist, 2026.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_kozha/";
            },},{id: "projects-conformal-volatility-forecasting-toolkit",
          title: 'Conformal volatility forecasting toolkit',
          description: "Conformal prediction pipelines for GARCH, HAR, and extended volatility models.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_conformal_volatility/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%7A%68%61%6E%61%6D%61%6E%6B%65%6C%64%79@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/zhan-a", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/zhan-amankeldy-64a9002a5", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
