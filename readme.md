# TOY ROBOT SIMULATOR

Toy Robot Simulator is a react app built with redux, hooks, styled components and is tested using jest and enzyme. The design pattern loosely follows the Domain or Ducks style for file structure.

[ParcelJs](https://parceljs.org/) is used as the build tool. The prod build is ready to be served on a web server
[Styled components](https://www.styled-components.com/) Are used as a css in js solution

## Static build for broser

I have included a folder with a build fit for opening directly in the browser. This can be found in /staticBuild. The only difference is that the script location is relative so as not to cause a 404. The best way to view is by running the start command

## What could be improved

1. The app could be optimized for accessability.
2. Further unit testing coud be completed and also optimized for the PlaceUi component. Turns out using Hooks is a little difficult to test at the moment and you cant test them with enzyme at all!
3. Create a few more low level shared components ie: buttons, headings etc
4. Jest snapshots could be used as a baseline test for all components

## Installation

```
yarn install
OR
npm install
```

## Dev build

```
yarn start
OR
npm start
```

## Production build

```
yarn prod
OR
npm prod
```

## Test build

```
yarn test
OR
npm test
```
