// Promises object of dns

const {Resolver} = require('dns').promises;

const dnsPromises = new Resolver();

(async function() 
    {
    var address = await dnsPromises.getServers();

    console.log("Promises Address" , address);
    }
)();

// dnsPromises.lookupService(address , 80).then((res) => {
//     console.log(res.hostname, res.service);
// });



