import Link from 'next/link';

export default function SettingsPage() {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen flex flex-col">
      <header className="p-4 border-b border-gray-200 dark:border-gray-800 sticky top-0 bg-white dark:bg-gray-900 z-10 flex items-center">
        <Link href="/" className="mr-4 text-2xl">
          &larr;
        </Link>
        <h1 className="text-xl font-bold">Settings</h1>
      </header>

      <main className="p-4 md:p-6">
        <div className="space-y-8 max-w-md mx-auto">
          <div>
            <h2 className="text-lg font-semibold">Grouping Sensitivity</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              Adjust the time window for grouping photos (in seconds).
            </p>
            <div className="flex items-center gap-4">
              <span>1s</span>
              <input type="range" min="1" max="10" defaultValue="3" className="w-full" />
              <span>10s</span>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Automatic Grouping</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              Automatically group new photos as they are added to the gallery.
            </p>
            <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
              <span>Enable Automatic Grouping</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
