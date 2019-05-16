var cars = [ //array of car objects
    {
        "make": "Ford",
        "model": "GT",
        "cylinders": 8
    },
    {
        "make": "Ferrari",
        "model": "Enzo Ferrari",
        "cylinders": 12
    }, 
    {
        "make": "Aston Martin",
        "model": "DB9",
        "cylinders": 12
    }
]

function lookUp(make) {
    for(var i = 0; i < cars.length; i++) {
        if(cars[i].make === make) {
            return cars[i].model;
        }
    }

}
lookUp("Ferrari");