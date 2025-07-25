import { services } from '../../data/WhatWeOffer';

//kodları incele
export default function WhatWeOffer() {
  return (
    <section className="w-[1050px] h-[616px] mx-auto my-5">
      {/* Title */}
      <div className="w-[692px] h-[102px] mx-auto text-center">
        <h2 className="text-xl text-brand-lightgray">Featured Products</h2>
        <h3 className="text-2xl font-bold text-brand-DEFAULT my-2">
          THE BEST SERVICES
        </h3>
        <p className="text-sm text-brand-lightgray">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Bottom */}
      <div className="w-[1045px] h-[274px] mx-auto text-center flex justify-between mt-[80px]">
        {services.map(({ id, icon: Icon, title, description }) => (
          <div key={id} className="w-full md:w-1/3 space-y-4 px-4">
            <img src={Icon} alt={title} className="w-18 h-18 mx-auto" />
            <h3 className="text-2xl font-bold text-brand-DEFAULT">{title}</h3>
            <p className="text-sm text-brand-lightgray">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
