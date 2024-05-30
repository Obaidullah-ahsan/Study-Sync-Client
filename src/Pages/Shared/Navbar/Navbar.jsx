import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Navbar = () => {
  const { logOut, user } = useAuth();
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const handleToggle = (e) => {
    if (e.target.checked) {
      document.querySelector("html").setAttribute("data-theme", "dark");
    } else {
      document.querySelector("html").setAttribute("data-theme", "light");
    }
  };
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/assignments">Assignments</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/createassignments">Create Assignments</NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink to="/pendingassignments">Pending Assignments</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar justify-between h-[60px] min-h-[60px] bg-base-200 shadow lg:px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu text-xl menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <h2 className="text-2xl font-bold">Study Sync</h2>
      </div>
      <div className="justify-end md:w-0 lg:w-[70%] hidden lg:flex">
        <ul className="menu menu-horizontal text-base font-semibold px-1">
          {navLinks}
        </ul>
      </div>
      <div className="justify-end flex gap-3 ml-3">
        <div className="justify-end">
          <label className="cursor-pointer grid place-items-center">
            <input
              onChange={handleToggle}
              type="checkbox"
              value="dark"
              className="toggle bg-base-content row-start-1 col-start-1 col-span-2"
            />
            <svg
              className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-56"
            >
              <li>
                <Link
                  className="btn min-h-8 h-8 text-white bg-[#5FCF80]"
                  to={`/mysubmittedassignment/${user?.email}`}
                >
                  My Submitted Assignments
                </Link>
              </li>
              <li>
                <button
                  className="btn text-white mt-1 min-h-8 h-8 bg-[#5FCF80]"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link
              to="/login"
              className="btn min-h-10 h-10 text-white bg-[#5FCF80] text-base"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="btn min-h-10 h-10 text-white bg-[#5FCF80] text-base"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
