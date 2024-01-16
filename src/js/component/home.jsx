import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
    const [selectedColor, setSelectedColor] = useState("yellow");
    const [showPurple, setShowPurple] = useState(false);
    const [timerActive, setTimerActive] = useState(false);
    useEffect(() => {
        let intervalId;
        if (timerActive) {
            intervalId = setInterval(() => {
                if (selectedColor === "red") {
                    setSelectedColor("yellow");
                } else if (selectedColor === "yellow") {
                    setSelectedColor("green");
                } else if (selectedColor === "green") {
                    setSelectedColor("red");
                }
            }, 2000);
        }
        return () => clearInterval(intervalId);
    }, [timerActive, selectedColor]);
    const toggleTimer = () => {
        setTimerActive(!timerActive);
    };
    return (
        <div>
            <div className="traffic-light text-center">
                <div
                    onClick={() => {
                        setSelectedColor("red");
                        setShowPurple(false); // Oculta el morado
                    }}
                    className={"light red" + (selectedColor === "red" ? " glow1" : "")}
                ></div>
                <div
                    onClick={() => {
                        setSelectedColor("yellow");
                        setShowPurple(false); // Oculta el morado
                    }}
                    className={"light yellow" + (selectedColor === "yellow" ? " glow2" : "")}
                ></div>
                <div
                    onClick={() => {
                        setSelectedColor("green");
                        setShowPurple(false); // Oculta el morado
                    }}
                    className={"light green" + (selectedColor === "green" ? " glow3" : "")}
                ></div>
                {showPurple && (
                    <div
                        onClick={() => {
                            setSelectedColor("purple");
                            setShowPurple(true);
                        }}
                        className={"light purple" + (selectedColor === "purple" ? " glow4" : "")}
                    ></div>
                )}
            </div>
            <button type="button" class="btn btn-secondary boton" onClick={() => setShowPurple(!showPurple)}>Uno más!</button>
            <button type="button" className="btn btn-secondary boton2" onClick={toggleTimer}>
                {timerActive ? "Detener Temporizador" : "Iniciar Temporizador"}
            </button>
        </div>
    );
}
export default Home;