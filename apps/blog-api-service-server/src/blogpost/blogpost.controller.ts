import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BlogpostService } from "./blogpost.service";
import { BlogpostControllerBase } from "./base/blogpost.controller.base";

@swagger.ApiTags("blogposts")
@common.Controller("blogposts")
export class BlogpostController extends BlogpostControllerBase {
  constructor(protected readonly service: BlogpostService) {
    super(service);
  }
}
