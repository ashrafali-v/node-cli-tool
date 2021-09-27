const {stringToUpperCase} = require('./stringToUpperCase');

describe(stringToUpperCase,()=>{
    it('should replace the string to upper case',()=>{
        var output = stringToUpperCase('hello world');
        expect(output).toEqual('HELLO WORLD');
    });
});