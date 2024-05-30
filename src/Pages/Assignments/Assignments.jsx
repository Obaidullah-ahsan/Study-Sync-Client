import axios from "axios";
import { useEffect, useState } from "react";
import AssignmentsCard from "../../Components/AssignmentsCard/AssignmentsCard";

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://study-sync-website-server.vercel.app/assignments?filter=${filter}&search=${search}`
      )
      .then((res) => {
        setAssignments(res.data);
      });
  }, [filter, search]);

  const options = [
    { value: "Easy", label: "Easy" },
    { value: "Medium", label: "Medium" },
    { value: "Hard", label: "Hard" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchText);
  };

  return (
    <div className="mx-10 my-8 md:my-10 md:mx-20">
      <h1 className="text-4xl font-semibold text-center mx-auto mb-5">
        Assignmnent
      </h1>
      <div className="flex justify-evenly mt-10">
        <div className="max-w-80 flex-1">
          <select
            defaultValue="DEFAULT"
            onChange={(e) => setFilter(e.target.value)}
            className="select min-h-11 h-11 mt-1 select-bordered w-full"
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
        <form onSubmit={handleSearch}>
          <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
            <input
              className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
              type="text"
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
              name="assignmentSearch"
              placeholder="Enter Assignments Title"
            />

            <button className="px-1 md:px-4 py-1 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
              Search
            </button>
          </div>
        </form>
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
