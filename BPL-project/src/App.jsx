
import './App.css'
import Footer from './Component/Footer/Footer'
import Banner from './Component/BannerPart/Banner'
import Navber from './Component/Navber/Navber'
import { toast } from 'react-toastify'
import { useState } from 'react'
import Players from './Component/Players/Players'
import SinglePlayer from './Component/SinglePlayer/SinglePlayer'
import SelectedPlayer from './Component/SelectedPlayer/SelectedPlayer'


function App() {
  const [creditAdd, setCreditAdd] = useState(0);

  const [chosenPlayers, setChosenPlayers] = useState([]);
  const showPlayerExistsError = () => toast.error("Player already selected!");
  const showPlayerAddedSuccess = (playerName) => toast.success(`Success! ${playerName} has been added.`);
  const showMaxPlayersWarning = () => toast.warning("Limit reached! You can only select 6 players.");
  const showInsufficientBalanceError = () => toast.error("Insufficient balance! Please add credit.");
  const showPlayerRemovedWarning = () => toast.warning("Player has been removed from the list.");

  const [currentState, setState] = useState({ card: true, state: 'avaiable' });



  const handlerCredit = () => {
    const newCreditAmount = 9000000;
    setCreditAdd(newCreditAmount + creditAdd);
  
  };


const handleState = (state) => {
  if (state) {
    setState({
      card: true,
      state: 'avaiable'
    });
  } else {
    setState({
      card: false,
    state: 'selected'
    });
  }
};

const handlePlayerSelection = (newPlayer) => {
  const playerAlreadyChosen = chosenPlayers.find(existingPlayer => existingPlayer.playerId === newPlayer.playerId);

  if (playerAlreadyChosen) {
    showPlayerExistsError();
  } else if (creditAdd === 0 || newPlayer.biddingPrice >= creditAdd) {
    showInsufficientBalanceError();
  
  } else if (chosenPlayers.length >= 6) {
    showMaxPlayersWarning();
  }
  else {
    setChosenPlayers([...chosenPlayers, newPlayer]);
   setCreditAdd(creditAdd - newPlayer.biddingPrice);
    showPlayerAddedSuccess(newPlayer.name); 
  }
};

const removeSelectedPlayer = (playerToRemove) => {
  const filteredPlayers = chosenPlayers.filter(currentPlayer => currentPlayer.playerId !== playerToRemove.playerId);
  
  setChosenPlayers(filteredPlayers); 
  setCreditAdd(creditAdd + playerToRemove.biddingPrice);
  showPlayerRemovedWarning();
};

  return (
    <>
      <Navber creditAdd={creditAdd} ></Navber>
     <Banner  handlerCredit ={ handlerCredit}></Banner>
     <Players  handleState ={ handleState } chosenPlayers={chosenPlayers} currentState={currentState}></Players>
     {currentState.card ?<SinglePlayer handlePlayerSelection ={handlePlayerSelection }></SinglePlayer>: <SelectedPlayer handleState ={handleState}   removeSelectedPlayer={removeSelectedPlayer} chosenPlayers={chosenPlayers}></SelectedPlayer>} 
     <Footer> </Footer>
    </>
  )
}

export default App
