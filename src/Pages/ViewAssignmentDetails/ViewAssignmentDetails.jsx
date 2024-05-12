import { Link, useLoaderData } from "react-router-dom";

const ViewAssignmentDetails = () => {
  const loadedAssignment = useLoaderData();
  const { _id, title, thumbnail, marks, description, difficulty, date } =
    loadedAssignment;

  return (
    <div className="my-4 md:my-12 md:mx-8 lg:mx-20">
      <div className="overflow-hidden flex flex-col md:flex-row bg-base-100 dark:bg-gray-800">
        <div className="md:w-[50%]">
          <img
            className="object-cover w-full"
            src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="Article"
          />
        </div>

        <div className="flex flex-col justify-between md:w-[50%]">
          <div className="p-6 ">
            <div>
              <div className="flex justify-between">
                <p className="text-sm font-semibold flex rounded-lg justify-center items-center text-white min-h-8 h-8 px-2 bg-[#5FCF80] dark:text-blue-400">
                  Marks : {marks}
                </p>
                <p className="text-sm font-semibold flex rounded-lg justify-center items-center text-white min-h-8 h-8 px-2  bg-[#5FCF80] dark:text-blue-400">
                  Difficulty Lavel : {difficulty}
                </p>
              </div>
              <h2 className="block mt-3 text-3xl font-bold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-[#5FCF80]">
                {title}
              </h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {description}
              </p>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                Date : {new Date(date).toLocaleString()}
              </p>
            </div>
          </div>
          <div className="flex justify-end p-4">
            <div>
              <Link
                to={`/viewassignmentsdetails/${_id}`}
                className="btn min-h-10 h-10 bg-[#5FCF80] text-white"
              >
                Take assignment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAssignmentDetails;
