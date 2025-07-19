import './aboutSection.scss';

const Section1 = () => {
  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <p>I am professional business developer in PureLogics, Pvt Limited</p>
      </div>

      <div className="container intro-container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4 image-div">
            <img src="images/ali_rao_ai.png" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 content">
            <h2>Business Developer &amp; Lead Generation Strategist</h2>
            <p className="fst-italic py-3">
              I help businesses grow by identifying high-value opportunities and building strategic partnerships that convert. As a Lead Generation Strategist, I craft data-driven outreach systems that consistently fill pipelines with qualified leads.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>1 May 1999</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.raoalitahir.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+923211234567</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Lahore, Punjab, Pakistan</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>26</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>BSCS</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>raoalitahir@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <p className="py-3">
              I’m a results-driven Business Developer and Lead Generation Strategist with a passion for scaling businesses.
              With a strong focus on revenue growth, I specialize in identifying untapped markets and building high-impact client relationships.
              My approach combines strategic thinking with data-backed lead generation to maximize conversions and ROI.
              I’ve helped startups, SMEs, and enterprise-level teams drive measurable results through customized growth strategies.
              From cold outreach to nurturing long-term partnerships, I build systems that bring consistent, qualified leads.
              I align sales and marketing efforts to ensure smooth funnels and sustainable pipelines.
              Proficient in tools like LinkedIn Sales Navigator, CRM platforms, email automation, and market research.
              Skilled in negotiating deals, closing opportunities, and expanding customer bases across various industries.
              I believe in value-first communication, relationship building, and delivering solutions that solve real problems.
              Let’s grow your business with smarter strategies and results you can see.
            </p>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Section1