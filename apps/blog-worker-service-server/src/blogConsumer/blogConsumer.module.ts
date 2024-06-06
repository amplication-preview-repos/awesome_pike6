import { Module } from "@nestjs/common";
import { BlogConsumerModuleBase } from "./base/blogConsumer.module.base";
import { BlogConsumerService } from "./blogConsumer.service";
import { BlogConsumerController } from "./blogConsumer.controller";
import { BlogConsumerResolver } from "./blogConsumer.resolver";

@Module({
  imports: [BlogConsumerModuleBase],
  controllers: [BlogConsumerController],
  providers: [BlogConsumerService, BlogConsumerResolver],
  exports: [BlogConsumerService],
})
export class BlogConsumerModule {}
