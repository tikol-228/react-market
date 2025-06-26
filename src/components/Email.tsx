const Email = () => {
  return (
    <div
      className="w-full bg-[url('/src/assets/img.svg')] bg-cover bg-center py-10 px-4 sm:px-20 flex flex-col items-center text-center gap-4"
    >
      <h2 className="text-2xl sm:text-[1.75rem] font-semibold text-[#141718] font-montserrat">
        Join Our Newsletter
      </h2>
      <p className="text-base text-[#141718] font-montserrat">
        Sign up for deals, new products and promotions
      </p>

      <form className="w-full max-w-[488px]">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center border-b sm:border-b border-[#3c3c3c] py-2 gap-2 sm:gap-0">
          <div className="flex items-center sm:mr-2">
            <img
              src="/src/assets/email.svg"
              alt="email icon"
              className="w-5 h-5 shrink-0"
            />
          </div>
          <input
            type="email"
            placeholder="Email address"
            required
            className="flex-1 bg-transparent border-none outline-none text-sm text-[#141718] font-montserrat py-2 placeholder:text-[#777]"
          />
          <button
            type="submit"
            className="uppercase text-sm text-[#777] font-montserrat py-2 px-4 cursor-pointer transition-colors duration-200 hover:text-[#d96b52] sm:border-none sm:self-auto border-b border-[#3c3c3c] sm:border-0"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Email;
