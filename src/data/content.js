export const about = {
  name: "Jessica Wong",
  title: "Software Engineer",
  location: "New York City",
  bio: "Hi! I am a software engineer based in NYC with 10+ years of coding experience and 4+ years of professional industry experience. I specialize in full stack development, data engineering, and forward deployed engineering, working across the ad tech stack with tools like React, Next.js, Flask, Snowflake, Databricks, and Airflow. My dream is to innovate creative ideas for products and apps that benefit society.",
  email: "jessica@jessicawong.dev",
  github: "https://github.com/wongjessica",
  linkedin: "https://www.linkedin.com/in/jessicawongdev/",
};

export const experience = [
  {
    company: "Chalice AI",
    role: "Software Engineer",
    type: "Full-time",
    period: "Sep 2024 - Present",
    location: "New York City Metropolitan Area · Hybrid",
    description: [
      "Built and shipped 3 production UIs end-to-end from wireframing through deployment.",
      "Migrated AI Insights app from Streamlit to React/Next.js + Flask with Snowflake backend, featuring interactive heatmaps, session-based caching, and PDF export.",
      "Managed data pipelines for 15+ advertising clients across Snowflake, Databricks, Airflow, and multiple DSPs (TTD, DV360, Meta, Index Exchange, OpenX).",
      "Created 15+ Metaplane data quality monitors with automated Slack alerting across all client audience segments.",
      "Deployed container models and audience segments to 10+ clients across OpenX and Index Exchange, including Capital One, Apple, and United Airlines.",
      "Led Index Exchange API migration from v2 to v3 for the Deal Creation UI.",
      "Led the Forward Deployed Engineering team, ran standups, authored the FDE Run Book, and wrote 6+ technical documentation pieces; onboarded 2 new engineers.",
      "Participated in IAB Programmatic Supply Chain Working Group, contributing to industry standards.",
    ],
  },
  {
    company: "9/11 Memorial & Museum",
    role: "Software Engineer",
    type: "Full-time",
    period: "Jun 2023 - Jun 2024",
    location: "New York City Metropolitan Area · Hybrid",
    description: [
      "Developed and maintained automation acceptance tests using Codeception, PHP, and Selenium, ensuring the proper functionality of the website and product workflows.",
      "Wrote SQL queries to perform database checks, providing detailed insights into the success of website orders.",
      "Conducted load testing using JMeter scripts and BlazeMeter, simulating heavy user traffic to ensure optimal performance.",
      "Led accessibility initiatives for the timeline website, utilizing tools like WAVE and Lighthouse to identify and resolve accessibility errors.",
      "Implemented Jenkins integration on an Ubuntu server, enabling concurrent execution of tests.",
      "Identified and reported multiple bugs, creating detailed Jira tickets and acquiring proficiency in Drupal CMS.",
    ],
  },
  {
    company: "NASA - Goddard Space Flight Center",
    role: "Full Stack Software Engineer",
    type: "Full-time",
    period: "Aug 2020 - Apr 2022",
    location: "Remote",
    description: [
      "Developed new features for a web application for NASA's Systems Engineering Education Development program utilizing Django, Python, JavaScript and HTML/CSS. Delivered app to be used by 20+ NASA employees.",
      "Managed the database backend to customize user permissions using phpMyAdmin and SQL.",
    ],
  },
  {
    company: "CodePath.org",
    role: "Cybersecurity Tech Fellow",
    type: "Fellowship",
    period: "Jan 2021 - May 2021",
    description: [
      "Taught an introductory Cybersecurity class of 20+ students.",
    ],
  },
  {
    company: "Liberty Mutual Insurance",
    role: "Software Engineer Intern",
    type: "Internship",
    period: "May 2020 - Aug 2020",
    location: "Remote",
    description: [
      "Developed a proprietary web application in a team of 3 that consolidates Liberty Mutual products.",
      "Utilized WordPress, HTML, CSS, PHP all in a Docker container.",
      "Programmed a React/Node web-app intake form for the Robotics team.",
      "Led and participated in daily stand-ups following the Agile methodology.",
    ],
  },
  {
    company: "Moody's Corporation",
    role: "Data Science Intern",
    type: "Internship",
    period: "Jan 2020",
    location: "Greater New York City Area",
    description: [
      "Improved readability of Release Management Data by 65% by writing Python scripts leveraging Pandas.",
      "Created over 20 data visualizations using Tableau and presented analysis to 15 employees.",
    ],
  },
  {
    company: "WHIM",
    role: "Software Engineer Intern",
    type: "Internship",
    period: "Jun 2019 - Sep 2019",
    location: "Greater New York City Area",
    description: [
      "Developed UI features on the web application with React, Redux, and SCSS.",
      "Reduced automation runtime by 90% through optimizing UI tests using TypeScript and Selenium.",
      "Tested web and mobile apps for bugs, improvements, and new features.",
    ],
  },
];

