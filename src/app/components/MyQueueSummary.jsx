'use client';

export default function MyQueueSummary({ queue, tickets, onRemove, onClear }) {
  const queuedTickets = tickets.filter(ticket => queue[ticket.id]);
  const count = queuedTickets.length;

  return (
    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 mb-6">
      <h2 className="text-xl font-semibold mb-3">My Queue</h2>
      
      {count === 0 ? (
        <p className="text-gray-500">No tickets in your queue.</p>
      ) : (
        <>
          <p className="text-sm text-gray-600 mb-3">Selected: {count}</p>
          
          <ul className="space-y-2 mb-4">
            {queuedTickets.map((ticket) => (
              <li key={ticket.id} className="flex justify-between items-center bg-white p-2 rounded border border-gray-200">
                <span className="text-sm truncate flex-1">{ticket.title}</span>
                <button
                  onClick={() => onRemove(ticket.id)}
                  className="ml-2 text-red-600 hover:text-red-800 text-sm font-medium"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={onClear}
            className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
          >
            Clear Queue
          </button>
        </>
      )}
    </div>
  );
}