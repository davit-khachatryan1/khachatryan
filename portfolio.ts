import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Davit Khachatryan',
  title: "Hi , I'm Davit",
  description:
    "I'm passionate Full Stack web developer having an experience of web applications with  React.js, Next.js and Blockchain development on Ethereum, Web3.js: Well-versed in technology and writing code to create systems that are reliable and user-friendly. Confident communicator and strategic thinker who is ready to develop software that is customized to meet a company's organizational needs, highlight its core competencies, and further its success",
  resumeLink:
    'https://docs.google.com/document/d/1_4RIfbyt4FFHW_bNplnoINQr01neTu7XDeeUlT_2O_k/edit?usp=sharing',
};

export const openSource = {
  githubUserName: '1Davit100',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  // url: 'https://davit-khachatryan1.github.io/',
  linkedin: 'https://www.linkedin.com/in/davitkhachatryan11/',
  github: 'https://github.com/davit-khachatryan1',
  // instagram: 'https://www.instagram.com/__hanzla100',
  // facebook: 'https://www.facebook.com/davit-khachatryan1',
  // twitter: 'https://twitter.com/davit-khachatryan1',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs in Node.js & Nest.js '),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          iconifyTag: 'vscode-icons:file-type-light-next',
        },
        // {
        //   skillName: 'Python',
        //   iconifyTag: 'logos:python',
        // },
        // {
        //   skillName: 'Django',
        //   iconifyTag: 'vscode-icons:file-type-django',
        // },

        {
          skillName: 'Redux',
          iconifyTag: 'logos:redux',
        },
        {
          skillName: 'NPM',
          iconifyTag: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          iconifyTag: 'logos:yarn',
        },
      ],
    },
    // {
    //   title: 'Cloud Infra-Architecture',
    //   lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
    //   skills: [
    //     emoji('⚡ Experience of working on multiple cloud platforms'),
    //     emoji(
    //       '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
    //     ),
    //     emoji(
    //       '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
    //     ),
    //   ],
    //   softwareSkills: [
    //     // ? Check README To get icon details
    //     {
    //       skillName: 'AWS',
    //       iconifyTag: 'logos:aws',
    //     },
    //     {
    //       skillName: 'Azure',
    //       iconifyTag: 'logos:microsoft-azure',
    //     },
    //     {
    //       skillName: 'Heroku',
    //       iconifyTag: 'logos:heroku-icon',
    //     },
    //     {
    //       skillName: 'PostgreSQL',
    //       iconifyTag: 'logos:postgresql',
    //     },
    //     {
    //       skillName: 'Github',
    //       iconifyTag: 'akar-icons:github-fill',
    //     },
    //     {
    //       skillName: 'Docker',
    //       iconifyTag: 'logos:docker-icon',
    //     },
    //     {
    //       skillName: 'Github Actions',
    //       iconifyTag: 'logos:github-actions',
    //     },
    //     {
    //       skillName: 'Cloudinary',
    //       iconifyTag: 'logos:cloudinary',
    //     },
    //     {
    //       skillName: 'Nginx',
    //       iconifyTag: 'logos:nginx',
    //     },
    //     {
    //       skillName: 'Sentry',
    //       iconifyTag: 'logos:sentry-icon',
    //     },
    //   ],
    // },
    {
      title: 'Blockchain',
      lottieAnimationFile: '/lottie/skills/ethereum.json',
      skills: [
        // emoji(
        //   '⚡ Experience in developing Smart Contract using Solidity & Ethereum'
        // ),
        // emoji(
        //   '⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura'
        // ),
        // emoji(
        //   '⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles'
        // ),
        // emoji('⚡ Developing NFT Smart Contracts using ERC-721 Token Standard'),
        emoji('⚡ Building Dapps with React.js  using Web3.js, ether.js'),
      ],
      softwareSkills: [
        {
          skillName: 'Ethereum',
          iconifyTag: 'logos:ethereum',
        },
        // {
        //   skillName: 'Solidity',
        //   iconifyTag: 'logos:solidity',
        // },
        {
          skillName: 'Web3js',
          iconifyTag: 'logos:web3js',
        },
        {
          skillName: 'Metamask',
          iconifyTag: 'logos:metamask-icon',
        },
        // {
        //   skillName: 'Ganache',
        //   iconifyTag: 'logos:ganache-icon',
        // },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Front-end', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Back-end',
    progressPercentage: '70',
  },
  {
    Stack: 'Programming',
    progressPercentage: '100',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Yerevan State University',
    subHeader: 'Bachelor of Information Security ',
    duration: 'September 2015 - May 2021',
    desc: '',
    grade: 'Graduated',
    descBullets: [],
  },
  {
    schoolName: 'Web3 Armenian Foundation',
    subHeader: 'Blockchain',
    duration: 'Nov 2022 - Feb 2023',
    desc: '',
    grade: 'Graduated',
    descBullets: [],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Full Stack Developer',
    company: 'Solicy',
    companyLogo: '/img/icons/common/solicy.webp',
    date: 'Sep 2021 - Present',
    desc: `🔍 Developed a comprehensive website from inception, showcasing proficiency in front-end and back-end development. 
    💻 Demonstrated expertise in cutting-edge technologies by actively contributing to Web 3 projects and seamlessly integrating web3 components into project frameworks.`,
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: 'Tutor',
    company: 'BN System',
    companyLogo: '/img/icons/common/bnsystems.jpeg',
    date: 'Apr 2021 - Aug 2021',
    desc: `Designing and implementing training programs for students. 
    Developing and delivering lectures on front-end development topics for students Mentoring students to help them develop their skills and advance in their careers.`,
  },
  {
    role: 'Frontend Developer',
    company: 'Freelance/Upwork',
    companyLogo: '/img/icons/common/upwork.png',
    date: 'Jun 2020 - Jul 2021',
    desc: `🗸 Participated in project kick-off meetings with clients, business analysts, and development teams to gather and clarify business requirements.
     🗸 Contributed to defining project scope, timelines, and resource allocation for front-end development tasks.
     🗸 Designed, built, and tested feature-rich web applications and functionalities meeting user needs and business objectives.
     🗸 Implemented responsive layouts and performance-optimized front-end code adhering to best practices and accessibility standards.`,
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Solit website',
    desc: 'It company website created with Next js, Redux Toolkit, SCSS and Python',
    // github: 'https://github.com/davit-khachatryan1/developer-portfolio',
    link: 'https://solit-llc.com/',
  },
  {
    name: 'dEquity',
    desc: `dEquity offers to save time and money by fundamentally changing the mechanics and logistics of the investing experience to make your journey as successful as possible
    Here is uses Next.js, Redux Saga, Web3.js, SCSS`,
    // github: 'https://github.com/davit-khachatryan1/Django-React-Marketplace',
    link: 'https://dequity.io',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Davit Khachatryan',
  description: 'A passionate Full Stack Web Developer',
  author: 'Davit Khachatryan',
  image: 'https://cleverjobs.net/storage/users-photo/313414/OVuVyJjQ1S.png',
  // url: 'https://developer-portfolio-davit-khachatryan1.vercel.app',
  keywords: ['Davit', 'Davit Khachatryan', 'Project', 'Front end'],
};