export const volunteerWork = [
  {
    organization: "Subtle Asian Tech",
    role: "Administrator",
    period: "Apr 2019 - Present",
    description:
      "Moderates a Facebook group of over 14,500 members, surrounding networking and establishing connections in the tech industry. Provides resume review, interview prep, and professional networking opportunities.",
  },
  {
    organization: "CUNY K16 Initiatives",
    role: "Computer Science Tutor",
    period: "Feb 2020 - May 2020",
    description:
      "Created worksheets, study strategies, and assignments for AP Computer Science A students focused on Java fundamentals.",
  },
  {
    organization: "Chinese-American Planning Council",
    role: "Teacher's Assistant",
    period: "Jun 2016 - Mar 2019",
    description:
      "Reinforced lessons by working with students directly, aided children in understanding mathematics.",
  },
];

export const skills = {
  languages: ["Python", "JavaScript", "TypeScript", "SQL", "HTML/CSS", "Java", "C++", "PHP"],
  frameworks: ["React", "Next.js", "Flask", "Django", "Redux", "Streamlit", "Express", "Tailwind CSS"],
  tools: ["Snowflake", "Databricks", "Apache Airflow", "AWS", "Docker", "Git", "GitHub Actions", "Metaplane", "Datadog", "GCP", "Jira", "Postman", "Figma", "Superset", "Tableau"],
  concepts: ["Full Stack Development", "Data Engineering", "Forward Deployed Engineering", "Ad Tech / DSPs", "CI/CD", "Data Quality Monitoring", "Cybersecurity", "Agile", "Accessibility"],
};

export const projects = [
  {
    name: "Your Friend Online",
    period: "Oct 2019",
    description:
      "Won Best Education Hack and Best Domain Hack at TechTogether NY 2019. Created 2 chatbots and 1 survey bot to help guide students through their prospective college careers, providing academic and emotional support.",
    tech: ["HTML", "CSS", "JavaScript", "Google Cloud Platform"],
    link: "http://www.yourfriend.online",
  },
  {
    name: "PottyNYC",
    period: "Sep 2019",
    description:
      "A web and mobile application that allows users to find public restrooms in NYC in real-time. Tracks user location and finds the nearest bathroom with directions.",
    tech: ["HTML", "CSS", "JavaScript", "Google Maps API", "Apify", "GCP"],
  },
  {
    name: "Mind Over Mind",
    period: "Mar 2020",
    description:
      "Hack Brooklyn project that prioritizes mental health issues and tries to combat them, especially for those mentally struggling due to COVID-19.",
    tech: ["Hackathon Project"],
  },
  {
    name: "Our Backyard Space",
    period: "2020",
    description:
      "BackyardHacks Project fostering a collaborative community for outdoor enthusiasts. Share your space for others to see, gain inspiration, and connect with others.",
    tech: ["HTML", "CSS", "SCSS", "Bootstrap", "JavaScript", "Flask", "GCP"],
  },
];

export const education = [
  {
    school: "Hunter College",
    degree: "Bachelor's Degree, Computer Science",
    honors: ["Daedalus Honors Program Scholar", "Dean's List"],
    activities: "ACM Club, WiCS Club",
  },
  {
    school: "Midwood High School",
    degree: "High School Diploma",
    honors: ["Summa Cum Laude", "Arista Honors Society", "Archon Society", "Top 10% of graduating class"],
    activities: "President of Computer Science Club, Art Club, Badminton Club, Robotics Team",
  },
];

export const awards = [
  { name: "Google GHC Scholarship Recipient", year: "2021" },
  { name: "ACM Richard Tapia Scholarship Recipient", year: "2020" },
  { name: "Grace Hopper Celebration Conference Scholar", year: "2020" },
  { name: "Best Education Hack & Best Domain Hack - TechTogether NY", year: "2019" },
  { name: "Public Anthropology Award - Excellence in Writing on Public Issues", year: "2018" },
  { name: "Daedalus Honors Scholar - Hunter College", year: "" },
  { name: "Dean's List - Hunter College", year: "" },
];
