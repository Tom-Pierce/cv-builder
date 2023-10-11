export default function WorkInputs({ workList, editWork, removeWork }) {
  return (
    <ul className="work-details-section">
      {workList.map((workObj) => {
        return (
          <li key={workObj.id}>
            <form action="" method="POST" className="work-details-form">
              <label htmlFor={"work-name-input-" + workObj.id}>
                Company Name
              </label>
              <input
                type="text"
                className="work-name-input"
                id={"work-name-input-" + workObj.id}
                placeholder="Company Name"
                value={workObj.name}
                onChange={(event) => {
                  editWork(workObj.id, event, "name");
                }}
              />
              <label htmlFor={"work-location-input-" + workObj.id}>
                City/Country
              </label>
              <input
                type="text"
                className="work-location-input"
                id={"work-location-input-" + workObj.id}
                placeholder="City/Country"
                value={workObj.location}
                onChange={(event) => {
                  editWork(workObj.id, event, "location");
                }}
              />
              <label htmlFor={"work-role-input-" + workObj.id}>Role</label>
              <input
                type="text"
                className="work-role-input"
                id={"work-role-input-" + workObj.id}
                placeholder="Role"
                value={workObj.role}
                onChange={(event) => {
                  editWork(workObj.id, event, "role");
                }}
              />
              <label htmlFor={"work-start-date-input-" + workObj.id}>
                Start
              </label>
              <input
                type="text"
                className="work-start-date-input"
                id={"work-start-date-input-" + workObj.id}
                placeholder="Start"
                value={workObj.start}
                onChange={(event) => {
                  editWork(workObj.id, event, "start");
                }}
              />
              <label htmlFor={"work-end-date-input-" + workObj.id}>End</label>
              <input
                type="text"
                className="work-end-date-input"
                id={"work-end-date-input-" + workObj.id}
                placeholder="End"
                value={workObj.end}
                onChange={(event) => {
                  editWork(workObj.id, event, "end");
                }}
              />
              <label htmlFor={"work-description-input-" + workObj.id}>
                Description
              </label>
              <textarea
                className="work-description-input"
                id={"work-description-input-" + workObj.id}
                placeholder="Description"
                value={workObj.description}
                onChange={(event) => {
                  editWork(workObj.id, event, "description");
                }}
              />
            </form>
            <button
              type="button"
              className="remove-education-btn"
              onClick={() => {
                removeWork(workObj.id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
