const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function create(artistPayload) {
  const { albums, ...artistData } = artistPayload;
  const artist = await prisma.artist.create({
    data: artistData,
  });

  for (const _album of albums) {
    const { songs, extraArtist, ...albumData } = _album;
    const album = await prisma.album.create({
      data: {
        ...albumData,
        artists: {
          connect: extraArtist
            ? [
                {
                  id: artist.id,
                },
                {
                  id: extraArtist,
                },
              ]
            : {
                id: artist.id,
              },
        },
      },
    });

    await prisma.song.createMany({
      data: songs.map((sng) => {
        return {
          ...sng,
          albumId: album.id,
        };
      }),
    });
  }

  return artist;
}

async function seed() {
  await create({
    name: "Khaled",
    image: "/artists/khaled.png",
    likes: 1000098,
    biography: "",
    albums: [
      {
        title: "Khaled",
        cover: "/albums/Khaled_album.jpg",
        year: 1992,
        type: "ALBUM",
        likes: 1000000,
        songs: [
          {
            title: "Didi",
            likes: 1000000,
            filePath: "",
          },
          {
            title: "Liyah Liyah",
            likes: 1000000,
            filePath: "",
          },
        ],
      },
    ],
  });
  await create({
    name: "Mami",
    image: "/artists/mami.png",
    likes: 1000098,
    biography: "",
    albums: [
      {
        title: "Lazrag Saâni",
        cover: "/albums/lazrag-saâni.jpg",
        year: 1988,
        type: "ALBUM",
        likes: 1000000,
        songs: [
          {
            title: "Lazrag Saâni",
            likes: 1000000,
            filePath: "",
          },
        ],
      },
    ],
  });
  await create({
    name: "Mimoun El Oujdi",
    image: "/artists/mimoun-eloujdi.png",
    likes: 1000098,
    biography: "",
    albums: [],
  });
  const artist = await create({
    name: "Chebba Zahouania",
    image: "/artists/zahouania.jpg",
    likes: 1000098,
    biography: "",
    albums: [],
  });
  await create({
    name: "Cheb Hasni",
    image: "/artists/hasni.png",
    likes: 1000098,
    biography: "",
    albums: [
      {
        title: "Chebba Zahouania ft Cheb Hasni",
        cover: "/albums/hasni-zahouania.jpg",
        year: 1986,
        type: "ALBUM",
        likes: 1000000,
        extraArtist: artist.id,
        songs: [
          {
            title: "El Berraka",
            likes: 1000000,
            filePath: "",
          },
        ],
      },
    ],
  });
  await create({
    name: "Cheb Nasro",
    image: "/artists/nasro.png",
    likes: 1000098,
    biography: "",
    albums: [],
  });
}

seed()
  .then(() => {
    console.log("DONE");
  })
  .finally(() => {
    prisma.$disconnect();
  });
