import React from 'react';
import ADPLogo from '../../assets/image/logos/adp.jpg';
import PNSLogo from '../../assets/image/pnsuk_logo.png';
import KCLLogo from '../../assets/image/kcl_logo.jpg';
import UEALogo from '../../assets/image/uea_logo.webp';

import { ReactComponent as IconProfile } from '../../assets/icons/noun-person-7065915.svg';
import { ReactComponent as IconWorkExperience } from '../../assets/icons/noun-briefcase-7779894.svg';

import { ReactComponent as IconEmail } from '../../assets/icons/noun-mail-1428698.svg';
import { ReactComponent as IconPhone } from '../../assets/icons/noun-phone-7849386.svg';
import { ReactComponent as IconLocation } from '../../assets/icons/noun-location-5480581.svg';
import { ReactComponent as IconSkills } from '../../assets/icons/noun-magic-2704149.svg';
import { ReactComponent as IconEducation } from '../../assets/icons/noun-education-3961689.svg';
import { ReactComponent as IconCertificate } from '../../assets/icons/noun-certificate-7830135.svg';
import { ReactComponent as IconLink } from '../../assets/icons/noun-link-5747677.svg';
import { ReactComponent as IconGitHub } from '../../assets/icons/GitHub.svg';


const ResumeText = {
    default: {
        header: {
            name: "Ash Khadka",
            title: "Software Engineer",
        },
        profile: {
            text: "Product driven Software Engineer with half a decade experience at ADP (an S&P 500 company), building and scaling React, .NET Core web apps used by over 1 million clients. I work on RUN, a payroll software rated 4.9 on the App Store and Google Play. King's College London master's graduate in Software Engineering with a First Class Honours in Computer Science. Passionate about clean, scalable code, emerging tech, AI. Team player who’s always ready to help and take on difficult challenges. Recent company hackathon winner for 2024.",
        },
        contact: [
            { text: "ashmit.khadka@outlook.com", icon: <IconEmail /> },
            { text: "07476919615", icon: <IconPhone /> },
            { text: "London, Peterborough, Cambridge", icon: <IconLocation /> },
            { text: "github.com/ashmit-khadka", icon: <IconGitHub /> },
            { text: "akhadka.dev", icon: <IconLink /> },
            { text: "geekcaffine.com", icon: <IconLink /> },
        ],
        workExperience: [
            {
                company: "ADP (Automatic Data Processing)",
                position: "Software Engineer",
                startDate: "September 2021",
                endDate: "Present",
                responsibilities: [
                    "Hackathon 2024 winner for developing a web application that tracks code deployments across multiple environments, improving visibility and release traceability.",
                    "Delivered over 500+ features and production bug fixes across the full stack using React, TypeScript, Node, C#.",
                    "Performed 300+ code reviews, promoted architectural standards, and best practices.",
                    "Mentored 3 graduate engineers through deep dives, shadowing sessions, and pair programming.",
                    "Collaborate cross functionally with UX designers to build responsive, accessible, and high performance web apps using React and Figma. Engineered modular, reusable UI components with React and Tailwind.",
                    "Designed and optimised 30+ mission critical RESTful APIs using Node, Express, MongoDB and C#, implementing robust error handling, logging and performance tuning.",
                    "Authored and optimised stored procedures and queries using SQL and MongoDB, supporting data heavy features at scale.",
                    "Built 1,000+ unit and integration tests using React Testing Library and Jest.",
                    "Developed 100+ end-to-end UI test suites with Cypress, Selenium, and Cucumber, automating complex user journeys and release validation.",
                ],
                logo: ADPLogo,
            },
            {
                company: "ADP (Automatic Data Processing)",
                position: "Associate Software Engineer",
                startDate: "July 2019",
                endDate: "June 2020 (Internship)",
                responsibilities: [
                    "Developed responsive, high performance client-facing user experiences using React, Node, and Express.",
                    "Automated data mining of production usage patterns using Python to generate realistic performance test profiles, significantly enhancing test coverage and load accuracy.",
                    "Integrated Google Tag Manager to capture key user interactions and built end-to-end Google Analytics reporting pipelines helping enable better data-driven UX and product decisions.",
                ],
                logo: ADPLogo,
            },
            {
                company: "Peterborough Nepalese Samaj (PNSUK)",
                position: "Head of IT",
                startDate: "April 2017",
                endDate: "Present",
                responsibilities: [
                    "Collaborate with community stakeholders to build and enhance the charity website PNSUK.org, using React, Python, Django and SQL",
                    "Lead IT education workshops for both adults and children, fostering digital literacy and empowering the community with essential tech skills.",
                ],
                logo: PNSLogo,
            },
        ],
        projects: [
            {
                title: "AI Sustainability Platform",
                description: "Social platform targeted at higher education with AI generated sustainability challenges, chatbots, and content moderation. Built using the MERN stack + GraphQL",
                link: "https://geekc",
                context: "MSc Thesis (awarded Distinction)",
            },
            {
                title: "DNA Visualisation Tool",
                description: "Partnered with The Sainsbury Laboratory to build an interactive web app for visualising protein interactions in plant pathogens. Powered by D3 and the MERN stack.",
                link: "https://geekc",
                context: "BSc Thesis (awarded First Class Honours)",
            },
            {
                title: "GeekCaffeine.com: One Hub for All Things Tech",
                description: "Built a curated tech content hub with custom web scrapers and a recommendation engine using TypeScript and the MERN stack.",                     
                link: "https://geekc",
            },
            {
                title: "PNSUK.com: Empowering the Nepali Community",
                description: "Designed and developed the official site for a UK-based Nepali charity that empowers the local Nepali community. Built using React and powered by Python and Django.",
                link: "https://geekc",
            },
        ],
        education: [
            {
                title: "MSc, Advanced Software Engineering",
                institution: "King's College London",
                grade: "Merit",
                date: "2024",
                logo: KCLLogo,
            },
            {
                title: "BSc, Computing Science (with a year in industry)",
                institution: "University of East Anglia",
                grade: "First Class Honours",
                date: "2021",
                logo: UEALogo,
            },
        ],
        skills: {
            languages: "JavaScript, TypeScript, C#, Python, SQL, F#, HTML, CSS, Java, PowerShell",
            frameworks: "React, React Native, Node, ASP.NET Core, Express, Django, SASS, Redux, Next, GraphQL, D3, Tailwind",
            cloud: "Azure, AWS, Git, Docker, Jenkins, Splunk, Nginx",
            databases: "SQL, MongoDB",
            tools: "Figma, Selenium, Jira, Playwright, Cypress, TDD",
        },
        certifications: [
            {
                title: "UX Design",
                institution: "Google",
                platform: "Coursera",
                date: "2021",
                link: "",
            },
            {
                title: "JavaScript: The Advanced Concepts",
                institution: "Mosh Hamedani",
                platform: "Udemy",
                date: "2022",
                link: "",
            },
            {
                title: "Mastering TypeScript - 2023 Edition",
                institution: "Zero to Mastery",
                platform: "Udemy",
                date: "2023",
                link: "",
            },
            {
                title: "C# Advanced Topics",
                institution: "Colt Steele",
                platform: "Udemy",
                date: "2022",
                link: "",
            },
        ],
        awards: [
            {
                title: "Company Hackathon Winner",
                from: "ADP",
                date: "2024",
            },
            {
                title: "Top 50 Best HR Products",
                from: "G2",
                date: "(2021-2024)",
            },
            {
                title: "Gold Winner for Mobile Web & App of the Year",
                from: "The American Business Awards",
                date: "2024",
            },
            {
                title: "Gold Winner for Mobile Site Design",
                from: "COMM",
                date: "2023",
            },
            {
                title: "Bebras Challenge - 1st of 200 students for computational challenges",
                from: "Raspberry Pi foundation",
                date: "2016",
            },
        ],

    }
}

