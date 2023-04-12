//program 1

/*
console.log(a+b);
console.log('This line is never reached');
*/

//output: ReferenceError: a is not defined

//-----------------------------------------------

//program 2

/* throw new Referenceerror */

//output: ReferenceError: Referenceerror is not defined

//------------------------------------------------

//program 3

/*try{
    console.log(a + b);
}catch(err){
    console.log(err);
    console.log('There was an error');
    console.log('The error was saved in the error log');
}
console.log('My program does not stop');
*/

/*output: 
ReferenceError: a is not defined
    at Object.<anonymous> (c:\Kiruthika\Javascript\JavascriptBasicsMeta\throwtrycatch.js:20:17)
    at Module._compile (node:internal/modules/cjs/loader:1105:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
    at node:internal/main/run_main_module:17:47
There was an error
The error was saved in the error log
My program does not stop */

//-----------------------------------------------------------------

//program 4

/*try {
    throw new ReferenceError();
} catch(err){
    console.log(err);
    console.log('there was a reference error');
}
console.log('My  program does not stop');*/

//output
/* ReferenceError
    at Object.<anonymous> (c:\Kiruthika\Javascript\JavascriptBasicsMeta\throwtrycatch.js:50:11)
    at Module._compile (node:internal/modules/cjs/loader:1105:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
    at node:internal/main/run_main_module:17:47
there was a reference error
My  program does not stop */

//------------------------------------------------------------

var obj ={
    'key1':"hi"
}
console.log(obj1.name);

//---------------------------------------------------------------

//Syntax error
/*try {
    console.log('hello)
    } catch(e) {
    console.log('caught')
    }*/

//----------------------------------------------------------