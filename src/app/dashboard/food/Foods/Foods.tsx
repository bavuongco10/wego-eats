export interface IFood {
  id: number;
  index: number;
  rating: number;
  promotion: string;
  isNew: boolean;
  categoryId: string;
  minCookingTime: number;
  maxCookingTime: number;
  restaurant: string;
  name: string;
  imageUri: string;
}

export async function getFoods(): Promise<Array<IFood>> {
  const res = await fetch(
    "https://run.mocky.io/v3/a24cfec5-f76c-410b-a5ac-9f63fab28abb"
  );
  return res.json();
}

interface FoodsProps {
  categoryId?: string;
}

const Foods = async ({ categoryId }: FoodsProps) => {
  const foods = await getFoods();
  const processedFoods = foods.filter((food) => {
    if (categoryId) {
      return food.categoryId === categoryId;
    }
    return true;
  });
  return (
    <div>
      {processedFoods.map((food) => (
        <div key={food.id}>{food.name}</div>
      ))}
    </div>
  );
};

export default Foods;
