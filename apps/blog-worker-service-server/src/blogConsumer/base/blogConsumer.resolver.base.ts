/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { BlogConsumer } from "./BlogConsumer";
import { BlogConsumerCountArgs } from "./BlogConsumerCountArgs";
import { BlogConsumerFindManyArgs } from "./BlogConsumerFindManyArgs";
import { BlogConsumerFindUniqueArgs } from "./BlogConsumerFindUniqueArgs";
import { CreateBlogConsumerArgs } from "./CreateBlogConsumerArgs";
import { UpdateBlogConsumerArgs } from "./UpdateBlogConsumerArgs";
import { DeleteBlogConsumerArgs } from "./DeleteBlogConsumerArgs";
import { BlogConsumerProcessInput } from "../BlogConsumerProcessInput";
import { BlogConsumerOutput } from "../BlogConsumerOutput";
import { BlogConsumerService } from "../blogConsumer.service";
@graphql.Resolver(() => BlogConsumer)
export class BlogConsumerResolverBase {
  constructor(protected readonly service: BlogConsumerService) {}

  async _blogConsumersMeta(
    @graphql.Args() args: BlogConsumerCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [BlogConsumer])
  async blogConsumers(
    @graphql.Args() args: BlogConsumerFindManyArgs
  ): Promise<BlogConsumer[]> {
    return this.service.blogConsumers(args);
  }

  @graphql.Query(() => BlogConsumer, { nullable: true })
  async blogConsumer(
    @graphql.Args() args: BlogConsumerFindUniqueArgs
  ): Promise<BlogConsumer | null> {
    const result = await this.service.blogConsumer(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => BlogConsumer)
  async createBlogConsumer(
    @graphql.Args() args: CreateBlogConsumerArgs
  ): Promise<BlogConsumer> {
    return await this.service.createBlogConsumer({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => BlogConsumer)
  async updateBlogConsumer(
    @graphql.Args() args: UpdateBlogConsumerArgs
  ): Promise<BlogConsumer | null> {
    try {
      return await this.service.updateBlogConsumer({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => BlogConsumer)
  async deleteBlogConsumer(
    @graphql.Args() args: DeleteBlogConsumerArgs
  ): Promise<BlogConsumer | null> {
    try {
      return await this.service.deleteBlogConsumer(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Query(() => String)
  async ProcessBlogpostMessage(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ProcessBlogpostMessage(args);
  }

  @graphql.Mutation(() => BlogConsumerOutput)
  async ProcessBlogpostMessageV2(
    @graphql.Args()
    args: BlogConsumerProcessInput
  ): Promise<BlogConsumerOutput> {
    return this.service.ProcessBlogpostMessageV2(args);
  }
}
