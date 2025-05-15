'use client'

import { useState } from 'react'

export default function TimeTravelSection({ report }) {
  const [timeTravelReport, setTimeTravelReport] = useState(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [targetYear, setTargetYear] = useState('')

  const generateTimeTravelReport = async (direction) => {
    if (!report || !targetYear) return
    
    setIsGenerating(true)
    // TODO: Implement time travel report generation
    // For now, we'll just simulate a delay
    setTimeout(() => {
      setTimeTravelReport({
        title: `${report.title} (${direction === 'past' ? 'Historical' : 'Future'} Perspective)`,
        content: `This is a ${direction === 'past' ? 'historical' : 'future'} perspective of the report...`,
        year: targetYear,
        direction
      })
      setIsGenerating(false)
    }, 2000)
  }

  if (!report) return null

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Time Travel Reports</h2>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-2">
            Target Year
          </label>
          <input
            type="number"
            id="year"
            value={targetYear}
            onChange={(e) => setTargetYear(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 2010 or 2030"
            min="1900"
            max="2100"
          />
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => generateTimeTravelReport('past')}
            disabled={isGenerating || !targetYear}
            className={`flex-1 py-2 px-4 rounded-md text-white font-medium ${
              isGenerating || !targetYear
                ? 'bg-gray-400'
                : 'bg-yellow-600 hover:bg-yellow-700'
            }`}
          >
            View Past Perspective
          </button>
          
          <button
            onClick={() => generateTimeTravelReport('future')}
            disabled={isGenerating || !targetYear}
            className={`flex-1 py-2 px-4 rounded-md text-white font-medium ${
              isGenerating || !targetYear
                ? 'bg-gray-400'
                : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            View Future Perspective
          </button>
        </div>
      </div>

      {timeTravelReport && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-medium mb-2">{timeTravelReport.title}</h3>
          <p className="text-gray-700">{timeTravelReport.content}</p>
          <div className="mt-2 text-sm text-gray-500">
            Generated for year: {timeTravelReport.year}
          </div>
        </div>
      )}
    </div>
  )
} 