import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyBOUpifEfGA6baP8wzA_T8XY0oFZc-rTw0"; // (Replace if expired)

const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-pro-latest"
});

export { model };
