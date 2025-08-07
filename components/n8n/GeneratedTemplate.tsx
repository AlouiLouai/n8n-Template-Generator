
"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Copy, Download, ChevronsDown, Zap } from "lucide-react"
import { useToast } from "../ui/use-toast"

interface GeneratedTemplateProps {
  template: object
  onClear: () => void
}

const INITIAL_LINES = 20
const INCREMENT_LINES = 40

export function GeneratedTemplate({ template, onClear }: GeneratedTemplateProps) {
  const { toast } = useToast()
  const [copied, setCopied] = useState(false)
  const [linesToShow, setLinesToShow] = useState(INITIAL_LINES)

  const processedTemplate = useMemo(() => {
    return Array.isArray(template) ? template[0] : template
  }, [template])

  const templateString = useMemo(() => {
    return JSON.stringify(processedTemplate, null, 2)
  }, [processedTemplate])

  const templateLines = useMemo(() => {
    return templateString.split('\n')
  }, [templateString])

  const displayedLines = useMemo(() => {
    return templateLines.slice(0, linesToShow).join('\n')
  }, [templateLines, linesToShow])

  const handleCopy = () => {
    navigator.clipboard.writeText(templateString)
    setCopied(true)
    toast({ title: "Copied to clipboard!" })
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownload = () => {
    const workflowName = (processedTemplate as any)?.name || 'n8n-workflow'
    const sanitizedName = workflowName.replace(/[^a-z0-9_-\s]/gi, '_').replace(/\s+/g, '-')
    const blob = new Blob([templateString], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${sanitizedName}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    toast({ title: "Download started!" })
  }

  return (
    <Card className="mt-8 border-orange-200 shadow-lg w-full max-w-4xl mx-auto">
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-semibold text-gray-700">Generated Workflow</h3>
          <div className="flex items-center gap-2">
            <Button size="sm" onClick={handleCopy} className="bg-orange-500 hover:bg-orange-600 text-white">
              {copied ? <Check className="w-4 h-4 mr-1.5" /> : <Copy className="w-4 h-4 mr-1.5" />}
              {copied ? "Copied" : "Copy"}
            </Button>
            <Button size="sm" onClick={handleDownload} className="bg-orange-500 hover:bg-orange-600 text-white">
              <Download className="w-4 h-4 mr-1.5" />
              Download
            </Button>
          </div>
        </div>
        <div className="relative rounded-lg bg-gray-900 text-white p-4 overflow-auto">
          <pre className="overflow-x-auto"><code>{displayedLines}</code></pre>
          {templateLines.length > linesToShow && (
            <div
              className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent cursor-pointer flex justify-center items-end pb-3"
              onMouseEnter={() => setLinesToShow(linesToShow + INCREMENT_LINES)}
            >
              <ChevronsDown className="w-6 h-6 text-orange-400 animate-bounce" />
            </div>
          )}
        </div>
        <div className="mt-4 text-center">
          <Button onClick={onClear} className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold py-3 px-6">
            <Zap className="w-5 h-5 mr-2" />
            Generate Another Workflow
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
