
"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GitBranch } from "lucide-react"

export function ExamplePrompts({ setPrompt }: { setPrompt: (prompt: string) => void }) {
  const examplePrompts = [
    "Send a Slack notification when a new customer signs up",
    "Sync data between Google Sheets and Airtable daily",
    "Process incoming emails and create Trello cards",
    "Monitor website uptime and alert via Discord",
  ]

  return (
    <Card className="mb-8 border-orange-100">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-gray-900">
          <GitBranch className="w-5 h-5 text-orange-600" />
          Example Workflows
        </CardTitle>
        <CardDescription>Get inspired by these common automation scenarios</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3">
          {examplePrompts.map((example, index) => (
            <button
              key={index}
              onClick={() => setPrompt(example)}
              className="text-left p-4 rounded-lg border border-orange-100 hover:border-orange-300 hover:bg-orange-50 transition-colors group"
            >
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 group-hover:bg-orange-600" />
                <p className="text-gray-700 group-hover:text-gray-900">{example}</p>
              </div>
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
