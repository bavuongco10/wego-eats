import FoodCategories from "@/app/dashboard/components/FoodCategories/FoodCategories";
import Foods from "@/app/dashboard/components/Foods/Foods";
import SearchBar from "@/app/dashboard/components/SearchBar/SearchBar";

interface PageProps {
  params: Record<string, string>;
  searchParams: Record<string, string>;
}
const DashboardPage = ({ searchParams }: PageProps) => {
  const { category, restaurant } = searchParams;
  return (
    <div className="mx-10 mt-10">
      <SearchBar categoryId={category} />
      {/* @ts-expect-error Async Server Component */}
      <FoodCategories
        categoryId={searchParams.category}
        restaurantQuery={restaurant}
      />
      {/* @ts-expect-error Async Server Component */}
      <Foods categoryId={category} restaurantQuery={restaurant} />
    </div>
  );
};

export default DashboardPage;
