import React from 'react';
import { FaCcMastercard, FaCcVisa, FaCcPaypal } from 'react-icons/fa';

function FooterPaymentCards() {
  return (
    <div className="bg-sky-100 w-full py-1 ">
      {/* Copyright / info text */}
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pb-2 px-6 gap-2 sm:items-center sm:flex-col '>
      <span className="text-xs text-gray-400">
        © 2018 Ecommerce theme by www.bisenbaev.com
      </span>
      {/* Payment icons */}
      <div className="flex gap-3 items-center">
        <FaCcMastercard className="text-2xl text-gray-600" />
        <FaCcVisa className="text-2xl text-gray-600" />
        <FaCcPaypal className="text-2xl text-gray-600" />
      </div>
        </div>
    </div>
  );
}

export default FooterPaymentCards;
