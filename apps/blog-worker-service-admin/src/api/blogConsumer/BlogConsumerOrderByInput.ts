import { SortOrder } from "../../util/SortOrder";

export type BlogConsumerOrderByInput = {
  author?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  processedAt?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
