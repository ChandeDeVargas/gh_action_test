const HelloWorld = require("./index");

test("Debe traer de vuelta 'Hello World'",() =>{
    expect(HelloWorld()).toBe("Hello World");
});