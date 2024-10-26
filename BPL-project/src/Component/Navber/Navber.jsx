import LoGo from '../../assets/logo.png'

// eslint-disable-next-line react/prop-types
const Navber = ({creditAdd}) => {
    return (
        <div>
            <div className="navbar w-full md:w-10/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-48 p-2 shadow">
            <li><a href="#item1">Home</a></li>
            <li><a href="#parent">About</a></li>
            <li><a href="#item3">Teams</a></li>
            <li><a href="#item3">Contact</a></li>
          </ul>
        </div>
       <img src={LoGo} className="md:w-18 w-14 h-14 md:h-18" alt="" />
      </div>
     
      <div className="navbar-end pr-3 md:pr-0 gap-10">
      <div className='gap-10 text-lf font-semibold text-gray-500 hidden md:flex'>
              <h1>Home</h1>
              <h1>About</h1>
              <h1>Teams</h1>
              <h1>Contact</h1>
            </div>
            <button className="p-3  text-black font-bold rounded-lg border border-b-gray-200 flex items-center gap-2">
              <span className={`${creditAdd === 0 ? 'text-black':'text-red-500'}`}>{creditAdd}</span> Coin <i className="fa-solid fa-circle-dollar-to-slot  text-xl text-orange-500"></i>
             
            </button>
      </div>
    </div>
        </div>
    );
};

export default Navber;