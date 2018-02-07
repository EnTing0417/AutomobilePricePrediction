// npm
var express = require('express');
var request = require('request');

// routes
var router = express.Router();
router.post('/', (req, res) => {
    // web service details
    var webServiceUrl = "https://ussouthcentral.services.azureml.net/workspaces/4b873805148e46efa6a8fc87952e7aef/services/b7489f76e34f45a6b58ff408ac459e99/execute?api-version=2.0&format=swagger";
    var apiKey = "fcc/wHRQNXwnFzmatZHffnv+KwYNYJUoj/7jbPhcp3rT9zU60VO5imCC34dzDTvoqRK7mdZ05SuVktUSt156eQ==";

    // data
    var data = {
        "Inputs":{
            "input1":[
                {
                    'make': req.body.make,   
                    'body-style': req.body.body_style,
                    'wheel-base': req.body.wheel_base,
                    'engine-size': req.body.engine_size,   
                    'horsepower': req.body.horsepower,   
                    'peak-rpm': req.body.peak_rpm,
                    'highway-mpg': req.body.highway_mpg
                }
            ]
        },
        "GlobalParameters":{}
    }
    
    // request
    var options = {
         method: 'POST',
         uri: webServiceUrl ,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + apiKey 
        },
        body: JSON.stringify(data)
    }

    request(options, (error, response, body) => {
        res.send(body);
    });
});

module.exports = router;