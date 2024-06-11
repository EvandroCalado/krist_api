/**
 * order controller
 */

import { factories } from "@strapi/strapi";
import stripe from "stripe";

const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY);

export default factories.createCoreController(
  "api::order.order",
  ({ strapi }) => ({
    async create(ctx) {
      const { amount, user, products } = ctx.request.body;

      await strapi.service("api::order.order").create({
        data: {
          amount,
          user,
          products,
        },
      });

      const paymentIntent = await stripeInstance.paymentIntents.create({
        amount,
        currency: "brl",
      });

      ctx.send({
        clientSecret: paymentIntent.client_secret,
      });

      try {
      } catch (error) {
        if (error instanceof stripe.errors.StripeError) {
          ctx.send(error);
        }
      }
    },
  })
);
