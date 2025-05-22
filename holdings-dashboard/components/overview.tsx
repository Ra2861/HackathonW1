"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan",
    total: 10200000,
  },
  {
    name: "Fev",
    total: 10500000,
  },
  {
    name: "Mar",
    total: 10800000,
  },
  {
    name: "Abr",
    total: 11000000,
  },
  {
    name: "Mai",
    total: 11200000,
  },
  {
    name: "Jun",
    total: 11500000,
  },
  {
    name: "Jul",
    total: 11800000,
  },
  {
    name: "Ago",
    total: 12000000,
  },
  {
    name: "Set",
    total: 12200000,
  },
  {
    name: "Out",
    total: 12300000,
  },
  {
    name: "Nov",
    total: 12400000,
  },
  {
    name: "Dez",
    total: 12450000,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `R$${(value / 1000000).toFixed(1)}M`}
        />
        <Bar dataKey="total" fill="currentColor" radius={[4, 4, 0, 0]} className="fill-primary" />
      </BarChart>
    </ResponsiveContainer>
  )
}
