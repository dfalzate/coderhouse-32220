import Stripe from "stripe";
import config from "../config/config.js";

class StripePayment {
  constructor() {
    this.stripe = new Stripe(config.secret_key_stripe);
  }

  async createPaymentIntent(data) {
    const paymentIntent = await this.stripe.paymentIntents.create(data);
    return paymentIntent;
  }
}

export const stripePayment = new StripePayment();
