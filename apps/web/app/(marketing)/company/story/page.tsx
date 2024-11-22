const Story = () => {
  return (
    <div className="text-stone-50 py-24 px-4 md:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-16 space-y-2">
          <div className="text-4xl md:text-5xl font-bold">
            WHY I DECIDED TO BUILD
          </div>
          <div
            className="text-7xl md:text-8xl font-bold"
            style={{
              WebkitTextStroke: "1px white",
              WebkitTextFillColor: "transparent",
            }}
          >
            STRUCTOPIA
          </div>
        </h2>

        <div className="space-y-12">
          <div>
            <h3 className="text-md font-semibold mb-4">Problem</h3>
            <p className="text-stone-300 leading-relaxed text-xs">
              As structural engineers with years of experience, we've always
              felt that our industry was stuck in the past, especially when it
              came to routine calculations and design tasks. Typically,
              engineers spend countless hours on hand calculations, juggling
              between various software for different elements, and struggling
              with outdated processes. We've noticed that many tools in the
              construction industry are provided by established companies that
              are slow to innovate and adapt to modern needs.
            </p>
          </div>

          <div>
            <h3 className="text-md font-semibold mb-4">Solution</h3>
            <p className="text-stone-300 leading-relaxed text-xs">
              We asked ourselves: why not create a comprehensive platform that
              revolutionizes structural engineering workflows? Inspired by
              innovative companies that have transformed other industries, we
              set out to develop Structopia - an all-in-one structural
              engineering OS. Our goal is to help engineers streamline tedious
              calculations, gain deeper insights into their designs, and bridge
              the gap between various stages of the construction process,
              allowing them to focus on the creative and challenging aspects of
              structural engineering.
            </p>
          </div>

          <div>
            <h3 className="text-md font-semibold mb-4">Open source</h3>
            <p className="text-stone-300 leading-relaxed text-xs">
              We believe in the power of collaboration and transparency to build
              the best possible tools for our industry. Whether it's through
              regular feedback sessions with practicing engineers, building our
              platform in public, or open-sourcing parts of our system, these
              are values we're committed to upholding. We aim to create a
              community-driven platform that evolves with the needs of
              structural engineers, regardless of how much we grow or how far we
              go.
            </p>
          </div>
        </div>

        {/* <div className="mt-16 rounded-[6px] w-full relative aspect-[16/9]">
          <div className="absolute inset-0 bg-stone-900 opacity-90 rounded-[6px] z-10" />
          <Image
            src="https://ik.imagekit.io/danielcmadeley/structopia/arch-photo-1.jpg?updatedAt=1732302878567"
            alt="Structopia Story"
            fill
            className="object-cover rounded-[6px]"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Story;
