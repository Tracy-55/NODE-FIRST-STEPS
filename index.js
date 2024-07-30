import { greet } from './greet.js';
import chalk from 'chalk';
import cowsay from 'cowsay';
import figlet from 'figlet';

 


figlet('Hello, Nthombi!', function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
})



const styledMessage = chalk.bgBlueBright.black(greet('Nthombi'));
console.log(styledMessage)




console.log(chalk.bgBlue.bgRedBright(cowsay.say({
    text: greet('Nthombi')
})))


//npm init es6
//create an index.js
//export the greet function from greet.js
//import the greet function in index.jssindex

//import chalk from 'chalk';
//import the greet module that is in the current folder
//import greet from 'greet./greet.js'
