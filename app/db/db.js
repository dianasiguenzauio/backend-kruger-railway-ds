import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://dsiguenza:Krugerschool2024@krugerbackendap.a79ej.mongodb.net/Products?retryWrites=true&w=majority&appName=KrugerBackendAP"
    );
    console.log("Conexión a la base de datos exitosa");
  } catch (error) {
    console.error("Error al conectar a la base de datos", error);
  }
};
