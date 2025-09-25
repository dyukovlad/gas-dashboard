export const mockMarket = {
  price: 2.929,
  change: 0.041,
  changePct: 1.42,
  dayHigh: 2.931,
  dayLow: 2.901,
  fundamentals: {
    storageLevel: '3,433 Bcf',
    surplus: '+204 Bcf',
    lngExports: '14.2-14.9 Bcf/d',
    laNina: '71%',
    volatility: '69%',
  },
  movingAverages: [
    { period: '5 MIN', ma20: 2.92, ma50: 2.92, ma100: 2.92 },
    { period: '1 HOUR', ma20: 2.92, ma50: 2.91, ma100: 2.95 },
    { period: '1 DAY', ma20: 3.01, ma50: 2.94, ma100: 3.19 },
    { period: '1 WEEK', ma20: 3.27, ma50: 3.35, ma100: 2.87 },
  ],
  predictions: [
    { title: 'Short-term', range: '$2.85 - $3.05', confidence: 75 },
    { title: 'Medium-term', range: '$3.15 - $3.25', confidence: 60 },
    { title: 'Winter', range: '$3.80 - $4.20', confidence: 55 },
  ],
};
