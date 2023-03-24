import Food from "@/app/dashboard/components/Foods/Food";

export interface IFood {
  id: number;
  index: number;
  rating: number;
  promotion: string;
  isNew: boolean;
  categoryId: string;
  minCookTime: number;
  maxCookTime: number;
  restaurant: string;
  name: string;
  imageUrl: string;
}

export async function getFoods(): Promise<Array<IFood>> {
  const res = await fetch(
    "https://run.mocky.io/v3/a24cfec5-f76c-410b-a5ac-9f63fab28abb"
  );
  return res.json();
}

interface FoodsProps {
  categoryId?: string;
  restaurantQuery?: string;
}

const Foods = async ({ categoryId, restaurantQuery }: FoodsProps) => {
  const foods = await getFoods();
  const processedFoods = foods.filter((food) => {
    const foundCategory = categoryId ? food.categoryId === categoryId : true;

    let foundRestaurant = true;
    if (restaurantQuery) {
      const restaurantRegex = new RegExp(restaurantQuery);
      restaurantRegex.ignoreCase;
      foundRestaurant = restaurantRegex.test(food.restaurant);
    }

    return foundCategory && foundRestaurant;
  });

  return (
    <div className="grid grid-cols-3 gap-4 font-medium">
      {processedFoods?.map((food) => (
        <Food key={food.id} {...food} />
      ))}
    </div>
  );
};

export default Foods;
