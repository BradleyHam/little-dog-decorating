import { createClient, groq } from "next-sanity";

export const client = createClient({
  apiVersion: '2024-05-31',
  projectId: 'nzq5cghb',
  dataset: 'production',
  useCdn: false,
});

export default async function getProjects() {
  try {
    const projects = await client.fetch(groq`*[_type == "projects"]{
      "largeImage": largeImage.asset->url,
      "smallImage": smallImage.asset->url,
      "mediumImage": mediumImage.asset->url,
      "slug": slug.current,
      title,
      categories,
    }`);
    return projects;
  } catch (error) {
    return [];
  }
}
