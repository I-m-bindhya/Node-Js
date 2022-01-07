// Node.js program to demonstrate the
// Buffer.subarray() method

// Allocating buffer
var buf = Buffer.from('GeeksforGeeks', 'ascii');

// Printing original buffer
console.log("Original buffer is: " + buf);

// Cropping buffer, here starting index
// is 5 and ending endex is 10
cropped_buf = buf.subarray(5, 10);

// Printing cropped buffer
console.log("Cropped buffer is: " + cropped_buf);

// Modifying cropped buffer
cropped_buf[0] = 70; // F
cropped_buf[1] = 79; // O
cropped_buf[2] = 82; // R

// Printing cropped buffer
console.log("Cropped buffer after modification is: " + cropped_buf);

// Printing original buffer
console.log("Original buffer after modification is: " + buf);


console.log(buf.readIntBE(0,3).toString(8));
// Node.js program to demonstrate the
// Buffer.write() method

// Create a buffer
buf = Buffer.allocUnsafe(100);

const len = buf.write('GeeksforGeeks', 2, 7, 'utf8');

console.log(buf.toString());

