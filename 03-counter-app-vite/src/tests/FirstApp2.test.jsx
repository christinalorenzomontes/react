import { render, screen } from "@testing-library/react";
import FirstApp from "../FirstApp";

describe('Pruebas en <FirstApp2 />', () => {

    const title = 'Hola, soy Chris';
    const subtitle = 'Soy un subtítulo';
    
    test('Debe hacer match con el snapshot', () => {
        const { container } = render( <FirstApp title={ title } /> )
        expect( container ).toMatchSnapshot();
    });

    test('Debe mostrar el mensaje "Hola, soy Chris"', () => {
        render( <FirstApp title={ title } /> );
        expect( screen.getByText(title) ).toBeTruthy();
    });

    test('Debe mostrar el título en un h1', () => {
        render( <FirstApp title={ title } /> );
        expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain( title );
    });

    test('Debe mostrar el subtítulo enviado por props', () => {
        const { getAllByText } = render( 
            <FirstApp
                title={ title } 
                subtitle={ subtitle }    
            />
        );

        expect( getAllByText(subtitle).length ).toBe(2);
    });

});