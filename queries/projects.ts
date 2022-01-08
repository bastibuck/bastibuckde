export type Project = {
  _id: string;
  title: string;
  description: string;
  image: Image;
  href: string | null;
};

type Image = {
  imageUrl: string;
  blurredUrl: string;
  alt: string;
};

export type ProjectsResult = Array<Project>;

export const projectsQuery = `
  *[
    _type == "project"
   ] {
    _id,
    title,
    description,
    "image": {
        "imageUrl": image.asset->url, 
        "blurredUrl": image.asset->metadata.lqip, 
        "alt": image.alt
    },
    href,
    order,
  } | order(order)
`;
