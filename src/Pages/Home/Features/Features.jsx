const Features = () => {
  return (
    <div className="my-12 mx-5 md:mx-8 lg:mx-16">
      <h1 className="text-4xl font-semibold text-center mx-auto">Feature</h1>
      <p className="border-2 w-10 mt-4 rounded-xl border-cyan-800 text-center mx-auto"></p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 md:mt-10 gap-5">
        <div className="w-full overflow-hidden bg-base-200 dark:bg-gray-800">
          <img
            className="object-cover object-center w-full h-48"
            src="https://i.ibb.co/yp6nzb8/6528204-3340828.jpg"
            alt="avatar"
          />

          <div className="px-6 py-4">
            <h1 className="text-xl font-bold  dark:text-white">
              Create Assignment
            </h1>

            <p className="py-2  dark:text-gray-400">
              The Create Assignment page allows User to create new assignments.
              It includes fields for assignment title, description, date, marks
              and other relevant details.
            </p>
          </div>
        </div>
        <div className="w-full overflow-hidden bg-base-200 dark:bg-gray-800">
          <img
            className="object-cover object-center w-full h-48"
            src="https://i.ibb.co/r2Mwhs7/11669398-20945430.jpg"
            alt="avatar"
          />

          <div className="px-6 py-4">
            <h1 className="text-xl font-bold  dark:text-white">
              Update Assignment
            </h1>

            <p className="py-2  dark:text-gray-400">
              Any user can edit existing assignments from this page. They can
              modify assignment details such as title, description, marks and
              other details.
            </p>
          </div>
        </div>
        <div className="w-full overflow-hidden bg-base-200 dark:bg-gray-800">
          <img
            className="object-cover object-center w-full h-48"
            src="https://i.ibb.co/x2fC2sb/9405401-4163464.jpg"
            alt="avatar"
          />

          <div className="px-6 py-4">
            <h1 className="text-xl font-bold  dark:text-white">
              My Submitted Assignment
            </h1>

            <p className="py-2  dark:text-gray-400">
              The My Submitted Assignment page provides students with an
              overview of their submitted or attempted assignments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
