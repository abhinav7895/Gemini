import { configDotenv } from "dotenv";
configDotenv();
import runChat from "./gemini.config.js";
import app from "./app.js";

app.get("/", (req, res) => {
    return res.render("home.ejs");
});

app.post("/prompt", async (req, res) => {
    try {
        const prompt = req.body.prompt;
        const response = await runChat(prompt);
        const result = response.text();
        return res.render("home", { result: result, prompt : prompt });
    } catch (error) {
        return res.json({message : error.message});
    }
})

app.listen(8000, () => console.log("Server created at PORT " + 8000))