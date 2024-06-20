import { Router } from "express";
import { postSearch } from "@/controllers/search.controller";

const router = Router();

router.post("/", postSearch);

export const searchRouter = router;
