import { Router } from "express";
import * as PaymentController from "../controllers/payment.controller.js";

const router = Router();

router.post("/payment-intents", PaymentController.paymentIntent);

export default router;
