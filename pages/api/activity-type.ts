import { NextApiHandler } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handler: NextApiHandler = async (request, response) => {
  if (request.method === "GET") {
    try {
      const query = await prisma.activityType.findMany();
      response.status(200).json(query);
    } catch (error) {
      response.status(403);
    }
  }

  if (request.method === "POST") {
  }
};

export default handler;
