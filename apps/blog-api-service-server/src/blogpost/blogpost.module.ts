import { Module } from "@nestjs/common";
import { BlogpostModuleBase } from "./base/blogpost.module.base";
import { BlogpostService } from "./blogpost.service";
import { BlogpostController } from "./blogpost.controller";
import { BlogpostResolver } from "./blogpost.resolver";

@Module({
  imports: [BlogpostModuleBase],
  controllers: [BlogpostController],
  providers: [BlogpostService, BlogpostResolver],
  exports: [BlogpostService],
})
export class BlogpostModule {}
