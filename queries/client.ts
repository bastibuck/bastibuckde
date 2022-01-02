import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: "2022-01-02",
  token: process.env.SANITY_TOKEN,
  useCdn: false, // can not be true with private data
});
