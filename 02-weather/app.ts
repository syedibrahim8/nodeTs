import readline from "readline-sync";
import axios from "axios";
import figlet from "figlet";
import chalk from "chalk";
import dotenv from "dotenv";
dotenv.config();

console.clear();
console.log(chalk.cyanBright(figlet.textSync("WEATHER CLI",{horizontalLayout:"full"})));

async function apicall(): Promise<any> {
    try {
        const cityName:string = readline.question("Enter Your City Name: ");
        const apikey:any = process.env.APIKEY;
        const myServerurl:string = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}`;
        const response:any = await axios.get(myServerurl);
        let temp:number = ((response.data.main.temp)-273.15)

        const pressure:number = response.data.main.pressure;
        const humidity:number = response.data.main.humidity;
        const longitude:number = response.data.coord.lon;
        const latitude:number = response.data.coord.lat;
        const city:string = response.data.name
        const country:string = response.data.sys.country;
        const speed:number = response.data.wind.speed;
        const visibility:number = response.data.visibility / 1000

        console.log(`Location: ${city} | ${country}`)
        console.log(`Temp: ${temp.toFixed(1)} C`);
        console.log(`Pressure: ${pressure} hPa`);
        console.log(`Wind Speed: ${speed} km/h`);
        console.log(`Humidity: ${humidity} %`);
        console.log(`Visibility: ${visibility} km`);
        console.log(`Longitude: ${longitude}`);
        console.log(`Latitude: ${latitude}`);
    } catch (error) {
        console.log(error);
    }
}
apicall()
