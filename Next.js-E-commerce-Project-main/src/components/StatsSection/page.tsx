"use client";

export default function StatsSection() {
  const stats = [
    { value: "95%", label: "Happy Customer" },
    { value: "1 Million+", label: "Yearly Sale" },
    { value: "20k+", label: "Customer Rating" },
  ];

  return (
    <section className="w-full flex justify-center py-10 bg-white  mx-auto stats_section">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full main_container px-2">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-[#F1F5F9] p-6 rounded-lg text-center shadow-sm"
          >
            <h2 className="text-2xl font-bold text-[#1E293B]">{stat.value}</h2>
              <p className="text-[#1E293B] text-sm mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
