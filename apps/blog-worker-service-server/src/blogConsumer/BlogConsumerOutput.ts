import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("BlogConsumerOutputObject")
class BlogConsumerOutput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    Title!: string;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    Content!: string;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    Author!: string;

    @Field(() => Date, {
        nullable: true
    })
    @Type(() => Date)
    ProcessedAt?: Date;
}

export { BlogConsumerOutput as BlogConsumerOutput };