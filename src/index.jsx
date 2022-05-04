/* Here we are binding React (and the client side routing via react-router-dom) to the HTML file to an
 * element with an ID of `root` and setting up
 */

import React from "react";
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

//import createRoot from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom'

import "./styles/reset.css";

/* App is the entry point to the React code.*/
import CRoutes from './Routes/index.jsx';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
	<BrowserRouter basename="/">
		<CRoutes />
	</BrowserRouter>
);
