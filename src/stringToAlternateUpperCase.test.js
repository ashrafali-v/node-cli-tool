const {stringToAlternateUpperCase} = require('./stringToAlternateUpperCase');

describe('stringToAlternateUpperCase',()=>{
    it('should replace the string with alternate capital letter',()=>{
        const output = stringToAlternateUpperCase("hello world");
        expect(output).toEqual("hElLo wOrLd");
    });
});