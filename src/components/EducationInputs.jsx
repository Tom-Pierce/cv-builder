export default function EducationInputs({
  educationList,
  editEducation,
  removeEducation,
}) {
  return (
    <>
      <h2 className="education-inputs-header">Education</h2>
      <ul className="education-inputs-section">
        {educationList.map((educationObj) => {
          return (
            <li key={educationObj.id}>
              <form action="" method="POST" className="education-details-form">
                <label htmlFor={"education-name-input-" + educationObj.id}>
                  School
                </label>
                <input
                  type="text"
                  className="education-name-input"
                  id={"education-name-input-" + educationObj.id}
                  placeholder="education Name"
                  value={educationObj.name}
                  onChange={(event) => {
                    editEducation(educationObj.id, event, "name");
                  }}
                />
                <label htmlFor={"degree-name-input-" + educationObj.id}>
                  Degree
                </label>
                <input
                  type="text"
                  className="degree-input"
                  id={"degree-name-input-" + educationObj.id}
                  placeholder="Degree"
                  value={educationObj.degree}
                  onChange={(event) => {
                    editEducation(educationObj.id, event, "degree");
                  }}
                />
                <label htmlFor={"start-date-input-" + educationObj.id}>
                  Start Date
                </label>
                <input
                  type="text"
                  className="start-date-input"
                  id={"start-date-input-" + educationObj.id}
                  placeholder="Start Date"
                  value={educationObj.start}
                  onChange={(event) => {
                    editEducation(educationObj.id, event, "start");
                  }}
                />
                <label htmlFor={"end-date-input-" + educationObj.id}>
                  End Date
                </label>
                <input
                  type="text"
                  className="end-date-input"
                  id={"end-date-input-" + educationObj.id}
                  placeholder="End Date"
                  value={educationObj.end}
                  onChange={(event) => {
                    editEducation(educationObj.id, event, "end");
                  }}
                />
                <label htmlFor={"education-location-input-" + educationObj.id}>
                  Location
                </label>
                <input
                  type="text"
                  className="education-location-input"
                  id={"education-location-input-" + educationObj.id}
                  placeholder="Location"
                  value={educationObj.location}
                  onChange={(event) => {
                    editEducation(educationObj.id, event, "location");
                  }}
                />
                <button
                  type="button"
                  className="remove-education-btn"
                  onClick={() => {
                    removeEducation(educationObj.id);
                  }}
                >
                  Delete
                </button>
              </form>
            </li>
          );
        })}
      </ul>
    </>
  );
}
