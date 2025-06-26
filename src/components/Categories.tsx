import categories from '../assets/categories.svg';
import categories2 from '../assets/categories2.svg';
import cardImg5 from '../assets/cardImg5.svg';
import arrow1 from '../assets/arrow1.svg';
import Link from './Link'; // если ты используешь свою кастомную ссылку

const Categories = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-5 sm:px-20 grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Living Room */}
      <div className="relative h-[400px] sm:h-[500px] lg:h-[575px] rounded-xl overflow-hidden bg-[#F3F5F7]">
        <div className="absolute bottom-5 left-5 flex flex-col items-start gap-2 text-black">
          <h2 className="text-2xl sm:text-3xl font-semibold">Living Room</h2>
          <Link
            href="#"
            className="inline-flex items-center text-sm font-semibold hover:text-gray-600 transition-colors"
          >
            Shop Now <img src={arrow1} alt="arrow" className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <img
          src={categories}
          alt="Living Room"
          className="w-4/5 h-4/5 object-contain mx-auto mt-10"
        />
      </div>

      {/* Right side: Bedroom and Kitchen */}
      <div className="flex flex-col gap-6">
        {/* Bedroom */}
        <div className="relative h-[240px] sm:h-[280px] rounded-xl overflow-hidden bg-[#F3F5F7]">
          <div className="absolute bottom-5 left-5 flex flex-col items-start gap-2 text-black">
            <h2 className="text-2xl font-semibold">Bedroom</h2>
            <Link
              href="#"
              className="inline-flex items-center text-sm font-semibold hover:text-gray-600 transition-colors"
            >
              Shop Now <img src={arrow1} alt="arrow" className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <img
            src={categories2}
            alt="Bedroom"
            className="w-4/5 h-4/5 object-contain mx-auto mt-6"
          />
        </div>

        {/* Kitchen */}
        <div className="relative h-[240px] sm:h-[280px] rounded-xl overflow-hidden bg-[#F3F5F7]">
          <div className="absolute bottom-5 left-5 flex flex-col items-start gap-2 text-black">
            <h2 className="text-2xl font-semibold">Kitchen</h2>
            <Link
              href="#"
              className="inline-flex items-center text-sm font-semibold hover:text-gray-600 transition-colors"
            >
              Shop Now <img src={arrow1} alt="arrow" className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <img
            src={cardImg5}
            alt="Kitchen"
            className="w-4/5 h-4/5 object-contain mx-auto mt-6"
          />
        </div>
      </div>
    </section>
  );
};

export default Categories;
