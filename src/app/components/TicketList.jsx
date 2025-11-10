'use client';

import TicketCard from './TicketCard';

export default function TicketList({ tickets, onAddToQueue, queue }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Tickets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tickets.map((ticket) => (
          <TicketCard
            key={ticket.id}
            ticket={ticket}
            onAddToQueue={onAddToQueue}
            isInQueue={queue[ticket.id] || false}
          />
        ))}
      </div>
    </div>
  );
}