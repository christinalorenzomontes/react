import { fireEvent, render, screen } from "@testing-library/react";
import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp />', () => {
    
    const initialValue= 10;

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

    test('Debe incrementar con el +1', () => {
        
        render(
            <CounterApp 
                value={ initialValue }
            /> 
        )
        fireEvent.click( screen.getByText('+1') )
        expect(screen.getByText('11') ).toBeTruthy();
    });

    test('Debe reducirse con el -1', () => {
        
        render(
            <CounterApp 
                value={ initialValue }
            /> 
        )
        fireEvent.click( screen.getByText('-1') )
        expect(screen.getByText('9') ).toBeTruthy();
    });

    test('Debe resetearse', () => {
        
        render(
            <CounterApp 
                value={ initialValue }
            /> 
        )
        // fireEvent.click( screen.getByText('Reset') )
        // expect(screen.getByText('10') ).toBeTruthy();
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
    });

});