import { greet } from './greet.js'; // Import the greet function
import chalk from 'chalk'; // Import chalk for styled console output
import cowsay from 'cowsay'; // Import cowsay for ASCII art in console
import figlet from 'figlet'; // Import figlet for large ASCII text
import http from 'http'; // Import http module to create a server

// Create an HTTP server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Use figlet to create a large ASCII text
    figlet('Hello, Nthombi!', function (err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            res.end('Error occurred');
            return;
        }
        console.log(data);

        // Style the greet message using chalk and log it to the console
        const styledMessage = chalk.bgBlueBright.black(greet('Nthombi'));
        console.log(styledMessage);

        // Display the greet message using cowsay with a red background
        console.log(chalk.bgRedBright(cowsay.say({
            text: greet('Nthombi')
        })));

        // Print "Happy Monday, Tracy" to the console
        console.log("Happy Monday,");
        let name = "Tracy";
        console.log('Happy Monday, ' + name);

        // Send response to the client
        res.write(`${data}\n\n${styledMessage}\n\n${cowsay.say({ text: greet('Nthombi') })}`);
        res.end();
    });
});

// The port number to listen on
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});






//npm init es6
//create an index.js
//export the greet function from greet.js
//import the greet function in index.jssindex

//import chalk from 'chalk';
//import the greet module that is in the current folder
//import greet from 'greet./greet.js'
