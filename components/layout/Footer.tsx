
export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 mt-16">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} n8n Template Generator. All rights reserved.</p>
          <p>Built with ❤️ for the n8n community.</p>
        </div>
      </div>
    </footer>
  );
}
