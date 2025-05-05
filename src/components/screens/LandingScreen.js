import React, { useState } from "react";
import KCLLogo from '../../assets/image/kcl_logo.jpg';
import UEALogo from '../../assets/image/uea_logo.webp';

import CSharpIcon from '../../assets/icons/CSharp.svg';
import JavaScriptIcon from '../../assets/icons/JavaScript.svg';
import TypeScriptIcon from '../../assets/icons/TypeScript.svg';
import NodeIcon from '../../assets/icons/Node.svg';
import FigmaIcon from '../../assets/icons/Figma.svg';
import MongoDBIcon from '../../assets/icons/MongoDB.svg';
import SQLIcon from '../../assets/icons/PostgresSQL.svg';
import PythonIcon from '../../assets/icons/Python.svg';
import DjangoIcon from '../../assets/icons/Django.svg';
import GitIcon from '../../assets/icons/Git.svg';
import JiraIcon from '../../assets/icons/Jira.svg';
import AzureIcon from '../../assets/icons/Azure.svg';
import IconTailwind from '../../assets/icons/Tailwind.svg';
import IconCypress from '../../assets/icons/Cypress.svg';
import IconSelenium from '../../assets/icons/Selenium.svg';
import IconReact from '../../assets/icons/React.svg';
import IconRedux from '../../assets/icons/Redux.svg';
import IconJenkins from '../../assets/icons/Jenkins.svg';
import IconSASS from '../../assets/icons/Sass.svg';

import SelfImage from '../../assets/image/PXL_20230625_190943733~2.jpg';
import DotIcon from '../../assets/icons/noun-dot-1420973.svg';
import { ReactComponent as IconDot } from '../../assets/icons/noun-dot-1420973.svg';
import { ReactComponent as IconStar } from '../../assets/icons/noun-star-995145.svg';
import { ReactComponent as IconJavaScript } from '../../assets/icons/JavaScript.svg';
import { ReactComponent as IconTypeScript } from '../../assets/icons/TypeScript.svg';
import { ReactComponent as IconNode } from '../../assets/icons/Node.svg';
import { ReactComponent as IconFigma } from '../../assets/icons/Figma.svg';

import ImageGoogle from '../../assets/image/logos/google.svg';
import ImagePenn from '../../assets/image/logos/penn.png';
import ImageUdemy from '../../assets/image/logos/udemy.png';


import ImagePortfolio from '../../assets/image/app-store-preview-screenshot-sketch.jpg';
import ImageADP from '../../assets/image/logos/adp.jpg';

import { ReactComponent as IconEmail } from '../../assets/icons/noun-mail-7838451.svg';
import { ReactComponent as IconPhone } from '../../assets/icons/noun-phone-7814366.svg';
import { ReactComponent as IconLocation } from '../../assets/icons/noun-location-7752735.svg';
import { ReactComponent as IconLink } from '../../assets/icons/noun-link-5747677.svg';


import Button from "../core/Button";

