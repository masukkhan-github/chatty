import dotenv from 'dotenv';
dotenv.config({ path: "D:/COMPUTER SCIENCE/RESUME-PROJECTS/CHAT-APP/BACKEND/.env" });   // ✅ load env first

import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import { connectDB } from '../lib/db.js';
import authRoutes from '../routes/auth.route.js';
import messageRoutes from '../routes/message.route.js';
import { app, server } from '../lib/socket.js';

// Debugging
console.log("PORT:", process.env.PORT);
console.log("MONGODB_URI:", process.env.MONGODB_URI);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});
