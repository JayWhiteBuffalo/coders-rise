import { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { DisplayAppStatus } from "./DisplayAppStatus";

export default function Favorite({
  college,
  selectedFavorites,
  setSelectedFavorites,
  toCompare,
  setToCompare,
}) {
  const [selected, setSelected] = useState(false);
  const [notes, setNotes] = useState("Custom Note");
  const [appStatus, setAppStatus] = useState(3);
  const dataToPass = {
    name: college["school.name"],
    appStatus: appStatus,
    notes: notes,
  };

  function handleConfirm() {
    setSelected(!selected);
    // Existing - Remove
    if (selectedFavorites.includes(college.id)) {
      setSelectedFavorites(
        selectedFavorites.filter((selected) => selected !== college.id)
      );
      setToCompare(toCompare.filter((selected) => selected !== college));
    } else {
      // Doesn't Exist - Add
      if (selectedFavorites.length < 3) {
        setSelectedFavorites((selectedFavorites) => [
          ...selectedFavorites,
          college.id,
        ]);
        setToCompare([...toCompare, college]);
      } else {
        alert("Maximum of 3 Colleges are already selected.");
      }
    }
  }

  return (
    <tr>
      <td>
        <Button
          onClick={() => handleConfirm()}
          css={
            selectedFavorites.includes(college.id)
              ? "btn-outline-danger"
              : "btn-outline-warning"
          }
        >
          {selectedFavorites.includes(college.id) ? "➖" : "➕"}
        </Button>
      </td>
      <td>
        <h3 className={selectedFavorites.includes(college.id) ? "" : ""}>
          {college["school.name"]}{" "}
        </h3>
      </td>

      <td>
        {/* <span className="badge rounded-pill text-bg-secondary ml-4">
          {appStatus}
        </span> */}
        <DisplayAppStatus status={appStatus} />
      </td>
      <td>
        <div className="form">
          <p>{notes}</p>
          {/* <label for="floatingTextarea"></label> */}
        </div>
      </td>
      <td>
        <div className="form">
          <Link
            to={`/favorites/${college.id}`}
            // className="btn btn-outline-warning"
            state={{ data: dataToPass }}
            style={{ textDecoration: "none" }}
          >
            ✏️
          </Link>
        </div>
      </td>
    </tr>
  );
}
