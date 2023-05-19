const {it, describe, expect} = require("@jest/globals");
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import React, {useState, useEffect} = 'react';


decribe("test for App.js page", () => {
    it("renders component", () => {
        expect(<App />).toBeTruthy;
    })

    it("renders pageList", () => {
        const jjjjj = (<App />);
        const welcome = <h1>WIKILIST</h1>;
        expect(jjjj.contains(welcome)).toEqual(true);

    })
    //test the page implicitly 
    test('renders pageList', () => {
        render(<App />);
  
        expect(screen.getByRole("heading")).toHaveTextContent(/Wikiverse/);
        expect(screen.getByRole("combobox")).toHaveDisplayValue("Select a breed");//what is displayed in input box
        expect(screen.getByRole("button", { name: "Search" })).toBeDisabled();//test for button
});
})

/** 
 * testing App Fetch method using mocking
*/


/** 
 * testing hendleClick function
*/
describe("test handleclick", () => {
    test("test onClick", () => {
        const {className} = render(<App />);
        const button = className('Button');
        expect(button.textContent).toBe();
        fireEvent.click(button);
        expect(button.textContent).toBe();
    })
})







