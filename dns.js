const dns = require('dns');

const website = "www.geeksforgeeks.org";

dns.lookup(website,(err, address,family) =>{
    console.log(website , address, family);
    dns.reverse(address, function (err, hostnames) {
        console.log('reverse for ' + address + ': ' + JSON.stringify(hostnames));
     });
    dns.lookupService(address, 443,
        (err, hostname, service) => {
        if(err){
            console.log(err.stack);
        }
        console.log(hostname, service);
    })
});
res = dns.getServers();
res.forEach(element => {
    console.log("Server : ", element); 
});

const option = {
    all: true
}

dns.lookup('geeksforgeeks.org',option, (err, address, family)=>{
    console.log(address, family);
})

const rrtype = 'MX'

dns.resolve('geeksforgeeks.org', rrtype, (err, 
    records) => console.log('records: %j', records));


