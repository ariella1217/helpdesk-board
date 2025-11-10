
import Board from './components/Board';

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="text-3xl font-bold mb-4">Helpdesk Ticket Board</h1>
      <p className="text-gray-600 mb-6">Filter by status and priority, search by keyword, and add tickets to your queue.</p>
      <Board />
    </main>
  );
}
