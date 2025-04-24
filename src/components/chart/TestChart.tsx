"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { day: "1", pm1: 186, "pm2.5": 80, pm10: 186 },
  { day: "2", pm1: 305, "pm2.5": 200, pm10: 186 },
  { day: "3", pm1: 237, "pm2.5": 120, pm10: 186 },
  { day: "4", pm1: 73, "pm2.5": 190, pm10: 186 },
  { day: "5", pm1: 209, "pm2.5": 130, pm10: 186 },
  { day: "6", pm1: 214, "pm2.5": 140, pm10: 186 },
  { day: "7", pm1: 186, "pm2.5": 80, pm10: 186 },
  { day: "8", pm1: 305, "pm2.5": 200, pm10: 186 },
  { day: "9", pm1: 237, "pm2.5": 120, pm10: 186 },
  { day: "10", pm1: 73, "pm2.5": 190, pm10: 186 },
  { day: "11", pm1: 209, "pm2.5": 130, pm10: 186 },
  { day: "12", pm1: 214, "pm2.5": 140, pm10: 186 },
  { day: "13", pm1: 186, "pm2.5": 80, pm10: 186 },
  { day: "14", pm1: 305, "pm2.5": 200, pm10: 186 },
  { day: "15", pm1: 237, "pm2.5": 120, pm10: 186 },
  { day: "16", pm1: 73, "pm2.5": 190, pm10: 186 },
  { day: "17", pm1: 209, "pm2.5": 130, pm10: 186 },
  { day: "18", pm1: 214, "pm2.5": 140, pm10: 186 },
  { day: "19", pm1: 186, "pm2.5": 80, pm10: 186 },
  { day: "20", pm1: 305, "pm2.5": 200, pm10: 186 },
  { day: "21", pm1: 237, "pm2.5": 120, pm10: 186 },
  { day: "22", pm1: 73, "pm2.5": 190, pm10: 186 },
  { day: "23", pm1: 209, "pm2.5": 130, pm10: 186 },
  { day: "24", pm1: 214, "pm2.5": 140, pm10: 186 },
];
const chartConfig = {
  pm1: {
    label: "pm1",
    color: "#C1121F",
  },
  "pm2.5": {
    label: "pm2.5",
    color: "#1D3461",
  },
  pm10: {
    label: "pm10",
    color: "#669BBC",
  },
} satisfies ChartConfig;

export function TestChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Area Chart - Stacked</CardTitle>
        <CardDescription>
          Showing total visitors for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="pm2.5"
              type="natural"
              fill="#233D4D"
              fillOpacity={0.4}
              stroke="#233D4D"
              stackId="a"
            />
            <Area
              dataKey="pm1"
              type="natural"
              fill="#FCCA46"
              fillOpacity={0.4}
              stroke="#FCCA46"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
