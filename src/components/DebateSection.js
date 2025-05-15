'use client'

import { useState } from 'react'

export default function DebateSection({ topic }) {
  const [debate, setDebate] = useState(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const generateDebate = async () => {
    if (!topic) return
    
    setIsGenerating(true)
    // TODO: Implement AI debate generation
    // For now, we'll just simulate a delay
    setTimeout(() => {
      setDebate({
        topic,
        participants: [
          {
            name: 'Albert Einstein',
            avatar: '/avatars/einstein.png',
            position: 'pro',
            argument: 'Sample pro argument...'
          },
          {
            name: 'Marie Curie',
            avatar: '/avatars/curie.png',
            position: 'con',
            argument: 'Sample con argument...'
          }
        ]
      })
      setIsGenerating(false)
    }, 2000)
  }

  if (!topic) return null

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">AI Debate Panel</h2>
      
      {!debate && (
        <button
          onClick={generateDebate}
          disabled={isGenerating}
          className={`w-full py-2 px-4 rounded-md text-white font-medium ${
            isGenerating ? 'bg-gray-400' : 'bg-purple-600 hover:bg-purple-700'
          }`}
        >
          {isGenerating ? 'Generating Debate...' : 'Generate Debate'}
        </button>
      )}

      {debate && (
        <div className="space-y-6">
          <div className="text-lg font-medium text-gray-700">
            Topic: {debate.topic}
          </div>
          
          <div className="space-y-4">
            {debate.participants.map((participant, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg ${
                  participant.position === 'pro' ? 'bg-green-50' : 'bg-red-50'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-gray-200">
                    {/* Avatar placeholder */}
                  </div>
                  <div>
                    <div className="font-medium">{participant.name}</div>
                    <div className="text-sm text-gray-500">
                      {participant.position === 'pro' ? 'Pro' : 'Con'}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">{participant.argument}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
} 