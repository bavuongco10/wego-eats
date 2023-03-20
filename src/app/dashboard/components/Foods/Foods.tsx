const Gift = () => (
  <svg
    className="w-5 h-5 text-white"
    aria-hidden="true"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
      clip-rule="evenodd"
    ></path>
    <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
  </svg>
);

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
    <div className="grid grid-cols-3 gap-4">
      {processedFoods?.map((food) => (
        <div
          key={food.id}
          className="relative overflow-hidden rounded-xl bg-white drop-shadow-lg"
        >
          <div className="absolute bg-blue-400 w-12 h-8 rounded-br-2xl flex justify-center items-center">
            <Gift />
          </div>
          <img src={food.imageUrl} />
          <p>{food.restaurant}</p>
          <span>★ {Number(food.rating).toFixed(1)}</span>
          <span>
            {food.minCookTime}-{food.maxCookTime}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Foods;
