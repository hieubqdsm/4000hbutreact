import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
    const deathLine = "Friday, 4 June 2021, 18:50:00";
    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        const difference = +new Date(deathLine) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };


    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [year] = useState(new Date().getFullYear());
    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
        );
    });


    const calculateHoursLeft = () => {
        const different = +new Date(deathLine) - +new Date();
        let hoursLeft = {};
        if (different > 0) {
            hoursLeft = {
                hours: Math.floor((different / (1000 * 60 * 60))),
            }
        }
        return hoursLeft;
    }
    const hourComponents = [];
    const [hoursLeft, setHoursLeft] = useState(calculateHoursLeft());
    Object.keys(hoursLeft).forEach((interval) => {
        if (!hoursLeft[interval]) {
            return;
        }

        hourComponents.push(
            <span>
        {hoursLeft[interval]}{"h left!"}
      </span>
        );
    });

    useEffect(() => {
        setTimeout(() => {
            setHoursLeft(calculateHoursLeft());
        }, 1000);
    })

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    {hourComponents.length ? hourComponents : <span>Time's up!</span>}
                </p>
                <p>
                    {timerComponents.length ? timerComponents : <span>Time's up!</span>}
                </p>
            </header>

        </div>
    );
}

export default App;
