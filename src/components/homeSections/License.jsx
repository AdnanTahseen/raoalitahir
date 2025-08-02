import './license.scss'

const License = () => {
  return (
    <div className='certificate'>
    <h2>Licences and Certifications</h2>
    <div className="certificate_sections">
        <div className="license" data-aos='zoom-in'>
            <caption>HubSpot Email Marketing Specialist</caption>
            <img src="/images/License_Certifications/HubSpot Email Marketing Certified.jpg" alt="" />
            <ul>
                <li>Email Marketing</li>
                <li>Content Strategy</li>
                <li>Audience Segmentation</li>
                <li>Target Segmentation</li>
                <li>A/B Testing</li>
            </ul>
        </div>
        <div className="license"  data-aos='zoom-out'>
            <caption>LemList Multichannel Outreach Specialist</caption>
            <img src="/images/License_Certifications/LemList_Multichannel Outreach MasterClass.jpg" alt="" />
             <ul>
                <li>Multi-Channel Marketing</li>
                <li>Email Marketing</li>
                <li>Lead Generation</li>
                <li>LinkedIn</li>
                <li>Copywriting</li>
            </ul>
        </div>
    </div>
    </div>
  )
}

export default License