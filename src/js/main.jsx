import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css';

import Home from './components/Home';

let counter = 0;
const reactRender = ReactDOM.createRoot(document.getElementById("root"));

setInterval(() => {
	const seis = Math.floor(counter / 100000) % 10;
	const cinco = Math.floor(counter / 10000) % 10;
	const cuatro = Math.floor(counter / 1000) % 10;
	const tres = Math.floor(counter / 100) % 10;
	const dos = Math.floor(counter / 10) % 10;
	const uno = counter % 10;
	console.log(seis, cinco, cuatro, tres, dos, uno);
	

	reactRender.render(
			<Home
				seis={seis}
				cinco={cinco}
				cuatro={cuatro}
				tres={tres}
				dos={dos}
				uno={uno}
			/>
	);

	counter++;
}, 100);
