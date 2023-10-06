import emailSVG from "../../public/email.svg";
import locationSVG from "../../public/location-pin.svg";
import phoneSVG from "../../public/phone.svg";
export default function CvOutput({ name, address, phoneNum, email }) {
  return (
    <section className="cv-output-section">
      <div className="personal-details">
        <p className="full-name">{name}</p>
        <p className="address">
          <img src={locationSVG} alt="location icon" className="icon" />
          {address}
        </p>
        <p className="phone-number">
          <img src={phoneSVG} alt="phone icon" className="icon" />
          {phoneNum}
        </p>
        <p className="email">
          <img src={emailSVG} alt="email icon" className="icon" />
          {email}
        </p>
      </div>
    </section>
  );
}
