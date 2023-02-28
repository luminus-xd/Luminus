import { Avatar, Card, Grid, Link, Text } from "@nextui-org/react";

const SectionProfile = () => {
  return (
    <section>
      <Text h2 id="Profile">
        Profile
      </Text>
      <Card css={{ p: "$6", mw: "480px" }}>
        <Card.Header>
          <Avatar
            size="lg"
            src="/images/pict-twitter-icon.webp"
            color="gradient"
            bordered
            alt=""
            role={undefined}
          />
          <Grid.Container css={{ pl: "$6" }}>
            <Grid xs={12}>
              <Text h3 size={21} css={{ lineHeight: "$xs", marginBottom: "0.2em" }}>
                Luminus
              </Text>
            </Grid>
            <Grid xs={12}>
              <Text css={{ color: "$accents8" }}>雑種系ゲーマー</Text>
            </Grid>
          </Grid.Container>
        </Card.Header>
        <Card.Body css={{ py: "$2" }}>
          <Text>
            趣味はゲーム（RPGやFPS・ソシャゲなど幅広く浅く、最近はFF14とかアークナイツ）、音楽を聴くこと、アニメ鑑賞・布教、Webサービスの開発・支援
          </Text>
        </Card.Body>
        <Card.Footer>
          <Link
            color="secondary"
            target="_blank"
            href="https://github.com/luminus-xd"
          >
            Visit source code on GitHub.
          </Link>
        </Card.Footer>
      </Card>
    </section>
  );
};

export default SectionProfile;
