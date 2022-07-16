import './Player.css'
import { useState } from 'react'

function Player() {

    const [playerName, setPlayerName] = useState("Player Name")

    return (
        <div className='Player'>
            <h2>{playerName}</h2>
            <form>
                <input
                    type="text"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                />
            </form>
        </div>
    )
}

export default Player;