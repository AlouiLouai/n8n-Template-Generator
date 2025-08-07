
import { Workflow } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50 dark:border-gray-700 dark:bg-gray-900/80">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-primary to-red-500 rounded-lg flex items-center justify-center shadow-md">
            <Workflow className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">n8n Template Generator</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">AI-Powered Workflow Automation</p>
          </div>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
