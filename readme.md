# TOY ROBOT SIMULATOR

Toy Robot Simulator is a react app built with redux, hooks, styled components and is tested using jest and enzyme. The design pattern loosely follows the Domain or Ducks style for file structure.

[ParcelJs](https://parceljs.org/) is used as the build tool. The prod build is ready to be served on a web server

[Styled components](https://www.styled-components.com/) Are used as a css in js solution

## Approach

- TDD
- Container/presentational components
- Small action creators
- Business logic in the reducer
- Feature first
- Tests next to code
- Domain or Ducks approach
- Css in js theme for colours and breakpoint

## Design decisions

- 2 top level components or domains: TableTop and UiControls

### TableTop

- TableTop connects to the state to get the current robot position and renders the TableTopSquares
- TableTopSquares display the robot based on the robot position props stored in the state
- Easy to do this then move a div around a fluid grid
- Used css grid

### UiControls

- UiControls renders the 3 ui components, Place, Rotate and Move.
- It holds the reducer and actions for udating state based on user input
- PlaceUi component uses hooks for local state of the user input
- Each ui component dispatch's actions for updating state

## Static build for browser

I have included a folder with a build fit for opening directly in the browser. This can be found in /staticBuild. The only difference is that the script location is relative so as not to cause a 404. The best way to view is by running the start command

## What could be improved

1. The app could be optimized for accessability.
2. Further unit testing coud be completed and also optimized for the PlaceUi component. Turns out using Hooks is a little difficult to test at the moment and you cant test them with enzyme at all!
3. Create a few more low level shared components ie: buttons, headings etc
4. Jest snapshots could be used as a baseline test for all components
5. [Typescript](https://www.typescriptlang.org/) could be implemented
6. Could have used [styled-system](https://github.com/styled-system/styled-system?fbclid=IwAR3kQ4TRezvU5IwlICuW1fFGPA0RzqcAjwWriBp4udLVtk42y2IIh-RAKgs) for theming

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
