import { useState } from "react";
import CvInputs from "./CvInputs";
import CvOutput from "./CvOutput";

export default function Generator() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [email, setEmail] = useState("");

  function nameChange(e) {
    setName(e.target.value);
  }
  function addressChange(e) {
    setAddress(e.target.value);
  }
  function phoneNumChange(e) {
    setPhoneNum(e.target.value);
  }
  function emailChange(e) {
    setEmail(e.target.value);
  }

  return (
    <div className="content">
      <CvInputs
        name={name}
        nameChange={nameChange}
        address={address}
        addressChange={addressChange}
        phoneNum={phoneNum}
        phoneNumChange={phoneNumChange}
        email={email}
        emailChange={emailChange}
      />
      <CvOutput
        name={name}
        address={address}
        phoneNum={phoneNum}
        email={email}
      />
    </div>
  );
}
