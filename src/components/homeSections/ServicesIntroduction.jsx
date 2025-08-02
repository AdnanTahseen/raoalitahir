import './servicesIntroduction.scss';

const ServicesIntroduction = () => {
    return (
        <div className='section-service'>
            <h1 data-aos='fade-up-right'>Things I've worked on, Some of Them</h1>
            {/* first service */}
            <div className="service-set">
                <div className="left" data-aos='fade-right'>
                    <p>
                        Results-driven Business Developer with 2 years of experience in driving revenue growth, forging strategic partnerships, and expanding market reach.
                        Skilled in identifying opportunities, negotiating high-value deals, and optimizing business performance.
                        Passionate about transforming innovative ideas into scalable, profitable ventures.
                        Let’s collaborate to unlock your business’s full potential.
                    </p>
                </div>
                <div className="right" data-aos='fade-left'>
                    <h3>Business Development Strategist</h3>
                    <img src="/images/business-develop/business_developer.jpg" alt="Business Development" />
                </div>
            </div>
            {/* second service */}
            <div className="service-set">
                <div className="right" data-aos='fade-right'>
                    <h3>Lead Generation Specialist</h3>
                    <img width='400px' height='400px' src="/images/business-develop/lead generation specialist.jpg" alt="Lead Generation Specialist" />
                </div>
                <div className="left" data-aos='fade-left'>
                    <p>
                        Proven Lead Generation Specialist with 2 years of experience in crafting targeted campaigns, leveraging data-driven strategies,
                        and converting prospects into qualified leads. Skilled in cold outreach, CRM optimization, and multi-channel
                        prospecting to fuel sales pipelines. Passionate about delivering measurable results and driving revenue growth
                        through scalable lead acquisition. Let’s connect and turn opportunities into conversions.
                    </p>
                </div>

            </div>
            {/* third service */}
            <div className="service-set">
                <div className="left" data-aos='fade-right'>
                    <p>
                        Results-driven Email Marketing Specialist with 2 years of experience crafting engaging,
                        data-backed campaigns that boost open rates, clicks, and conversions.
                        Skilled in segmentation, automation, A/B testing, and CRM integration to maximize ROI.
                        Passionate about turning subscribers into loyal customers through targeted, value-driven
                        messaging. Let’s connect and elevate your email strategy for growth.
                    </p>
                </div>
                <div className="right" data-aos='fade-left'>
                    <h3>Email Marketing Specialist</h3>
                    <img src="/images/business-develop/email marketer.jpg" width='400px' height='400px' alt="Business Development" />
                </div>
            </div>
        </div>
    )
}

export default ServicesIntroduction