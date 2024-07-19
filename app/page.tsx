import BarChart from "@/components/BarChart";
import Card, { CardContent, CardProps } from "@/components/Card";
import SalesCard, {SalesProps } from "@/components/SalesCard";
import PageTitle from "@/components/PageTitle";
import { DollarSign } from "lucide-react";
import Image from "next/image";

const cardData:CardProps[] = [
  {
    label:"Total Revenue",
    amount: "$400",
    discription:"+20.1% from last month",
    icon: DollarSign
  },
    {
    label:"Total Revenue",
    amount: "$400",
    discription:"+20.1% from last month",
    icon: DollarSign
  },
    {
    label:"Total Revenue",
    amount: "$400",
    discription:"+20.1% from last month",
    icon: DollarSign
  },
  {
    label:"Total Revenue",
    amount: "$400",
    discription:"+20.1% from last month",
    icon: DollarSign
  },
];

// interface SalesProps {
//   name: string;
//   email: string;
//   saleAmount: string;
// }

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

export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="HomePage" />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((d,i)=> 
          <Card key={i} amount={d.amount} discription={d.discription} icon={d.icon} label={d.label} />
        )}
      </section>

      <section className="grid grid-cols-1 gap-4 tansition-all lg:grid-cols-2">
        <CardContent>
           <p className="p-4 font-semibold">Overview</p>
           <BarChart />
        </CardContent>
        <CardContent className="flex justify-between gap-4">
          <section>
            <p>Rent sales</p>
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
        </CardContent>
      </section>
    </div>
  );
}
