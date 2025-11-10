'use client';

export default function StatusFilter({ value, onChange }) {
  return (
    <div>
      <label htmlFor="status-filter" className="block text-sm font-medium mb-1">
        Status
      </label>
      <select
        id="status-filter"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="All">All</option>
        <option value="Open">Open</option>
        <option value="In Progress">In Progress</option>
        <option value="On Hold">On Hold</option>
        <option value="Resolved">Resolved</option>
      </select>
    </div>
  );
}