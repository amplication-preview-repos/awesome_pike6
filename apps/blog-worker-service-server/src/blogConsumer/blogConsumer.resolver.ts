import * as graphql from "@nestjs/graphql";
import { BlogConsumerResolverBase } from "./base/blogConsumer.resolver.base";
import { BlogConsumer } from "./base/BlogConsumer";
import { BlogConsumerService } from "./blogConsumer.service";

@graphql.Resolver(() => BlogConsumer)
export class BlogConsumerResolver extends BlogConsumerResolverBase {
  constructor(protected readonly service: BlogConsumerService) {
    super(service);
  }
}
