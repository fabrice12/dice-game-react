import './Game.css'
import {useEffect, useState} from "react";
import axios from "axios";
import dice from '../../images/dice.png'


const Game = () => {
    const [loading, setLoading] = useState(true)
    const [players, setPlayers] = useState([])
    const [playResult,setPlayResult]=useState({})


    useEffect(() => {
        axios.get("/all-players").then(res => {
            setPlayers(res.data)
        })
    }, [playResult])
    const throwDice = (event) => {
      event.preventDefault();
        const data={
            playerNumber:parseInt(localStorage.getItem("player_number"))
        }
      axios.post("/play",data).then(res=>{
          console.log(res.data)
          setPlayResult(res.data)
      })
    }
    return (
        <div className="game-parent">
            <div className="game-container">
                <div className="player-sec">
                    <h2>Players</h2>
                    <div className="player-tile-parent">
                        {players.map((player, key) => (
                            <div className="player-tile" key={player.playerNumber}>
                                <div className="player-avatar">
                                    <h1>A</h1>
                                </div>
                                <div className="player-desc">
                                    <h1>{player.name}</h1>
                                    <h2>Player Number: #{player.playerNumber}</h2>
                                    <h3>Score: {player.score}</h3>
                                </div>
                            </div>

                        ))}


                    </div>

                </div>
                <div className="play-ground">
                    <h2>Play ground</h2>
                    <div className="player-ground-parent">
                        <div className="ground-image">
                            <img src={dice} width="140" height="140" className="ground-dice-image"/>

                        </div>
                        <div className="ground-play">

                            <div className="play-res">
                                <h3>Dice Value: {playResult.diceValue??0}</h3>
                                <h3>Next Player: {playResult.nextPlayer??'N/A'}</h3>
                                <h3>Current Score: {playResult.totalScore??0}</h3>
                            </div>
                            <div className="play-btn">
                                <button onClick={throwDice}>Throw Dice</button>
                            </div>

                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}
export default Game