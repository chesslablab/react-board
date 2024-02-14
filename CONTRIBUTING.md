# ChesslaBlab

## Open Source Community

Chess is a perfect topic for learning full-stack web development as well as for playing around with machine learning libraries. ChesslaBlab stands for chess laboratory, and the repositories can be used and extended by developers to create amazing chess web apps.

### Contributing guidelines

- Find a ChesslaBlab repo and make sure to read its `CONTRIBUTING.md` file.
- Look at the open issues.
- Leave the following comment on the issue you want to be assigned to: "Hi there, happy learning and coding!"
- Be prepared to create a friendly PR once the issue has been assigned to you.

Once you're ready, [fork the repo](https://docs.github.com/es/get-started/quickstart/fork-a-repo) and create a new branch from `main` as per the following convention.

```text
$ git checkout -b issue/n-the-title-of-the-issue
```

For example, if the title of the issue is [Update to MUI 5 #236](https://github.com/chesslablab/react-chess/issues/236) then its corresponding Git branch should be checked out from the main branch like this.

```text
$ git checkout -b issue/236-update-to-MUI-5
```

That's it!

### ReactBlab

The [@chesslablab/reactblab](https://www.npmjs.com/package/@chesslablab/reactblab) package is being developed locally with the help of `my-app` which `package.json` is described next.

```
{
  "name": "my-app",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "localDependencies": {
    "@chesslablab/reactblab": "../@chesslablab/reactblab"
  }
}
```

The package is built using [preconstruct](https://github.com/preconstruct/preconstruct).

```
yarn preconstruct build
```

Then, it is installed in `my-app` using [install-local](https://www.npmjs.com/package/install-local).

```
install-local --save ../@chesslablab/reactblab
```

```js
// App.js

import { ClassicalBoard } from '@chesslablab/reactblab';

function App() {
  const stateBoard = {
    turn: 'w',
    isCapture: false,
    isCheck: false,
    isMate: false,
    isStalemate: false,
    fen: [
      'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -',
      'rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq d3',
      'rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq -',
      'rnbqkb1r/pppppppp/5n2/8/2PP4/8/PP2PPPP/RNBQKBNR b KQkq c3',
      'rnbqkb1r/pppp1ppp/4pn2/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq -',
      'rnbqkb1r/pppp1ppp/4pn2/8/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq -',
      'rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N5/PP2PPPP/R1BQKBNR w KQkq -',
      'rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N1P3/PP3PPP/R1BQKBNR b KQkq -',
      'rnbq1rk1/pppp1ppp/4pn2/8/1bPP4/2N1P3/PP3PPP/R1BQKBNR w KQ -',
      'rnbq1rk1/pppp1ppp/4pn2/8/1bPP4/2N1PN2/PP3PPP/R1BQKB1R b KQ -',
    ],
    flip: 'w',
  };

  const filterMove = () => {
    // Implement pre-processing logic for the chess move.
  }

  const handleMove = () => {
    // Implement validation logic for the chess move.
  }

  return (
    <ClassicalBoard
      stateBoard={stateBoard}
      goBack={-5}
      filterMove={filterMove}
      handleMove={handleMove}
    />
  );
}

export default App;
```

You may want to use [install-local](https://www.npmjs.com/package/install-local) to develop the NPM package on a local environment because symlinks may sometimes be tricky. An invalid hook call warning will certainly come across as it is described next.

- [Warning: Invalid hook call](https://github.com/preconstruct/preconstruct/issues/581)
- [Hooks + multiple instances of React](https://github.com/facebook/react/issues/13991)

However, `install-local` is not ideal if you actually want the browser to update the app live as the NPM package files are edited. If that is the case try the following workaround.

Create a symbolic link:

```
cd /home/standard/projects/@chesslablab/reactblab && npm link
```

Wire the local NPM package up to the app's React packages:

```
cd /home/standard/projects/@chesslablab/reactblab && sudo npm link /home/standard/projects/my-app/node_modules/react /home/standard/projects/my-app/node_modules/react-dom
```

Finally, link the local NPM package to `my-app` in the `my-app` folder:

```
cd /home/standard/projects/my-app && npm link @chesslablab/reactblab
```

Happy learning and coding!
