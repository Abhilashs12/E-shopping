import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import OfferBanner from "../components/OfferBanner";
import WhyChooseUs from "../components/WhyChooseUs";
import NewArrivals from "../components/NewArrivals";
import Newsletter from "../components/Newsletter";
function Home() {
  return (
    <main>
      {/* Categories */}
      <Categories />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Offer Banner */}
      <OfferBanner />
      <WhyChooseUs />
      <NewArrivals />
      <Newsletter />
    </main>
  );
}

export default Home;
