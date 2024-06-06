import { Blogpost as TBlogpost } from "../api/blogpost/Blogpost";

export const BLOGPOST_TITLE_FIELD = "title";

export const BlogpostTitle = (record: TBlogpost): string => {
  return record.title?.toString() || String(record.id);
};
