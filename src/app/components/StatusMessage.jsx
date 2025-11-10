'use client';

export default function StatusMessage({ loading, error, isEmpty }) {
  if (loading) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Loading tickets...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600">Unable to load tickets. Please try again later.</p>
      </div>
    );
  }

  if (isEmpty) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No tickets match your filters.</p>
      </div>
    );
  }

  return null;
}