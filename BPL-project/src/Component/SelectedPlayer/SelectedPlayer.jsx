import PropTypes from 'prop-types';
import SinglePlayer from '../SinglePlayer/SinglePlayer';
import { useState } from 'react';

const SelectedPlayer = ({removeSelectedPlayer, chosenPlayers, handleState  }) => { 
    const [isPlayerVisible, setPlayerVisibility] = useState(false);

    const activatePlayerSelection = () => {
      setPlayerVisibility(true);
      handleState(true);
    };
    
    if (isPlayerVisible) {
      return <SinglePlayer />;
  
    }
  return (
    <div className="w-10/12 mx-auto mt-8">
      {chosenPlayers.map((player) => (
        <div key={player.playerId} className="border  justify-between rounded-lg shadow-2xl p-4 mb-5 flex">
          <div className="flex gap-4 items-center">
            <img src={player.image} className="w-24 rounded-lg h-24" />
            <div>
              <h1 className="text-black font-semibold text-xl">{player.name}</h1>
              <p className="text-lg font-semibold text-gray-800">{player.role}</p>
              <p className="text-lg font-semibold text-gray-800">Price: ${player.biddingPrice}</p>
            </div>
          </div>
          <div>
          <i onClick={() => removeSelectedPlayer(player)} className="fa-solid fa-delete-left text-4xl text-orange-600 mr-3 mt-4"></i>
          </div>
        </div>
      ))}
      <div className="border rounded-lg p-2 border-gray-400 border-opacity-55 w-48">
        <button
          onClick={activatePlayerSelection}
          className="text-black text-lg font-semibold rounded-xl p-2  w-full bg-[#E7FE29]">
          Add More Player
        </button>
      </div>
    </div>
  );
};
SelectedPlayer.propTypes = {

  removeSelectedPlayer: PropTypes.func.isRequired,
  handleState : PropTypes.func.isRequired
};

export default SelectedPlayer;
