// src/components/dashboard/ExpenseChart.tsx
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

function ExpenseChart() {
  const data = [
    { name: "Food", value: 400 },
    { name: "Transport", value: 300 },
    { name: "Shopping", value: 300 },
    { name: "Others", value: 200 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-medium text-gray-900">
        Expense Distribution
      </h2>
      <div className="mt-6" style={{ height: "300px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ExpenseChart;
