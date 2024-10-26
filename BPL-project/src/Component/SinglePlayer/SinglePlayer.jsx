import { useEffect, useState } from "react";
import PropTypes from 'prop-types'; 

const SinglePlayer = ({ handlePlayerSelection }) => {
    const [allPlayers, setPlayers] = useState([]); 

    useEffect(() => {
        fetch('/CricketPlayer.json')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                setPlayers(data); 
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }, []);

    return (
        <div className="md:w-10/12 mx-auto md:p-3 w-full p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
                {allPlayers.map(player => ( 
                    <div key={player.id} className="card card-compact rounded-xl border w-auto ">
                        <figure className="p-4">
                            <img className="w-full h-96 rounded-3xl bg-cover"
                                src={player.image}
                                alt="Player" />
                        </figure>
                        <div className="flex gap-3 justify-start items-center pl-4 pt-1">
                        <i className="fa-regular fa-user text-black text-xl"></i>
                            <h1 className=" text-lg font-bold text-[#131313]">{player.name}</h1>
                        </div>
                        <div className="flex gap-3 justify-between items-center pl-5">
                            <div className="flex gap-3 justify-start items-center">
                            <i className="fa-regular fa-flag text-black text-xl"></i>
                                <h1 className="text-base text-opacity-70 text-black font-semibold">{player.country}</h1></div>
                            <button className="btn bg-gray-200 font-semibold text-lg mr-5">{player.role}</button>
                        </div>
                        <hr className='border border-opacity-70 mt-3 ml-5  border-gray-400 mr-5 mb-2' />
                        <h1 className="pl-5 pt-1 text-lf font-semibold text-[#131313]">Rating</h1>
                        <div className="pl-5 flex justify-between pr-5 pt-2">
                            <h1 className="text-lg font-semibold text-[#131313]">Batting Types</h1>
                            <h1 className="text-lg font-semibold text-[#131313] text-opacity-60">{player.battingType}</h1>
                        </div>
                         <div className="pl-5 pr-5 pt-2 flex justify-between mb-5">
                            <div>
                                <h1 className="text-lg font-semibold text-[#131313]">Price: ${player.biddingPrice}</h1>
                            </div>
                            <button onClick={() => handlePlayerSelection(player)} className=" border text-lg text-opacity-60 text-[#13131] p-2 rounded-lg bg-red-400 font-semibold">
                                Choose Player
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

SinglePlayer.propTypes = {  
    handlePlayerSelection: PropTypes.func.isRequired
};

export default SinglePlayer;
