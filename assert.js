const assert = require("assert");

try{
    assert(3==5);
} catch{
    console.log("Error in assertion");
}


  
// Function call
try {
    assert.deepStrictEqual({ a: '5' }, { a: '5' });
    console.log("No Error in deep strict equal");
} catch(error) {
    console.log("Error: ", error)
}

try{
    assert.doesNotThrow(()=>{ throw new TypeError('Wrong value')},/abcd/,"Whoops");
    cosole.log("INSIDE TRY")
}catch(error){
    console.log("Erroringgg:", error)
}

// Function call
(async () => {
    assert.strictEqual(1,1)
    await assert.rejects(
      async () => {
        throw new TypeError('Wrong value');
      },
      (err) => {
        assert.strictEqual(err.name, 'TypeError');
        assert.strictEqual(err.message, 'Wrong value');
        return true;
      }
    ).then(() => {
        console.log("Reject Demo Works Successfully")
    });
})();