import { logos } from '../../data/TrustedByLogos';

export default function TrustedBy() {
  return (
    <div className="flex justify-around w-[1000px] mx-auto my-20">
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo.src}
          alt={logo.alt}
          className={`${logo.width} ${logo.height}`}
        />
      ))}
    </div>
  );
}
