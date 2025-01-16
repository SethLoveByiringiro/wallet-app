// src/components/dashboard/ExpenseChart.tsx
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

interface LabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  value: number;
  name: string;
  percent: number;
  index: number;
}

function ExpenseChart() {
  const data = [
    {
      name: "Food & Dining",
      value: 400000,
      color: "#2563EB",
      percentage: 29.6,
    },
    {
      name: "Transportation",
      value: 300000,
      color: "#10B981",
      percentage: 22.2,
    },
    { name: "Shopping", value: 300000, color: "#F59E0B", percentage: 22.2 },
    {
      name: "Entertainment",
      value: 200000,
      color: "#EF4444",
      percentage: 14.8,
    },
    { name: "Utilities", value: 150000, color: "#8B5CF6", percentage: 11.2 },
  ];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    outerRadius,
    value,
    name,
    percent,
  }: LabelProps) => {
    const radius = outerRadius * 1.4;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    const cos = Math.cos(-midAngle * RADIAN);
    const textAnchor = cos >= 0 ? "start" : "end";

    const posX = x + (cos >= 0 ? 10 : -10);
    const posY = y;

    const formattedValue = (value / 1000).toLocaleString();
    const percentValue = (percent * 100).toFixed(1);

    return (
      <g>
        <line x1={x} y1={y} x2={posX} y2={posY} stroke="#666" strokeWidth={1} />
        <text
          x={posX}
          y={posY}
          fill="#374151"
          textAnchor={textAnchor}
          dominantBaseline="central"
          className="text-xs"
        >
          {`${name}: ${formattedValue}K RWF (${percentValue}%)`}
        </text>
      </g>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Expense Distribution
      </h2>
      <div className="h-[500px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="45%"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
              labelLine={false}
              label={renderCustomizedLabel}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  stroke="#ffffff"
                  strokeWidth={2}
                />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: number) =>
                `${(Number(value) / 1000).toLocaleString()} K RWF`
              }
              contentStyle={{
                backgroundColor: "white",
                borderRadius: "8px",
                padding: "12px",
                border: "1px solid #E5E7EB",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
            />
            <Legend
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
              wrapperStyle={{
                paddingTop: "40px",
              }}
              formatter={(value: string) => (
                <span className="text-sm font-medium text-gray-700">
                  {value}
                </span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ExpenseChart;
