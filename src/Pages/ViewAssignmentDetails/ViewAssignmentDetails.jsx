import { useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const ViewAssignmentDetails = () => {
  const loadedAssignment = useLoaderData();
  const { user } = useAuth();
  const { title, thumbnail, marks, description, difficulty, date } =
    loadedAssignment;

  const handleSubmitModal = (e) => {
    const form = e.target;
    const pdflink = form.pdflink.value;
    const quicknote = form.quicknote.value;
    const name = user?.displayName;
    const email = user?.email;
    console.log(pdflink, quicknote);
    const submitAssignment = {
      pdflink,
      quicknote,
      title,
      marks,
      name,
      email,
      status: "Pending",
    };
    axios
      .post(
        "https://study-sync-website-server.vercel.app/submitassignments",
        submitAssignment,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Assignment Submitted Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          form.reset();
        }
      });
    console.log(submitAssignment);
  };

  return (
    <div className="my-4 md:my-12 md:mx-8 lg:mx-20">
      <div className="overflow-hidden flex flex-col md:flex-row bg-base-100 dark:bg-gray-800">
        <div className="md:w-[50%]">
          <img
            className="object-cover w-full"
            src={thumbnail}
            alt="Assignment image"
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
              <button
                className="btn min-h-10 h-10 bg-[#5FCF80] text-white"
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                Take assignment
              </button>
              <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box bg-base-200">
                  <h3 className="font-bold text-2xl text-center mx-auto">
                    Submit Assignment
                  </h3>
                  <div className="modal-action justify-center">
                    <form
                      onSubmit={handleSubmitModal}
                      className="flex flex-col gap-4"
                      method="dialog"
                    >
                      <div>
                        <label className="text-sm">PDF/doc link</label>
                        <input
                          type="text"
                          placeholder="PDF/doc link"
                          name="pdflink"
                          required
                          className="w-full rounded-md p-2 mt-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm">Quick note</label>
                        <textarea
                          className="textarea textarea-bordered"
                          placeholder="Quick note"
                          name="quicknote"
                          required
                        ></textarea>
                      </div>
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn min-h-10 h-10 bg-[#5FCF80] text-white">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAssignmentDetails;
