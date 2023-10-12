import * as React from 'react';
import {render, screen, fireEvent} from '@testing-library/react'
import Form from '../client/components/Form.jsx'
import Ingredient from '../client/components/Ingredient.jsx';
import "@testing-library/jest-dom"


describe('Form', () => {
    it('renders Form component', () =>{
        const ingr = ['ing1','ing2','ing3']
        render(
            <Form ingr={ingr}/>
        );
        // screen.debug();
        
    });

    //getbyText returns an error if element not found

    it('string exists in the Form', () => {
        const ingr = ['ing1','ing2','ing3']
        render(
            <Form  ingr={ingr}/>
        );
        expect(screen.getByText(/Snack/))
    })

    it('role exists in the form',() =>{
        const ingr =['ing1','ing2','ing3']
        render(
            <Form  ingr={ingr}/>
        );
        expect(screen.getByRole('button', {name: "Add Ingredient"}))
    })

    //queryBy does NOT return an error if element is missing, can run checks on result

    it('string does not exist in the Form', () => {
        const ingr = ['ing1','ing2','ing3']
        render(
            <Form  ingr={ingr}/>
        );
        expect(screen.queryByText(/Plaid Octopus/)).toBeNull()
    })

    it('query all roles that exist in the form',() =>{
        const ingr =['ing1','ing2','ing3']
        render(
            <Form  ingr={ingr}/>
        );
        expect(screen.getAllByRole('button'))
    })

    // it(' change in input field triggers a response', () =>{

    //     fireEvent.change(screen.getByRole('textbox',{name: 'Include this ingredient'}), {
    //         target: {placeholder:'Javascript'},
    //     });
    // })
    });