const LandingScreen = () => {

    const [activeSection, setActiveSection] = useState('about');
    const [isSkillsExpanded, setIsSkillsExpanded] = useState(false);

    const initialSkills = [
        { name: "JavaScript", icon: JavaScriptIcon },
        { name: "React", icon: IconReact },
        { name: "Node.js", icon: NodeIcon },
        { name: "TypeScript", icon: TypeScriptIcon },
        { name: "Figma", icon: FigmaIcon },
        { name: "C#", icon: CSharpIcon },
        { name: "MongoDB", icon: MongoDBIcon },
        { name: "PostgreSQL", icon: SQLIcon },
    ];

    const additionalSkills = [
        { name: "Python", icon: PythonIcon },
        { name: "Django", icon: DjangoIcon },
        { name: "Tailwind", icon: IconTailwind },
        { name: "Git", icon: GitIcon },
        { name: "Jira", icon: JiraIcon },
        { name: "Azure", icon: AzureIcon },
        { name: "Redux", icon: IconRedux },
        { name: "Cypress", icon: IconCypress },
        { name: "Selenium", icon: IconSelenium },
        { name: "Jenkins", icon: IconJenkins },
        { name: "Sass", icon: IconSASS },
    ];

    const visibleSkills = isSkillsExpanded ? [...initialSkills, ...additionalSkills] : initialSkills;

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(sectionId);
        }
    };

    return (
        <div className="landing">
            <div id="about" className="landing-about section screen">
                <div className="landing-about--large">
                    {AboutSectionIntro}
                    <AboutSectionShortcuts
                        activeSection={activeSection}
                        onSectionClick={scrollToSection}
                    />
                </div>
                <div className="landing-about--large">
                    {AboutSectionBio}
                </div>

                <div className="landing-about--small">
                    {AboutSectionIntro}
                    {AboutSectionBio}
                    <AboutSectionShortcuts
                        activeSection={activeSection}
                        onSectionClick={scrollToSection}
                    />
                </div>
            </div>

            <div id="expertise" className="landing-skill section">
                <SectionTitle title="My expertise" isLight isWide/>
                <div className={`landing-skill-container screen ${isSkillsExpanded ? 'expanded' : 'collapsed'}`}>
                    {visibleSkills.map((skill, index) => (
                        <Skill
                            key={index}
                            name={skill.name}
                            icon={skill.icon}
                        />
                    ))}
                </div>
                <button
                    className="landing-skill-expand"
                    onClick={() => setIsSkillsExpanded(!isSkillsExpanded)}
                >
                    {isSkillsExpanded ? 'Show Less' : 'Show More'}
                </button>
            </div>

            <div id="projects" className="screen section">
                <SectionTitle title="Projects" />

                <div className="section-items">
                    <PortfolioSection
                        header="AI-Powered Sustainability Platform for Higher Education"
                        description="Built as part of my MSc thesis, this MERN stack web app uses AI to generate personalised sustainability challenges and support user interaction through chatbots and comment moderation. Gamified features like leaderboards and rewards drive engagement, while the VIPER-based architecture ensures scalability and clean modular design."
                        image={ImagePortfolio}
                        link={`${process.env.PUBLIC_URL}/assets/docs/pg_project.pdf`}
                    />
                    <PortfolioSection
                        header="DNA Visualisation Platform for Plant Pathogen Research"
                        description="Collaborated with The Sainsbury Laboratory to build a MERN stack web app for visualising complex DNA and protein interaction datasets. Integrated D3.js to render interactive visualisations (dot plots, networks, edge bundling) and laid the groundwork for AI-powered pattern recognition to support plant disease research at scale."
                        image={ImagePortfolio}
                        flipped
                        link={`${process.env.PUBLIC_URL}/assets/docs/ug_project.pdf`}
                    />
                    <PortfolioSection
                        header="GeekCaffeine.com: One Hub for All Things Tech"
                        description="I built GeekCaffeine to create the ultimate destination for computer geeks—a single platform that curates the best tech content from across the internet. From programming and gaming to hardware and cybersecurity, it brings together news, tutorials, and videos in one clean, responsive interface designed for daily use."
                        link="https://geekcaffeine.com/"
                        image={ImagePortfolio}
                    />
                    <PortfolioSection
                        header="PNSUK.com: Empowering the Nepali Community"
                        description="I helped design and develop the official site for the Peterborough Nepalese Society UK (PNSUK), a registered charity that empowers the local Nepali community through cultural events, education, and charitable support. My goal was to make a platform that reflects their mission, enables blog contributions, and makes resources more accessible for members and supporters alike."
                        image={ImagePortfolio}
                        link="https://pnsuk.com/"
                        flipped
                    />
                </div>
            </div>

            <div id="experience" className="landing-experience section screen">
                <SectionTitle title="Experience"/>
                <div className="section-items">
                    <ExperienceItem
                        title="Software Engineer"
                        organization="ADP (Automatic Data Processing)"
                        date="September 2021 - Present"
                        responsibilities={[
                            "Conduct code reviews to ensure quality and maintainability.",
                            "Mentor graduate software engineers through architectural overviews, shadowing, and pair programming sessions.",
                            "Collaborate with UX and develop responsive, high-performance web applications using React.js.",
                            "Design modular, reusable UI components leveraging Tailwind CSS and a custom in-house design system, delivering a consistent brand experience across applications.",
                            "Develop and optimise RESTful API integrations with robust error handling and performance improvements using Node.js, Express.js, and ASP.NET.",
                            "Developed high-performance SQL stored procedures and queries.",
                            "Develop comprehensive unit and integration tests using Jest and React Testing Library.",
                        ]}
                        logo={ImageADP}
                    />
                    <ExperienceItem
                        title="Associate Software Engineer"
                        organization="ADP (Automatic Data Processing)"
                        date="July 2019 - July 2020"
                        responsibilities={[
                            "Developed migration scripts to transition version control from TFVC to GIT.",
                            "Automated data mining of production data to create realistic test load profiles for performance testing.",
                            "Integrated Google Tag Manager for user interaction tracking and established a Google Analytics reporting pipelines.",
                        ]}
                        logo={ImageADP}
                    />
                </div>
            </div>

            <div id="education" className="landing-education section screen">
                <SectionTitle title="Education" />
                <div className="section-items">
                    <EducationTile
                        title="Master of Science in Software Engineering"
                        description="King's College London, 2024, High Merit."
                        logo={KCLLogo}
                    />
                    <EducationTile
                        title="Bachelor of Science in Computer Science"
                        description="University of East Anglia, 2020, First Class Honours."
                        logo={UEALogo}
                    />
                </div>

            </div>

            <div className="landing-education section screen">
                <SectionTitle title="Certifications" />
                <div className="section-items section-items--grid">
                    <CertificationTile
                        title="Google UX Design"
                        institution="Google"
                        platform="Coursera"
                        year="2021"
                        logo={ImageGoogle}
                        link="https://www.coursera.org/account/accomplishments/specialization/certificate/BQYR2BE9BL4Z"
                    />
                    <CertificationTile
                        title="Entrepreneurship Specialization"
                        institution="University of Pennsylvania"
                        platform="Coursera"
                        year="2023"
                        logo={ImagePenn}
                        link="https://www.coursera.org/account/accomplishments/certificate/78SW7ZLCBYL4"
                    />

                    <CertificationTile
                        title="JavaScript: The Advanced Concepts"
                        institution="Zero to Mastery"
                        platform="Udemy"
                        year="2022"
                        logo={ImageUdemy}
                        link="https://udemy-certificate.s3.amazonaws.com/pdf/UC-628b7748-f652-467f-af3f-00c588747cb0.pdf"
                    />

                    <CertificationTile
                        title="Mastering TypeScript - 2023 Edition"
                        institution="Colt Steele"
                        platform="Udemy"
                        year="2023"
                        logo={ImageUdemy}
                        link="https://udemy-certificate.s3.amazonaws.com/pdf/UC-0ea23300-3f11-443d-ae2c-08d9e22ee458.pdf"
                    />

                    <CertificationTile
                        title="C# Advanced Topics"
                        institution="Mosh Hamedani"
                        platform="Udemy"
                        year="2022"
                        logo={ImageUdemy}
                        link="https://udemy-certificate.s3.amazonaws.com/pdf/UC-71e26554-f4cf-44d7-b83b-113fbbd63a31.pdf"
                    />

                </div>
            </div>


            <div id="contact" className="landing-contact section screen">
                <SectionTitle title="Contact" />
                <div className="section-items">
                    <ContactTile text="ashmit.khadka@outlook.com" icon={<IconEmail />} />
                    <ContactTile text="07476919615" icon={<IconPhone />} />
                    <ContactTile text="London, Perterbrough, Cambrige" icon={<IconLocation />} />
                </div>
            </div>
        </div>
    );
}

