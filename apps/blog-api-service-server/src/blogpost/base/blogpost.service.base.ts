/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Blogpost as PrismaBlogpost } from "@prisma/client";
import { BlogpostCreateInput } from "./BlogpostCreateInput";
import { BlogpostOutput } from "../BlogpostOutput";

export class BlogpostServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.BlogpostCountArgs, "select">): Promise<number> {
    return this.prisma.blogpost.count(args);
  }

  async blogposts<T extends Prisma.BlogpostFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.BlogpostFindManyArgs>
  ): Promise<PrismaBlogpost[]> {
    return this.prisma.blogpost.findMany<Prisma.BlogpostFindManyArgs>(args);
  }
  async blogpost<T extends Prisma.BlogpostFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.BlogpostFindUniqueArgs>
  ): Promise<PrismaBlogpost | null> {
    return this.prisma.blogpost.findUnique(args);
  }
  async createBlogpost<T extends Prisma.BlogpostCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BlogpostCreateArgs>
  ): Promise<PrismaBlogpost> {
    return this.prisma.blogpost.create<T>(args);
  }
  async updateBlogpost<T extends Prisma.BlogpostUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BlogpostUpdateArgs>
  ): Promise<PrismaBlogpost> {
    return this.prisma.blogpost.update<T>(args);
  }
  async deleteBlogpost<T extends Prisma.BlogpostDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.BlogpostDeleteArgs>
  ): Promise<PrismaBlogpost> {
    return this.prisma.blogpost.delete(args);
  }
  async CreateBlogpostCustom(
    args: BlogpostCreateInput
  ): Promise<BlogpostOutput> {
    throw new Error("Not implemented");
  }
  async CreateBlogpostV2(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
