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
    _type == "project" && !(_id in path("drafts.**"))
   ] {
    _id,
    "title": coalesce(title[$locale], title.de),
    "description": coalesce(description[$locale], description.de),
    "image": {
        "imageUrl": image.asset->url, 
        "blurredUrl": image.asset->metadata.lqip, 
        "alt": coalesce(image.alternativText[$locale], image.alternativText.de),
    },
    href,
    order,
  } | order(order)
`;
