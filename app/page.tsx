// File purpose: Homepage route composition. Section UI lives in components/home.
import { AmenitiesPreviewSection } from '@/components/home/AmenitiesPreviewSection';
import { BuyerTrustSection } from '@/components/home/BuyerTrustSection';
import { FeaturedDevelopmentsSection } from '@/components/home/FeaturedDevelopmentsSection';
import { HomeCtaSection } from '@/components/home/HomeCtaSection';
import { HomeFaqSection } from '@/components/home/HomeFaqSection';
import { HomeHero } from '@/components/home/HomeHero';
import { HomeProofSection } from '@/components/home/HomeProofSection';
import { HomeStats } from '@/components/home/HomeStats';
import { LocationPreviewSection } from '@/components/home/LocationPreviewSection';
import { MovingGallerySection } from '@/components/home/MovingGallerySection';
import { PhilosophySection } from '@/components/home/PhilosophySection';
import { ProjectStageSection } from '@/components/home/ProjectStageSection';
import { TeamPreviewSection } from '@/components/home/TeamPreviewSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { YoutubeVideosSection } from '@/components/home/YoutubeVideosSection';
import { allAmenities, projects, type Amenity } from '@/data/projects';

export default function Home() {
  const amenityPhotos: Array<Amenity & { photo: string }> = allAmenities.filter(
    (a): a is Amenity & { photo: string } => Boolean(a.photo),
  );
  const galleryImages = projects
    .flatMap((project) => project.gallery.map((image) => ({ ...image, project: project.name })))
    .slice(0, 14);

  return (
    <>
      <HomeHero />
      <HomeStats />
      <BuyerTrustSection />
      <FeaturedDevelopmentsSection />
      <ProjectStageSection />
      <YoutubeVideosSection />
      <HomeProofSection />
      <AmenitiesPreviewSection amenityPhotos={amenityPhotos} />
      <PhilosophySection />
      <TestimonialsSection />
      <TeamPreviewSection />
      <LocationPreviewSection />
      <HomeFaqSection />
      <HomeCtaSection />
      <MovingGallerySection galleryImages={galleryImages} />
    </>
  );
}
