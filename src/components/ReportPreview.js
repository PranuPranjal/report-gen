'use client'

import ReactMarkdown from 'react-markdown'

export default function ReportPreview({ report }) {
  if (!report) return null

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">{report.title}</h2>
      <div className="prose max-w-none">
        <ReactMarkdown>{report.content}</ReactMarkdown>
      </div>
      
      {report.citations && report.citations.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Citations</h3>
          <ul className="list-disc pl-5 space-y-2">
            {report.citations.map((citation, index) => (
              <li key={index} className="text-sm text-gray-600">
                {citation}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <div className="mt-6 flex justify-end">
        <button
          onClick={() => window.print()}
          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-700 font-medium"
        >
          Export as PDF
        </button>
      </div>
    </div>
  )
} 