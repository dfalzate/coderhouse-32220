import * as PaymentService from "../services/payment.service.js";

export async function paymentIntent(req, res) {
  try {
    const { id } = req.query;
    const response = await PaymentService.paymentIntent(Number(id));
    res.send({ status: "success", payload: response });
  } catch (error) {
    res.status(400).send(error.message);
  }
}
