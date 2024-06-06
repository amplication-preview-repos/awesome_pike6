import { BlogConsumer as TBlogConsumer } from "../api/blogConsumer/BlogConsumer";

export const BLOGCONSUMER_TITLE_FIELD = "title";

export const BlogConsumerTitle = (record: TBlogConsumer): string => {
  return record.title?.toString() || String(record.id);
};
