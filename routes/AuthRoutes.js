import{Router} from"express";
import{signup} from"../controllers/AuthControllers.js";

const authRoutes=Routes();

authRoutes.post("/signup",signup);
authRoutes.post("/login",login);

export default authRoutes;
