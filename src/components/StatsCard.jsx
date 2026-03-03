function StatsCard({ title, value }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6 border border-gray-100">
      <p className="text-sm text-gray-500 mb-2">{title}</p>
      <h2 className="text-3xl font-bold text-gray-800">{value}</h2>
    </div>
  );
}

export default StatsCard;
