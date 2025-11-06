import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-6">
      <div className="container mx-auto text-center px-4">
        <p className="text-gray-600 dark:text-gray-400">
          &copy; {year} Your Company. All rights reserved.
        </p>
        <div className="mt-2">
          <a href="/privacy" className="text-gray-600 dark:text-gray-400 hover:underline mr-4">Privacy Policy</a>
          <a href="/terms" className="text-gray-600 dark:text-gray-400 hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
