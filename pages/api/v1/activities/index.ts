import { NextApiHandler } from "next";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handler: NextApiHandler = async (request, response) => {
  if (request.method === "GET") {
    try {
      const query = await prisma.activity.findMany({
        include: { activityType: true },
      });

      response.status(200).json(query);
    } catch (error) {
      response.status(403);
    }
  }

  if (request.method === "POST") {
    try {
      const params = JSON.parse(request.body);
      const activity: Prisma.ActivityCreateInput = {
        title: params.title,
        activityType: {
          connect: {
            id: 1,
          },
        },
      };

      const query = await prisma.activity.create({
        data: activity,
      });

      response.status(201).json(query);
    } catch (error) {
      response.status(403);
    }
  }

  if (request.method === "PATCH") {
    try {
      const params = JSON.parse(request.body);
      const activity: Prisma.ActivityUpdateInput = {
        endedAt: params.endedAt,
      };

      const query = await prisma.activity.update({
        where: {
          id: params.id,
        },
        data: activity,
      });

      response.status(201).json(query);
    } catch (error) {
      response.status(403);
    }
  }
};

export default handler;
