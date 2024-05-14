import axios from "axios";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const AssignmentsCard = ({ assignment, assignments, setAssignments }) => {
  const { user } = useAuth();
  const {
    _id,
    title,
    thumbnail,
    marks,
    description,
    difficulty,
    creatorEmail,
  } = assignment;
  const handleDelete = (id, creatorEmail) => {
    if (!user) {
      Swal.fire({
        title: "Error!",
        text: "Please login and try again",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } else if (user?.email !== creatorEmail) {
      Swal.fire({
        title: "Error!",
        text: "This assignment was not created by you. You cannot delete it",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } else if (user?.email === creatorEmail) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(
              `https://study-sync-website-server.vercel.app/assignment/${id}`
            )
            .then((res) => {
              console.log(res.data);
              if (res.data?.deletedCount) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your assignment has been deleted.",
                  icon: "success",
                });
                const remaining = assignments.filter(
                  (assign) => assign._id !== id
                );
                setAssignments(remaining);
              }
            });
        }
      });
    }
  };
  return (
    <div>
      <div className="max-w-[350px] border overflow-hidden bg-base-200 dark:bg-gray-800">
        <img
          className="object-cover w-full h-44"
          src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="Article"
        />

        <div className="p-4 border-b h-40">
          <div>
            <div className="flex justify-between">
              <p className="text-sm font-semibold flex rounded-lg justify-center items-center text-white min-h-8 h-8 max-w-[85px] w-[85px] bg-[#5FCF80] dark:text-blue-400">
                Marks : {marks}
              </p>
              <p className="text-sm font-semibold flex rounded-lg justify-center items-center text-white min-h-8 h-8 max-w-16 w-16 bg-[#5FCF80] dark:text-blue-400">
                {difficulty}
              </p>
            </div>
            <h2 className="block mt-2 text-xl font-semibold transition-colors duration-300 transform dark:text-white hover:text-[#5FCF80]">
              {title}
            </h2>
            <p className="mt-2 text-sm dark:text-gray-400">
              {description?.slice(0, 140)}...
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center p-4">
          <div className="flex flex-row gap-3">
            <button
              onClick={() => handleDelete(_id, creatorEmail)}
              className="btn bg-[#5FCF80] min-h-10 h-10"
            >
              <MdDeleteForever color="red" title="Delete" size={30} />
            </button>
            <Link
              to={`/updateassignments/${_id}`}
              className="btn bg-[#5FCF80] min-h-10 h-10"
            >
              <CiEdit color="white" title="Update" size={30} />
            </Link>
          </div>
          <div>
            <Link
              to={`/viewassignmentsdetails/${_id}`}
              className="btn min-h-10 h-10 bg-[#5FCF80] text-white"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentsCard;
