import FoodFilter from "@/app/dashboard/components/FoodFilter/FoodFilter";
import Foods from "@/app/dashboard/components/Foods/Foods";
import SearchBar from "@/app/dashboard/components/SearchBar/SearchBar";

interface PageProps {
  params: Record<string, string>;
  searchParams: Record<string, string>;
}
const DashboardPage = ({ searchParams }: PageProps) => {
  const { category, restaurant } = searchParams;
  return (
    <div className="p-10">
      <SearchBar categoryId={category} />
      {/* @ts-expect-error Async Server Component */}
      <FoodFilter
        categoryId={searchParams.category}
        restaurantQuery={restaurant}
      />
      {/* @ts-expect-error Async Server Component */}
      <Foods categoryId={category} restaurantQuery={restaurant} />
    </div>
  );
};

export default DashboardPage;
