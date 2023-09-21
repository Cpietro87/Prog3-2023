import { titleCase } from "../components/ProfileCard"

describe('funcion dentro del componte ProfileCard',() =>{
    describe('titleCase',()=>{

        test('debe retornar un string',() => {
            const result = titleCase('Un text');
            expect(typeof result).toBe('string');
        });


        test('debe retornar texto tranformado',() => {
            const result = titleCase('en un lugar');
            expect(result).toBe('En Un Lugar');
        });

        test('string vacio debe retornar un string vacio',() => {
            const result = titleCase('');
            expect(result).toBe('');
        })
    })
})