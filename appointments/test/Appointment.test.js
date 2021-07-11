import React from 'react'
import ReactDOM from 'react-dom'
import {Appointment} from '../src/Appointment'
describe('Appointment', () => {
    let container;
    let customer;
    const render = component =>  ReactDOM.render(component, container)
    beforeEach(() => {
        container = document.createElement('div')
    });
    it("Renders customer's first name", () => {
        customer = {firstName: 'Ashley'}
        render(<Appointment customer={customer} />)
        expect(container.textContent).toMatch('Ashley')
    });
    it("Renders another customer's first name", () => {
        customer = {firstName: 'Lila'}
        render(<Appointment customer={customer} />)
        document.body.appendChild(container)
        expect(container.textContent).toMatch('Lila')
    });
});