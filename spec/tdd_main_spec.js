var lib_tdd_fabonacci = require('../lib/tdd_fabonacci');

describe("fabonacci",()=>{
    it("should return 1 when input 1", ()=> {
        expect(lib_tdd_fabonacci.fabonacci(1)).toBe(1);
    })

    it("should return 1 when input 2", ()=> {
        expect(lib_tdd_fabonacci.fabonacci(2)).toBe(1);
    })

    it("should return 2 when input 3", ()=> {
        expect(lib_tdd_fabonacci.fabonacci(3)).toBe(2);
    })
})