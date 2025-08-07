
import { Card, CardContent } from "@/components/ui/card"
import { Workflow, Database, Zap } from "lucide-react"

const features = [
  {
    icon: Workflow,
    title: "Smart Templates",
    description: "AI-generated workflows tailored to your specific automation needs.",
  },
  {
    icon: Database,
    title: "500+ Integrations",
    description: "Connect with all your favorite apps and services seamlessly.",
  },
  {
    icon: Zap,
    title: "Instant Setup",
    description: "Ready-to-use templates that you can import directly into n8n.",
  },
]

export function Features() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {features.map((feature, i) => (
        <Card key={i} className="border-gray-200 hover:shadow-lg transition-shadow duration-300 dark:border-gray-800 dark:bg-gray-950">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
              <feature.icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
