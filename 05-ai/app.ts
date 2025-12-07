import Groq from "groq-sdk";
import dotenv from "dotenv";
import readline from "readline-sync";
dotenv.config();

const apiKey = process.env.APIKEY as string;

const groq = new Groq({ apiKey });

async function main(): Promise<void> {
  const question: string = readline.question("Drop your thoughts: ");
  try {
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: question,
        },
      ],
      model: "llama-3.3-70b-versatile",
    });
    console.log(completion.choices[0]?.message?.content);
  } catch (error) {
    console.error("Error:", error);
  }
}
main();
