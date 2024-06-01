// import { NextApiRequest, NextApiResponse } from "next";
// import prisma from "@/libs/prismadb";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method !== "GET") {
//     return res.status(405).end();
//   }

//   try {
//     const users = await prisma.user.findMany({
//       orderBy: {
//         createdAt: "desc",
//       },
//     });

//     return res.status(200).json(users);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).end();
//   }
// }

import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/libs/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.status(200).json(users);
  } catch (error: any) {
    // Explicitly type error as `any` or better, a specific error type if known
    console.error("Error fetching users:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
