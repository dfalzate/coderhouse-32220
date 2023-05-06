import { stripePayment } from "../utils/stripePayment.js";
import * as ProductService from "../services/product.service.js";

export async function paymentIntent(id) {
  const selectedProduct = await ProductService.find(id);
  const paymentInfo = {
    amount: selectedProduct.price * 100,
    currency: "usd",
    metadata: {
      product: selectedProduct.name,
      address: JSON.stringify({
        street: "Calle",
        postalCode: "1234",
        phoneNumber: 1123456,
      }),
    },
  };
  const result = await stripePayment.createPaymentIntent(paymentInfo);
  console.log(result);
  return result;
}
