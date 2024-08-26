import React, { useState } from "react";

const inicialLightColors = ["rojo", "amarillo", "verde"];

const Home = () => {



	const [lightColor, setLightColor] = useState("rojo");

	//Secuencia para el cambio de colores
	const cycleLightColor = () => {
		if (lightColor === "rojo") {
			setLightColor("amarillo");
		} else if (lightColor === "amarillo") {
			setLightColor("verde");
		} else if (lightColor === "verde") {
			setLightColor("rojo");
		}
	};

	return (
		<div className="container">
			<div className="seleccionador"></div>
			<div className="caja-de-colores">
				<div onClick={() => setLightColor("rojo")} className={"rojoLight light " + (lightColor === "rojo" ? "lightColorRojo" : "")}></div>
				<div onClick={() => setLightColor("amarillo")} className={"amarilloLight light " + (lightColor === "amarillo" ? "lightColorAmarillo" : "")}></div>
				<div onClick={() => setLightColor("verde")} className={"verdeLight light " + (lightColor === "verde" ? "lightColorVerde" : "")}></div>

			</div>
			<div>
				<button className="btn mt-5 btn-danger" onClick={cycleLightColor}>Siguiente color</button>
			</div>
		</div>
	)
};

export default Home;