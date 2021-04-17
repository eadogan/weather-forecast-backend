const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const chalk = require('chalk')

const address = process.argv[2]

if(!address) {
    console.log(chalk.red.inverse('Please provide an address'))
} else {
    geocode(address, (error, {latitude, longitude, location}) => { 
        if(error) {
            return console.log(error)
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if(error) {
                return console.log(error)
            }
            console.log(chalk.inverse(location))
            console.log(chalk.green(forecastData))
        })
    })
}

