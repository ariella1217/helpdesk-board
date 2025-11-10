'use client';

export default function TicketCard({ ticket, onAddToQueue, isInQueue }) {
  const priorityColors = {
    Low: 'text-green-600',
    Medium: 'text-yellow-600',
    High: 'text-orange-600',
    Critical: 'text-red-600'
  };

  const statusColors = {
    Open: 'text-blue-600',
    'In Progress': 'text-purple-600',
    'On Hold': 'text-gray-600',
    Resolved: 'text-green-600'
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <div className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-2">
        <span className={`text-sm font-medium ${priorityColors[ticket.priority]}`}>
          Priority: {ticket.priority}
        </span>
        <span className="mx-2 text-gray-400">•</span>
        <span className={`text-sm font-medium ${statusColors[ticket.status]}`}>
          Status: {ticket.status}
        </span>
      </div>

      <h3 className="text-lg font-semibold mb-2">{ticket.title}</h3>
      
      <p className="text-gray-600 text-sm mb-3">{ticket.description}</p>

      <div className="text-xs text-gray-500 mb-3">
        <div>Assignee: {ticket.assignee}</div>
        <div>Updated: {formatDate(ticket.updatedAt)}</div>
      </div>

      <button
        onClick={() => onAddToQueue(ticket.id)}
        disabled={isInQueue}
        className={`w-full py-2 px-4 rounded-md font-medium transition-colors ${
          isInQueue
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        {isInQueue ? 'Already in Queue' : 'Add to My Queue'}
      </button>

      {isInQueue && (
        <p className="text-xs text-gray-500 mt-2 text-center">
          This ticket is in your queue
        </p>
      )}
    </div>
  );
}