import React from 'react';

const ProductSpecification = () => {
    return (
<div className="mt-8">
      <div>
        <h1 className="text-lg font-medium">Ingredients:</h1>
        <p className="text-lg font-light text-gray-700">
          Skimmed milk powder, lactose, vegetable oils (palm, rapeseed,
          sunflower), palm kernel fat, calcium carbonate, calcium salts of
          phosphoric acid, vitamin C, ferrous sulphate, stabilizer: L (+) -
          lactic acid, vitamin D, riboflavin , vitamin A, potassium iodate.
        </p>
      </div>
      <div className="my-3">
        <h1 className="text-lg font-medium">Nutritional values:</h1>
        <p className="text-lg font-medium text-gray-700">
          Callories: <span className=" font-light">110 kcal</span>
        </p>
        <p className="text-lg font-medium text-gray-700">
          Total Fat: <span className=" font-light"> 0g / 0%</span>
        </p>
        <p className="text-lg font-medium text-gray-700">
          Total Carbohydrate: <span className=" font-light">26g / 9%</span>
        </p>
        <p className="text-lg font-medium text-gray-700">
          Protein: <span className=" font-light">3g / 10%</span>
        </p>
      </div>
      <div>
        <h1 className="text-lg font-medium">Available for age:</h1>
        <p className="text-lg font-light text-gray-700">
          6-12 months, 12-24 months
        </p>
      </div>
    </div>
    );
};

export default ProductSpecification;