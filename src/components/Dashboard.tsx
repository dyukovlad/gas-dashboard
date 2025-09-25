import React from 'react';
import Card from './Card';
import { mockMarket } from '../data/mock';

const Dashboard: React.FC = () => {
  const m = mockMarket;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-3">
        <h1 className="text-3xl font-bold text-gasGreen">
          Natural Gas Market Analysis
        </h1>
        <p className="text-gray-400">
          Comprehensive Framework & Price Prediction
        </p>
      </div>

      <Card title="Current Price & Performance">
        <div className="text-4xl font-bold text-gasGreen">
          ${m.price.toFixed(4)}
        </div>
        <p className="text-sm text-green-300">
          {m.change >= 0 ? '+' : ''}
          {m.change.toFixed(4)} ({m.changePct}%)
        </p>
        <div className="flex justify-between mt-3 text-gray-300 text-sm">
          <div>
            Day High: <b>${m.dayHigh}</b>
          </div>
          <div>
            Day Low: <b>${m.dayLow}</b>
          </div>
        </div>
      </Card>

      <Card title="Verified Market Fundamentals">
        <ul className="text-sm space-y-1 text-gray-200">
          <li>
            Storage Level: <b>{m.fundamentals.storageLevel}</b>
          </li>
          <li>
            Surplus: <b>{m.fundamentals.surplus}</b>
          </li>
          <li>
            LNG Exports: <b>{m.fundamentals.lngExports}</b>
          </li>
          <li>
            La Niña: <b>{m.fundamentals.laNina}</b>
          </li>
          <li>
            Volatility: <b>{m.fundamentals.volatility}</b>
          </li>
        </ul>
      </Card>

      <Card title="Moving Averages">
        <table className="w-full text-sm">
          <thead className="text-gray-400">
            <tr>
              <th>Period</th>
              <th>MA20</th>
              <th>MA50</th>
              <th>MA100</th>
            </tr>
          </thead>
          <tbody>
            {m.movingAverages.map((row) => (
              <tr key={row.period} className="border-t border-gray-800">
                <td className="py-2">{row.period}</td>
                <td>{row.ma20}</td>
                <td>{row.ma50}</td>
                <td>{row.ma100}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      <Card title="Detailed Predictions">
        <div className="space-y-3">
          {m.predictions.map((p) => (
            <div key={p.title}>
              <div className="font-semibold">{p.title}:</div>
              <div className="text-sm text-gray-300">{p.range}</div>
              <div className="text-xs text-gray-500">
                Confidence: {p.confidence}%
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
