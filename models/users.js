const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    role: {
        type: String,
        require: true
    },
    mail: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    cedula: {
        type: String,
        require: false
    },
    name: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    birthdate: {
        type: Date,
        require: true
    },
    zone: {
        type: String,
        require: false
    },
    cellphone: {
        type: String,
        require: true
    },available: {
        type: Boolean,
        require: false
    },
    workingStatus: {
        type: Boolean,
        require: false
    },
    vehiculo: {
        type: String,
        require: false
    },
    licencia: {
        type: String,
        require: false
    },
    carnetCirculacion: {
        type: String,
        require: false
    },
    seguroVehiculo: {
        type: String,
        require: false
    },
    rating:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Rate'
        }
    ]
    
}, { timestamps: true} );

module.exports = mongoose.model('Users', userSchema);