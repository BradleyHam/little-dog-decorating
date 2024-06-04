import React from "react";
import Footer from "@/app/SiteComponents/Footer";
import Navbar from "@/app/SiteComponents/Navbar";
import getProject from "@/sanity/utils/getProject";
import ContentRenderer from "@/app/SiteComponents/ContentRenderer";
import ExpandableContent from "@/app/projects/[project]/ExpandableContent";
import dynamic from "next/dynamic";

// Dynamically import the LightboxGallery component to ensure it is only used on the client side
const LightboxGallery = dynamic(() => import("../LightboxGallery"), { ssr: false });

export default async function Project({ params }: { params: { project: string } }) {
  const { project } = params;
  const projectData = await getProject(project);

  const { title, categories, content, largeImage, smallImage, mediumImage, imageUrls } = projectData;

  return (
    <div>
      <Navbar />
      <div className="px-5 bg-white pt-[20px] container sm:mx-auto">
        <h1 className="text-black pt-[97px] tracking-tight leading-none">{title}</h1>
        <ExpandableContent>
          <ContentRenderer blocks={content} />
        </ExpandableContent>
        <LightboxGallery imageUrls={imageUrls} />
      </div>
      <Footer />
    </div>
  );
}
