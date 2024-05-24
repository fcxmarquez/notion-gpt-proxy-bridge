import { Router } from "express";
import { getSearch } from "@/controllers/search.controller";

const router = Router();

router.get("/search", getSearch);

export const searchRouter = router;
