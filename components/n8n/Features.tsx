
import { Card, CardContent } from "@/components/ui/card"
import { Workflow, Database, Zap } from "lucide-react"

export function Features() {
  return (
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
  )
}
