import React from 'react';
import ADPLogo from '../../assets/image/logos/adp.jpg';
import PNSLogo from '../../assets/image/pnsuk_logo.png';
import KCLLogo from '../../assets/image/kcl_logo.jpg';
import UEALogo from '../../assets/image/uea_logo.webp';

import { ReactComponent as IconProfile } from '../../assets/icons/noun-person-7065915.svg';
import { ReactComponent as IconWorkExperience } from '../../assets/icons/noun-briefcase-7779894.svg';

import { ReactComponent as IconEmail } from '../../assets/icons/noun-mail-7838451.svg';
import { ReactComponent as IconPhone } from '../../assets/icons/noun-phone-7814366.svg';
import { ReactComponent as IconLocation } from '../../assets/icons/noun-location-7752735.svg';
import { ReactComponent as IconSkills } from '../../assets/icons/noun-magic-2704149.svg';
import { ReactComponent as IconEducation } from '../../assets/icons/noun-education-3961689.svg';
import { ReactComponent as IconCertificate } from '../../assets/icons/noun-certificate-7830135.svg';
import { ReactComponent as IconLink } from '../../assets/icons/noun-link-5747677.svg';

const ResumeScreen = () => {
    return (
        <div className="resume resume-container">
            {/* Left Column */}
            <div className="resume-left-column">
                <ContactSection
                    entries={[
                        { text: "ashmit.khadka@hotmail.com", icon: <IconEmail /> },
                        { text: "07476919615", icon: <IconPhone /> },
                        { text: "London, Peterborough, Cambridge", icon: <IconLocation /> },
                        { text: "akhadka.dev", icon: <IconLink /> },
                        { text: "geekcaffine.com", icon: <IconLink /> },
                    ]}
                />

                <SkillSection />

                <EducationSection
                    entries={[
                        { title: "MSc, Advanced Software Engineering", institution: "King's College London", grade: "Merit", date: "2024", logo: KCLLogo },
                        { title: "BSc, Computing Science (With a year in industry)", institution: "University of East Anglia", grade: "First Class Honours", date: "2021", logo: UEALogo },
                    ]}
                />

                <CertificationSection
                    entries={[
                        { title: "UX Design", institution: "Google", platform: "Coursera", date: "2021", link: "" },
                        { title: "JavaScript: The Advanced Concepts", institution: "Mosh Hamedani", platform: "Udemy", date: "2022", link: "" },
                        { title: "Mastering TypeScript - 2023 Edition", institution: "Zero to Mastery", platform: "Udemy", date: "2023", link: "" },
                        { title: "C# Advanced Topics", institution: "Colt Steele", platform: "Udemy", date: "2022", link: "" },
                        { title: "Entrepreneurship", institution: "University of Pennsylvania", platform: "Coursera", date: "2021", link: "" },
                    ]}
                />

            </div>

            {/* Right Column */}
            <div className="resume-right-column">
                <MainSection
                    header="Profile"
                    text="Product driven Software Engineer with half a decade experience at ADP (an S&P 500 company), building and scaling React + .NET Core web apps used by over 1M clients. I work on RUN, a high-traffic platform rated 4.9+ on the App Store and Google Play. King's College London MSc gradate in Software Engineering with a First Class Honours in BSc Computer Science from UEA. Passionate about clean, scalable code, emerging tech, and working with detail-obsessed teams (and AI). Recent company hackathon winner for a tool tracking code changes across environments."
                />
                <WorkExperienceSection />
                <ProjectSection />
            </div>
        </div>
    );
}



