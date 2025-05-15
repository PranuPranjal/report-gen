'use client'

import { useState } from 'react'
import ReportForm from '@/components/ReportForm'
import ReportPreview from '@/components/ReportPreview'
import DebateSection from '@/components/DebateSection'
import TimeTravelSection from '@/components/TimeTravelSection'

export default function Home() {
  const [report, setReport] = useState(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerateReport = async (query) => {
    setIsGenerating(true)
    // TODO: Implement Perplexity API integration
    // For now, we'll just simulate a delay
    setTimeout(() => {
      setReport({
        title: 'Sample Report',
        content: 'This is a sample report content.',
        citations: [],
        timestamp: new Date().toISOString()
      })
      setIsGenerating(false)
    }, 2000)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Expert Report Generator
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          <ReportForm onSubmit={handleGenerateReport} isGenerating={isGenerating} />
          {report && <ReportPreview report={report} />}
        </div>
        
        <div className="space-y-8">
          <DebateSection topic={report?.title} />
          <TimeTravelSection report={report} />
        </div>
      </div>
    </div>
  )
}
