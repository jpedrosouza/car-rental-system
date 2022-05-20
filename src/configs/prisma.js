import { PrismaClient } from "@prisma/client";

export default class Prisma {
  static instance;

  constructor() {}

  /**
   *
   * @returns {PrismaClient}
   */

  static getInstance() {
    if (!Prisma.instance) {
      Prisma.instance = new PrismaClient();
    }

    return Prisma.instance;
  }
}
