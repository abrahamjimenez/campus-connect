import { formatDistanceToNow } from "date-fns";

export const calculateDateDifference = (jobUpdated: Date) => {
  return jobUpdated.toString().slice(4, 15); // Jan 01, 2025
};

export const showTimePostedAt = (jobUpdated: Date) => {
  return formatDistanceToNow(jobUpdated, { addSuffix: true });
};
