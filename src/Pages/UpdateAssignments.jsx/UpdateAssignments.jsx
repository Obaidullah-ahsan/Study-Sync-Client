import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import updateLogo from "../../assets/Logo/undraw_updates_re_o5af.svg";
// import useAuth from "../../Hooks/useAuth";
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateAssignments = () => {
  const loadedAssignment = useLoaderData();
  const navigate = useNavigate();
  const { _id, title, thumbnail, marks, description, difficulty, date } =
    loadedAssignment;
  const [updateDate, setUpdateDate] = useState(date);
  const [updateDifficulty, setUpdateDifficulty] = useState(difficulty);

  const handleSelectDifficulty = (e) => {
    setUpdateDifficulty(e.target.value);
  };

  const options = [
    { value: "Easy", label: "Easy" },
    { value: "Medium", label: "Medium" },
    { value: "Hard", label: "Hard" },
  ];

  const handleUpdateAssignments = (e) => {
    e.preventDefault();
    const form = e.target;
    const updateTitle = form.title.value;
    const updateThumbnail = form.thumbnail.value;
    const updateMarks = form.marks.value;
    const updateDescription = form.description.value;
    const updateAssignment = {
      title: updateTitle,
      thumbnail: updateThumbnail,
      marks: updateMarks,
      description: updateDescription,
      difficulty: updateDifficulty,
      date: updateDate,
    };
    axios
      .put(
        `https://study-sync-website-server.vercel.app/assignment/${_id}`,
        updateAssignment
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.matchedCount) {
          Swal.fire({
            title: "Error!",
            text: "You have not changed any value. Please change value then update.",
            icon: "error",
            confirmButtonText: "Try again",
          });
        }
        if (res.data.modifiedCount) {
          Swal.fire({
            title: "Success",
            text: "Assignment Update Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          navigate("/assignments");
        }
      });
  };

  return (
    <div className="mx-6 md:mx-12 lg:mx-28 px-6 md:px-12 my-10 py-8 bg-base-200 rounded-xl">
      <div className="flex">
        <div className="w-[43%] mt-16 hidden lg:block">
          <img src={updateLogo} alt="" />
        </div>
        <div className="flex-1">
          <form onSubmit={handleUpdateAssignments}>
            <h3 className="text-3xl font-semibold text-center mx-auto mb-6">
              Update Assignments
            </h3>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  Title
                </label>
                <input
                  type="text"
                  placeholder="Title"
                  name="title"
                  required
                  defaultValue={title}
                  className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm">
                  Thumbnail Image URL
                </label>
                <input
                  type="text"
                  placeholder="Thumbnail Image URL"
                  name="thumbnail"
                  required
                  defaultValue={thumbnail}
                  className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="email" className="text-sm">
                  Marks
                </label>
                <input
                  type="number"
                  placeholder="Marks"
                  name="marks"
                  required
                  defaultValue={marks}
                  className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="email" className="text-sm">
                  Date
                </label>
                <div className="myContainer">
                  <DatePicker
                    className="rounded-md p-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                    selected={updateDate}
                    selectedDates={date}
                    onChange={(date) => setUpdateDate(date)}
                  />
                </div>
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="email" className="text-sm">
                  Difficulty level
                </label>
                <select
                  defaultValue={difficulty}
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
              <div className="col-span-full">
                <label htmlFor="zip" className="text-sm">
                  Description
                </label>
                <input
                  type="text"
                  placeholder="Description"
                  name="description"
                  required
                  defaultValue={description}
                  className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <button className="btn col-span-full bg-black text-white">
                Update Assignments
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateAssignments;
