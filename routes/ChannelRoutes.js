import { Router } from "express";
import { verifyToken } from "../middlewares/AuthMiddlewware.js";
import { createChannel, getUserChannel } from "../controllers/ChannelController.js";

const ChannelRoutes = Router();

ChannelRoutes.post("/create-channel", verifyToken,createChannel);
ChannelRoutes.get("/get-user-channels",verifyToken,getUserChannel)

export default ChannelRoutes;