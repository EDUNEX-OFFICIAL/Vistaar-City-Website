import FeaturedProjectsBlock from "@/components/home/FeaturedProjectsBlock";
import { featuredProjects } from "@/lib/catalog";

export default function FeaturedProjects() {
  return <FeaturedProjectsBlock projects={featuredProjects} />;
}
