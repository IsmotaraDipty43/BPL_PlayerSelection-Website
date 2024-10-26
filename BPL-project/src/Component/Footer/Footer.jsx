import banner from '../../assets/bg-shadow.png';
import footer from '../../assets/logo-footer.png'

const Footer = () => {
    return (
        <div className='h-auto w-full mt-16'>
        <div className="relative w-11/12  md:-10/12 lg:w-8/12 mx-auto  rounded-xl border z-10 bg-white mt-10  border-white">
                <div
                    className="absolute rounded-xl m-2  z-10 inset-0 bg-cover bg-center"
                    style={{backgroundImage: `url(${banner})`}}>
                    </div>
                       <div className="relative  p-3 text-center mt-10 mb-10  text-black ">
                    <h1 className="text-2xl text-[#131313] font-bold">Subscribe to our Newsletter</h1>
                    <p className="text-lg text-[#131313B3] opacity-60 font-semibold  ">Get the latest updates and news right in your inbox!</p>
                    <div className='flex  items-center gap-5 mt-5 justify-center'>
                    <label className="input input-bordered rounded-xl items-center gap-2 font-semibold text-gray-500 flex "><input type="text" className="grow w-44 md:w-56" placeholder="Enter your email" />
                    </label>
                     <button className='text-[#131313] bg-gradient-to-r from-pink-400 to-yellow-500 p-3 font-semibold rounded-xl'>Subscribe</button>
                    </div></div>
                    </div>
                   <div className="bg-[#06091A] w-full absolute mt-[-110px] h-auto ">
                    <div className='w-10/12 h-[620px] md:h-[400px] mx-auto mt-[150px] '>
                                   <div className='flex justify-center items-center mb-10'>
                                      <img src={footer} alt="" />
                                   </div>
                           <div className=' justify-between gap-2 grid-cols-1 grid md:grid-cols-3  '><div> 
                                           <h1 className='text-lg mb-4 font-bold text-white'>About Us</h1>
                                                <p className='text-gray-200  text-opacity-60  text-base'>We are a passionate team</p>
                                                <p className='text-gray-200  text-opacity-60  text-base'> dedicated to providing the best </p>
                                                <p className='text-gray-200  text-opacity-60 mb-5 text-base'>services to our customers.</p>
                                       </div>
                                       <div>
                                        <h1 className='text-lg text-white mb-4 font-bold'>Quick Links</h1>
                                        <ul className="list-disc text-gray-200 text-opacity-60 ml-5">
                                            <li>Home</li>
                                            <li>Service</li>
                                            <li>About</li>
                                            <li>Contact</li>
                                        </ul>
                                       </div>
                                       <div>
                                        
                                       <h1 className="text-lg font-semibold text-white mb-4">Subscribe</h1>
                                 <p className="text-gray-200 text-base text-opacity-60 mb-4">
                                       Subscribe to our newsletter for the <br /> latest updates.
                                               </p>
                                      <div className="flex ">
                                          <input
                                           type="text"
                                placeholder="Enter your email"
                           className="h-10 md:w-2/3 p-3 text-base font-semibold rounded-l-xl  lg:text-lg " />
                            <button className="bg-gradient-to-r from-yellow-500 to-pink-500 font-semibold md:text-sm lg:text-lg text-lg h-10 md:w-1/3 md:pr-2  text-black rounded-r-xl">
                                  Subscribe
                               </button>
                                   </div>
                                     </div>
                                       </div>
                                
                                        </div>
                                        <hr  className=' border mb-5  border-gray-100 mt-10 border-opacity-70'/>
                                              <div>
                                      <h1  className='text-gray-100 text-opacity-70 text-base text-center mb-5'>@2024 Your Company All Rights Reserved.</h1>
                                             </div>
                                              </div>
                                               </div>
    );
};

  
export default Footer;
