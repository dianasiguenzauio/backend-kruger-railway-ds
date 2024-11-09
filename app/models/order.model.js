import mongoose from "mongoose";

//Objeto que representa el esquema de la orden
//{
//    user: "idDelUser",
//    products: [
//        {
//            id: "idDelProducto que estamos comprando",
//            quantity: "cantidad del producto que estamos comprando"
//        },
//
//        {
//            id: "idDelProducto que estamos comprando",
//            quantity: "cantidad del producto que estamos comprando"
//        },

//    ],

//    comments: [
//        "idDelComentario", "idDelComentario"
//    ],
//    totalPrice: "precioTotal,"
//}
//De alguna manera puedo traer o poblar las referencias con la información de los otros modelos
//user:{
//        username:"admin",
//        email: "user.com",
//        role: "admin"
//    },
//products: [
//        {
//            id: "idDelProducto que estamos comprando",
//            quantity: "cantidad del producto que estamos comprando"
//        },
//
//        {
//            id: "idDelProducto que estamos comprando",
//            quantity: "cantidad del producto que estamos comprando"
//        },

//    ],

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comments",
    },
  ],
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: [1, "A product must have a positive quantity"],
      },
    },
  ],
  totalPrice: {
    type: Number,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Order = mongoose.model("orders", orderSchema);
