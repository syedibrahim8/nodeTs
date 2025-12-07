import axios from "axios";
import readline from "readline-sync"
import figlet from "figlet";
import chalk from "chalk";
import dotenv from "dotenv";
dotenv.config();

function header():void{
    console.clear()
    console.log(chalk.cyan(figlet.textSync("JOKES CLI",{horizontalLayout:"full"})));
}

async function jokes():Promise<void>{
    try {
        console.log("Press Enter for jokes...\nPress ctrl + c to exit...\n");
        readline.question("")
        const response = await axios.get(process.env.URL as string)
        console.log("---------------------------------------------");
        console.log(response.data[0].setup);
        console.log(response.data[0].punchline);
        console.log("---------------------------------------------\n");
    } catch (error) {
        console.log(error);
    }
}

async function main():Promise<void>{
    header();
    while(true){
        await jokes();
    }
}
main()