import { render } from "@testing-library/react";
import FirstApp from "../FirstApp";

describe('Pruebas en <FirstApp />', () => {
    
    test('Debe hacer match con el snapshot', () => {
        
        const title = 'Hola, soy Chris';

        render( <FirstApp title={ title } /> )

    });

});