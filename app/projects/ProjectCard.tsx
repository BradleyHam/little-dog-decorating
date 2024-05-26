import Link from "next/link";

export default function ProjectCard({title}: {title: string}) {
    return (
        <Link href={`/projects/${title}`} className="w-full">
        <div className="project-card rounded h-[300px] w-full bg-gray-200 shadow-xl cursor-pointer">
          
            <div className="heading">{title}</div>
           
        </div>
        </Link>
    )
}