const mongoose = require('mongoose');

module.exports = {
    connect : () => {
        mongoose.connect("mongodb://localhost:27017/projeto_bar");
    },
    disconnect : () => {
        mongoose.disconnect();
    }
}