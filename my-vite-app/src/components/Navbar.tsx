type _navbarType = {
  title: string
}
const Navbar = ({ title }: _navbarType) => {
  return (
    <nav className="h-16 bg-white flex items-center justify-between px-6 shadow-md ">
      <div className="text-gray-700 font-medium">{title}</div>
      <div className="flex items-center gap-4">
        <button className="relative">
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
          🔔
        </button>
        <div className="h-8 w-8 rounded-full bg-gray-300" />
      </div>
    </nav>
  );
};

export default Navbar;
