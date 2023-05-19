import React from 'react';
import { Page } from './Page';
import {BrowserRouter,Routes, Route, useNavigate, Switch, useParams,Link} from "react-router-dom";

export const PagesList = ({pages}) => {
	
	// console.log(pages)
	return <>
	
		{
			pages.map((page, idx) => {
				return (
				<div>
					<Link to="/:slug"> {page.title} </Link >
				</div>
				)
			})
		}
	</>
} 
