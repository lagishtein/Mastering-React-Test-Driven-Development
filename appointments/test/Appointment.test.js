import React from 'react'
import ReactDOM from 'react-dom'
import {Appointment} from '../src/Appointment'
describe('Appointment', () => {
    it("Renders customer's first name", () => {
        const customer = {fistName: 'Ashley'}
        const component = <Appointment customer={customer} />;
        const container = document.createElement('div')
        ReactDOM.render(component, container)
        expect(container.textContent).toMatch('Ashley')
    });
    it("Renders another customer's first name", () => {
        const customer = {fistName: 'Ashley'}
        const component = <Appointment customer={customer} />;
        const container = document.createElement('div')
        ReactDOM.render(component, container)
        document.body.appendChild(container)
        expect(document.body.textContent).toMatch('Jordan')
    });
});