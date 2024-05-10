import { useState } from "react";
import DatePicker from "react-datepicker";
import "./CreateAssignments.css";
import "react-datepicker/dist/react-datepicker.css";
import createLogo from "../../assets/Logo/create.svg";

const CreateAssignments = () => {
  const [date, setDate] = useState(new Date());
  const [difficulty, setDifficulty] = useState();

  const handleSelect = (e) => {
    setDifficulty(e.target.value);
  };

  const handleAssignmentsSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const thumbnail = form.thumbnail.value;
    const marks = form.marks.value;
    const description = form.description.value;
    console.log(title, thumbnail, marks, description, difficulty, date);
  };

  return (
    <div className="mx-6 md:mx-12 lg:mx-28 px-6 md:px-12 my-10 py-8 bg-base-200 rounded-xl">
      <div className="flex">
        <div className="w-[43%] mt-16 hidden lg:block">
            <img src={createLogo} alt="" />
        </div>
        <div className="flex-1">
          <form onSubmit={handleAssignmentsSubmit}>
            <h3 className="text-3xl font-semibold text-center mx-auto mb-6">Create Assignments</h3>
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
                  type="text"
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
                  onChange={handleSelect}
                  className="rounded-md p-3 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 py-2 w-full"
                >
                  <option disabled selected>
                    Select difficulty level
                  </option>
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
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
