import figlet from "figlet";
import chalk from "chalk";
import readline from "readline-sync";

function header():void{
console.log(chalk.cyan(figlet.textSync("SHAYARI CLI",{horizontalLayout:"full"})));
}

function shayari():any{
    try {
        let sher:string[]=[
            "Log apni Baaton se aur Rawaiyo se maar dete hai\nPhir kehte hai apna khayal rakho",
            "Husn khuda ne diya, Fida hum hogaye\nNaseeeb kisi aur ka tha barbaad hum hogaye",
            "Chupke se bheja tha gulaab unko\nKhusbo ne saare shaher mein tamasha banadiya",
            "Aaj sharab rehnedo\nMohtarma khud aayi hui hai",
            "Ab to jannath bi ameer bete ko milti hogi\nAj kal ke gareeb bete apne maa baap ko khush nahi karpaate",
            "Phool hai gulab ka, Nasha hai sharab ka\nAankhein to dikhri hai, kya faida naqab ka",
            "Mein tabah hu tere ishq mein, tujhe dusron ka khayal hai\nKuch mere maslon par bhi kabhi gaur kar,meri toh puri zindagi ka sawal hai",
            "Hazaar gham hai khulasa kon kare\nMuskura deta hu abb tamasha kon kare"
        ]
        console.log("Press Irshad(enter) for shayari...\nPress ctrl + c to exit...");
        readline.question("")
        const index:number = Math.floor(Math.random()*(sher.length - 0) + 0);
        console.log("---------------------------------------------");
        console.log(sher[index]);
        console.log("---------------------------------------------\n");
    } catch (error) {
        console.log(error);
    }
}

function main():any{
    header();
    while(true){
    shayari();
}
}
main();