import { render, screen } from "@testing-library/react";
import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp />', () => {
    
    const initialValue= 5;

    test('Debe hacer match con el snapshot', () => {
        
        const { container } = render(
            <CounterApp 
                value={ initialValue }
            /> 
        )

        expect( container ).toMatchSnapshot();
    });

    test('Debe mostrar el valor inicial de 100 <CounterApp value={100}>', () => {
        
        render( <CounterApp value={ 100 } /> );
        expect( screen.getByText(100) ).toBeTruthy();
         // expect( screen.getByRole('heading',{ level: 2}).innerHTML ).toContain('100')
    });

});