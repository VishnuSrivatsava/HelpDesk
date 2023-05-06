import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
  { month: 'Jan', value: 400 },
  { month: 'Feb', value: 300 },
  { month: 'Mar', value: 200 },
  { month: 'Apr', value: 278 },
  { month: 'May', value: 189 },
  { month: 'Jun', value: 239 },
  { month: 'Jul', value: 349 },
  { month: 'Aug', value: 200 },
  { month: 'Sep', value: 300 },
  { month: 'Oct', value: 400 },
  { month: 'Nov', value: 200 },
  { month: 'Dec', value: 278 }
];

const Graph = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontWeight: 'bold', fontSize: '24px' }}>{currentYear} Statistics</h2>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <BarChart
                    width={600}
                    height={400}
                    data={data}
                    margin={{ top: 20, right: 20, left: -20, bottom: 20 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
            </div>
        </div>
    );
};

export default Graph;