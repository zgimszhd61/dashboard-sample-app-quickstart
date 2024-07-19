'use client'
import { DataTable } from "@/components/Datatable";
import PageTitle from "@/components/PageTitle";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

type Payment = {
    name: string
    email: string
    lastOrder:string
    method: string
  }
  
const data: Payment[] = [
    {
      name: "Boots",
      email: "john@example.com",
      lastOrder:" 2023-01-01",
      method:"Credit Card"
    },
    {
        name: "Boots",
        email: "bob@example.com",
        lastOrder:" 2023-10-01",
        method:"Credit Card"
      },
      {
        name: "Boots",
        email: "bob@example.com",
        lastOrder:" 2023-10-01",
        method:"Credit Card"
      },
      {
        name: "Boots",
        email: "bob@example.com",
        lastOrder:" 2023-10-01",
        method:"Credit Card"
      },
      {
        name: "Boots",
        email: "bob@example.com",
        lastOrder:" 2023-10-01",
        method:"Credit Card"
      },
      {
        name: "Boots",
        email: "bob@example.com",
        lastOrder:" 2023-10-01",
        method:"Credit Card"
      },
      {
        name: "Boots",
        email: "bob@example.com",
        lastOrder:" 2023-10-01",
        method:"Credit Card"
      },
      {
        name: "Boots",
        email: "bob@example.com",
        lastOrder:" 2023-10-01",
        method:"Credit Card"
      },
      {
        name: "Boots",
        email: "bob@example.com",
        lastOrder:" 2023-10-01",
        method:"Credit Card"
      },
      {
        name: "Boots",
        email: "bob@example.com",
        lastOrder:" 2023-10-01",
        method:"Credit Card"
      },
      {
        name: "Boots",
        email: "bob@example.com",
        lastOrder:" 2023-10-01",
        method:"Credit Card"
      },
      {
        name: "Boots",
        email: "bob@example.com",
        lastOrder:" 2023-10-01",
        method:"Credit Card"
      },
      {
        name: "Boots",
        email: "bob@example.com",
        lastOrder:" 2023-10-01",
        method:"Credit Card"
      },
      {
        name: "Boots",
        email: "bob@example.com",
        lastOrder:" 2023-10-01",
        method:"Credit Card"
      },
      {
        name: "Boots",
        email: "bob@example.com",
        lastOrder:" 2023-10-01",
        method:"Credit Card"
      },
      {
        name: "Boots",
        email: "bob@example.com",
        lastOrder:" 2023-10-01",
        method:"Credit Card"
      },
      {
        name: "Boots",
        email: "bob@example.com",
        lastOrder:" 2023-10-01",
        method:"Credit Card"
      },
      {
        name: "Boots",
        email: "bob@example.com",
        lastOrder:" 2023-10-01",
        method:"Credit Card"
      },
      {
        name: "Boots",
        email: "bob@example.com",
        lastOrder:" 2023-10-01",
        method:"Credit Card"
      },
      {
        name: "Boots",
        email: "bob@example.com",
        lastOrder:" 2023-10-01",
        method:"Credit Card"
      },
      {
        name: "Boots",
        email: "bob@example.com",
        lastOrder:" 2023-10-01",
        method:"Credit Card"
      },
      {
        name: "Boots",
        email: "bob@example.com",
        lastOrder:" 2023-10-01",
        method:"Credit Card"
      },
      {
        name: "Boots",
        email: "bob@example.com",
        lastOrder:" 2023-10-01",
        method:"Credit Card"
      },
      {
        name: "Boots",
        email: "bob@example.com",
        lastOrder:" 2023-10-01",
        method:"Credit Card"
      },
      {
        name: "Boots",
        email: "bob@example.com",
        lastOrder:" 2023-10-01",
        method:"Credit Card"
      },
      {
        name: "Boots",
        email: "bob@example.com",
        lastOrder:" 2023-10-01",
        method:"Credit Card"
      },
      {
        name: "Boots",
        email: "bob@example.com",
        lastOrder:" 2023-10-01",
        method:"Credit Card"
      },
      {
        name: "Boots",
        email: "bob@example.com",
        lastOrder:" 2023-10-01",
        method:"Credit Card"
      },
      {
        name: "Boots",
        email: "bob@example.com",
        lastOrder:" 2023-10-01",
        method:"Credit Card"
      },
      {
        name: "Boots",
        email: "bob@example.com",
        lastOrder:" 2023-10-01",
        method:"Credit Card"
      },
      {
        name: "Boots",
        email: "bob@example.com",
        lastOrder:" 2023-10-01",
        method:"Credit Card"
      },
      {
        name: "Boots",
        email: "bob@example.com",
        lastOrder:" 2023-10-01",
        method:"Credit Card"
      },
      {
        name: "Boots",
        email: "bob@example.com",
        lastOrder:" 2023-10-01",
        method:"Credit Card"
      },
      {
        name: "Boots",
        email: "bob@example.com",
        lastOrder:" 2023-10-01",
        method:"Credit Card"
      },
    // ...
  ]

const columns: ColumnDef<Payment>[] = [
    {
      accessorKey: "name",
      header: "Name",
      cell:({ row }) => {
        return (<div className="flex gap-2 items-center">
            <img className="h-10 w-10"
            src={`https://api.dicebear.com/9.x/lorelei/svg?seed=${row.getValue("name")}`}
            alt="user-image"
            />
            <p>{row.getValue("name")}</p>
            </div>
        );
      }
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "lastOrder",
      header: "LastOrder",
    },
    {
        accessorKey: "method",
        header: "Method",
      },
  ]

export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full" >
        <PageTitle title="Inbox" ></PageTitle>
        <DataTable columns={columns} data={data} />
    </div>
  );
}
