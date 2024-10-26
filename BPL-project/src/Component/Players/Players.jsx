import PropTypes from 'prop-types';

const Players = ({ handleState, currentState, chosenPlayers }) => {
  return (
    <div>
      <div className="w-full mx-auto mt-10 md:w-10/12">
        <div className="flex justify-between">
          <h1 className="md:text-2xl text-[#131313] text-lg p-2 font-bold">
            {currentState.card ? 'Available Players' : `Selected Player (${chosenPlayers.length > 0 ? chosenPlayers.length : 0} / 6)`}
          </h1>
          <div className="sticky top-0 bg-white z-10">
            <div className="flex justify-center items-center md:pr-0 pr-2 bg-white gap-5">
              <div
                className={`${currentState.card ? 'p-2 rounded-lg text-lg border btn font-bold bg-[#E7FE29]' : 'p-2 rounded-lg text-lg btn border'}`}
                onClick={() => handleState(true)}
              >
                Available
              </div>
              <div
                className={`${currentState.card ? 'p-2 btn text-lg rounded-lg border' : 'p-2 btn rounded-lg border font-bold text-lg bg-[#E7FE29]'}`}
                onClick={() => handleState(false)}
              >
                Selected <span>({chosenPlayers.length > 0 ? chosenPlayers.length : 0})</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Players.propTypes = {
  handleState: PropTypes.func.isRequired,
};

export default Players;
