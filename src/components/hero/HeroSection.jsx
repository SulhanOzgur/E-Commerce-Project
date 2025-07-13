import heroCover from '../../assets/hero-cover-girl.png';

export default function HeroSection() {
  return (
    <section className="w-[1292px] h-[622px] mx-auto rounded-3xl bg-gradient-to-r from-[#96E9FB] to-[#ABECD6] my-10">
      <img
        src={heroCover}
        alt="Hero"
        className="object-cover absolute bottom-3 right-0"
      />
    </section>
  );
}
