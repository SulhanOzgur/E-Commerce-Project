import heroCover from '../../assets/hero-images/hero-cover-girl.png';

export default function HeroSection() {
  return (
    <section className="relative w-[388px] h-[902px] md:w-[1292px] md:h-[622px] mx-auto rounded-3xl bg-gradient-to-r from-[#96E9FB] to-[#ABECD6] my-10 flex items-center md:justify-center">
      <div className="w-full h-full md:w-[548px] md:h-[316px] gap-[30px] flex flex-col md:items-start md:text-left items-center text-center mt-[200px] md:mt-0 md:ml-[160px]">
        <h5 className="w-[122px] h-[24px] text-base text-[#2A7CC7] font-bold">
          SUMMER 2025
        </h5>
        <h1 className="md:w-[548px] md:h-[80px] text-[40px] md:text-[58px] text-brand font-bold">
          NEW COLLECTION
        </h1>
        <h4 className="w-[376px] h-[60px] text-xl text-brand-lightgray">
          We know how large objects will act, <br /> but things on a small
          scale.
        </h4>
        <button className="btn-primary">SHOP NOW</button>
      </div>
      <img
        src={heroCover}
        alt="Hero"
        className="object-cover absolute bottom-0 md:bottom-3 md:right-0 md:static"
      />
    </section>
  );
}
