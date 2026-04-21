const { GoogleGenerativeAI } = require("@google/generative-ai");
const express = require("express");
const multer = require("multer");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// 配置图片上传存储 (Memory Storage)
const upload = multer({ storage: multer.memoryStorage() });

// 初始化 Google Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// 静态文件服务：让程序能找到 public 文件夹里的网页
app.use(express.static("public"));
app.use(express.json());

// 核心 AI 接口：接收稻米照片并返回诊断
app.post("/api/diagnose", upload.single("padiImage"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send("Please upload an image of the rice crop.");
        }

        // 使用 1.5 Flash 模型 (快速、多模态)
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = "You are an expert Malaysian agricultural scientist. Analyze this rice crop image. 1. Identify if there is a disease (e.g., Rice Blast, Bacterial Blight). 2. Provide a simple explanation. 3. Give localized treatment advice suitable for Malaysian farmers. Keep the tone helpful.";

        const imagePart = {
            inlineData: {
                data: req.file.buffer.toString("base64"),
                mimeType: req.file.mimetype,
            },
        };

        const result = await model.generateContent([prompt, imagePart]);
        const response = await result.response;
        res.json({ result: response.text() });

    } catch (error) {
        console.error("AI Error:", error);
        res.status(500).json({ error: "AI processing failed. Check your API Key." });
    }
});

app.listen(port, () => {
    console.log(`Padi-Plates Agent running at http://localhost:${port}`);
});
