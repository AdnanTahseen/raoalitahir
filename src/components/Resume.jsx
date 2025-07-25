import './resume.scss';

const Resume = () => {
  return (
    <section id="resume" className="resume section">

      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>Results-driven Business Developer and Lead Generation Strategist with a proven track record of identifying growth opportunities, building client relationships, and driving revenue through strategic outreach and market research. Skilled in developing and executing lead generation campaigns, optimizing sales funnels, and using CRM tools to convert prospects into long-term clients. Adept at collaborating with marketing and sales teams to align business objectives and deliver measurable results.</p>
      </div>

      <div className="container">

        <div className="row">

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Sumary</h3>

            <div className="resume-item pb-0">
              <h4>Web Developer</h4>
              <p><em>Creative and detail-oriented Web Developer with hands-on experience in designing, developing, and maintaining responsive and user-friendly websites and web applications. Proficient in front-end and back-end technologies including HTML, CSS, JavaScript, ReactJS, Angular, and ASP.NET Core. Passionate about clean code, performance optimization, and delivering seamless user experiences. Skilled in version control, API integration, and deploying web solutions across various platforms.</em></p>
              <ul>
                <li>Lahore, Punjab, Pakistan</li>
                <li>+923040459062</li>
                <li>rao.alitahir001@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            {/* <div className="resume-item">
              <h4>Faculty of Science in Pre-Engineering (F.Sc)</h4>
              <h5>2016 - 2018</h5>
              <p><em>Superior Group of College, Pakpattan Sharif</em></p>
              <p>Qualified in Faculty of Science with a focus on Pre-Engineering, gaining a strong foundation in Mathematics, Physics, and Chemistry. This academic background has equipped me with analytical thinking, problem-solving skills, and a technical mindset, preparing me for further studies and careers in engineering, technology, and applied sciences.</p>
            </div> */}

            <div className="resume-item">
              <h4>BS Computer Science (BSCS)</h4>
              <h5>2018 - 2022</h5>
              <p><em>Government College University, Faisalabad</em></p>
              <p>Qualified with a Bachelor of Science (BS) in Computer Science, with a solid foundation in programming, data structures, algorithms, databases, and software development. Gained hands-on experience through academic projects and practical coursework in web development, system design, and emerging technologies. Well-prepared to tackle real-world challenges in software engineering, application development, and IT solutions.</p>
            </div>

          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Professional Business Developer</h4>
              <h5>2023 - Present</h5>
              <p><em>Lahore, Punjab, Pakistan</em></p>
              <ul>
                <li>Spearheaded business growth strategies in a competitive software market.</li>
                <li>Specialized in B2B client acquisition and lead generation.</li>
                <li>Built and maintained long-term relationships with key clients.</li>
                <li>Identified new market opportunities and expanded the client base.</li>
                <li>Collaborated with tech teams to align solutions with client needs.</li>
                <li>Created and presented tailored software proposals and demos.</li>
                {/* <li>Monitored sales pipeline and optimized conversion rates.</li> */}
                {/* <li>Conducted market research to support product positioning.</li> */}
                <li>Negotiated contracts and closed high-value deals.</li>
                <li>Played a key role in driving revenue growth and brand presence.</li>
                <li>Drives growth by identifying opportunities, building partnerships, and expanding market reach.</li>
                <li>Sells tech solutions with a consultative approach, aligning products to client needs.</li>
                <li>Crafts high-converting campaigns using segmentation, automation, and multi-channel strategies.</li>
                <li>Designs targeted, automated campaigns to nurture leads and accelerate conversions.</li>
                <li>Leverages LinkedIn for prospecting, engagement, and personal branding to generate B2B leads.</li>
              </ul>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Resume