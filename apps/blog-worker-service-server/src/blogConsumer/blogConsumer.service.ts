import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BlogConsumerServiceBase } from "./base/blogConsumer.service.base";

@Injectable()
export class BlogConsumerService extends BlogConsumerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
