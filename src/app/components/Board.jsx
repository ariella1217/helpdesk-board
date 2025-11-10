'use client';

import { useState, useEffect } from 'react';
import StatusFilter from './StatusFilter';
import PriorityFilter from './PriorityFilter';
import SearchBox from './SearchBox';
import TicketList from './TicketList';
import MyQueueSummary from './MyQueueSummary';
import StatusMessage from './StatusMessage';

export default function Board() {
  // State
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [filters, setFilters] = useState({
    status: 'All',
    priority: 'All'
  });
  const [search, setSearch] = useState('');
  const [queue, setQueue] = useState({});

  // Effect #1: Fetch tickets
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await fetch('/api/tickets');
        if (!response.ok) {
          throw new Error('Failed to fetch tickets');
        }
        const data = await response.json();
        setTickets(data);
      } catch (err) {
        console.error('Error fetching tickets:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  // Effect #2: live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setTickets((prevTickets) => {
        if (prevTickets.length === 0) return prevTickets;

        // Pick a random ticket
        const randomIndex = Math.floor(Math.random() * prevTickets.length);
        const updatedTickets = [...prevTickets];
        const ticket = { ...updatedTickets[randomIndex] };

        // Randomly update status or priority
        const shouldUpdateStatus = Math.random() > 0.5;

        if (shouldUpdateStatus) {
          // Update status realistically
          const statusTransitions = {
            'Open': ['In Progress', 'On Hold'],
            'In Progress': ['On Hold', 'Resolved'],
            'On Hold': ['In Progress', 'Open'],
            'Resolved': ['Open'] // Can be reopened
          };
          const possibleStatuses = statusTransitions[ticket.status];
          if (possibleStatuses && possibleStatuses.length > 0) {
            ticket.status = possibleStatuses[Math.floor(Math.random() * possibleStatuses.length)];
          }
        } else {

          // Update priority
          const priorities = ['Low', 'Medium', 'High', 'Critical'];
          const currentIndex = priorities.indexOf(ticket.priority);

          // Can go up or down one level
          const possibleIndices = [];
          if (currentIndex > 0) possibleIndices.push(currentIndex - 1);
          if (currentIndex < priorities.length - 1) possibleIndices.push(currentIndex + 1);
          if (possibleIndices.length > 0) {
            const newIndex = possibleIndices[Math.floor(Math.random() * possibleIndices.length)];
            ticket.priority = priorities[newIndex];
          }
        }

        // Update timestamp
        ticket.updatedAt = new Date().toISOString();
        updatedTickets[randomIndex] = ticket;

        return updatedTickets;
      });
    }, 7000);

    return () => clearInterval(interval);
  }, []);

    // Get visible tickets
  const visibleTickets = tickets.filter((ticket) => {
    // Filter by status
    if (filters.status !== 'All' && ticket.status !== filters.status) {
      return false;
    }

    // Filter by priority
    if (filters.priority !== 'All' && ticket.priority !== filters.priority) {
      return false;
    }

    // Filter by search
    if (search) {
      const searchLower = search.toLowerCase();
      const titleMatch = ticket.title.toLowerCase().includes(searchLower);
      const descMatch = ticket.description.toLowerCase().includes(searchLower);
      if (!titleMatch && !descMatch) {
        return false;
      }
    }

    return true;
  });

  // Handlers
  const handleStatusChange = (value) => {
    setFilters((prev) => ({ ...prev, status: value }));
  };

  const handlePriorityChange = (value) => {
    setFilters((prev) => ({ ...prev, priority: value }));
  };

  const handleSearchChange = (value) => {
    setSearch(value);
  };

  const handleAddToQueue = (ticketId) => {
    setQueue((prev) => ({ ...prev, [ticketId]: true }));
  };

  const handleRemoveFromQueue = (ticketId) => {
    setQueue((prev) => {
      const newQueue = { ...prev };
      delete newQueue[ticketId];
      return newQueue;
    });
  };

  const handleClearQueue = () => {
    setQueue({});
  };

  const isEmpty = !loading && !error && visibleTickets.length === 0;

  return (
    <div>
      {/* Filters and Search */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatusFilter value={filters.status} onChange={handleStatusChange} />
        <PriorityFilter value={filters.priority} onChange={handlePriorityChange} />
        <SearchBox value={search} onChange={handleSearchChange} />
      </div>

      {/* My Queue Summary */}
      <MyQueueSummary
        queue={queue}
        tickets={tickets}
        onRemove={handleRemoveFromQueue}
        onClear={handleClearQueue}
      />

      {/* Status Messages */}
      <StatusMessage loading={loading} error={error} isEmpty={isEmpty} />

      {/* Ticket List */}
      {!loading && !error && visibleTickets.length > 0 && (
        <TicketList
          tickets={visibleTickets}
          onAddToQueue={handleAddToQueue}
          queue={queue}
        />
      )}
    </div>
  );
}