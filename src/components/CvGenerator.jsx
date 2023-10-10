import { useState } from "react";
import PersonalInfoInputs from "./PersonalInfoInputs";
import CvPreview from "./CvPreview";
import uniqid from "uniqid";
import EducationInputs from "./EducationInputs";

export default function CvGenerator() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "John Doe",
    address: "123 New Hampshire Drive",
    phoneNum: "087645434",
    email: "example@gmail.com",
  });

  const [educationList, setEducationList] = useState([
    {
      id: uniqid(),
      name: "Trinity",
      degree: "BsC in Computer Science",
      start: "2020",
      end: "2023",
      location: "Dublin, Ireland",
    },
    {
      id: uniqid(),
      name: "DCU",
      degree: "Masters in Engineering",
      start: "2019",
      end: "2025",
      location: "Dublin, Ireland",
    },
  ]);

  function nameChange(e) {
    const newPersonalInfo = { ...personalInfo, name: e.target.value };
    setPersonalInfo(newPersonalInfo);
  }
  function addressChange(e) {
    const newPersonalInfo = { ...personalInfo, address: e.target.value };
    setPersonalInfo(newPersonalInfo);
  }
  function phoneNumChange(e) {
    const newPersonalInfo = { ...personalInfo, phoneNum: e.target.value };
    setPersonalInfo(newPersonalInfo);
  }
  function emailChange(e) {
    const newPersonalInfo = { ...personalInfo, email: e.target.value };
    setPersonalInfo(newPersonalInfo);
  }

  //Education section functions
  function addEducation() {
    const newEducationObj = {
      id: uniqid(),
      name: "",
      degree: "",
      start: "",
      end: "",
      location: "",
    };
    const newEducationList = [...educationList, newEducationObj];
    setEducationList(newEducationList);
  }

  function removeEducation(id) {
    const newEducationList = educationList.filter((educationObj) => {
      return educationObj.id !== id;
    });
    console.log("new eduacation list after removing ", newEducationList);
    setEducationList(newEducationList);
  }

  function editEducation(id, e, key) {
    const newEducationList = educationList.map((newEducation) => {
      if (newEducation.id === id) {
        // Update the value property of the target object
        return { ...newEducation, [key]: e.target.value };
      }
      return newEducation;
    });
    setEducationList(newEducationList);
  }

  return (
    <div className="content">
      <section className="cv-inputs-section">
        <PersonalInfoInputs
          personalInfo={personalInfo}
          nameChange={nameChange}
          addressChange={addressChange}
          phoneNumChange={phoneNumChange}
          emailChange={emailChange}
        />
        <h2 className="education-inputs-header">Education</h2>

        <EducationInputs
          educationList={educationList}
          editEducation={editEducation}
        />
        <button className="add-education-btn" onClick={addEducation}>
          Add Education
        </button>
      </section>
      <CvPreview personalInfo={personalInfo} educationList={educationList} />
    </div>
  );
}

//TODO each education/work will be a seperate input and output, add button creates another form
