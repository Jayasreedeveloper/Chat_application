import{Router} from"express";
import{signup} from"../controllers/Authcontroller.js";
import { login } from "../controllers/Authcontroller.js";
import { getUserInfo } from "../controllers/Authcontroller.js";


const authRoutes=Router();

authRoutes.post("/signup",signup);
authRoutes.post("/login",login);
authRoutes.get('user-info',getUserInfo)

export default authRoutes;