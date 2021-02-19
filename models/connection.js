var mongoose = require('mongoose');

var options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true,
    useUnifiedTopology : true
   }

   mongoose.connect(process.env.MONGODB,
        options,    
        function(err) {
            if (err){
                console.log(err);
            } else {
                console.log('conection BD ok');
            }
        }
   );

   module.exports = mongoose