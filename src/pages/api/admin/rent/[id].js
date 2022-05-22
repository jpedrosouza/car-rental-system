import { NextApiRequest, NextApiResponse } from "next";
import Prisma from "../../../../configs/prisma";

const prisma = Prisma.getInstance();

/**
 *
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */

export default async function handler(req, res) {
  if (req.method == "GET") {
    return await getHandler(req, res);
  } else if (req.method == "PUT") {
    return await putHandler(req, res);
  } else if (req.method == "DELETE") {
    return await deleteHandler(req, res);
  }
}

/**
 * GET Request handler for /api/admin/rent/:id
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */

async function getHandler(req, res) {
  const { id } = req.query;
  const rent = await prisma.rents.findUnique({
    where: {
      id: Number(id),
    },
  });

  return res.status(200).json(rent);
}

/**
 * PUT Request handler for /api/admin/rent/:id
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */

async function putHandler(req, res) {
  const { id } = req.query;
  const data = req.body;
  const rent = await prisma.rents.update({
    where: {
      id: Number(id),
    },
    data: data,
  });

  return res.status(200).json(rent);
}

/**
 * DELETE Request handler for /api/admin/rent/:id
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */

async function deleteHandler(req, res) {
  const { id } = req.query;

  await prisma.rents.delete({ where: { id: Number(id) } });

  return res.status(200).json({ message: "Rent Deleted" });
}
