const mongoose = require("mongoose"),
    Campground = require("./models/campground");

    
    
    function seedDB(){
        Campground.remove({}, function (err) {
            if (err) {
                console.log(err);
            }
            console.log('removed campgrounds!');
        });
}