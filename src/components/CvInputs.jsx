export default function CvInputs({
  name,
  nameChange,
  address,
  addressChange,
  phoneNum,
  phoneNumChange,
  email,
  emailChange,
}) {
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
          value={name}
          onChange={nameChange}
        />
        <label htmlFor="address-input">Address</label>
        <input
          type="text"
          className="address-input"
          id="address-input"
          placeholder="Address"
          value={address}
          onChange={addressChange}
        />
        <label htmlFor="phone-number-input">Phone Number</label>
        <input
          type="text"
          className="phone-number-input"
          id="phone-number-input"
          placeholder="Phone No."
          value={phoneNum}
          onChange={phoneNumChange}
        />
        <label htmlFor="email-input">Email</label>
        <input
          type="text"
          className="email-input"
          id="email-input"
          placeholder="Email"
          value={email}
          onChange={emailChange}
        />
      </form>
    </section>
  );
}
