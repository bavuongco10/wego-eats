import Link from "next/link";

export interface IFoodCategory {
  id: string;
  name: string;
}

export async function getFoodCategories(): Promise<Array<IFoodCategory>> {
  const res = await fetch(
    "https://run.mocky.io/v3/f25ced0a-9ff7-4996-bdc7-430f281c48db"
  );
  return res.json();
}

interface FoodCategoriesProps {
  categoryId?: string;
  restaurantQuery?: string;
}

const FoodCategories = async ({
  categoryId,
  restaurantQuery,
}: FoodCategoriesProps) => {
  const categories = await getFoodCategories();
  const categoriesWithAll = [{ id: 0, name: "All" }, ...categories];

  return (
    <div className="flex flex-row font-medium text-gray-500">
      {categoriesWithAll.map((category) => (
        <Link
          aria-selected={
            (category.id || undefined) === (categoryId || undefined)
          }
          key={category.id}
          data-id={category.id}
          className="px-6 h-10 leading-10
          border-secondaryYellow border-y-2 border-l-2 last:border-r-2 last:rounded-r-xl first:rounded-l-xl
          aria-selected:bg-mainYellow aria-selected:text-black aria-selected:font-semibold"
          href={{
            pathname: "/dashboard",
            query: {
              restaurant: restaurantQuery,
              category: category.id ? category.id : undefined,
            },
          }}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default FoodCategories;
