import { render } from "@testing-library/react";
import FirstApp from "../FirstApp";

describe('Pruebas en <FirstApp />', () => {
    
    // test('Debe hacer match con el snapshot', () => {
        
    //     const title = 'Hola, soy Chris';
    //     const { container } = render( <FirstApp title={ title } /> )

    //     expect( container ).toMatchSnapshot();u
    // });

    test('debe mostrar el título en un h1', () => {

        const title = 'Hola, soy Chris';
        const { container, getByText, getByTestId } = render( <FirstApp title={ title} />);

        expect( getByText (title) ).toBeTruthy();
        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain( title );
        expect( getByTestId('test-title').innerHTML ).toBe(title);

    });

    test('debe mostrar el subtítulo enviado por props', () => {

        const title = 'Hola, soy Chris';
        const subtitle = 'Soy un subtítulo sabrosón'
        const { getAllByText } = render( 
            <FirstApp
                title={ title} 
                subtitle={ subtitle }    
            />
        );

        expect( getAllByText(subtitle).length ).toBe(2);

    });

});