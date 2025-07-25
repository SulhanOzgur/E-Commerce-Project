import { aboutSectionImages } from '../../data/AboutSection';

export default function AboutSection() {
  return (
    <div className="w-[1050px] h-[658px] mx-auto">
      <div className="w-[1050px] h-[498px] mx-auto flex justify-center">
        {/* Left (images) */}
        <div className="w-[513px] h-[498px] mx-auto flex justify-between">
          <img
            src={aboutSectionImages[0].image}
            alt={aboutSectionImages[0].alt}
            className={`w-[217px] h-[498px] object-cover`}
          />
          <img
            src={aboutSectionImages[1].image}
            alt={aboutSectionImages[1].alt}
            className={`w-[280px] h-[498px] object-cover`}
          />
        </div>

        {/* Right */}
        <div className="w-[447px] h-[246px] mx-auto my-auto">
          <h5 className="text-brand-lightblue text-base font-bold">
            Featured Products
          </h5>
          <h2 className="text-brand-DEFAULT text-[40px] font-bold">
            We love what we do
          </h2>
          <p className="text-brand-lightgray text-sm w-[351px] h-[60px] mt-4 mb-4">
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics: <br /> Newtonian mechanics.
          </p>
          <p className="text-brand-lightgray text-sm w-[351px] h-[60px]">
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics: <br /> Newtonian mechanics.{' '}
          </p>
        </div>
      </div>
    </div>
  );
}
