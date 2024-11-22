import { Button } from "@/components/ui/button";
import Image from "next/image";
const Pricing = () => {
  return (
    <>
      <div className="relative w-full h-screen">
        <Image
          src="https://ik.imagekit.io/danielcmadeley/structopia/pricing-backdrop.jpg?updatedAt=1732006472521"
          alt="Pricing background"
          className="w-full h-full object-cover"
          fill
          priority
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center text-stone-50 text-center mt-[66vh]">
          <div className="text-3xl font-bold">
            <span className="line-through mr-2 text-stone-400">£50</span>
            £30/mo Public Launch Deal
          </div>
          <Button>Buy Now</Button>
        </div>
      </div>
    </>
  );
};

export default Pricing;
