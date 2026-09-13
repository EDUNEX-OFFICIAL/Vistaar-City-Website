import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import PageHero from "@/components/layout/PageHero";
import { featuredProjects, getProject } from "@/lib/catalog";
import { pageMetadata } from "@/lib/site-metadata";
import { routes } from "@/lib/routes";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return featuredProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return pageMetadata({
    title: project.name,
    description: project.shortDescription,
    path: `${routes.projects}/${project.slug}`,
  });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <PageHero eyebrow={project.location} title={project.name} lede={project.shortDescription} />
      <section className="section-pad bg-ivory">
        <div className="site-wrap max-w-3xl">
          <p className="text-lg leading-relaxed text-charcoal/80">{project.body}</p>
          <p className="mt-4 text-sm text-muted">
            Site photography has not been published. Illustrations elsewhere on this site are not photographs of this
            project.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={`${routes.siteVisit}?project=${project.slug}`}>Book a Site Visit</Button>
            <Button href={routes.contact} variant="secondary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
