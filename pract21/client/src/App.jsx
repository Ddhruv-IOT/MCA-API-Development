import { useState, useEffect } from "react";

function App() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const fetchTime = () => {
            fetch("http://localhost:5000/time")
                .then(res => res.json())
                .then(data => setTime(data.time))
                .catch(err => console.error("Error fetching time:", err));
        };

        fetchTime();
        const interval = setInterval(fetchTime, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ textAlign: "center", fontSize: "24px", marginTop: "50px" }}>
            <h2>Real-Time Clock</h2>
            <p>{time}</p>
        </div>
    );
}

export default App;
