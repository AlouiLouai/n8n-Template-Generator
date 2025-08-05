
"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, ArrowRight } from "lucide-react"

export function GeneratorForm() {
  const [prompt, setPrompt] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!prompt.trim()) return

    setIsGenerating(true)
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false)
      // Here you would typically send the prompt to your backend
      console.log("Generated workflow for:", prompt)
    }, 2000)
  }

  return (
    <Card className="mb-8 border-orange-200 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-t-lg">
        <CardTitle className="flex items-center gap-2">
          <Zap className="w-5 h-5" />
          Workflow Prompt Generator
        </CardTitle>
        <CardDescription className="text-purple-100">
          Describe your automation workflow in plain English
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
              What workflow do you want to automate?
            </label>
            <Textarea
              id="prompt"
              placeholder="Example: I want to automatically create a Notion page whenever someone fills out a contact form on my website, and then send a welcome email to the person..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="min-h-[120px] border-orange-200 focus:border-orange-500 focus:ring-orange-500"
              required
            />
            <p className="text-sm text-gray-500 mt-2">
              Be as specific as possible. Include the apps you want to connect and the actions you want to perform.
            </p>
          </div>

          <Button
            type="submit"
            disabled={!prompt.trim() || isGenerating}
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-medium py-3 text-lg"
          >
            {isGenerating ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                Generating Template...
              </>
            ) : (
              <>
                Generate n8n Template
                <ArrowRight className="w-5 h-5 ml-2" />
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
