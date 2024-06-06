import { BlogpostWhereInput } from "./BlogpostWhereInput";
import { BlogpostOrderByInput } from "./BlogpostOrderByInput";

export type BlogpostFindManyArgs = {
  where?: BlogpostWhereInput;
  orderBy?: Array<BlogpostOrderByInput>;
  skip?: number;
  take?: number;
};
