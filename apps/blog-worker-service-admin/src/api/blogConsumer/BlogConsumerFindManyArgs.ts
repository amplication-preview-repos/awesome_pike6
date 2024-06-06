import { BlogConsumerWhereInput } from "./BlogConsumerWhereInput";
import { BlogConsumerOrderByInput } from "./BlogConsumerOrderByInput";

export type BlogConsumerFindManyArgs = {
  where?: BlogConsumerWhereInput;
  orderBy?: Array<BlogConsumerOrderByInput>;
  skip?: number;
  take?: number;
};
