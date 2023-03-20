import FoodCategories from "@/app/dashboard/food/FoodCategories/FoodCategories";
import Foods from "@/app/dashboard/food/Foods/Foods";

interface PageProps {
  params: Record<string, string>;
  searchParams: Record<string, string>;
}
const DashboardPage = ({ searchParams }: PageProps) => {
  return (
    <div className="px-10">
      {/* @ts-expect-error Async Server Component */}
      <FoodCategories categoryId={searchParams.category} />
      {/* @ts-expect-error Async Server Component */}
      <Foods categoryId={searchParams.category} />
    </div>
  );
};

export default DashboardPage;
