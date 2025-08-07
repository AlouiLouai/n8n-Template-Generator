
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
    <Card className="mb-12 shadow-xl border-2 border-gray-100 dark:border-gray-800 dark:bg-gray-950 w-full max-w-4xl mx-auto">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Generated Workflow</h3>
          <div className="flex items-center gap-2">
            <Button size="sm" onClick={handleCopy} variant="outline" className="text-primary border-primary/50 hover:bg-primary/10 hover:text-primary dark:text-primary-foreground dark:border-primary/70 dark:hover:bg-primary/20">
              {copied ? <Check className="w-4 h-4 mr-1.5" /> : <Copy className="w-4 h-4 mr-1.5" />}
              {copied ? "Copied" : "Copy"}
            </Button>
            <Button size="sm" onClick={handleDownload} className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Download className="w-4 h-4 mr-1.5" />
              Download
            </Button>
          </div>
        </div>
        <div className="relative rounded-lg bg-stone-900 text-white p-4 font-mono text-sm overflow-auto">
          <pre className="overflow-x-auto"><code>{displayedLines}</code></pre>
          {templateLines.length > linesToShow && (
            <div
              className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-stone-900 to-transparent cursor-pointer flex justify-center items-end pb-3"
              onMouseEnter={() => setLinesToShow(linesToShow + INCREMENT_LINES)}
            >
              <ChevronsDown className="w-6 h-6 text-primary animate-bounce" />
            </div>
          )}
        </div>
        <div className="mt-6 text-center">
          <Button onClick={onClear} className="bg-gradient-to-r from-primary to-red-500 hover:from-primary/90 hover:to-red-500/90 text-white text-lg font-bold py-3 px-8 shadow-lg transition-transform transform hover:scale-105">
            <Zap className="w-5 h-5 mr-2" />
            Generate Another Workflow
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
