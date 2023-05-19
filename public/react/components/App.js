import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';
import { Page } from './Page';
import {BrowserRouter,Routes, Route, useNavigate, Switch, useParams,Link} from "react-router-dom";
import { NewPage} from './NewPage';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [pages, setPages] = useState([]);

	async function fetchPages(){
		try {
			const response = await fetch(`${apiURL}/wiki`);
			const pagesData = await response.json();
			setPages(pagesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchPages();
	}, []);
	

	return (
		<>
		    <main>	
            <h1>WikiVerse</h1>
			<h2>An interesting 📚</h2>
			<nav>
				<ul>
					<li> 
						<Link to="/"> WIKILIST </Link>
					</li>
				</ul>
			</nav>
			<Routes>
				<Route path="/" element={<PagesList pages={pages} />} />
				<Route path="/:article" element={<Page />} />
				<Route path="/new" element={<NewPage />} />
			
			</Routes>
		    </main>
		</>
	)
}