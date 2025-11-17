import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Info, TrendingUp, TrendingDown, ChevronLeft, ChevronRight } from 'lucide-react';

const MTFPositionInterest = () => {
  const [currentScreen, setCurrentScreen] = useState('positions'); // 'positions', 'details', 'daywise'
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [showInterestBreakdown, setShowInterestBreakdown] = useState(false);

  const positions = [
    {
      id: 1,
      symbol: 'KPITECH',
      companyName: 'KPit Technologies Ltd',
      exchange: 'NSE',
      qty: 10,
      avgPrice: 1166.80,
      ltp: 1263.80,
      pnl: 970.00,
      pnlPercent: 8.31,
      productType: 'MTF',
      mtfDetails: {
        totalExposure: 11668.00,
        fundedBy: {
          cash: 2916.70,
          margin: 0
        },
        interestRate: 12.0,
        daysHeld: 15,
        perDayInterest: 3.84,
        totalInterestAccrued: 57.60,
        breakEvenPrice: 1172.56,
        t1StartDate: '03 Nov 2025',
        positionCreatedDate: '01 Nov 2025',
        dayWiseInterest: [
          { date: '03 Nov', day: 'Sun', tradingDay: false, exposure: 11668.00, rate: 12.0, interest: 0, note: 'T+1 - Interest starts' },
          { date: '04 Nov', day: 'Mon', tradingDay: true, exposure: 11668.00, rate: 12.0, interest: 3.84, note: '' },
          { date: '05 Nov', day: 'Tue', tradingDay: true, exposure: 11668.00, rate: 12.0, interest: 3.84, note: '' },
          { date: '06 Nov', day: 'Wed', tradingDay: true, exposure: 11668.00, rate: 12.0, interest: 3.84, note: '' },
          { date: '07 Nov', day: 'Thu', tradingDay: true, exposure: 11668.00, rate: 12.0, interest: 3.84, note: '' },
          { date: '08 Nov', day: 'Fri', tradingDay: true, exposure: 11668.00, rate: 12.0, interest: 3.84, note: '' },
          { date: '09 Nov', day: 'Sat', tradingDay: false, exposure: 11668.00, rate: 12.0, interest: 3.84, note: 'Weekend' },
          { date: '10 Nov', day: 'Sun', tradingDay: false, exposure: 11668.00, rate: 12.0, interest: 3.84, note: 'Weekend' },
          { date: '11 Nov', day: 'Mon', tradingDay: true, exposure: 11668.00, rate: 12.0, interest: 3.84, note: '' },
          { date: '12 Nov', day: 'Tue', tradingDay: true, exposure: 11668.00, rate: 12.0, interest: 3.84, note: '' },
          { date: '13 Nov', day: 'Wed', tradingDay: true, exposure: 11668.00, rate: 12.0, interest: 3.84, note: '' },
          { date: '14 Nov', day: 'Thu', tradingDay: true, exposure: 11668.00, rate: 12.0, interest: 3.84, note: '' },
          { date: '15 Nov', day: 'Fri', tradingDay: true, exposure: 11668.00, rate: 12.0, interest: 3.84, note: '' },
          { date: '16 Nov', day: 'Sat', tradingDay: false, exposure: 11668.00, rate: 12.0, interest: 3.84, note: 'Weekend' },
          { date: '17 Nov', day: 'Sun', tradingDay: false, exposure: 11668.00, rate: 12.0, interest: 3.84, note: 'Today' }
        ]
      }
    },
    {
      id: 2,
      symbol: 'RELIANCE',
      companyName: 'Reliance Industries Ltd',
      exchange: 'NSE',
      qty: 25,
      avgPrice: 1245.50,
      ltp: 1289.30,
      pnl: 1095.00,
      pnlPercent: 3.52,
      productType: 'MTF',
      mtfDetails: {
        totalExposure: 31137.50,
        fundedBy: {
          cash: 7784.38,
          margin: 0
        },
        interestRate: 11.5,
        daysHeld: 8,
        perDayInterest: 9.81,
        totalInterestAccrued: 78.48,
        breakEvenPrice: 1248.64,
        t1StartDate: '09 Nov 2025',
        positionCreatedDate: '08 Nov 2025',
        dayWiseInterest: [
          { date: '09 Nov', day: 'Sat', tradingDay: false, exposure: 31137.50, rate: 11.5, interest: 0, note: 'T+1 - Interest starts (Weekend)' },
          { date: '10 Nov', day: 'Sun', tradingDay: false, exposure: 31137.50, rate: 11.5, interest: 0, note: 'Weekend' },
          { date: '11 Nov', day: 'Mon', tradingDay: true, exposure: 31137.50, rate: 11.5, interest: 9.81, note: 'First trading day' },
          { date: '12 Nov', day: 'Tue', tradingDay: true, exposure: 31137.50, rate: 11.5, interest: 9.81, note: '' },
          { date: '13 Nov', day: 'Wed', tradingDay: true, exposure: 31137.50, rate: 11.5, interest: 9.81, note: '' },
          { date: '14 Nov', day: 'Thu', tradingDay: true, exposure: 31137.50, rate: 11.5, interest: 9.81, note: '' },
          { date: '15 Nov', day: 'Fri', tradingDay: true, exposure: 31137.50, rate: 11.5, interest: 9.81, note: '' },
          { date: '16 Nov', day: 'Sat', tradingDay: false, exposure: 31137.50, rate: 11.5, interest: 9.81, note: 'Weekend' },
          { date: '17 Nov', day: 'Sun', tradingDay: false, exposure: 31137.50, rate: 11.5, interest: 9.81, note: 'Today' }
        ]
      }
    }
  ];

  const openDetailsView = (position) => {
    setSelectedPosition(position);
    setCurrentScreen('details');
    setShowInterestBreakdown(false);
  };

  const openDayWiseView = () => {
    setCurrentScreen('daywise');
  };

  const backToPositions = () => {
    setCurrentScreen('positions');
    setSelectedPosition(null);
    setShowInterestBreakdown(false);
  };

  const backToDetails = () => {
    setCurrentScreen('details');
  };

  // Day-wise Interest Screen
  if (currentScreen === 'daywise' && selectedPosition) {
    const interestData = selectedPosition.mtfDetails.dayWiseInterest;
    const runningTotal = [];
    let cumulative = 0;
    
    interestData.forEach((day) => {
      cumulative += day.interest;
      runningTotal.push(cumulative);
    });

    return (
      <div className="bg-white min-h-screen">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <button onClick={backToDetails} className="text-gray-700">
              <ChevronLeft size={24} />
            </button>
            <div className="flex-1">
              <h1 className="text-lg font-semibold text-gray-900">Day-wise Interest</h1>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-sm text-gray-900 font-medium">{selectedPosition.symbol}</span>
                <span className="text-sm text-gray-500">• {selectedPosition.qty} shares</span>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="px-4 py-3 bg-gray-50">
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-white rounded-lg p-3">
              <div className="text-xs text-gray-500 mb-1">Total Interest</div>
              <div className="text-base font-semibold text-orange-600">
                ₹{selectedPosition.mtfDetails.totalInterestAccrued.toFixed(2)}
              </div>
            </div>
            <div className="bg-white rounded-lg p-3">
              <div className="text-xs text-gray-500 mb-1">Days Held</div>
              <div className="text-base font-semibold text-gray-900">
                {selectedPosition.mtfDetails.daysHeld}
              </div>
            </div>
            <div className="bg-white rounded-lg p-3">
              <div className="text-xs text-gray-500 mb-1">Per Day Avg</div>
              <div className="text-base font-semibold text-gray-900">
                ₹{selectedPosition.mtfDetails.perDayInterest.toFixed(2)}
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-3 mt-2 text-xs text-gray-700 leading-relaxed">
            <div className="flex items-start gap-2">
              <Info size={14} className="text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                Position created on <span className="font-medium">{selectedPosition.mtfDetails.positionCreatedDate}</span>. 
                Interest accrues from T+1 trading day (<span className="font-medium">{selectedPosition.mtfDetails.t1StartDate}</span>). 
                Weekends and holidays are included after T+1.
              </div>
            </div>
          </div>
        </div>

        {/* Day-wise List */}
        <div className="px-4 py-2">
          <div className="text-xs font-medium text-gray-500 mb-2">Interest Calculation</div>
          <div className="space-y-2">
            {interestData.map((day, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-3">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{day.date}</div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs text-gray-500">{day.day}</span>
                      {!day.tradingDay && (
                        <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">
                          Non-trading
                        </span>
                      )}
                      {day.note && (
                        <span className="text-xs text-gray-500">• {day.note}</span>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-sm font-semibold ${day.interest > 0 ? 'text-orange-600' : 'text-gray-400'}`}>
                      ₹{day.interest.toFixed(2)}
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">
                      Total: ₹{runningTotal[index].toFixed(2)}
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <div>
                      <span className="text-gray-500">Exposure: </span>
                      <span className="text-gray-900 font-medium">₹{day.exposure.toFixed(2)}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Rate: </span>
                      <span className="text-gray-900 font-medium">{day.rate}%</span>
                    </div>
                  </div>
                </div>

                {day.interest > 0 && (
                  <div className="mt-2 text-xs text-gray-500 font-mono bg-gray-50 p-2 rounded">
                    (₹{day.exposure.toFixed(2)} × {day.rate}% ÷ 365) = ₹{day.interest.toFixed(2)}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="h-16"></div>
      </div>
    );
  }

  // Position Details Screen
  if (currentScreen === 'details' && selectedPosition) {
    return (
      <div className="bg-white min-h-screen pb-20">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <button onClick={backToPositions} className="text-gray-700">
              <ChevronLeft size={24} />
            </button>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-semibold text-gray-900">{selectedPosition.symbol}</h1>
                <span className="px-1.5 py-0.5 bg-blue-50 text-blue-700 text-xs font-medium rounded">
                  MTF
                </span>
              </div>
              <div className="text-xs text-gray-500 mt-0.5">{selectedPosition.companyName}</div>
            </div>
          </div>
        </div>

        {/* Price & P&L Section */}
        <div className="px-4 py-3 bg-gray-50">
          <div className="bg-white rounded-lg p-3">
            <div className="flex justify-between items-center mb-3">
              <div>
                <div className="text-xs text-gray-500 mb-1">LTP</div>
                <div className="text-2xl font-semibold text-gray-900">₹{selectedPosition.ltp.toFixed(2)}</div>
              </div>
              <div className="text-right">
                <div className={`text-lg font-semibold ${selectedPosition.pnl >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                  {selectedPosition.pnl >= 0 ? '+' : ''}₹{selectedPosition.pnl.toFixed(2)}
                </div>
                <div className={`text-sm flex items-center justify-end gap-1 ${selectedPosition.pnl >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                  {selectedPosition.pnl >= 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                  {selectedPosition.pnlPercent >= 0 ? '+' : ''}{selectedPosition.pnlPercent}%
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Position Details Section */}
        <div className="px-4 py-3">
          <div className="bg-white rounded-lg p-3 mb-3">
            <h3 className="text-sm font-semibold text-gray-900 mb-2">Position Details</h3>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-600">Net shares</span>
                <span className="font-medium text-gray-900">{selectedPosition.qty}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Avg. price</span>
                <span className="font-medium text-gray-900">₹{selectedPosition.avgPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">LTP</span>
                <span className="font-medium text-gray-900">₹{selectedPosition.ltp.toFixed(2)}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-gray-100">
                <span className="text-gray-600">P&L</span>
                <span className={`font-semibold ${selectedPosition.pnl >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                  {selectedPosition.pnl >= 0 ? '+' : ''}₹{selectedPosition.pnl.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* MTF Interest Details */}
          <div className="bg-white rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold text-gray-900">MTF Interest Breakdown</h3>
              <button 
                onClick={() => setShowInterestBreakdown(!showInterestBreakdown)}
                className="text-blue-600"
              >
                <Info size={16} />
              </button>
            </div>

            {showInterestBreakdown && (
              <div className="mb-3 p-2 bg-blue-50 rounded text-xs text-gray-700 leading-relaxed">
                Interest is calculated from T+1 trading day. For this position, interest started accruing from {selectedPosition.mtfDetails.t1StartDate}. 
                Rate may vary based on your plan.
              </div>
            )}

            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-600">Total MTF exposure</span>
                <span className="font-medium text-gray-900">₹{selectedPosition.mtfDetails.totalExposure.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between items-start">
                <span className="text-gray-600">Initial margin funded by</span>
                <div className="text-right">
                  <div className="font-medium text-gray-900">₹{selectedPosition.mtfDetails.fundedBy.cash.toFixed(2)}</div>
                  <div className="text-gray-500 text-xs">Cash</div>
                </div>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Interest rate</span>
                <span className="font-medium text-gray-900">{selectedPosition.mtfDetails.interestRate}% p.a.</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Days held</span>
                <span className="font-medium text-gray-900">{selectedPosition.mtfDetails.daysHeld} days</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Per day interest</span>
                <span className="font-medium text-orange-600">₹{selectedPosition.mtfDetails.perDayInterest.toFixed(2)}</span>
              </div>

              <div 
                className="flex justify-between pt-2 border-t border-gray-100 cursor-pointer active:bg-gray-50 -mx-3 px-3 py-2 rounded"
                onClick={openDayWiseView}
              >
                <span className="text-gray-600 font-medium">Total interest accrued</span>
                <div className="flex items-center gap-1">
                  <span className="font-semibold text-orange-600">₹{selectedPosition.mtfDetails.totalInterestAccrued.toFixed(2)}</span>
                  <ChevronRight size={14} className="text-blue-600" />
                </div>
              </div>

              <button
                onClick={openDayWiseView}
                className="text-xs text-blue-600 font-medium underline active:text-blue-700"
              >
                View day-wise calculation
              </button>

              <div className="mt-3 p-2 bg-amber-50 rounded">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Break-even price</span>
                  <span className="font-semibold text-gray-900">₹{selectedPosition.mtfDetails.breakEvenPrice.toFixed(2)}</span>
                </div>
                <div className="text-xs text-gray-600 mt-1">
                  (Avg. price + Interest per share)
                </div>
              </div>
            </div>

            {/* Convert to CNC Button */}
            <button className="w-full mt-3 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg active:bg-blue-700">
              Convert to CNC
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Main Positions Screen
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold text-gray-900">Positions</h1>
            <div className="flex items-center gap-4 mt-1">
              <span className="text-sm text-gray-600">MTF Book: ₹42,805.50</span>
              <span className="text-sm text-emerald-600 font-medium">+₹2,065.00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Positions List */}
      <div className="divide-y divide-gray-100">
        {positions.map((position) => (
          <div 
            key={position.id} 
            className="bg-white px-4 py-3 cursor-pointer active:bg-gray-50"
            onClick={() => openDetailsView(position)}
          >
            <div className="flex justify-between items-start mb-2">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-base font-semibold text-gray-900">{position.symbol}</span>
                  <span className="px-1.5 py-0.5 bg-blue-50 text-blue-700 text-xs font-medium rounded">
                    MTF
                  </span>
                </div>
                <div className="text-xs text-gray-500 mt-0.5">{position.companyName}</div>
              </div>
              <div className="text-right">
                <div className="text-base font-semibold text-gray-900">₹{position.ltp.toFixed(2)}</div>
                <div className={`text-xs mt-0.5 flex items-center justify-end gap-1 ${position.pnl >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                  {position.pnl >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                  {position.pnlPercent >= 0 ? '+' : ''}{position.pnlPercent}%
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center text-xs">
              <div className="flex gap-4">
                <div>
                  <span className="text-gray-500">Qty: </span>
                  <span className="text-gray-900 font-medium">{position.qty}</span>
                </div>
                <div>
                  <span className="text-gray-500">Avg: </span>
                  <span className="text-gray-900 font-medium">₹{position.avgPrice.toFixed(2)}</span>
                </div>
              </div>
              <div className={`font-semibold ${position.pnl >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                {position.pnl >= 0 ? '+' : ''}₹{position.pnl.toFixed(2)}
              </div>
            </div>

            {/* MTF Interest Summary Row */}
            <div className="mt-2 pt-2 border-t border-gray-100 flex justify-between items-center">
              <div className="flex items-center gap-1">
                <span className="text-xs text-gray-500">MTF Interest:</span>
                <span className="text-xs font-semibold text-orange-600">
                  ₹{position.mtfDetails.totalInterestAccrued.toFixed(2)}
                </span>
                <span className="text-xs text-gray-400">({position.mtfDetails.daysHeld}d)</span>
              </div>
              <div className="flex items-center gap-1 text-blue-600">
                <span className="text-xs font-medium">View details</span>
                <ChevronRight size={14} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 flex justify-around">
        <button className="flex flex-col items-center py-2 text-gray-400">
          <div className="w-6 h-6 mb-1"></div>
          <span className="text-xs">Home</span>
        </button>
        <button className="flex flex-col items-center py-2 text-gray-400">
          <div className="w-6 h-6 mb-1"></div>
          <span className="text-xs">Watchlist</span>
        </button>
        <button className="flex flex-col items-center py-2 text-gray-400">
          <div className="w-6 h-6 mb-1"></div>
          <span className="text-xs">Orders</span>
        </button>
        <button className="flex flex-col items-center py-2 text-blue-600">
          <div className="w-6 h-6 mb-1"></div>
          <span className="text-xs font-medium">Portfolio</span>
        </button>
        <button className="flex flex-col items-center py-2 text-gray-400">
          <div className="w-6 h-6 mb-1"></div>
          <span className="text-xs">Invest</span>
        </button>
      </div>
    </div>
  );
};

export default MTFPositionInterest;