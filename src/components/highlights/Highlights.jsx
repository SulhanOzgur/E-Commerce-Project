import { highlights } from '../../data/Highlights';

export default function Highlights() {
  return (
    <div className="flex justify-between w-[1000px] mx-auto my-20">
      {/* Left - one big image */}
      <div className="relative">
        <img
          src={highlights[0].src}
          alt={highlights[0].alt}
          className={`${highlights[0].width} ${highlights[0].height} object-cover`}
        />
        <div className="absolute bottom-0 left-0 bg-[#2D8BC0BF] w-[420px] h-[238px] flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-white w-[192px] h-[64px] ml-14 mt-15">
            Top Product Of the Week
          </h3>
          <button className="border border-white text-white font-bold w-[198px] h-[52px] px-4 py-2 text-sm hover:bg-white hover:text-blue-600 ml-14 mt-4 rounded-md">
            EXPLORE ITEMS
          </button>
        </div>
      </div>

      {/* Right - two images */}
      <div className="flex flex-col">
        <div className="relative">
          <img
            src={highlights[1].src}
            alt={highlights[1].alt}
            className={`${highlights[1].width} ${highlights[1].height} object-cover`}
          />
          <div className="absolute bottom-0 left-0 bg-[#2D8BC0BF] w-[360px] h-[153px] flex flex-col justify-center">
            <h4 className="text-xl font-bold text-white w-[260px] h-[30px] ml-9 mt-15">
              Top Product Of the Week
            </h4>
            <button className="border border-white text-white font-bold w-[198px] h-[52px] px-4 py-2 text-sm hover:bg-white hover:text-blue-600 ml-9 mt-4 rounded-md">
              EXPLORE ITEMS
            </button>
          </div>
        </div>

        {/* ------------ */}

        <div className="relative">
          <img
            src={highlights[2].src}
            alt={highlights[2].alt}
            className={`${highlights[2].width} ${highlights[2].height} object-cover`}
          />
          <div className="absolute bottom-0 left-0 bg-[#2D8BC0BF] w-[360px] h-[153px] flex flex-col justify-center">
            <h4 className="text-xl font-bold text-white w-[260px] h-[30px] ml-9 mt-15">
              Top Product Of the Week
            </h4>
            <button className="border border-white text-white font-bold w-[198px] h-[52px] px-4 py-2 text-sm hover:bg-white hover:text-blue-600 ml-9 mt-4 rounded-md">
              EXPLORE ITEMS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
