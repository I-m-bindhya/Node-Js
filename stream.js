const stream = require("stream");

const writable = new stream.Writable(
    {
        objectMode: true,
        write: function(chunk, encoding, next){
            console.log(chunk.toString());
            next();
        }
    }
);

writable.write("BINDHYA");

writable.cork();

writable.write("Hello");

writable.end("THIS IS THE END")

writable.on('finish', () => {
    console.log('All writes are now complete.');
  });

console.log(writable.writableLength, writable.writableObjectMode);
// writable.destroy();

