import { useLoaderData } from "react-router-dom";

const PendingAssignments = () => {
  const loadPendingAssignments = useLoaderData();
  return (
    <div className="container px-4 mx-auto mb-8">
      <h2 className="text-3xl text-center mx-auto my-8 font-bold text-gray-800 dark:text-white">
        Pending Assignments
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
                      Examinee name
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
                      Actions
                    </th>
                  </tr>
                </thead>
                {loadPendingAssignments?.map((pendingAssignment) => (
                  <tbody
                    key={pendingAssignment._id}
                    className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900"
                  >
                    <tr>
                      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                        <div>
                          <h2 className="font-medium text-gray-800 dark:text-white ">
                            {pendingAssignment?.name}
                          </h2>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div>
                          <h4 className="text-gray-700 dark:text-gray-200">
                            {pendingAssignment?.title}
                          </h4>
                        </div>
                      </td>

                      <td className="px-14 py-4 text-sm font-medium whitespace-nowrap">
                        <div className="text-sm font-normal dark:bg-gray-800">
                          {pendingAssignment?.marks}
                        </div>
                      </td>

                      <td className="px-10 py-4 text-sm font-medium whitespace-nowrap">
                        <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                          {pendingAssignment?.status}
                        </div>
                      </td>
                      <td className="px-10 py-4 text-sm font-medium whitespace-nowrap">
                        <button
                          className="btn min-h-10 h-10 bg-[#5FCF80] text-white"
                          onClick={() =>
                            document.getElementById("my_modal_5").showModal()
                          }
                        >
                          Give mark
                        </button>
                        <dialog
                          id="my_modal_5"
                          className="modal modal-bottom sm:modal-middle"
                        >
                          <div className="modal-box bg-base-200">
                            <h3 className="font-bold text-2xl text-center mx-auto">
                              Give mark
                            </h3>
                            <div className="modal-action justify-center">
                              <form
                                className="flex flex-col gap-3"
                                method="dialog"
                              >
                                <div className="flex flex-col">
                                  <label className="text-sm">Marks</label>
                                  <input
                                    type="text"
                                    placeholder="marks"
                                    name="marks"
                                    required
                                    className="w-full rounded-md p-2 mt-2  focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                                  />
                                </div>
                                <div className="flex flex-col">
                                  <label className="text-sm">Feedback</label>
                                  <input
                                    type="text"
                                    placeholder="feedback"
                                    name="feedback"
                                    required
                                    className="w-full rounded-md p-2 mt-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                                  />
                                </div>
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn min-h-10 h-10 bg-[#5FCF80] text-white">
                                  Submit
                                </button>
                              </form>
                            </div>
                          </div>
                        </dialog>
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

export default PendingAssignments;
