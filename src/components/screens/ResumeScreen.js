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
                        { text: "London, Perterbrough, Cambrige", icon: <IconLocation /> },
                        { text: "akhadka.dev", icon: <IconLink /> },
                        { text: "geekcaffine.com", icon: <IconLink /> },
                    ]}
                />

                <section className="resume-section skills">
                    <SectionHeader header="Skills" icon={<IconSkills />} />
                    <ul>
                        <li>JavaScript</li>
                        <li>React.js</li>
                        <li>Node.js</li>
                        <li>TypeScript</li>
                        <li>C#</li>
                        <li>SQL</li>
                        <li>CSS</li>
                        <li>MongoDB</li>
                        <li>Azure</li>
                        <li>Python</li>
                        <li>GraphQL</li>
                        <li>Tailwind</li>
                    </ul>
                </section>

                <EducationSection
                    entries={[
                        { title: "MSc, Advanced Software Engineering", institution: "King's College London", grade: "Merit", date: "2024", logo: KCLLogo },
                        { title: "BSc, Computing Science (With a year in industry)", institution: "University of East Anglia", grade: "First Class Honours", date: "2021", logo: UEALogo },
                    ]}
                />

                <CertificationSection
                    entries={[
                        { title: "UX Design", from: "Google", date: "2021", link: "" },
                        { title: "Mastering TypeScript - 2023 Edition", from: "Udemy", date: "2023", link: "" },
                        { title: "C# Advanced Topics", from: "Udemy", date: "2022", link: "" },
                        { title: "JavaScript: The Advanced Concepts", from: "Udemy", date: "2022", link: "" },
                    ]}
                />

            </div>

            {/* Right Column */}
            <div className="resume-right-column">
                <MainSection
                    header="Profile"
                    text="A user-centred and results-driven practical trailblazer. I’m a software engineer with a Master's degree in Software Engineering from King's College London and half a decade experience at ADP, a renowned S&P 500 company. Driven by a passion for designing and delivering scalable, high-performance, clean solutions. I have a proven track record of producing award winning software while thriving within cross-functional teams. I believe software engineering holds immense potential to transform lives, and with that responsibility, I am committed to creating user experiences that truly make a difference."
                />
                <WorkExperienceSection />

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
        </div>
    );
}

const MainSection = (props) => {
    const { header, text } = props;
    return (
        <section className="resume-profile">
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
        <section className="work-experience">
            <SectionHeader header="Work Experience" icon={<IconWorkExperience />} />

        </section>
    );
}

const WorkExperience = (props) => {
    const { company, position, startDate, endDate, responsibilities, logo } = props;

    return (
        <div className="resume-work-experience">
            <div className="resume-work-experience-timeline-dot"></div>
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
                        <p>{entry.title} - {entry.from} ({entry.date})</p>
                        {entry.link && <a href={entry.link}>View Certificate</a>}
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