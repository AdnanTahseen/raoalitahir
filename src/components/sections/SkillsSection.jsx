import "./skillsSection.scss";
import { FaHtml5, FaCss3, FaJav, FaJsSquare, FaPhp, FaWordpress, FaPhotoVideo } from 'react-icons/fa';

const SkillsSection = () => {
    const skills = [
        { name: 'LinkedIn', level: 80 },
        { name: 'Email Marketing', level: 90 },
        { name: 'Fiverr', level: 80 },
        { name: 'Sales Navigator', level: 85 },
        { name: 'Email Compaign', level: 85 },
        { name: 'Upwork', level: 80 },
        { name: 'Lead Generation', level: 95 },
        { name: 'Email Verification', level: 90 },
        { name: 'B2B', level: 80 },
        { name: 'New Client Acquisition', level: 90 },
        { name: 'Email Validation', level: 90 },
        { name: 'C2C', level: 85 },
        { name: 'Lead Nurturing', level: 85 },
        { name: 'A/B Testing Expertise', level: 80 },
        { name: 'Hire a Dev (Staff Augmentation)', level: 80 },
        { name: 'Data Scraping', level: 90 },
        { name: 'Account Management', level: 80 },
        { name: 'CRM Management', level: 80 },
    ];
    return (
        <div className="skills-section" data-aos="fade-right">
            <h4>My Expertise in following domains:</h4>
            <div className="skills-list">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                        <span className="skill-name">{skill.name}</span>
                        <div className="skill-bar">
                            <div
                                className="skill-level"
                                style={{ width: `${skill.level}%` }}
                            ></div>
                        </div>
                        <span className="skill-percent">{skill.level}%</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default SkillsSection;