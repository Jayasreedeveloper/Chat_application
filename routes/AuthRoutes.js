import{Router} from"express";
import{signup} from"../controllers/AuthControllers.js";

const authRoutes=Routes();

authRoutes.post("/signup",signup);

export default authRoutes;