
import express from "express";
import "dotenv/config";

const app = express();
app.use(express.json());

const { default: brochureHandler } = await import("./api/brochure.ts");
const { default: contactHandler } = await import("./api/contact.ts");

app.post("/api/brochure", (req, res) => brochureHandler(req, res));
app.post("/api/contact", (req, res) => contactHandler(req, res));

app.listen(3001, () => console.log("✅ API running on http://localhost:3001"));