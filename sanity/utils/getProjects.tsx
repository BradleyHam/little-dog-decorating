import { groq } from "next-sanity";
import client from '../client-config';
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
