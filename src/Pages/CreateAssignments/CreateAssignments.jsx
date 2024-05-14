import { useState } from "react";
import DatePicker from "react-datepicker";
import "./CreateAssignments.css";
import "react-datepicker/dist/react-datepicker.css";
import createLogo from "../../assets/Logo/create.svg";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const CreateAssignments = () => {
  const { user } = useAuth();
  const [date, setDate] = useState(new Date());
  const [difficulty, setDifficulty] = useState();

  const handleSelectDifficulty = (e) => {
    setDifficulty(e.target.value);
  };

  const options = [
    { value: "Easy", label: "Easy" },
    { value: "Medium", label: "Medium" },
    { value: "Hard", label: "Hard" },
  ];

  const handleAssignmentsSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const thumbnail = form.thumbnail.value;
    const marks = form.marks.value;
    const description = form.description.value;
    const creatorEmail = user?.email;
    const newAssignment = {
      title,
      thumbnail,
      marks,
      description,
      difficulty,
      date,
      creatorEmail,
    };
    axios
      .post(
        "https://study-sync-website-server.vercel.app/assignments",
        newAssignment,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data);
        if (res?.data?.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Assignment Create Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          form.reset();
        }
      });
    console.log(newAssignment);
  };

  return (
    <div className="mx-6 md:mx-12 lg:mx-28 px-6 md:px-12 my-10 py-8 bg-base-200 rounded-xl">
      <div className="flex">
        <div className="w-[43%] mt-16 hidden lg:block">
          <img src={createLogo} alt="" />
        </div>
        <div className="flex-1">
          <form onSubmit={handleAssignmentsSubmit}>
            <h3 className="text-3xl font-semibold text-center mx-auto mb-6">
              Create Assignments
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
                    selected={date}
                    onChange={(date) => setDate(date)}
                  />
                </div>
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="email" className="text-sm">
                  Difficulty level
                </label>
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
              <div className="col-span-full">
                <label htmlFor="zip" className="text-sm">
                  Description
                </label>
                <input
                  type="text"
                  placeholder="Description"
                  name="description"
                  required
                  className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <button className="btn col-span-full bg-black text-white">
                Create Assignments
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAssignments;
