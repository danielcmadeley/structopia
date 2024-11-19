import Image from "next/image";
const Pricing = () => {
  return (
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
    </div>
  );
};

export default Pricing;