const ContactTile = (props) => {
    const { text, icon } = props;
    return (
        <div className="landing-contact-tile">
            {icon}
            <p>{text}</p>
        </div>
    );
}

const ExperienceItem = (props) => {
    const { title, organization, date, responsibilities, logo } = props;
    return (
        <div className="landing-experience-tile">
            <div className="landing-experience-tile--header">
                <div>
                    <img src={props.logo} alt="Experience Logo" className="experience-logo" />
                </div>
                <div className="landing-experience-tile--text">
                    <h2>{title}</h2>
                    <p>{organization}</p>
                    <p>{date}</p>

                </div>
            </div>
            <ul className="landing-experience-tile--responsibilities">
                {responsibilities.map((item, index) => (
                    <li key={index}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );

}
const AboutSectionIntro = (
    <div>
        <div className="landing-intro-header">
            <div className="landing-intro-header-underline"></div>
            <h1>Hi, I'm Ash </h1>
            <IconStar />
        </div>
        <div className="landing-intro-meta">
            <ul >
                <li>Problem Solver <IconDot /></li>
                <li>Creator <IconDot /></li>
                <li>Pioneer</li>
            </ul>
        </div>
        <div className="landing-intro-quick-info">
            <ul>
                <li><span>S&P 500</span> Software Engineer </li>
                <li>Certified <span>UX</span> enthusiast </li>
                <li>A world top 50 university graduate</li>
            </ul>
        </div>
    </div>
)


const AboutSectionShortcuts = ({ activeSection, onSectionClick }) => (
    <div className="landing-intro-shortcuts">
        <ul>
            <li
                className={`landing-intro-shortcuts-item landing-intro-shortcuts--active ${activeSection === 'about' ? 'active' : ''}`}
                onClick={() => onSectionClick('about')}
            >
                About me
            </li>
            <li
                className={`landing-intro-shortcuts-item ${activeSection === 'expertise' ? 'active' : ''}`}
                onClick={() => onSectionClick('expertise')}
            >
                Expertise
            </li>
            <li
                className={`landing-intro-shortcuts-item ${activeSection === 'projects' ? 'active' : ''}`}
                onClick={() => onSectionClick('projects')}
            >
                Projects
            </li>
            <li
                className={`landing-intro-shortcuts-item ${activeSection === 'experience' ? 'active' : ''}`}
                onClick={() => onSectionClick('experience')}
            >
                Experience
            </li>
            <li
                className={`landing-intro-shortcuts-item ${activeSection === 'education' ? 'active' : ''}`}
                onClick={() => onSectionClick('education')}
            >
                Education
            </li>
            <li
                className={`landing-intro-shortcuts-item ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={() => onSectionClick('contact')}
            >
                Contact
            </li>
        </ul>
    </div>
);

const AboutSectionBio = (
    <div className="landing-intro-bio">
        <div className="landing-intro-bio-icon">
            <IconJavaScript className="landing-intro-bio-icon--javascript" />
            <IconTypeScript className="landing-intro-bio-icon--typescript" />
            <IconNode className="landing-intro-bio-icon--node" />
            <IconFigma className="landing-intro-bio-icon--figma" />
            <img src={SelfImage} alt="Profile" className="landing-intro-profile" />
        </div>
        <p>
            “A user-centred and results-driven practical trailblazer. I’m a software engineer with a Master's degree in Software Engineering from King's College London and half a decade experience at ADP, a renowned S&P 500 company. Driven by a passion for designing and delivering scalable, high-performance, clean solutions.”
        </p>
    </div>
)

const Skill = (props) => {
    const { name, icon } = props;
    return (
        <div className="landing-skill-tile">
            <img src={icon} alt="Skill Icon" className="skill-icon" />
            <p>{name}</p>
        </div>
    );
}


const PortfolioSection = (props) => {
    const { header, description, image, link, flipped } = props;
    
    const imageClass = `landing-portfolio-tile-image ${flipped ? 'landing-portfolio-tile-image--flipped' : ''}`;
    const textClass = `landing-portfolio-tile-text ${flipped ? 'landing-portfolio-tile-text--flipped' : ''}`;

    const handleOpenProject = () => {
        if (link) {
            window.open(link, '_blank');
        }
    }

    return (
        <div className="landing-portfolio-tile">
            <div className={imageClass}>
                <img src={ImagePortfolio} alt="Portfolio Icon" className="portfolio-icon" />
            </div>
            <div className={textClass}>
                <h2>{header}</h2>
                <p>{description}</p>
                <Button onClick={handleOpenProject} className="landing-portfolio-tile--button">View Project</Button>
            </div>
        </div>
    );
}

const EducationTile = (props) => {
    const { title, description, logo } = props;

    return (
        <div className="landing-education-tile">
            <div>
                <img src={logo} alt="Education Logo" className="education-logo" />
            </div>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>

            </div>
        </div>
    );
}

const CertificationTile = (props) => {
    const { title, institution, platform, year, logo, link } = props;

    const handleOpenCertification = () => {
        if (link) {
            window.open(link, '_blank');
        }
    }

    return (
        <div className="landing-certification-tile" onClick={handleOpenCertification}>
            <div>
                <img src={logo} alt="Certification Logo" className="certification-logo" />
            </div>
            <div className="certification-tile-text">
                <h2>{title}</h2>
                <p>{institution}, {platform}, {year}</p>
            </div>
            <div>
                <IconLink className="icon-button"/>
            </div>
        </div>
    );
}

const SectionTitle = (props) => {
    const { title, isLight, isWide } = props;
    return (
        <div className={`section-title ${isLight ? 'section-title--light' : ''} ${isWide ? 'screen section-title--wide' : ''}`}>
            <h2>{title}</h2>
        </div>
    );
}


export default LandingScreen;