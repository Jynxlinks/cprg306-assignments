import ItemList from './item-list';

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-900 flex flex-col justify-center items-center p-8">
      <h1 className="text-6xl font-bold text-center mb-8">Shopping List</h1>
      <ItemList />
    </main>
  );
}
