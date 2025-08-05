"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Workflow, ArrowRight, Zap, GitBranch, Database } from "lucide-react"

export default function N8nPromptGenerator() {
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

  const examplePrompts = [
    "Send a Slack notification when a new customer signs up",
    "Sync data between Google Sheets and Airtable daily",
    "Process incoming emails and create Trello cards",
    "Monitor website uptime and alert via Discord",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Header */}
      <header className="border-orange-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
              <Workflow className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">n8n Template Generator</h1>
              <p className="text-sm text-orange-600">AI-powered workflow automation</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Powered by AI
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Describe your workflow,
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              {" "}
              get n8n templates
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your automation ideas into ready-to-use n8n workflows. Just describe what you want to automate,
            and we'll generate the perfect template for you.
          </p>
        </div>

        {/* Generator Form */}
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

        {/* Example Prompts */}
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

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-orange-100 hover:border-orange-300 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Workflow className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Smart Templates</h3>
              <p className="text-gray-600 text-sm">AI-generated workflows tailored to your specific automation needs</p>
            </CardContent>
          </Card>

          <Card className="border-orange-100 hover:border-orange-300 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Database className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">500+ Integrations</h3>
              <p className="text-gray-600 text-sm">Connect with all your favorite apps and services seamlessly</p>
            </CardContent>
          </Card>

          <Card className="border-orange-100 hover:border-orange-300 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Instant Setup</h3>
              <p className="text-gray-600 text-sm">Ready-to-use templates that you can import directly into n8n</p>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-orange-100 bg-white/50 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            <p className="mb-2">Built for the n8n community</p>
            <div className="flex justify-center gap-4 text-sm">
              <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                Open Source
              </Badge>
              <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                Community Driven
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
