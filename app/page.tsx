"use client"

import type React from "react"
import { useState } from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { GeneratorForm } from "@/components/n8n/GeneratorForm"
import { ExamplePrompts } from "@/components/n8n/ExamplePrompts"
import { Features } from "@/components/n8n/Features"
import { Hero } from "@/components/n8n/Hero"

import dynamic from 'next/dynamic';

const GeneratedTemplate = dynamic(() => import("@/components/n8n/GeneratedTemplate").then(mod => mod.GeneratedTemplate), { ssr: false });

export default function N8nPromptGenerator() {
  const [generatedTemplate, setGeneratedTemplate] = useState<object | null>(null)
  const [prompt, setPrompt] = useState("")

  const handleTemplateGenerated = (template: object) => {
    setGeneratedTemplate(template)
  }

  const handleClear = () => {
    setGeneratedTemplate(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800">
      <Header />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Hero />
        {generatedTemplate ? (
          <GeneratedTemplate template={generatedTemplate} onClear={handleClear} />
        ) : (
          <>
            <GeneratorForm onTemplateGenerated={handleTemplateGenerated} />
            <ExamplePrompts setPrompt={setPrompt} />
            <Features />
          </>
        )}
      </main>

      <Footer />
    </div>
  )
}