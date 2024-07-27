import BarChart from "@/components/BarChart";
import Card, { CardContent, CardProps } from "@/components/Card";
import PageTitle from "@/components/PageTitle";
import { DollarSign } from "lucide-react";
import Image from "next/image";
import RentSale from "@/components/RentSale";

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
          <RentSale title={"Rent Sale"} />
        </CardContent>
      </section>
      
    </div>

  );
}