const ResumeScreen = () => {

    const resumeText = ResumeText.default;

    return (
        <div className="resume resume-container">
            {/* Left Column */}
            <div className="resume-left-column">
                <ContactSection
                    name={resumeText.header.name}
                    title={resumeText.header.title}
                    entries={resumeText.contact}
                />
                <SectionDevider />

                <SkillSection
                    languages={resumeText.skills.languages}
                    frameworks={resumeText.skills.frameworks}
                    cloud={resumeText.skills.cloud}
                    database={resumeText.skills.databases}
                    tools={resumeText.skills.tools}
                />
                <SectionDevider />

                <EducationSection
                    entries={resumeText.education}
                />
                <SectionDevider />

                <CertificationSection
                    entries={resumeText.certifications}
                />

                <SectionDevider />
                <AwardSection
                    entries={resumeText.awards}
                />

            </div>

            {/* Right Column */}
            <div className="resume-right-column">
                <ProfileSection
                    text={resumeText.profile.text}
                />
                <SectionDevider />
                <WorkExperienceSection
                    workExperience={resumeText.workExperience}
                />
                <SectionDevider />
                <ProjectSection
                    projects={resumeText.projects}
                />
            </div>
        </div>
    );
}

const SectionDevider = () => {
    return (
        <div className="resume-section-divider">
            <div className="resume-section-divider-line"></div>
        </div>
    )
}


