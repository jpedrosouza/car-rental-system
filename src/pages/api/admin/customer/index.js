import { NextApiRequest, NextApiResponse } from "next";
import Prisma from "../../../../configs/prisma";

const prisma = Prisma.getInstance();

/**
 * Request handler for /api/admin/customer
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */

export default async function handler(req, res) {
  if (req.method == "GET") {
    return await getHandler(req, res);
  } else if (req.method == "POST") {
    return await postHandler(req, res);
  }
}

/**
 * Get all customers in database.
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 * @returns Array of customers.
 */

async function getHandler(req, res) {
  const customers = await prisma.customers.findMany();

  return res.status(200).json(customers);
}

/**
 * Register customer in database.
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 * @returns Created customer.
 */

async function postHandler(req, res) {
  const data = req.body;
  const customer = await prisma.customers.create({
    data,
  });

  return res.status(200).json(customer);
}
