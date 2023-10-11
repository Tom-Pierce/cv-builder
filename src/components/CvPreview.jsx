import emailSVG from "../assets/email.svg";
import locationSVG from "../assets/location-pin.svg";
import phoneSVG from "../assets/phone.svg";
export default function CvPreview({ personalInfo, educationList, workList }) {
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
        <h2 className="education-details-header">Education</h2>
        {educationList.map((educationObj) => {
          return (
            <div key={educationObj.id} className="education-info">
              <p className="education-start-end-dates">
                {educationObj.start} {educationObj.end && "-"}{" "}
                {educationObj.end}
              </p>
              <p className="education-name">{educationObj.name}</p>
              <p className="education-degree">{educationObj.degree}</p>
              <p className="education-location">{educationObj.location}</p>
            </div>
          );
        })}
      </section>
      <section className="work-details">
        <h2 className="work-details-header">Work Experience</h2>
        {workList.map((workObj) => {
          return (
            <div key={workObj.id} className="work-info">
              <p className="work-start-end-dates">
                {workObj.start} {workObj.end && "-"} {workObj.end}
              </p>
              <p className="work-name">{workObj.name}</p>
              <p className="work-role">{workObj.role}</p>
              <p className="work-location">{workObj.location}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
}
