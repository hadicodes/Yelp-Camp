const mongoose = require("mongoose"),
    Campground = require("./models/campground");

var data = [{
        name: "Cloud's Rest",
        image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg",
        description: "A nice campground with soft ground near the clouds."
    },
    {
        name: "Desert Mesa",
        image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg",
        description: "Dry barren desert surrounds this campground."
    },
    {
        name: "Cloud's Rest",
        image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg",
        description: "A nice campground with soft ground near the clouds."
    }
]


function seedDB() {
    // Removes all campgrounds
    Campground.remove({}, function (err) {
        if (err) {
            console.log(err);
        }
        console.log('removed campgrounds!');
    });
    // Adds in a few campgrounds
    Cam
}

module.exports = seedDB;