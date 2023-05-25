import ShopFoodItem from './ShopFoodItem';
import { food } from '../api/api';

const ShopFoodList = () => {
  return (
    <div className='flex h-[90vh] basis-[75%] overflow-y-auto rounded border bg-slate-50 px-12 py-12'>
      <ul className='flex flex-wrap justify-center gap-20 '>
        {food?.map((food, index) => (
          <ShopFoodItem
            key={index}
            imageUrl={food.imageUrl}
            title={food.title}
            price={food.price}
          />
        ))}
      </ul>
    </div>
  );
};

export default ShopFoodList;
