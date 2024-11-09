import express from "express";
import {
  createOrder,
  findOrdersByUserId,
  addCommentToOrder,
} from "../controllers/order.controller.js";

const router = express.Router();

router.post("/", createOrder);
//router.get("/:userId", findOrdersByUserId);
router.get("/user/:userId", findOrdersByUserId);

//Servicio para agregar comentarios a una orden
//Primero necesito la orden a la cual vamos a agregar los comentarios -> id de la orden
//que vamos a recibir un path param
router.post("/:orderId/comment", addCommentToOrder);

export default router;
