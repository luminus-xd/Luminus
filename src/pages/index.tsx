import type { NextPage } from "next";

const Top: NextPage = () => {
  return (
    <div>
      <header>
        <h1 className="text-xl md:text-4xl font-bold p-2 md:p-3">Luminus.</h1>
      </header>
      <main>
        <div className="relative block bg-lightest">
          <img
            className="pointer-events-none w-full"
            src="/pict-twitter-header.jpg"
            alt="Twitterヘッダー"
            decoding="async"
            width="1500"
            height="500"
          />
          <div className="absolute -bottom-12 md:-bottom-24 left-[50%] -translate-x-2/4 w-24 md:w-48 h-24 md:h-48">
            <img
              className="pointer-events-none rounded-full border-4 border-lightest"
              src="/pict-twitter-icon.jpg"
              alt="Twitterアイコン"
              decoding="async"
              width="200"
              height="200"
            />
          </div>
        </div>
        <section className="mt-12 md:mt-24 flex justify-center flex-wrap pb-8">
          <h2 className="text-xl font-bold">MID_Luminus</h2>
          <div className="w-full font-bold text-center opacity-70">
            雑種系ゲーマー
          </div>
        </section>
        <section className="bg-grayscale-1 py-12 px-4">
          <div className="container mx-auto my-0">
            <ul className="flex flex-wrap gap-5">
              <li className="rounded bg-lightest p-3 shadow">
                <h3 className="text-lg font-bold">Profile</h3>
                <p className="m-0">
                  ぼくはカムパネルラの行った方を、窓から外を見ました。いまぼくたちのいるとこ、ここだろうジョバンニは首をたれて、すっかりふさぎ込んでしまいました。いいかそのひとは指を一本あげてしずかにくるくるとまわっていました。風が遠くで鳴り、丘の草の中に入れるのでした。ところがその十字になったんですよ青年が言いました。
                </p>
              </li>
              <li className="rounded bg-lightest p-3 shadow">
                <h3 className="text-lg font-bold">Description</h3>
                <p className="m-0">
                  まったく河原の青じろいあかりの上に降りるものの方が多かったのです。すると青年は自分でとって来たんです。右手の低い丘の上に小さな水晶ででもできていると言ったりいろいろ議論したのだ、もちろんカムパネルラも知ってらい。
                </p>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Top;
