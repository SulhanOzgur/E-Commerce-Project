import { trustedByLogos } from '../../data/TrustedByLogos';

export default function TrustedBy() {
  return (
    <div className="flex justify-around w-[1000px] mx-auto my-20">
      {trustedByLogos.map((logo, index) => (
        <img
          key={index}
          src={logo.src}
          alt={logo.alt}
          className={`w-[${logo.width}px] h-[${logo.height}px]`}
        />
      ))}
    </div>
  );
}
