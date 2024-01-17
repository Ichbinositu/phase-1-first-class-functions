// describe("receivesAFunction(callback)", () => {____ it("receives a function and calls it"

function receivesAFunction(someFunction){
    someFunction();
}


// describe("returnsANamedFunction()", () => {
    // var fn;

    // before(() => {
    //   fn = returnsANamedFunction();
    // });

    // it("returns a function", () => {
    //   expect(fn).to.be.a("function");
    // });
    // it("returns a named function", () => {
    //   expect(fn.name).not.to.eql("");
    // });
//   });
function returnsANamedFunction(){
    const namedFunction = ()=>console.log("This is a named function");
    return namedFunction;
}

// describe("returnsAnAnonymousFunction()", () => {
    // var fn;

    // before(() => {
    //   fn = returnsAnAnonymousFunction();
    // });

    // it("returns a function", () => {
    //   expect(fn).to.be.a("function");
    // });

    // it("returns an anonymous function", () => {
    //   expect(fn.name).to.eql("");
    // });
//   });
// });
function returnsAnAnonymousFunction(){
    return (()=>console.log("This is an anonymous function"));
}