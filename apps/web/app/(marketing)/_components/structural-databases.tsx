import { ArrowRight } from "lucide-react";
import Image from "next/image";

const databases = [
  {
    title: "REINFORCED CONCRETE",
    description:
      "Stores data on concrete grades, reinforcement types, and their properties. Includes information on typical reinforcement patterns, cover requirements, and durability specifications for different environmental conditions.",
    image: "/reinforced-concrete.jpg",
  },
  {
    title: "STEEL",
    description:
      "Contains a catalog of standard steel sections, their properties, and connection details. Includes data on various steel grades, corrosion protection methods, and fire resistance ratings.",
    image: "/steel.jpg",
  },
  {
    title: "MASONRY",
    description:
      "Encompasses information on different types of masonry units, mortar specifications, and reinforcement options. Stores data on typical wall configurations, bond patterns, and structural performance characteristics.",
    image: "/masonry.jpg",
  },
];

export default function StructuralDatabases() {
  return (
    <div className=" text-stone-50 py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">STRUCTURAL DATABASES</h2>
        <p className="text-gray-300 mb-12 max-w-3xl">
          Whether you're working with steel, concrete, timber, or cutting-edge
          composites, StructData Hub delivers precise information tailored to
          your project needs.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {databases.map((db, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-[6px] overflow-hidden"
            >
              <div className="h-48 relative">
                <Image
                  src={db.image}
                  alt={db.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{db.title}</h3>
                <p className="text-gray-400 text-sm">{db.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-right">
          <a
            href="#"
            className="inline-flex items-center text-stone-400 hover:text-stone-300 transition-colors duration-200"
          >
            View more
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