const SkillSection = (props) => {

    const { languages, frameworks, cloud, database, tools } = props;

    return (
        <section className="resume-section skills">
            <SectionHeader header="Skills" icon={<IconSkills />} />
            <div className="resume-skills-groups">
                <div className="resume-skills-group">
                    <p><span>Languages</span>: {languages}</p>
                </div>

                <div className="resume-skills-group">
                    <p><span>Frameworks</span>: {frameworks}</p>

                </div>
                <div className="resume-skills-group">
                    <p><span>Cloud / DevOps</span>: {cloud}</p>
                </div>
                <div className="resume-skills-group">
                    <p><span>Databases</span>: {database}</p>
                </div>
                <div className="resume-skills-group">
                    <p><span>Other</span>: {tools}</p>
                </div>
            </div>
        </section>
    )
}

const ProjectSection = (props) => {
    const { projects } = props;
    return (
        <section className="resume-section">
            <SectionHeader header="Projects" icon={<IconProfile />} />
            <ul>
                {projects.map((project, index) => (
                    <ProjectItem
                        key={index}
                        title={project.title}
                        description={project.description}
                        context={project.context}
                    />
                ))}
            </ul>
        </section>
    );
}

const ProjectItem = (props) => {
    const { title, description, context } = props;
    return (
        <li className="project">
            <p><span>{title}</span>, <span style={{ fontStyle: "italic", fontWeight:"00" }}>{context}</span> - {description}</p>
        </li>
    );
}

const ProfileSection = (props) => {
    const { text } = props;
    return (
        <section >
            <SectionHeader header="Profile" icon={<IconProfile />} />
            <p>{text}</p>
        </section>
    );
}

const WorkExperienceSection = (props) => {
    const { workExperience } = props;
    return (
        <section>
            <SectionHeader header="Work Experience" icon={<IconWorkExperience />} />
            <div
                style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
                {workExperience.map((entry, index) => (
                    <WorkExperience
                        key={index}
                        company={entry.company}
                        position={entry.position}
                        startDate={entry.startDate}
                        endDate={entry.endDate}
                        responsibilities={entry.responsibilities}
                        logo={entry.logo}
                    />
                ))}
            </div>
        </section>
    );
}

const WorkExperience = (props) => {
    const { company, position, startDate, endDate, responsibilities, logo } = props;

    return (
        <div className="resume-work-experience">
            {/* <div className="resume-work-experience-timeline-dot"></div> */}
            <div className="resume-work-experience-company">
                {logo && <img src={logo} alt={`${company} logo`} className="company-logo" />}
                <div>
                    <h3>{`${position} - ${company}`}</h3>
                    <p>{startDate} - {endDate}</p>
                </div>
            </div>
            <ul className="responsibilities">
                {responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

const ContactSection = (props) => {
    const { name, title, entries } = props;
    return (
        <section className="resume-section contact-info">
            <div className="resume-name">
                <h1 className="">{name}</h1>
                <p className="">{title}</p>
            </div>
            <ul className="resume-info">
                {entries.map((entry, index) => (
                    <li key={index} className="resume-contact">
                        {entry.icon}
                        <p>{entry.text}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

const EducationSection = (props) => {
    const { entries } = props;
    return (
        <section className="resume-section resume-education">
            <SectionHeader header="Education" icon={<IconEducation />} />
            <ul>
                {entries.map((entry, index) => (
                    <li key={index} className="resume-education-entry">
                        <img src={entry.logo} alt={`${entry.from} logo`} className="education-logo" />
                        <div>
                            <p><span>{entry.title}</span> - {entry.institution}, {entry.grade}, {entry.date}</p>

                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

const CertificationSection = (props) => {
    const { entries } = props;
    return (
        <section className="resume-section resume-certifications">
            <SectionHeader header="Certifications" icon={<IconCertificate />} />
            <ul>
                {entries.map((entry, index) => (
                    <li key={index}>
                        <p><span>{entry.title}</span> - {entry.institution}, {entry.platform}, {entry.date}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

const AwardSection = (props) => {
    const { entries } = props;
    return (
        <section className="resume-section resume-awards">
            <SectionHeader header="Awards" icon={<IconCertificate />} />
            <ul>
                {entries.map((entry, index) => (
                    <li key={index}>
                        <p><span>{entry.title}</span> - {entry.from}, {entry.date}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}


const SectionHeader = (props) => {
    const { header, icon } = props;
    return (
        <div className="resume-section-header">
            {icon}
            <h2 className="resume-section-header">{header}</h2>
        </div>
    );
}

export default ResumeScreen;