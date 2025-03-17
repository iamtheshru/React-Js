import BrandSlider from "@/components/BrandSlider/page";
import Categories from "@/components/Categories/page";
import CustomerReviews from "@/components/CustomerReviews/page";
import Descount from "@/components/Descount/page";
import FeatureProducts from "@/components/FeatureProducts/page";
import Features from "@/components/Features/page";
import HeroSlider from "@/components/HeroSlider";
import MostPopularProducts from "@/components/MostPopularProducts/page";
import ProvideServices from "@/components/ProvideServices/page";
import StatsSection from "@/components/StatsSection/page";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <StatsSection />
      <Categories />
      <FeatureProducts />
      <ProvideServices />
      <Descount />
      <MostPopularProducts />
      <BrandSlider />
      <Features />
      <CustomerReviews />
    </>
  );
}
