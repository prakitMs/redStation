"use client";
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface StartLineChartProps {
  dataKey: keyof typeof chartConfig;
  title?: string;
  color?: string;
}

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

const StartLineChart = ({ dataKey, title, color }: StartLineChartProps) => {
  return (
    <div className="">
      <Card className="bg-[#f7f7ed]">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>Day logging</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{
                top: 20,
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="day"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />
              <Line
                dataKey={dataKey}
                type="natural"
                stroke={
                  color ??
                  chartConfig?.[dataKey].color ??
                  chartConfig?.["pm2.5"].color
                }
                strokeWidth={2}
                dot={{
                  fill: "#ffffff",
                }}
                activeDot={{
                  r: 6,
                }}
              >
                <LabelList
                  position="top"
                  offset={12}
                  className="fill-foreground"
                  fontSize={12}
                />
              </Line>
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default StartLineChart;
