import hoolie from '../../assets/hoolie@2x.png';
import lyft from '../../assets/lyft.png';
import leaf from '../../assets/leaf.png';
import stripe from '../../assets/stripe.png';
import aws from '../../assets/aws.png';
import reddit from '../../assets/reddit.png';

export default function TrustedBy() {
  return (
    <div className="flex justify-around w-[1000px] mx-auto my-20">
      <img src={hoolie} alt="Hoolie" className="w-[153px] h-[34px]" />
      <img src={lyft} alt="Lyft" className="w-[83px] h-[59px]" />
      <img src={leaf} alt="Leaf" className="w-[102px] h-[75px]" />
      <img src={stripe} alt="Stripe" className="w-[103px] h-[42px]" />
      <img src={aws} alt="AWS" className="w-[151px] h-[62px]" />
      <img src={reddit} alt="Reddit" className="w-[76px] h-[72px]" />
    </div>
  );
}
