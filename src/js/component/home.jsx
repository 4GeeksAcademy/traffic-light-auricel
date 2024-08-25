import React, { useState } from "react";

const inicialLightColors = ["rojo", "amarillo", "verde"];

const Home = () => {

	
	const [lightColors, setLightColors] = useState(inicialLightColors);
	const [lightColor, setLightColor] = useState("rojo");

	//Secuencia para el cambio de colores
	const cycleLightColor = () => {
		if (lightColor === "rojo") {
			setLightColor("amarillo");
		} else if (lightColor === "amarillo") {
			setLightColor("verde");
		} else if (lightColor === "verde" && lightColors.includes("violeta")) {
			setLightColor("violeta");
		} else if (lightColor === "verde" && !lightColors.includes("violeta") || lightColor === "violeta") {
			setLightColor("rojo");
		}
	};
			
		

	const addvioletaLight = () => {
		if (lightColors.includes("violeta")) {
			setLightColors(["rojo", "amarillo", "verde"])
		} else {
			setLightColors([...lightColors, "violeta"])
		}
	};

	return (
		<div className="container">
			<div className="seleccionador"></div>
			<div className="caja-de-colores">
				<div onClick={() => setLightColor("rojo")} className={"rojoLight light " + (lightColor === "rojo" ? "lightColorRojo" : "")}></div>
				<div onClick={() => setLightColor("amarillo")} className={"amarilloLight light " + (lightColor === "amarillo" ? "lightColorAmarillo" : "")}></div>
				<div onClick={() => setLightColor("verde")} className={"verdeLight light " + (lightColor === "verde" ? "lightColorVerde" : "")}></div>
				{lightColors.includes("violeta") && (
					<div onClick={() => setLightColor("violeta")} className={"violetaLight light " + (lightColor === "violeta" ? "lightColorVioleta" : "")}></div>
				)}
			</div>
			<div>
				<button className="btn mt-5 btn-danger" onClick={addvioletaLight}>Agregar/quitar violeta</button>
				<button className="btn mt-5 btn-danger" onClick={cycleLightColor}>Siguiente color</button>
			</div>
		</div>
	)
};
	
export default Home;