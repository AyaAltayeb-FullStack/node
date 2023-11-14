-  node -v   // to show the node version 
-  npm -v    // to show the node package manager(npm) version 
### hello-world.js
  `console.log("Hello World")`

To Run: node ./hello-world.js
Insights: The "Hello World" message projected to the console


### hello-world-file.js
// Import the fs package: a package that enables working with file systems through multiple bindings and functions
const fs = require('
fs.writeFile("hello.txt", "hello world!", (err)=>{
  console.log("Done!)
})

To Run: node ./hello-world.js
Insights: The "Hello" message projected to the console
and new file calles hello.txt is created

### fibonacci.js
function generateFibonacci(howmany){
  let x = 1;
  let y = 1;
  let sequence = [x,y];
  Array(howMany).fill().forEach(()=>{
    let sum = x+y
    sequence.push(sum)
    x = y
    y = sum
  })
  return sequence
}

console.log(generateFibonacci(100))
  
