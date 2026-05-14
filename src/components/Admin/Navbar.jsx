const Navbar = () => {
  return (
    <div className="bg-white shadow p-4 flex justify-between">
      <h1 className="font-semibold text-xl">
        Admin Dashboard
      </h1>

      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/";
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;