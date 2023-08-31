import {
    mobile,
    backend,
    creator,
    web,
    cpp,
    java,
    javascript,
    connectify,
    crypto,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    sql,
    pgsql,
    mysql,
    php,
    firebase,
    bootstrap,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    financetracker,
    whatsapp,
    jobit,
    zoom,
    keep,
    portfolio,
    tripguide,
    threejs,
    github,
    linkedin,
    leetcode
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "works",
        title: "Work",
    },
    // {
    //     id: "resume",
    //     title: "Resume",
    // },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Problem solver",
        icon: creator,
    },
];

const socials = [
    {
        name: "linkedin",
        icon: linkedin,
    },
    {
        name: "github",
        icon: github,
    },
    {
        name: "leetcode",
        icon: leetcode,
    }];

const technologies = [
    {
        name: "CPP",
        icon: cpp,
    },
    {
        name: "Java",
        icon: java,
    },
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Sql",
        icon: sql,
    },
    {
        name: "PostgreSql",
        icon: pgsql,
    },
    {
        name: "MySql",
        icon: mysql,
    },
    {
        name: "Php",
        icon: php,
    },
    {
        name: "Firebase",
        icon: firebase,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Bootstrap",
        icon: bootstrap,
    },
    {
        name: "git",
        icon: git,
    },
];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "CoinTrackr.net",
        description:
            "A React based Crypt Tracker website for traders to track cryptocurrency on the go, it has many coins to choose from with perfect line chart of each of them in different timeframes, made using GoinGecko API.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mui",
                color: "green-text-gradient",
            },
            {
                name: "nodejs",
                color: "pink-text-gradient",
            },
        ],
        image: crypto,
        source_code_link: "https://github.com/Devojoytip/crypto_tracker",
    },
    {
        name: "Personal Portfolio",
        description:
            "A 3D Portfolio Website built using React.js, Material UI and Three.js. The project allows users to view my projects, skills, experiences, resume and contact me.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "threejs",
                color: "green-text-gradient",
            },
            {
                name: "mui",
                color: "pink-text-gradient",
            },
        ],
        image: portfolio,
        source_code_link: "https://github.com/Devojoytip/Devojoyti_Portfolio",
    },
    {
        name: "Web Finance Tracker",
        description:
            "Web application that enables users to keep a track of their expenses and incomes by storing all information and constructing illustrative graph of their financial activities.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "nodejs",
                color: "pink-text-gradient",
            },
        ],
        image: financetracker,
        source_code_link: "https://github.com/Devojoytip/Web_Finance_Tracker",
    },
    {
        name: "Connectify",
        description:
            "Creating a MERN social media application using React.js, Node.js, and MongoDB.The Project incorporates React Hooks, Context API, Functional React Components, Node.js REST API, File Upload, JWT and more.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "nodejs",
                color: "pink-text-gradient",
            },
        ],
        image: connectify,
        source_code_link: "https://github.com/Devojoytip/Connectify",
    },
    {
        name: "WhatsApp Clone",
        description:
            "A Web-based WhatsApp Clone that allows real-time messaging between the users and supports file upload of all types.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "nodejs",
                color: "pink-text-gradient",
            },
        ],
        image: whatsapp,
        source_code_link: "https://github.com/Devojoytip/WhatsApp_Clone",
    },
    {
        name: "Zoom Clone",
        description:
            "Creating a Zoom Clone using Node.js, Express.js, Peer.js and Socket.io. The project allows users to create and join video chat rooms.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "nodejs",
                color: "pink-text-gradient",
            },
        ],
        image: zoom,
        source_code_link: "https://github.com/Devojoytip/Zoom_Clone",
    },
];

export { services, technologies, experiences, testimonials, projects, socials };