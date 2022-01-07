const mail = require('nodemailer');

var service = mail.createTransport({
    service: 'gmail',
    auth:{
        user: 'XXX',
        pass: 'YYYYY'
    }
});


var context = {
    from: "xxx",
    to:"yyyy",
    subject:"Hai Bindhya",
    // text: " Hai, This is from Node.js.",
    attachments: [{
        filename:'sample_eamil_pic.PNG',
        path:__dirname + '/sample_eamil_pic.PNG',
        cid: 'unique'
    }],
    html:'Embedded image: <img src="cid:unique"/>'
}

service.sendMail(context, (err, res)=>{
    if(err){
        console.log(err);
    }else{
        console.log(res);
    }
})