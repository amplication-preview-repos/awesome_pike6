import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BlogpostServiceBase } from "./base/blogpost.service.base";

@Injectable()
export class BlogpostService extends BlogpostServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
