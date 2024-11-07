import CTA, {Compliance} from "@/components/landing/CTA";
import Hero from "@/components/landing/Hero";
import Benefits from "@/components/landing/Benefits";
import Reviews from "@/components/landing/Reviews";
import FAQs from "@/components/landing/FAQs";
import Pricing from "@/components/landing/Pricing";
import Insights from "@/components/landing/Insights";

export default function Page(){

  return(
    <section className="">
        <Compliance />
        <Hero />
        <Benefits />
        <Reviews />
        <FAQs />
        <Pricing />
        <Insights />
        <CTA />
    </section>
  )
}