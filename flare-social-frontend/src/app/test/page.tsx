'use client';

import React from 'react';

export default function TestPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Tailwind Test Page</h1>
      
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Default Tailwind Colors</h2>
          <div className="flex space-x-2">
            <div className="w-20 h-20 bg-blue-500 rounded flex items-center justify-center text-white">blue-500</div>
            <div className="w-20 h-20 bg-red-500 rounded flex items-center justify-center text-white">red-500</div>
            <div className="w-20 h-20 bg-green-500 rounded flex items-center justify-center text-white">green-500</div>
            <div className="w-20 h-20 bg-yellow-500 rounded flex items-center justify-center text-white">yellow-500</div>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-2">Custom Brand Colors</h2>
          <div className="flex space-x-2">
            <div className="w-20 h-20 bg-[#E1407A] rounded flex items-center justify-center text-white">Raw HEX</div>
            <div className="w-20 h-20 bg-brand-pink rounded flex items-center justify-center text-white">brand-pink</div>
            <div className="w-20 h-20 bg-brand-navy rounded flex items-center justify-center text-white">brand-navy</div>
            <div className="w-20 h-20 bg-brand-gray rounded flex items-center justify-center text-white">brand-gray</div>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-2">Custom Components</h2>
          <div className="flex space-x-4 items-center">
            <button className="btn-primary">Primary Button</button>
            <button className="btn-outline">Outline Button</button>
            <input type="text" className="input-field" placeholder="Input field" />
          </div>
        </div>
      </div>
    </div>
  );
} 