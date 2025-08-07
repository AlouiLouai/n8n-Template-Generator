
import { Sparkles } from "lucide-react";

export function Hero() {
  return (
    <div className="text-center py-16">
      <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
        <Sparkles className="w-4 h-4" />
        Powered by Generative AI
      </div>
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-gray-100 mb-6 leading-tight">
        Describe Your Workflow,
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-500">
          Get Instant n8n Templates
        </span>
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
        Transform your automation ideas into ready-to-use n8n workflows. Just describe what you want to automate in plain English, and we&apos;ll generate the perfect template for you.
      </p>
    </div>
  );
}
