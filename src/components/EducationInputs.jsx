export default function EducationInputs({
  educationList,
  editEducation,
  removeEducation,
}) {
  return (
    <>
      <ul className="education-details-section">
        {educationList.map((educationObj) => {
          return (
            <li key={educationObj.id}>
              <form action="" method="POST" className="education-details-form">
                <label htmlFor={"school-name-input-" + educationObj.id}>
                  School Name
                </label>
                <input
                  type="text"
                  className="school-name-input"
                  id={"school-name-input-" + educationObj.id}
                  placeholder="School Name"
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
                <label htmlFor={"school-location-input-" + educationObj.id}>
                  Location
                </label>
                <input
                  type="text"
                  className="school-location-input"
                  id={"school-location-input-" + educationObj.id}
                  placeholder="Location"
                  value={educationObj.location}
                  onChange={(event) => {
                    editEducation(educationObj.id, event, "location");
                  }}
                />
              </form>
              <button
                type="button"
                className="remove-education-btn"
                onClick={() => {
                  removeEducation(educationObj.id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
