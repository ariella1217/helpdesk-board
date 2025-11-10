'use client';

export default function SearchBox({ value, onChange }) {
  return (
    <div>
      <label htmlFor="search-box" className="block text-sm font-medium mb-1">
        Search
      </label>
      <input
        id="search-box"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search title or description"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}