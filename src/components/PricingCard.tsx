import React from 'react';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
}

const PricingCard = ({ title, price, features }: PricingCardProps) => {
  return (
    <div className='p-6 bg-white shadow-md rounded-lg text-center'>
      <h3 className='text-2xl font-bold text-blue-600'>{title}</h3>
      <p className='text-3xl font-bold mb-4'>{price}</p>
      <ul className='mb-6'>
        {features.map((feature, index) => (
          <li key={index} className='text-gray-700'>
            {feature}
          </li>
        ))}
      </ul>
      <button className='px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700'>
        Choose {title}
      </button>
    </div>
  );
};

export default PricingCard;
