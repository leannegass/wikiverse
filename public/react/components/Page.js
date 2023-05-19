import React, {useState, useEffect} from 'react';
import { SinglePageView } from './SinglePageView';
import {BrowserRouter,Routes, Route, useNavigate, Switch, useParams} from "react-router-dom";
import apiURL from '../api';
 

export const Page = (props) => {
  const {slug} = useParams();
  const [page, setPage] = useState({});
  // const [pageToggle, setPageToggle] = useState(false)

  async function handleClick(){
    //console.log()
    //const url = `${apiURL}/wiki/${props.page.slug}`;
      
      const response = await fetch(`${apiURL}/wiki/${slug}`);
			const pageData = await response.json();
      setPage(pageData);
      //setPageToggle(!pageToggle)
      console.log(page)
      
    
  }
  return ( 
     <>

     
  

      <button onClick={handleClick}> {page.title}Back to wikilist </button>
      {/* {
      // page && <p> {props.page.content}</p>

      pageToggle && <SinglePageView  data={props.page}/>

     } */}
      
    </>)
}
	