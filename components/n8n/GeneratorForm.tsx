
"use client"

import { useState, useRef } from "react"
import { generateTemplate } from "@/app/actions/generateTemplate"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, ArrowRight, Loader } from "lucide-react"
import { useToast } from "../ui/use-toast"
import LoadingIndicator from "./LoadingIndicator"

export function GeneratorForm({ onTemplateGenerated }: { onTemplateGenerated: (template: object) => void }) {
  const [isGenerating, setIsGenerating] = useState(false)
  const { toast } = useToast()
  const formRef = useRef<HTMLFormElement>(null)
  const [prompt, setPrompt] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!prompt.trim()) return

    setIsGenerating(true)
    const formData = new FormData()
    formData.append("prompt", prompt)

    const result = await generateTemplate(null, formData)

    setIsGenerating(false)

    if (result.success) {
      toast({
        title: "Template Generated!",
        description: "Your n8n template has been successfully generated.",
      })
      onTemplateGenerated(result.success)
    } else if (result.error) {
      toast({
        title: "Error",
        description: result.error,
        variant: "destructive",
      })
    }
  }

  if (isGenerating) {
    return (
      <div className="flex flex-col items-center justify-center h-64 dark:bg-gray-900">
        <LoadingIndicator />
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Generating your workflow...</p>
      </div>
    )
  }

  return (
    <Card className="mb-12 shadow-xl border-2 border-gray-100 dark:border-gray-800 dark:bg-gray-950">
      <CardContent className="p-8">
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="prompt" className="block text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
              What workflow do you want to automate?
            </label>
            <Textarea
              id="prompt"
              name="prompt"
              placeholder="e.g., When a new row is added to my Google Sheet, send a custom email through Gmail and then post a message to a Slack channel..."
              className="min-h-[140px] text-base p-4 border-gray-300 focus:border-primary focus:ring-primary/50 shadow-sm dark:bg-gray-800 dark:text-gray-50 dark:border-gray-700"
              required
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
              Be as specific as possible. Include the apps you want to connect and the actions you want to perform.
            </p>
          </div>
          <Button
            type="submit"
            disabled={!prompt.trim() || isGenerating}
            className="w-full bg-gradient-to-r from-primary to-red-500 hover:from-primary/90 hover:to-red-500/90 text-white font-bold py-4 text-lg shadow-lg transition-transform transform hover:scale-105"
          >
            {isGenerating ? (
              <>
                <Loader className="w-6 h-6 animate-spin mr-3" />
                Generating Template...
              </>
            ) : (
              <>
                <Zap className="w-6 h-6 mr-3" />
                Generate n8n Template
                <ArrowRight className="w-6 h-6 ml-auto" />
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
