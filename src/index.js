import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import Components from './component/pages/components/Components';
import Portfolio from './component/pages/portfolio/Portfolio';
import Construction from './component/Construction';
import Presentation from './component/pages/bh-presentation/Presentation';

const router = createHashRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/components',
		element: <Components />,
	},
	{
		path: '/runway',
		element: <Portfolio />,
	},
	{
		path: '/construction',
		element: <Construction />,
	},
	// {
	// 	path: '/bh-p',
	// 	element: <Presentation />,
	// },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
