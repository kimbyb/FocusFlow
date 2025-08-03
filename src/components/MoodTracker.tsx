import { useEffect, useState } from "react";

const MoodTracker = () => {
    const [mood, setMood] = useState('None');

    return (
        <div className="border p-4 rounded shadow w-auto">
            <p className="text-xl mt-4 ml-4">Current mood: {mood}</p>

            <button onClick={() => setMood('Happy')} className=" ml-4 border p-4 rounded shadow bg-green-300 hover:bg-green-400">😊 Happy</button>
            <button onClick={() => setMood('Neutral')} className=" ml-4 border p-4 rounded shadow bg-yellow-300 hover:bg-yellow-400">😐 Neutral</button>
            <button onClick={() => setMood('Sad')} className="ml-4 border p-4 rounded shadow bg-red-300 hover:bg-red-400">😔 Sad</button>

        </div>
    )
}

export default MoodTracker;

