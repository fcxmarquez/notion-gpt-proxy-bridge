import { Router } from "express";
import { getSearch } from "@/controllers/search.controller";

const router = Router();

router.get("/", getSearch);

export const searchRouter = router;
