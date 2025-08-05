
import { Sparkles } from "lucide-react";

export function Hero() {
  return (
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
        and we&apos;ll generate the perfect template for you.
      </p>
    </div>
  );
}
