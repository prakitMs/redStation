"use client";
import {
  CartesianGrid,
  LabelList,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
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
      textAnchor="end"
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
    <div className="">
      <Card className="bg-white">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>Day logging</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-auto max-w-[50vw]">
            <ChartContainer
              style={{
                width: `${Math.max(data?.length ?? 0, 10) * 30}px`, // เช่น 30px ต่อจุดข้อมูล
                maxHeight: "40vh",
                minWidth: "40vw",
              }}
              config={chartConfig}
            >
              <ResponsiveContainer width="100%">
                <LineChart
                  accessibilityLayer
                  data={data}
                  margin={{
                    top: 20,
                    left: 20,
                    right: 25,
                    bottom: 80,
                  }}
                >
                  <CartesianGrid vertical={false} />
                  <YAxis
                    tick={{ fontSize: 10, fill: "#555" }}
                    axisLine={true}
                    tickLine={false}
                    domain={["auto", "auto"]}
                  />
                  <XAxis
                    dataKey="time"
                    tickLine={true}
                    axisLine={true}
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
                    type="monotone"
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
