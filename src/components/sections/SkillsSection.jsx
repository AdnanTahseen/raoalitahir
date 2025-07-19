import "./skillsSection.scss";
import { FaHtml5, FaCss3, FaJav, FaJsSquare, FaPhp, FaWordpress, FaPhotoVideo } from 'react-icons/fa';

const SkillsSection = () => {
    const skills = [
        { name: 'HTML', level: 80 },
        { name: 'PHP', level: 65 },
        { name: 'CSS', level: 70 },
        { name: 'WORDPRESS/CMS', level: 75 },
        { name: 'JAVASCRIPT', level: 85 },
        { name: 'PHOTOSHOP', level: 70 },
    ];
    return (
        <div className="skills-section" data-aos="fade-right">
            <h4>My Additional Skills</h4>
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