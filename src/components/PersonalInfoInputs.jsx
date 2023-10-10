export default function PersonalInfoInputs({ personalInfo, editPersonalInfo }) {
  return (
    <section className="cv-inputs-section">
      <h2 className="personal-details-header">Personal Details</h2>
      <form action="" method="POST" className="personal-details-form">
        <label htmlFor="name-input">Full Name</label>
        <input
          type="text"
          className="name-input"
          id="name-input"
          placeholder="Full Name"
          value={personalInfo.name}
          onChange={(event) => {
            editPersonalInfo(event, "name");
          }}
        />
        <label htmlFor="address-input">Address</label>
        <input
          type="text"
          className="address-input"
          id="address-input"
          placeholder="Address"
          value={personalInfo.address}
          onChange={(event) => {
            editPersonalInfo(event, "address");
          }}
        />
        <label htmlFor="phone-number-input">Phone Number</label>
        <input
          type="text"
          className="phone-number-input"
          id="phone-number-input"
          placeholder="Phone No."
          value={personalInfo.phoneNum}
          onChange={(event) => {
            editPersonalInfo(event, "phoneNum");
          }}
        />
        <label htmlFor="email-input">Email</label>
        <input
          type="text"
          className="email-input"
          id="email-input"
          placeholder="Email"
          value={personalInfo.email}
          onChange={(event) => {
            editPersonalInfo(event, "email");
          }}
        />
      </form>
    </section>
  );
}
