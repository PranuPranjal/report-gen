'use client'

import { useState } from 'react'

export default function ReportForm({ onSubmit, isGenerating }) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (query.trim()) {
      onSubmit(query)
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Generate Report</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="query" className="block text-sm font-medium text-gray-700 mb-2">
            Enter your research query
          </label>
          <textarea
            id="query"
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., Analyze the impact of artificial intelligence on healthcare in the next decade"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            disabled={isGenerating}
          />
        </div>
        <button
          type="submit"
          disabled={isGenerating || !query.trim()}
          className={`w-full py-2 px-4 rounded-md text-white font-medium ${
            isGenerating || !query.trim()
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {isGenerating ? 'Generating Report...' : 'Generate Report'}
        </button>
      </form>
    </div>
  )
} 