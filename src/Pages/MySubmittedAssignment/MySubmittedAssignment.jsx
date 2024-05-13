import { useLoaderData } from "react-router-dom";

const MySubmittedAssignment = () => {
  const loadedsubmittedassignments = useLoaderData();
  console.log(loadedsubmittedassignments);
  return (
    <div className="container px-4 mx-auto mb-8">
      <h2 className="text-3xl text-center mx-auto my-8 font-bold text-gray-800 dark:text-white">
      My Submitted Assignment
      </h2>
      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Name & Email
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Title
                    </th>

                    <th
                      scope="col"
                      className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Marks
                    </th>
                    <th
                      scope="col"
                      className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Obtained marks
                    </th>
                    <th
                      scope="col"
                      className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Feedback
                    </th>
                  </tr>
                </thead>
                {loadedsubmittedassignments?.map((submittedassignment) => (
                  <tbody
                    key={submittedassignment._id}
                    className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900"
                  >
                    <tr>
                      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                        <div>
                          <h2 className="font-medium text-gray-800 dark:text-white ">
                            {submittedassignment?.name}
                          </h2>
                          <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                            {submittedassignment?.email}
                          </p>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div>
                          <h4 className="text-gray-700 dark:text-gray-200">
                            {submittedassignment?.title}
                          </h4>
                        </div>
                      </td>

                      <td className="px-14 py-4 text-sm font-medium whitespace-nowrap">
                        <div className="text-sm font-normal dark:bg-gray-800">
                          {submittedassignment?.marks}
                        </div>
                      </td>

                      <td className="px-10 py-4 text-sm font-medium whitespace-nowrap">
                        <div className={`inline px-3 py-1 text-sm font-normal rounded-full ${submittedassignment?.status === "Completed"? "text-emerald-500 bg-emerald-100/60": "text-blue-600 bg-emerald-100/60"} dark:bg-gray-800`}>
                          {submittedassignment?.status}
                        </div>
                      </td>

                      <td className="px-14 py-4 text-sm font-medium whitespace-nowrap">
                        <div className="text-sm font-normal dark:bg-gray-800">
                          {submittedassignment?.obtained_marks}
                        </div>
                      </td>
                      
                      <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                        <div className="text-sm font-normal dark:bg-gray-800">
                          {submittedassignment?.feedback}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySubmittedAssignment;
