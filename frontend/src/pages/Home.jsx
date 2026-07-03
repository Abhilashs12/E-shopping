import Hero from "../components/Hero";
import Features from "../components/Features";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import OfferBanner from "../components/OfferBanner";
import WhyChooseUs from "../components/WhyChooseUs";
import NewArrivals from "../components/NewArrivals";
import Newsletter from "../components/Newsletter";

function Home() {
  return (
    <main className="bg-[#F8F5F2]">

      <Hero />

      <Features />

      <Categories />

      <FeaturedProducts />

      <OfferBanner />

      <WhyChooseUs />

      <NewArrivals />

      <Newsletter />

    </main>
  );
}

export default Home;