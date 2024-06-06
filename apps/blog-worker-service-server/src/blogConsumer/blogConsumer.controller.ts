import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BlogConsumerService } from "./blogConsumer.service";
import { BlogConsumerControllerBase } from "./base/blogConsumer.controller.base";

@swagger.ApiTags("blogConsumers")
@common.Controller("blogConsumers")
export class BlogConsumerController extends BlogConsumerControllerBase {
  constructor(protected readonly service: BlogConsumerService) {
    super(service);
  }
}
