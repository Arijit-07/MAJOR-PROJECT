import { Link } from "react-router-dom";
import { FaShoppingBag, FaSearch, FaSignInAlt, FaUser, FaSignOutAlt } from "react-icons/fa";
import { useState } from "react";

const user = { _id: "6201", role: "admin" };

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const LogoutHandler = () => {
    setIsOpen(false);
  };

  return (
    <nav className="header">
      <Link onClick={() => setIsOpen(false)} to={"/"}>Home</Link>
      <Link onClick={() => setIsOpen(false)} to={"/search"}>
        <FaSearch />
      </Link>
      <Link onClick={() => setIsOpen(false)} to={"/cart"}>
        <FaShoppingBag />
      </Link>

      {user?._id ? (
        <>
          <button onClick={() => setIsOpen((prev) => !prev)}>
            <FaUser />
          </button>
          {isOpen && (
            <dialog open={true}>
              <div>
                {user.role === "admin" && (
                  <Link onClick={() => setIsOpen(false)} to="/admin/dashboard">Admin</Link>
                )}
                <Link onClick={() => setIsOpen(false)} to="/orders">Orders</Link>

                <button onClick={LogoutHandler}>
                  <FaSignOutAlt /> Logout
                </button>
              </div>
            </dialog>
          )}
        </>
      ) : (
        <>
          <Link to={"/Login"}>
            <FaSignInAlt />
          </Link>
        </>
      )}
    </nav>
  );
};

export default Header;
