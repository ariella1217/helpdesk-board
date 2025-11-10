'use client';

export default function PriorityFilter({ value, onChange }) {
  return (
    <div>
      <label htmlFor="priority-filter" className="block text-sm font-medium mb-1">
        Priority
      </label>
      <select
        id="priority-filter"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="All">All</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
        <option value="Critical">Critical</option>
      </select>
    </div>
  );
}