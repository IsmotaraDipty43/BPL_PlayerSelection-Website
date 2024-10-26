import banner from '../../assets/bg-shadow.png';
import bannerlogo from '../../assets/banner-main.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types'; 



// eslint-disable-next-line react/prop-types
const Banner = ({ handlerCredit}) => {

    const MoneyAdd = () => toast.success("Credit Amount Added to your Account.");
    const combineFunction = () => {
        handlerCredit();
      MoneyAdd();
  };
  
      return (
        <div className="relative mt-10 h-auto md:w-10/12 mx-auto rounded-xl bg-black w-full  overflow-hidden">
              <div
                 className="absolute inset-0 rounded-xl bg-cover bg-center"
                style={{ backgroundImage: `url(${banner})` }}></div>
               <div className="relative items-center z-10 flex flex-col "> 
            <div className='mt-10 mb-4'><img src={bannerlogo} /></div>
            <h1 className='lg:text-4xl text-2xl  text-white font-bold mb-4 text-center'> Assemble Your Ultimate Dream 11 <span className='lg:inline block'>Cricket Team</span></h1>
            <p className='md:text-2xl text-lg mb-4 text-opacity-70 font-semibold text-gray-100'>Beyond Boundaries Beyond Limits</p>
          <div className='border border-[#E7FE29] rounded-2xl border-opacity-60 mb-20 p-2 '>
              <button onClick={combineFunction } className='text-black rounded-xl p-4 font-bold bg-[#E7FE29]'>Claim Free Credit</button> <ToastContainer position="top-center"/> </div>
          </div>
        </div>
      );
    };
    Banner.propType = {
        handlerCredit: PropTypes.func
    }
  export default Banner;