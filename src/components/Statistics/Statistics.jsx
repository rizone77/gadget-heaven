import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts';

const salesData = [
  { month: 'Jan', sales: 400 },
  { month: 'Feb', sales: 600 },
  { month: 'Mar', sales: 800 },
  { month: 'Apr', sales: 700 },
  { month: 'May', sales: 900 },
  { month: 'Jun', sales: 1000 },
  { month: 'Jul', sales: 950 },
  { month: 'Aug', sales: 1100 },
];

const Statistics = () => {
  return (
    <div className="">

      {/* 🔶 Purple Header Section */}
      <div className="relative   bg-purple-600 rounded-xl px-6 py-20 pt-16 text-white text-center">
        <div className="max-w-3xl mx-auto ">
          <h1 className="text-lg md:text-5xl font-normal mb-4 ">Statistics</h1>
          <p className="mb-6 text-lg">
            Explore the latest gadgets that will take your experience to the next level.
            From smart devices to the coolest accessories, we have it all!
          </p>
        </div>
      </div>

      {/* ⚪ Light Graph Section */}
      <div className=" py-16 px-4 md:px-10 ">
        <div className="overflow-visible max-w-6xl mx-auto -mt-10 bg-purple-100 rounded-2xl p-8 shadow-lg  ">
          <h2 className="text-3xl font-semibold text-purple-700 mb-4 text-center">Sales Statistics</h2>
          <p className="text-center text-purple-600 mb-8">
            Check out how your gadget sales have been performing over the months.
          </p>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sales" stroke="#7e22ce" strokeWidth={5} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
};

export default Statistics;
