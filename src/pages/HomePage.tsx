import { HeroSection } from '../components/sections/HeroSection'
import { EmotionalStorySection } from '../components/sections/EmotionalStorySection'
import { ProductRevealSection } from '../components/sections/ProductRevealSection'
import { HowItWorksSection } from '../components/sections/HowItWorksSection'
import { ExperienceFlowSection } from '../components/sections/ExperienceFlowSection'
import { EventTypesSection } from '../components/sections/EventTypesSection'
import { AppGallerySection } from '../components/sections/AppGallerySection'
import { TrustSection } from '../components/sections/TrustSection'
import { PricingSection } from '../components/sections/PricingSection'
import { FAQSection } from '../components/sections/FAQSection'
import { FinalCTASection } from '../components/sections/FinalCTASection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <EmotionalStorySection />
      <ProductRevealSection />
      <HowItWorksSection />
      <ExperienceFlowSection />
      <EventTypesSection />
      <AppGallerySection />
      <TrustSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
    </>
  )
}