const SkillSection = (props) => {

    return (
        <section className="resume-section skills">
            <SectionHeader header="Skills" icon={<IconSkills />} />
            <div className="resume-skills-groups">
                <div className="resume-skills-group">
                    <h3>Languages</h3>
                    <ul>
                        <li>TypeScript</li>
                        <li>JavaScript</li>
                        <li>Python</li>
                        <li>C#</li>
                    </ul>
                </div>
                <div className="resume-skills-group">
                    <h3>Frameworks</h3>
                    <ul>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>ASP.NET Core</li>
                        <li>Express.js</li>
                    </ul>
                </div>
                <div className="resume-skills-group">
                    <h3>Cloud & DevOps</h3>
                    <ul>
                        <li>Azure Functions</li>
                        <li>Azure DevOps</li>
                        <li>GitHub Actions</li>
                        <li>Docker</li>
                    </ul>
                </div>
                <div className="resume-skills-group">
                    <h3>Databases</h3>
                    <ul>
                        <li>PostgreSQL</li>
                        <li>MongoDB</li>
                        <li>SQL Server</li>
                    </ul>
                </div>
                <div className="resume-skills-group">
                    <h3>Testing</h3>
                    <ul>
                        <li>Jest</li>
                        <li>React Testing Library</li>
                        <li>Cypress</li>
                        <li>Selenium</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

const ProjectSection = (props) => {
    const { header, text } = props;
    return (
        <section className="resume-section resume-projects">
            <SectionHeader header="Projects" icon={<IconProfile />} />
            <ul>
                <ProjectItem
                    title="GeekCaffine"
                    description="A blog and portfolio website built with React, TypeScript, and Tailwind CSS. It features a custom CMS for easy content management and is hosted on Vercel."
                    link="https://geekc"
                />
                <ProjectItem
                    title="GeekCaffine"
                    description="A blog and portfolio website built with React, TypeScript, and Tailwind CSS. It features a custom CMS for easy content management and is hosted on Vercel."
                    link="https://geekc"
                />
                <ProjectItem
                    title="GeekCaffine"
                    description="A blog and portfolio website built with React, TypeScript, and Tailwind CSS. It features a custom CMS for easy content management and is hosted on Vercel."
                    link="https://geekc"
                />
                <ProjectItem
                    title="GeekCaffine"
                    description="A blog and portfolio website built with React, TypeScript, and Tailwind CSS. It features a custom CMS for easy content management and is hosted on Vercel."
                    link="https://geekc"
                />
            </ul>
        </section>
    );
}

const ProjectItem = (props) => {
    const { title, description, link } = props;
    return (
        <li className="project">
            <h4>{title}</h4>
            <p>{description}</p>
        </li>
    );
}

const MainSection = (props) => {
    const { header, text } = props;
    return (
        <section className="">
            <SectionHeader header={header} icon={<IconProfile />} />
            <p>{text}</p>
        </section>
    );
}

const SubSection = (props) => {
    const { header, text } = props;
    return (
        <section className="profile">
            <h3>{header}</h3>
            <p>{text}</p>
        </section>
    );
}

const WorkExperienceSection = (props) => {
    const { header, text } = props;
    return (
        <section className="">
            <SectionHeader header="Work Experience" icon={<IconWorkExperience />} />
            <div 
                style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
                <WorkExperience
                    company="ADP"
                    position="Software Engineer"
                    startDate="September 2021"
                    endDate="Present"
                    responsibilities={[
                        "Conduct code reviews to ensure quality and maintainability.",
                        "Mentor graduate software engineers through architectural overviews, shadowing, and pair programming sessions.",
                        "Collaborate with UX and develop responsive, high-performance web applications using React.js.",
                        "Design modular, reusable UI components leveraging Tailwind CSS and a custom in-house design system, delivering a consistent brand experience across applications.",
                        "Develop and optimise RESTful API integrations with robust error handling and performance improvements using Node.js, Express.js, and ASP.NET.",
                        "Developed high-performance SQL stored procedures and queries.",
                        "Develop comprehensive unit and integration tests using Jest and React Testing Library.",
                        "Develop of end-to-end automation tests using Selenium and Cucumber.",
                    ]}
                    logo={ADPLogo}
                />
                <WorkExperience
                    company="ADP"
                    position="Associate Software Engineer"
                    startDate="July 2019"
                    endDate="June 2020"
                    responsibilities={[
                        "Developed migration scripts to transition version control from TFVC to GIT.",
                        "Automated data mining of production data to create realistic test load profiles for performance testing.",
                        "Integrated Google Tag Manager for user interaction tracking and established a Google Analytics reporting pipelines.",
                    ]}
                    logo={ADPLogo}
                />
                <WorkExperience
                    company="Peterborough Nepalese Samaj (PNSUK)"
                    position="Head of IT"
                    startDate="April 2017"
                    endDate="Present"
                    responsibilities={[
                        "Work with the community to maintain the charity’s website PNSUK.org",
                        "Lead IT educational classes for adults and children, promoting digital literacy within the community.",
                    ]}
                    logo={PNSLogo}
                />
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
                    <h3>{`${company}, ${position}`}</h3>
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
    const { entries } = props;
    return (
        <section className="resume-section contact-info">
            <div className="resume-name">
                <h1 className="">Ashmit Khadka</h1>
                <p className="">Software Engineer</p>
            </div>
            <ul className="resume-items">
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
                            <h3>{entry.title}</h3>
                            <p>{entry.institution}, {entry.date}, {entry.grade}</p>
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
                        <h4>{entry.title}</h4>
                        <p>{entry.institution}, {entry.platform}, {entry.date}</p>
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