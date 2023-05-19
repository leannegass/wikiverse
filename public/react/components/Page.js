import React, {useState, useEffect} from 'react';
import {BrowserRouter,Routes, Route,useLocation , useParams, Link} from "react-router-dom";
import apiURL from '../api';

 

export const Page = (props) => {
  const location = useLocation(); 
  const state = location.state;
  // console.log(state);
  const authorId = state.authorId;
  const [author, setAuthor] = useState({});
  
async function fetchAuthor() {
  const res = await fetch(`${apiURL}/users/${authorId}`);
  const data = await res.json();
  setAuthor(data)
  console.log(data) 
}
useEffect(() => {
  fetchAuthor();
}, []);
  
  
  return ( 
     <>
      <h1>{state.title}</h1>
      <p>Author: {author.name}</p>
      <p>Published : {state.createdAt} </p>
      <p>{state.content}</p>
      <p></p>
      <Link to={"/"} > Back to wikilist </Link>
      {/* {
      // page && <p> {props.page.content}</p>

      pageToggle && <SinglePageView  data={props.page}/>

     } */}
      
    </>)
}
	