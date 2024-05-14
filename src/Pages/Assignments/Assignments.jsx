import axios from "axios";
import { useEffect, useState } from "react";
import AssignmentsCard from "../../Components/AssignmentsCard/AssignmentsCard";

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [difficulty, setDifficulty] = useState(null);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    // setLoading(true);
    axios
      .get("https://study-sync-website-server.vercel.app/assignments")
      .then((res) => {
        setAssignments(res.data);
        // setLoading(false);
      });
  }, [difficulty]);

  const options = [
    { value: "Easy", label: "Easy" },
    { value: "Medium", label: "Medium" },
    { value: "Hard", label: "Hard" },
  ];

  const handleSelectDifficulty = (e) => {
    const difficultyLevel = e.target.value;
    setDifficulty(e.target.value);
    if (difficulty) {
      const filteredAssignments = assignments.filter(
        (assignment) => assignment.difficulty === difficultyLevel
      );
      setAssignments(filteredAssignments);
    }
  };
  console.log(assignments);

  console.log(difficulty);
  return (
    <div className="mx-10 my-8 md:my-10 md:mx-20">
      <h1 className="text-4xl font-semibold text-center mx-auto mb-5">
        Assignmnent
      </h1>
      <div className="max-w-80 text-center mx-auto">
        <select
          defaultValue="DEFAULT"
          onChange={handleSelectDifficulty}
          className="select min-h-10 h-10 mt-1 select-bordered w-full"
        >
          <option value="DEFAULT" disabled>
            Select Difficulty
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-4">
        {assignments.map((assignment) => (
          <AssignmentsCard
            key={assignment._id}
            assignment={assignment}
            assignments={assignments}
            setAssignments={setAssignments}
          ></AssignmentsCard>
        ))}
      </div>
    </div>
  );
};

export default Assignments;
