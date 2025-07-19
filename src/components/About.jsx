import '../styles/about.scss';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import 'tailwindcss';
import Testimonials from './sections/Testimonials';


const About = () => {
  return (
    <main >
        <AboutSection />
        <SkillsSection />
        <Testimonials />
    </main>
  )
}

export default About