import { RouterProvider } from 'react-router-dom';
import { route } from './routing';
import './scss/App.scss';

export function App() {
	return <RouterProvider router={route} />;
}
