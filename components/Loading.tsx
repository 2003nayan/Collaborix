export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center gap-2">
        <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        <p className="text-lg font-medium text-gray-500 dark:text-gray-400">
          Loading...
        </p>
      </div>
    </div>
  );
}
