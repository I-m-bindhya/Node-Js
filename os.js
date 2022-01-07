const os =require('os');

console.log(os.arch());
console.log(os.release());
console.log(os.type(), os.freemem(), os.platform(), os.getPriority());
console.log(JSON.stringify(os.EOL))

// Node.js program to demonstrate the
// os.freemem() method

// Printing os.freemem() value
var free_memory = os.freemem();
var free_mem_in_kb = free_memory/1024;
var free_mem_in_mb = free_mem_in_kb/1024;
var free_mem_in_gb = free_mem_in_mb/1024;

free_mem_in_kb = Math.floor(free_mem_in_kb);
free_mem_in_mb = Math.floor(free_mem_in_mb);
free_mem_in_gb = Math.floor(free_mem_in_gb);

free_mem_in_mb = free_mem_in_mb%1024;
free_mem_in_kb = free_mem_in_kb%1024;
free_memory = free_memory%1024;

console.log("Free memory: " + free_mem_in_gb + "GB "
	+ free_mem_in_mb + "MB " + free_mem_in_kb
	+ "KB and " + free_memory + "Bytes");
