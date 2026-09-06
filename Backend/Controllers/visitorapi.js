import { MongoClient } from "mongodb";

const databaseName = process.env.MONGODB_DB || "portfolio";
let clientPromise;

const getVisitorsCollection = async () => {
  const configuredUri = process.env.MONGODB_URI || process.env.MONGO_URI;
  const mongoUri = configuredUri?.trim().replace(/^['"]|['"]$/g, "");

  if (!mongoUri) {
    throw new Error("MONGODB_URI or MONGO_URI is not configured");
  }

  if (!clientPromise) {
    const client = new MongoClient(mongoUri, {
      serverSelectionTimeoutMS: 10000,
    });
    clientPromise = client.connect().catch((error) => {
      clientPromise = undefined;
      throw error;
    });
  }

  const client = await clientPromise;
  const visitors = client.db(databaseName).collection("visitors");
  await visitors.createIndex({ visitorId: 1 }, { unique: true });
  return visitors;
};

export const saveVisitor = async (req, res) => {
  const { visitorId, name, place } = req.body;

  if (
    typeof visitorId !== "string" ||
    typeof name !== "string" ||
    typeof place !== "string" ||
    name.trim().length < 2 ||
    place.trim().length < 2
  ) {
    return res.status(400).json({
      message: "Please provide a valid name and place.",
    });
  }

  try {
    const visitors = await getVisitorsCollection();

    await visitors.updateOne(
      { visitorId },
      {
        $set: {
          name: name.trim(),
          place: place.trim(),
          updatedAt: new Date(),
        },
        $setOnInsert: {
          visitorId,
          createdAt: new Date(),
        },
      },
      { upsert: true }
    );

    return res.status(201).json({ saved: true });
  } catch (error) {
    console.error("Unable to save visitor:", error.name, error.message);
    return res.status(503).json({
      message: "Visitor storage is temporarily unavailable.",
    });
  }
};