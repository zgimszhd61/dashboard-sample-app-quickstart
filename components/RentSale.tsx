import { cn } from '@/lib/utils';
import React from 'react'
import SalesCard, { SalesProps } from './SalesCard';

type Props = {
	title:string;
	className?:string;
};

const userSalesData: SalesProps[] = [
    {
      name: "Olivia Martin",
      email: "olivia_martin@email.com",
      saleAmount: "+$1999"
    },
    {
      name:"jum lee",
      email:"jum@email.com",
      saleAmount:"+$2000"
    },
    {
      name:"Isabella",
      email:"Isabella@email.com",
      saleAmount:"+$23"
    },
    {
      name:"Isabella",
      email:"Isabella@email.com",
      saleAmount:"+$23"
    },
    {
      name:"Isabella",
      email:"Isabella@email.com",
      saleAmount:"+$23"
    },
    {
      name:"Isabella",
      email:"Isabella@email.com",
      saleAmount:"+$23"
    },
    {
      name:"Isabella",
      email:"Isabella@email.com",
      saleAmount:"+$23"
    },
    {
      name:"Isabella",
      email:"Isabella@email.com",
      saleAmount:"+$23"
    },
   ]
export default function RentSale({title,className}:Props){
	return (
        <section>
        <p className='font-semibold'>{title}</p>
        <p className="text-sm text-gray-400">
          you made 400 this month.
        </p>
      {userSalesData.map((d,i) => (
        <SalesCard 
        key={i}
        name={d.name} 
        email={d.email} 
        saleAmount={d.saleAmount} 
        />
      ))}
      </section>
	)
}