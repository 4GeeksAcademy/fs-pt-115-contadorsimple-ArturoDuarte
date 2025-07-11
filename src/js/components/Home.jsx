import React from "react";

//include images into your bundle
import { Contador } from "./Contador";
import { Reloj } from "./Reloj";

//create your first component
const Home = ({uno, dos, tres, cuatro, cinco, seis}) => {
	return (
		<div className="">
			<div className="d-flex justify-content-center row bg-dark mt-4" style={{ height: "500px" }}>
				<div className="siete col-md-3 shadow-sm ">
					<Reloj />
				</div>
				<div className="seis col-md-1 shadow-sm">
					<Contador
						digitoUno={seis} />
				</div>
				<div className="cinco col-md-1 shadow-sm">
					<Contador
						digitoUno={cinco}
					/>
				</div>
				<div className="cuatro col-md-1 shadow-sm">
					<Contador
						digitoUno={cuatro} />
				</div>
				<div className="tres col-md-1 shadow-sm">
					<Contador
						digitoUno={tres} />
				</div>
				<div className="dos col-md-1 shadow-sm">
					<Contador
						digitoUno={dos} />
				</div>
				<div className="uno col-md-1 shadow-sm">
					<Contador
						digitoUno={uno}
					/>
				</div>
			</div>
		</div>
	);

};

export default Home;