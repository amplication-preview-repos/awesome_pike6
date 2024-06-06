import * as graphql from "@nestjs/graphql";
import { BlogpostResolverBase } from "./base/blogpost.resolver.base";
import { Blogpost } from "./base/Blogpost";
import { BlogpostService } from "./blogpost.service";

@graphql.Resolver(() => Blogpost)
export class BlogpostResolver extends BlogpostResolverBase {
  constructor(protected readonly service: BlogpostService) {
    super(service);
  }
}
