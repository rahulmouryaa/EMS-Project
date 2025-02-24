
const Header = (props) => {

  console.log(props)
  
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser('')
    //window.location.reload();
  };

  
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-sm text-white/80 font-light">
         Welcome Back,<br />
        <span className="text-3xl font-semibold text-white">
        {props.data ? props.data.firstName : "Admin"}👋
        </span>
      </h1>
      <button
        onClick={logOutUser}
        className="text-white text-lg bg-red-500 font-medium px-5 py-3 rounded-xl transition-all duration-200 ease-in-out hover:bg-red-600 active:scale-95 active:bg-red-700"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
