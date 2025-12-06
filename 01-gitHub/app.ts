import axios from "axios";
import readline from "readline-sync";
import figlet from "figlet";
import chalk from "chalk";
console.clear();
console.log(chalk.cyan(figlet.textSync("GITHUB CLI",{horizontalLayout:"full"})));

async function github(): Promise<any> {
    try {
        const userName:string = readline.question("Enter Your GitHub Username: ");
        const output:any = await axios.get(`https://api.github.com/users/${userName}`);
        const username:string = output.data.login;
        const fullName:string = output.data.name;
        const company:string = output.data.company ;
        const location:string = output.data.location;
        const bio:string = output.data.bio;
        const publiRepos:number = output.data.public_repos;
        const followers:number = output.data.followers;
        const following:number = output.data.following; 
        const accCreate:any = output.data.created_at;

        console.log(`Username: ${username}`);
        console.log(`Fullname: ${fullName}`);
        console.log(`Comapany: ${company}`);
        console.log(`Location: ${location}`);
        console.log(`Bio: ${bio}`);
        console.log(`Public Repos: ${publiRepos}`);
        console.log(`Followers: ${followers}`);
        console.log(`Following: ${following}`);
        console.log(`Account created: ${accCreate}`);
    } catch (error) {
        console.log(error);
    }
}
github()