import mongoose, { Schema, model, models } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "";

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable in .env.local");
}

type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

// eslint-disable-next-line no-var
declare global {
  var mongooseCache: MongooseCache | undefined;
}

const cached = global.mongooseCache ?? { conn: null, promise: null };
global.mongooseCache = cached;

export async function connectMongo() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: "rawdawg",
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}



const ReviewSchema = new Schema(
  {
    productId: { type: String, required: true, index: true },
    customerId: { type: String, required: true },
    customerName: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    review: { type: String, required: true },
  },
  { timestamps: true }
);

// Prevent duplicates per product per customer
ReviewSchema.index({ productId: 1, customerId: 1 }, { unique: true });

export const Review = models.Review || model("Review", ReviewSchema);
