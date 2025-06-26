import subHeader3 from '../assets/subHeader3.svg';
import Link from './Link';
import arrow1 from '../assets/arrow1.svg';

const Sale = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-[#F8FAFC] rounded-xl p-10 md:p-16 max-w-[1440px] mx-auto gap-8">
      {/* Левая часть - картинка */}
      <div className="flex-1">
        <img
          src={subHeader3}
          alt="Sale banner"
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>

      {/* Правая часть - текст */}
      <div className="flex-1 md:pl-20 flex flex-col justify-center">
        <p className="text-sm font-semibold uppercase text-[#2563EB] m-0">
          SALE UP TO 35% OFF
        </p>
        <h2 className="mt-3 mb-6 text-4xl font-bold leading-tight text-[#111827]">
          HUNDREDS of<br />New lower prices!
        </h2>
        <p className="text-base leading-relaxed text-[#6B7280] mb-8">
          It’s more affordable than ever to give every<br />
          room in your home a stylish makeover
        </p>
        <Link
          href="#"
          className="inline-flex items-center text-base font-semibold text-[#111827] hover:text-[#2563EB] transition-colors"
        >
          Shop Now
          <img
            src={arrow1}
            alt="arrow"
            className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </section>
  );
};

export default Sale;
