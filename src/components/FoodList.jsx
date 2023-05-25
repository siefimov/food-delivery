import FoodItem from './FoodItem';
import { food } from '../api/api';

const FoodList = () => {
  return (
    <div className='flex h-[100vh] basis-[75%] overflow-y-auto rounded border px-12 py-5'>
      <ul className='flex flex-wrap justify-center gap-20 '>
        {food?.map((food, index) => (
          <FoodItem key={index} imageUrl={food.imageUrl} title={food.title} price={food.price} />
        ))}
      </ul>
    </div>
  );
};

export default FoodList;
