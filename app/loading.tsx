
import LoadingIndicator from "@/components/n8n/LoadingIndicator";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <LoadingIndicator />
      <p className="mt-4 text-lg text-gray-600">Loading application...</p>
    </div>
  );
}
