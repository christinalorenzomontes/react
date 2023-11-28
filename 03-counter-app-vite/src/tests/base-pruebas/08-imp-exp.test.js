import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {
    
    test('getHeroeById debe retornar un héroe por ID', () => {
        
        const id = 1;
        const hero = getHeroeById( id );
        
        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    })

    test('getHeroeById debe retornar undefined si no existe el id', () => {
        
        const id = 100;
        const hero = getHeroeById( id );
        
        expect( hero ).toBeFalsy();
    })

    // Tarea 
    test('getHeroesByOwner debe retornar los héroes según la editorial', () => {
        
        const ownerName = 'DC';
        const heroByOwner = getHeroesByOwner( ownerName );
        
        expect( heroByOwner.length ).toBe( 3 );
        expect( heroByOwner ).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' },
        ]);

    })
})