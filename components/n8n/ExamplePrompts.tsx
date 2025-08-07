
"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GitBranch, ArrowRight } from "lucide-react"

export function ExamplePrompts({ setPrompt }: { setPrompt: (prompt: string) => void }) {
  const examplePrompts = [
    "Send a Slack notification when a new customer signs up",
    "Sync data between Google Sheets and Airtable daily",
    "Process incoming emails and create Trello cards",
    "Monitor website uptime and alert via Discord",
  ]

  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Not sure where to start?</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {examplePrompts.map((example, index) => (
          <button
            key={index}
            onClick={() => setPrompt(example)}
            className="text-left p-4 rounded-lg border border-gray-200 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group flex items-center"
          >
            <p className="text-gray-700 group-hover:text-gray-900 flex-grow">{example}</p>
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-transform duration-300 transform -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
          </button>
        ))}
      </div>
    </div>
  )
}
