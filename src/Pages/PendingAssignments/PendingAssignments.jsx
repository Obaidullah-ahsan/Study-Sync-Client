import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

const PendingAssignments = () => {
  const [id, setId] = useState(null);
  const [pdflink, setPdflink] = useState(null);
  const [quicknote, setQuicknote] = useState(null);

  const { data: loadPendingAssignments, refetch } = useQuery({
    queryKey: ["pendingAssignments"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/submitassignments");
      return res.json();
    },
  });

  const handleGiveMark = (id) => {
    axios.get(`http://localhost:5000/pendingassignment/${id}`).then((res) => {
      console.log(res.data);
    });
  };
  const submitMark = (e) => {
    const form = e.target;
    const marks = form.marks.value;
    const feedback = form.feedback.value;
    const giveMark = {
      obtained_marks: marks,
      status: "Completed",
      feedback,
    };
    axios
      .put(`http://localhost:5000/pendingassignment/${id}`, giveMark)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount) {
          Swal.fire({
            title: "Success",
            text: "Assignment Update Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          form.reset();
          refetch();
          // navigate("/assignments");
        }
      });
  };

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
                        <div className="inline px-3 py-1 text-sm font-normal rounded-full text-blue-600 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                          {pendingAssignment?.status}
                        </div>
                      </td>
                      <td className="px-10 py-4 text-sm font-medium whitespace-nowrap">
                        <button
                          className="btn min-h-10 h-10 bg-[#5FCF80] text-white"
                          onClick={() => {
                            document.getElementById("my_modal_5").showModal();
                            handleGiveMark(pendingAssignment?._id);
                            setId(pendingAssignment?._id);
                            setPdflink(pendingAssignment?.pdflink);
                            setQuicknote(pendingAssignment?.quicknote);
                          }}
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
                                onSubmit={submitMark}
                                className="flex flex-col gap-3"
                                method="dialog"
                              >
                                <div className="flex flex-col">
                                  <label className="text-sm">PDF Link</label>
                                  <iframe
                                  width="450" height="300"
                                  className="mt-2 max-w-[350px] md:max-w-[450px] max-h-[300px]"
                                    src={pdflink}
                                    title="Pdf link"
                                  ></iframe>
                                </div>
                                <div className="flex flex-col">
                                  <label className="text-sm">Quick Note</label>
                                  <input
                                    defaultValue={quicknote}
                                    disabled
                                    className="w-full rounded-md p-2 dark:text-gray-50 dark:border-gray-300"
                                  />
                                </div>
                                <div className="flex flex-col">
                                  <label className="text-sm">Marks</label>
                                  <input
                                    type="number"
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
                            <p className="text-center mx-auto mt-3">
                              Press ESC key to close
                            </p>
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
