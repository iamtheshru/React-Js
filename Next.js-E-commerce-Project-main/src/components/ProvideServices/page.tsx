"use client";

export default function ProvideServices() {
  const features = [
    {
      img: '/img/truck.svg',
      title: "Free Shipping",
      description: "Above all Orders over 200rs."
    },
    {
      img: '/img/indian-rupee.svg',
      title: "Money Guarantee",
      description: "45 Days for Exchange"
    },
    {
      img: '/img/headphones.svg',
      title: "Online Support",
      description: "24/7 Customer Care"
    },
    {
      img: '/img/credit-card.svg',
      title: "Flexible Payment",
      description: "Pay with multiple Credit Card"
    }
  ];

  return (
    <section className="py-10 ">
      <div className="main_container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 py-6 ${index !== features.length - 1 ? "border-r border-[#E2E8F0]" : ""
                } md:justify-center`}
            >
              <div className="flex-shrink-0">
                <img src={feature.img} alt="" />
              </div>
              <div>
                <h3 className="text-[#1E293B] font-bold text-lg">{feature.title}</h3>
                <p className="text-[#64748B] text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}