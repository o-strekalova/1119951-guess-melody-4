const AVATAR_URL = `https://api.adorable.io/avatars/128`;

export const questions = [
  {
    type: `genre`,
    genre: `rock`,
    answers: [{
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `blues`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `jazz`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
    }],
  }, {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    answers: [{
      picture: `${AVATAR_URL}/0`,
      artist: `John Snow`,
    }, {
      picture: `${AVATAR_URL}/1`,
      artist: `Jack Daniels`,
    }, {
      picture: `${AVATAR_URL}/2`,
      artist: `Jim Beam`,
    }],
  }
];

export const genreQuestion = questions.find((question) => question.type === `genre`);
export const artistQuestion = questions.find((question) => question.type === `artist`);