const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.activityType.createMany({
    data: [
      {
        name: "Studies",
      },
      {
        name: "Work",
      },
      {
        name: "Fun",
      },
      {
        name: "Fitness",
      },
      {
        name: "Art",
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
