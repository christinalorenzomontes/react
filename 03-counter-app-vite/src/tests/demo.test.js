describe('Tests in <DemoComponent />', () => {

    test('This test shouldnt fail', ()=> {
        const message1 = 'Hi World';
    
        const message2 = message1.trim();
    
        expect( message1 ).toBe( message2 );
    });
});
