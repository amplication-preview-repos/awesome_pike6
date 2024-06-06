import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type BlogConsumerWhereInput = {
  author?: StringNullableFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  processedAt?: DateTimeNullableFilter;
  title?: StringNullableFilter;
};
