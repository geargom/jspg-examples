/*
 * Replace USER_NAME with yours
 * 
 * If variable fs is created in global context, you cannot create it again.
 * You must reload HTML page for running code again or remove line for require.
 * Another good practice is adding all the node requires in HTML File.
 */ 

const fs = require('fs');

function writeFileSync(filename, content)
{
    fs.writeFileSync(filename, content);
}

writeFileSync("C:\\Users\\USER_NAME\\Desktop\\jspgtesttxt.txt", "Hi! This is JS Page");