import React from 'react';
import { Page } from './Page';
import {BrowserRouter,Routes, Route, useNavigate, Switch, useParams,Link} from "react-router-dom";
import { useLocation } from 'react-router-dom'	

export const PagesList = ({pages}) => {
	
	// console.log(pages)
	return <>
	
		{
			pages.map((page, idx) => {
				
				return (
				<div>
					
					<Link to="/:article" state={page}> {page.title} </Link >
					


				</div>)
			})
		}
	</>
} 
