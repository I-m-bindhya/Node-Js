// Node.js program to demonstrate the
// cipher.final() method

// Importing crypto module
const crypto = require('crypto');

// Creating and initializing algorithm and password
var algorithm = 'aes-192-cbc';
var password = 'Password used to generate key';

// Getting key for the cipher object
var key = crypto.scryptSync(password, 'salt', 24);

// Creating and initializg the static iv
var iv = Buffer.alloc(16, 0);

// Creating and initializing the cipher object
const cipher = crypto.createCipheriv(algorithm, key, iv);

// Getting buffer value
// by using final() method
// let value = cipher.final('hex');

// Display the result
// console.log("buffer :- " + value);


let encrypt = cipher.update(
    'some clear text data', 'utf8', 'hex');

encrypt += cipher.final('hex');

console.log("encrypt " , encrypt);


// Get ciphers

// let allCipher = crypto.getCiphers()
// console.log(allCipher);


// DECRYPT 

// Node.js program to demonstrate the	
// crypto.createDecipheriv() method

// Includes crypto module

// Difining algorithm

// Defining key
var key = crypto.randomBytes(32);

// Defining iv
var iv = crypto.randomBytes(16);

// An encrypt function
function encrypting(text) {

// Creating Cipheriv with its parameter
let cipher =
	crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);

// Updating text
let encrypted = cipher.update(text);

// Using concatenation
encrypted = Buffer.concat([encrypted, cipher.final()]);

// Returning iv and encrypted data
return { iv: iv.toString('hex'),
	encryptedData: encrypted.toString('hex') };
}

// A decrypt function
function decrypt(text) {

let iv = Buffer.from(text.iv, 'hex');
let encryptedText =
	Buffer.from(text.encryptedData, 'hex');

// Creating Decipher
let decipher = crypto.createDecipheriv(
		'aes-256-cbc', Buffer.from(key), iv);

// Updating encrypted text
let decrypted = decipher.update(encryptedText);
decrypted = Buffer.concat([decrypted, decipher.final()]);

// returns data after decryption
return decrypted.toString();
}

// Encrypts output
var output = encrypting("GeeksforGeeks");
console.log(output);

// Decrypts output
console.log(decrypt(output));




// Decryption 

const dKey = crypto.scryptSync("Bindhya", "salt" , 24);

var encry = crypto.createCipheriv(algorithm , dKey, Buffer.alloc(16,0) );

encry += encry.final("hex");

console.log("encryption ", encry);

const ddKey = crypto.randomBytes(24);
encryptedText =
	Buffer.from(encry, 'hex');

var dcrpt = crypto.createDecipheriv(algorithm, Buffer.from(ddKey, "hex"), Buffer.from(iv.toString('hex'),"hex") );

let ddecrypted = dcrpt.update(encryptedText, 'hex', 'utf8');

// ddecrypted = Buffer.concat([ddecrypted, dcrpt.final('utf8')]);

console.log("decryption " , ddecrypted.toString())

const diffiehellmangrp = crypto.getDiffieHellman('modp14');
  
// Prints DiffieHellmanGroup key exchange object
console.log("Key exchange object : ", diffiehellmangrp);


// crypto.pbkdf2( password, salt, iterations, keylen, digest, callback )

crypto.pbkdf2('secret', 'salt', 100000, 64,
         'sha512', (err, derivedKey) => {
  
  if (err) throw err;
  
  // Prints derivedKey
  console.log("PBKDF2 ",derivedKey.toString('hex'));
});


// crypto.createHash( algorithm, options )

const secret = 'Hi';
  
// Calling createHash method
const hash = crypto.createHash('sha256', secret)
                     
                   // updating data
                   .update('How are you?')
  
                   // Encoding to be used
                   .digest('hex');
  
// Displays output
console.log("HASH ", hash);

const hmac = crypto.createHmac('sha256', secret)
                     
                   // updating data
                   .update('How are you?')
  
                   // Encoding to be used
                   .digest('hex');
  
// Displays output
console.log("HMAC " , hmac);



