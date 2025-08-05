
import { Badge } from "@/components/ui/badge";

export function Footer() {
  return (
    <footer className="border-t border-orange-100 bg-white/50 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-gray-600">
          <p className="mb-2">Built for the n8n community</p>
          <div className="flex justify-center gap-4 text-sm">
            <Badge variant="secondary" className="bg-orange-100 text-orange-700">
              Open Source
            </Badge>
            <Badge variant="secondary" className="bg-orange-100 text-orange-700">
              Community Driven
            </Badge>
          </div>
        </div>
      </div>
    </footer>
  );
}
