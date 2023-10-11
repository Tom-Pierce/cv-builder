import { useState } from "react";
import PersonalInfoInputs from "./PersonalInfoInputs";
import CvPreview from "./CvPreview";
import uniqid from "uniqid";
import EducationInputs from "./EducationInputs";
import WorkInputs from "./WorkInputs";

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

  const [workList, setWorkList] = useState([
    {
      id: uniqid(),
      name: "Google",
      role: "Engineer",
      start: "2022",
      end: "Present",
      location: "Dublin",
    },
  ]);

  function editPersonalInfo(e, key) {
    const newPersonalInfo = { ...personalInfo, [key]: e.target.value };
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

  //Work section functions
  function addWork() {
    const newWorkObj = {
      id: uniqid(),
      name: "",
      role: "",
      start: "",
      end: "",
      location: "",
    };
    const newWorkList = [...workList, newWorkObj];
    setWorkList(newWorkList);
  }

  function removeWork(id) {
    const newWorkList = workList.filter((workObj) => {
      return workObj.id !== id;
    });
    setWorkList(newWorkList);
  }

  function editWork(id, e, key) {
    const newWorkList = workList.map((newWork) => {
      if (newWork.id === id) {
        // Update the value property of the target object
        return { ...newWork, [key]: e.target.value };
      }
      return newWork;
    });
    setWorkList(newWorkList);
  }

  return (
    <div className="content">
      <section className="cv-inputs-section">
        <PersonalInfoInputs
          personalInfo={personalInfo}
          editPersonalInfo={editPersonalInfo}
        />
        <h2 className="education-inputs-header">Education</h2>

        <EducationInputs
          educationList={educationList}
          editEducation={editEducation}
          removeEducation={removeEducation}
        />
        <button className="add-education-btn" onClick={addEducation}>
          Add Education
        </button>
        <WorkInputs
          workList={workList}
          editWork={editWork}
          removeWork={removeWork}
        />
        <button className="add-work-btn" onClick={addWork}>
          Add Work Experience
        </button>
      </section>
      <CvPreview
        personalInfo={personalInfo}
        educationList={educationList}
        workList={workList}
      />
    </div>
  );
}
