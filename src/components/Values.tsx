import car from '../assets/car.svg';
import finance from '../assets/finance.svg';
import support from '../assets/support.svg';
import secure from '../assets/secure.svg';

const Values = () => {
  const values = [
    { id: 1, img: car, title: 'Free Shipping', description: 'Order above $200' },
    { id: 2, img: finance, title: 'Money-back', description: '30 days guarantee' },
    { id: 3, img: secure, title: 'Secure Payments', description: 'Secured by Stripe' },
    { id: 4, img: support, title: '24/7 Support', description: 'Phone and Email support' },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 py-10 bg-white">
      {values.map((value) => (
        <div
          key={value.id}
          className="flex flex-col items-center p-8 rounded-lg w-[220px] max-w-full bg-[#F3F5F7] hover:shadow-lg transition-shadow duration-300 md:w-[220px] sm:w-[152px]"
        >
          <img
            src={value.img}
            alt={value.title}
            className="w-10 h-10 mb-4 object-contain"
          />
          <h2 className="text-center text-lg font-semibold text-[#191C1F] font-poppins mb-2">
            {value.title}
          </h2>
          <p className="text-center text-sm text-[#6C7275] font-poppins">
            {value.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Values;
