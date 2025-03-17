"use client";
export default function Categories() {
  const categories = [
    { img:'/img/men.svg', label: "Men" },
    { img:'/img/women.svg', label: "Women" },
    { img:'/img/Kids.svg', label: "Kids" },
    { img:'/img/Cosmetics.svg', label: "Cosmetics" },
    { img:'/img/Accessories.svg', label: "Accessories" },
    { img:'/img/Home.svg', label: "Home" },
    { img:'/img/Footwears.svg', label: "Footwears" },
    { img:'/img/Sports.svg', label: "Sports" }
  ];

  return (
    <section className="py-10 max-w-11/12 mx-auto categories_sec">
      <div className='main_container'>
        <h2 className="second_tital mb-6">Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center shadow-md">
                  <img src={category.img} alt="" />
              </div>
              <p className="text-[#1E293B] font-medium">{category.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}