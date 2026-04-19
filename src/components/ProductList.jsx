import FavoriteIcon from "./FavoriteIcon";

const ProductList = () => {
  return (
    <div className="flex justify-start ">
      <div className="w-[70vw] bg-white rounded-2xl p-4 m-5">
        <ul className="grid grid-cols-[repeat(auto-fill,280px)] gap-5 justify-center">
          <li>
            <div className="bg-white w-fit mb-5 rounded-lg shadow-md">
              <div className="relative w-72">
                <FavoriteIcon />
                <img className="rounded-t-lg" src="/img/farver.webp" alt="Billede af faver" width={300} height={400} />
              </div>
              <div className="pl-4 py-2 ">
                <h3 className="text-gray-400 underline decoration-gray-400 underline-offset-2.5">MÆRKE</h3>
                <h4 className="text-black pb-4">NAVN PÅ PRODUKT</h4>
                <p className="text-black font-bold text-xl">00,00 kr.</p>
              </div>
            </div>
          </li>
          <li>
            <div className="bg-white w-fit mb-5 rounded-lg shadow-md">
              <div className="relative w-72">
                <FavoriteIcon />
                <img className="rounded-t-lg" src="/img/farver.webp" alt="Billede af faver" width={300} height={400} />
              </div>
              <div className="pl-4 py-2 ">
                <h3 className="text-gray-400 underline decoration-gray-400 underline-offset-2.5">MÆRKE</h3>
                <h4 className="text-black pb-4">NAVN PÅ PRODUKT</h4>
                <p className="text-black font-bold text-xl">00,00 kr.</p>
              </div>
            </div>
          </li>
          <li>
            <div className="bg-white w-fit mb-5 rounded-lg shadow-md">
              <div className="relative w-72">
                <FavoriteIcon />
                <img className="rounded-t-lg" src="/img/farver.webp" alt="Billede af faver" width={300} height={400} />
              </div>
              <div className="pl-4 py-2 ">
                <h3 className="text-gray-400 underline decoration-gray-400 underline-offset-2.5">MÆRKE</h3>
                <h4 className="text-black pb-4">NAVN PÅ PRODUKT</h4>
                <p className="text-black font-bold text-xl">00,00 kr.</p>
              </div>
            </div>
          </li>
          <li>
            <div className="bg-white w-fit mb-5 rounded-lg shadow-md">
              <div className="relative w-72">
                <FavoriteIcon />
                <img className="rounded-t-lg" src="/img/farver.webp" alt="Billede af faver" width={300} height={400} />
              </div>
              <div className="pl-4 py-2 ">
                <h3 className="text-gray-400 underline decoration-gray-400 underline-offset-2.5">MÆRKE</h3>
                <h4 className="text-black pb-4">NAVN PÅ PRODUKT</h4>
                <p className="text-black font-bold text-xl">00,00 kr.</p>
              </div>
            </div>
          </li>
          <li>
            <div className="bg-white w-fit mb-5 rounded-lg shadow-md">
              <div className="relative w-72">
                <FavoriteIcon />
                <img className="rounded-t-lg" src="/img/farver.webp" alt="Billede af faver" width={300} height={400} />
              </div>
              <div className="pl-4 py-2 ">
                <h3 className="text-gray-400 underline decoration-gray-400 underline-offset-2.5">MÆRKE</h3>
                <h4 className="text-black pb-4">NAVN PÅ PRODUKT</h4>
                <p className="text-black font-bold text-xl">00,00 kr.</p>
              </div>
            </div>
          </li>
          <li>
            <div className="bg-white w-fit mb-5 rounded-lg    shadow-md">
              <div className="relative w-72">
                <FavoriteIcon />
                <img className="rounded-t-lg" src="/img/farver.webp" alt="Billede af faver" width={300} height={400} />
              </div>
              <div className="pl-4 py-2 ">
                <h3 className="text-gray-400 underline decoration-gray-400 underline-offset-2.5">MÆRKE</h3>
                <h4 className="text-black pb-4">NAVN PÅ PRODUKT</h4>
                <p className="text-black font-bold text-xl">00,00 kr.</p>
              </div>
            </div>
          </li>
          <li>
            <div className="bg-white w-fit mb-5 rounded-lg    shadow-md">
              <div className="relative w-72">
                <FavoriteIcon />
                <img className="rounded-t-lg" src="/img/farver.webp" alt="Billede af faver" width={300} height={400} />
              </div>
              <div className="pl-4 py-2 ">
                <h3 className="text-gray-400 underline decoration-gray-400 underline-offset-2.5">MÆRKE</h3>
                <h4 className="text-black pb-4">NAVN PÅ PRODUKT</h4>
                <p className="text-black font-bold text-xl">00,00 kr.</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductList;
