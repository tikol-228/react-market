import subHeader2 from '../assets/subHeader2.svg';
import arrivalImg1 from '../assets/arrivalImg1.svg';
import arrivalImg2 from '../assets/arrivalImg2.svg';
import Link from './Link';
import arrow1 from '../assets/arrow1.svg';

const Articles = () => {
  const cards = [
    { id: 1, img: arrivalImg1, title: '7 ways to decor your home' },
    { id: 2, img: subHeader2, title: 'Kitchen organization' },
    { id: 3, img: arrivalImg2, title: 'Decor your bedroom' },
  ];

  return (
    <section className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-10 py-10 flex flex-col">
      {/* Заголовок */}
      <div className="mb-8 text-center">
        <h2 className="font-inter font-bold text-[1.75rem] md:text-2xl text-[#222222] mb-2">
          Articles
        </h2>
        {/* Скрытая ссылка articleLink из оригинала не нужна, убрал */}
      </div>

      {/* Сетка карточек */}
      <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-10 md:gap-12 justify-center">
        {cards.map((card) => (
          <article key={card.id} className="flex flex-col overflow-hidden max-w-full">
            <img
              src={card.img}
              alt={card.title}
              className="w-full object-cover block"
            />
            <h3 className="font-inter font-semibold text-lg text-[#333333] px-4 py-3 leading-snug m-0">
              {card.title}
            </h3>
            <Link
              href="#"
              className="inline-flex items-center text-black font-medium text-sm no-underline px-4 mb-4 mt-0 hover:text-[#1558b0] transition-colors"
            >
              More Products
              <img
                src={arrow1}
                alt="arrow"
                className="ml-2 w-4 h-4 md:w-5 md:h-5"
              />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Articles;
