import Image from "next/image";
import { compact } from "lodash";

const Gift = () => (
  <svg
    className="w-5 h-5 text-white"
    aria-hidden="true"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
      clipRule="evenodd"
    ></path>
    <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
  </svg>
);

interface FoodProps {
  imageUrl: string;
  rating: number;
  minCookTime: number;
  maxCookTime: number;
  isNew: boolean;
  restaurant: string;
  name: string;
  promotion: string;
}

const Food = ({
  imageUrl,
  rating,
  minCookTime,
  maxCookTime,
  isNew,
  restaurant,
  name,
  promotion,
}: FoodProps) => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-white aspect-square drop-shadow-md hover:drop-shadow-xl cursor-pointer">
      {promotion === "gift" && (
        <div className="absolute bg-blue-400 w-12 h-8 rounded-br-2xl flex justify-center items-center z-10">
          <Gift />
        </div>
      )}
      {promotion === "discount" && (
        <div className="absolute bg-red-400 w-12 h-8 rounded-br-2xl flex justify-center items-center z-10">
          <span className="font-bold text-white">%</span>
        </div>
      )}
      {promotion === "1+1" && (
        <div className="absolute bg-purple-400 w-12 h-8 rounded-br-2xl flex justify-center items-center z-10">
          <span className="font-bold text-white">1+1</span>
        </div>
      )}
      <div className="h-2/3 w-full relative">
        <Image src={imageUrl} alt={name} fill />
      </div>
      <div className="p-6">
        <p className="font-bold">{restaurant}</p>
        <p className="p-4 text-xs space-x-6">
          {rating && (
            <span>
              <span className="text-sm">★</span> {Number(rating).toFixed(1)}
            </span>
          )}
          {(maxCookTime || minCookTime) && (
            <span>{compact([minCookTime, maxCookTime])?.join("-")} min</span>
          )}
          {isNew && <span className="text-green-600 font-bold">New</span>}
        </p>
      </div>
    </div>
  );
};

export default Food;
