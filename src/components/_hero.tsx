const Hero = () => {
  return (
    <section>
      <div className="relative block bg-lightest">
        <picture>
          <source srcSet="/images/pict-twitter-header.webp" type="image/webp" />
          <img
            className="w-full pointer-events-none select-none"
            src="/images/pict-twitter-header.jpg"
            alt="Twitterヘッダー"
            decoding="async"
            width="1500"
            height="500"
          />
        </picture>
        <div className="absolute -bottom-12 md:-bottom-24 left-[50%] -translate-x-2/4 w-24 md:w-48 h-24 md:h-48">
          <picture>
            <source srcSet="/images/pict-twitter-icon.webp" type="image/webp" />
            <img
              className="rounded-full border-4 border-lightest pointer-events-none select-none"
              src="/images/pict-twitter-icon.jpg"
              alt="Twitterアイコン"
              decoding="async"
              width="200"
              height="200"
            />
          </picture>
        </div>
      </div>
      <div className="mt-12 md:mt-24 flex justify-center flex-wrap pb-8">
        <h2 className="text-xl font-bold">MID_Luminus</h2>
        <div className="w-full font-bold text-center opacity-70">
          雑種系ゲーマー
        </div>
      </div>
    </section>
  );
};

export default Hero;
