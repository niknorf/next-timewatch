import { NextApiHandler } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handler: NextApiHandler = async (request, response) => {
  if (request.method === "GET") {
    try {
      const query = await prisma.activity.findMany({
        include: { activityType: true },
      });

      const activities = query.map((activity) => ({
        ...activity,
        startedAt: activity.startedAt.toISOString(),
        endedAt: activity.endedAt.toISOString(),
      }));

      console.log(activities);

      response.status(200).json(activities);
    } catch (error) {
      response.status(403);
    }
  }

  if (request.method === "POST") {
  }
};

export default handler;
