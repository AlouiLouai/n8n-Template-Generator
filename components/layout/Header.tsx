
import { Workflow } from "lucide-react";

export function Header() {
  return (
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
  );
}
