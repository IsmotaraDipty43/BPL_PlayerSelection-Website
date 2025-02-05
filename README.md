# PROJECT NAME: BPL
## Project Description
BPL is an interactive, fully responsive web application where users can browse, select, and purchase players with in-app credits. Featuring user-friendly functionality and a sleek design, the app allows users to claim free credits, manage their player selections, and view detailed player information—all within a seamless experience.

## Live Link
[BPL - Player Selection App](https://bpl-dream11-peoject.netlify.app/)


## Key Features
BPL provides a streamlined interface for selecting and managing players, with key features that include:

- **Claim Free Credit**: A "Claim Free Credit" button gives users a certain amount of free credits, which can be used toward purchasing players.

- **View Available Players**: The "Available" button displays all players currently open for selection, alongside the amount required to purchase each player, making it easy for users to decide on their next acquisition.

- **Choose and Manage Players**: Users can click the "Choose Player" button to add players to their selected cart. When a player is chosen, the associated cost is deducted from the user's main balance. The "Selected" button then shows all selected players, allowing users to view their current lineup. Additionally, users can remove players from the cart, and the player's cost will be added back to the main balance, ensuring users can manage their credits effectively.

- **Responsive Design**: Built with mobile-first responsiveness, ensuring an optimized experience across all devices.
  
- **Buy Player Button**:Buy Player: Once users have selected players, they can click the "Buy Player" button to finalize their purchase. This action deducts the required credits from the user's balance, adds the player to their team, and updates the player's status.

- **Dynamic Balance Management**: The app adjusts the user's balance in real-time as players are selected or removed.

- **Detailed Player Information**: Quick access to each player’s details, including availability and pricing, for a smooth decision-making process.

## Technologies Used
- **React (Vite)**
- **Tailwind CSS**
- **Daisy UI**
  
## 🛠 How to Run the Project Locally

Follow these steps to set up and run the project on your local machine using **VS Code**.

1️⃣ **Clone the Repository**  
   git clone https://github.com/IsmotaraDipty43/BPL_PlayerSelection-Website.git 

2️⃣ **Navigate to the Project Folder**  
   cd BPL-project  

3️⃣ **Open the Project in VS Code**  
   code .  

4️⃣ **Install Dependencies**  
   npm install  

5️⃣ **Run the Development Server**  
    npm run dev   

## 📦 Dependencies Used  
Below are the key dependencies used in this project:  

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "vite": "^4.0.0",
    "tailwindcss": "^3.0.0",
    "daisyui": "^1.17.0"
  }
}

