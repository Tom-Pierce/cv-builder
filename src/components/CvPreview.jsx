import emailSVG from "../assets/email.svg";
import locationSVG from "../assets/location-pin.svg";
import phoneSVG from "../assets/phone.svg";
export default function CvOutput({ personalInfo, educationList }) {
  return (
    <div className="cv-preview-section">
      <section className="personal-details">
        <h2 className="personal-details-header">Personal Details</h2>
        <p className="full-name">{personalInfo.name}</p>
        <p className="address">
          <img src={locationSVG} alt="location icon" className="icon" />
          {personalInfo.address}
        </p>
        <p className="phone-number">
          <img src={phoneSVG} alt="phone icon" className="icon" />
          {personalInfo.phoneNum}
        </p>
        <p className="email">
          <img src={emailSVG} alt="email icon" className="icon" />
          {personalInfo.email}
        </p>
      </section>
      <section className="education-details">
        <h2 className="educatio-details-header">Education</h2>
        {educationList.map((education) => {
          return (
            <div key={education.id} className="school-info">
              <p className="education-start-end-dates">
                {education.start} {education.end && "-"} {education.end}
              </p>
              <p className="school-name">{education.name}</p>
              <p className="school-degree">{education.degree}</p>
              <p className="school-location">{education.location}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
}
