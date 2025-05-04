"use client";
import {
  CartesianGrid,
  LabelList,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
} from "recharts";
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
import { cn } from "@/lib/utils";

interface StartLineChartProps {
  title?: string;
  color?: string;
  data?: { time: string; value: number }[];
}
const RotatedTick = (props: any) => {
  const { x, y, payload } = props;
  return (
    <text
      x={x}
      y={y}
      dy={6}
      textAnchor="start"
      transform={`rotate(-45, ${x}, ${y})`}
      className="text-[10px] fill-gray-700"
    >
      {payload.value}
    </text>
  );
};

const CustomLabelList = (props: any) => {
  const { x, y, index, value } = props;

  // เช็คลำดับ index แล้วกำหนด dy (ระยะขึ้น/ลง)
  const isEven = index % 2 === 0;

  return (
    <text
      x={x}
      y={y}
      dy={isEven ? -15 : 15} // ค่าคี่ล่าง คู่บน
      textAnchor="middle"
      className="text-[10px] fill-gray-700"
    >
      {value}
    </text>
  );
};

const chartConfig = {
  chart1: {
    label: "chart1",
    color: "#1b263b",
  },
} satisfies ChartConfig;

const StartLineChart = ({ title, color, data }: StartLineChartProps) => {
  return (
    <div className=" ">
      <Card className="bg-white">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>Day logging</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-auto max-w-[50vw]">
            <ChartContainer
              className={cn("w-[45vw] max-h-[40vh]", {
                "w-[100vw]": (data?.length ?? 0) > 24,
                "w-[500vw]": (data?.length ?? 0) > 100,
              })}
              config={chartConfig}
            >
              <ResponsiveContainer width="100%">
                <LineChart
                  accessibilityLayer
                  data={data}
                  margin={{
                    top: 20,
                    left: 25,
                    right: 25,
                  }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="time"
                    tickLine={false}
                    axisLine={false}
                    tick={<RotatedTick />}
                    tickMargin={8}
                    interval={0}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="line" />}
                  />
                  <Line
                    dataKey="value"
                    type="natural"
                    stroke={color ?? chartConfig?.["chart1"].color}
                    strokeWidth={2}
                    dot={{
                      fill: "#ffffff",
                    }}
                    activeDot={{
                      r: 6,
                    }}
                  >
                    <LabelList content={<CustomLabelList />} />
                  </Line>
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StartLineChart;
