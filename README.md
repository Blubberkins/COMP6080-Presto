# Assessment 4 - ReactJS: Presto

1. Background & Motivation
2. The Task (Frontend)
3. The Support (Backend)
4. Constraints & Assumptions
5. Teamwork
6. Marking Criteria
7. Originality of Work
8. Submission
9. Late Submission Policy

## 0. Change Log

N/A

## 1. Before you start

### 1.1. Background & Motivation

In March of 2024 you and your friends pitched a startup idea to produce *An alternative to [slides.com](https://slides.com) that is a lean, lightweight app that is a lot more enjoyable and interesting to use* and that will *revolutionise the presentations industry for decades to come*. You pitched this solution in the form of a web-based application, and called this quiz application 🪄🪄🪄**Presto**🪄🪄🪄.

A week later you received a tentative $50,000 investment from an [Angel Investor](https://en.wikipedia.org/wiki/Angel_investor) pending you producing a working minimum viable product of the application.

Shortly after you discussed the functionality and feature set with your friends, and wrote out a RESTful specification / interface together so that you can split up the frontend and backend work between the group. You build the frontend, they build the backend. To get things moving, the backend was built EXTREMELY light in order to reduce the amount of interfacing needed.

Whilst you (and optionally another one of your friends) decided to work on building the frontend. You wrote a list of requirements and functionalities your frontend should adhere to (described in `section 2`). You also decided to complete this application in `ReactJS`, a declarative framework for building single page applications. This front-end will interact with a Restful API that your team members are producing, based on the pre-defined interface.

Because your MVP is only going to be demonstrated once, your team considers it imperative that your front-end is thoroughly tested.

To satisfy modern tastes and expectations you have also decided to ensure that the UI/UX and Accessibility standards are very high.

**This assignment is the process you building the front-end for that MVP(Minimum viable product) to the standards described.** This assignment is closely modelled off the popular website [slides](https://slides.com/). If you're not familiar with the site, we would recommend spending the time to try it out so that you can get a feel for how this application may function as a reference point.

### 1.2. Lectures to watch

You will _need_ to watch at least the following lectures before starting (it will help you get started):
 * [Javascript Ecosystem](https://cgi.cse.unsw.edu.au/~cs6080/NOW/content/lectures/javascript-ecosystem)
 * [Node Package Manager](https://cgi.cse.unsw.edu.au/~cs6080/NOW/content/lectures/javascript-npm)
 * [ReactJS Introduction](https://cgi.cse.unsw.edu.au/~cs6080/NOW/content/lectures/react-intro)
 * [ReactJS Global CSS Usage](https://cgi.cse.unsw.edu.au/~cs6080/NOW/content/lectures/react-css-basic)
 * [ReactJS Lifecycle](https://cgi.cse.unsw.edu.au/~cs6080/NOW/content/lectures/react-lifecycle)
 * [ReactJS useState hook](https://cgi.cse.unsw.edu.au/~cs6080/NOW/content/lectures/react-hooks-state)
 * [ReactJS useEffect hook](https://cgi.cse.unsw.edu.au/~cs6080/NOW/content/lectures/react-hooks-effect)
 * [Working with multiple files](https://cgi.cse.unsw.edu.au/~cs6080/NOW/content/lectures/multi-file-import)
 * [Components & Props](https://cgi.cse.unsw.edu.au/~cs6080/NOW/content/lectures/react-components-props)
 * [Linting](https://cgi.cse.unsw.edu.au/~cs6080/NOW/content/lectures/javascript-linting)

You will _need_ to watch at least the following lectures to finish the assessment completely:
 * [Routing & SPAs](https://cgi.cse.unsw.edu.au/~cs6080/NOW/content/lectures/react-routing-spas)
 * [CSS Frameworks](https://cgi.cse.unsw.edu.au/~cs6080/NOW/content/lectures/react-css-frameworks)
 * [useContext hook](https://cgi.cse.unsw.edu.au/~cs6080/NOW/content/lectures/react-hooks-context)
 * [Testing introduction](https://cgi.cse.unsw.edu.au/~cs6080/NOW/content/lectures/testing-intro)
 * [Component testing](https://cgi.cse.unsw.edu.au/~cs6080/NOW/content/lectures/testing-components)
 * [UI Testing](https://cgi.cse.unsw.edu.au/~cs6080/NOW/content/lectures/testing-ui)

## 2. The Front-end (Work to do)

You are to build a frontend for a provided backend. This frontend shall be built with ReactJS. It shall be a single page application that does **NOT** require a refresh for state updates. (Failure to make your app a fully single page app will result in significant mark penalties)

Features need to be implemented (described below) in order for your ReactJS app to meet the requirements of the task, and to operate with the backend described in 3.2.

The requirements describe a series of **screens**. Screens can be presented as popups/modals, or full-page views. The term *Screen* is used to refer to a specific state or representation of the web application. You have the flexibility to decide how to implement them, whether as modals, separate pages, or other appropriate UI components.

Anything marked 🙉🙉🙉 only needs to completed by pair-attempts and not individual-attempts.

### 2.1. Feature Set 1. Login & presentation Creation (10%)

This feature set focuses solely on the ability to register, login, and logout. It does not concern itself with any functionality or screens that come after logged in - if the dashboard when logged in is just a blank screen with a logout button, then that is satisfactory for this feature set.

#### 2.1.1. Login Screen
 * A unique route must exist for this screen
 * User must be able to enter their `email` and `password` in a form
 * A button must exist to allow submission of the form
 * If the form submission fails when user tried to login, a reasonable error message should be shown
 * The form must be able to be submitted on enter key in any of the fields

#### 2.1.2. Register Screen
 * A unique route must exist for this screen
 * User must be able to enter their `email` and `password` and `name` in a form
 * A confirm `password` field should exist where user re-enters their password
 * If the two passwords don't match, the user should receive an error popup before submission.
 * If the form submission fails when user tried to register, a reasonable error message should be shown
 * A button must exist to allow submission of form
 * The form must be able to be submitted on enter key in any of the fields

#### 2.1.3. Logout Button
 * On all screens that require an authorised user, a logout button exists.
 * This logout button, when clicked, returns you to the login screen.


### 2.2. Feature Set 2. Setting up slides (10%)

#### 2.2.1. New presentation on Dashboard

* When logged in, users should be presented with a dashboard that contains a button, only visible on the dashboard, called "New presentation".
* When this button is pressed, a [modal](https://www.w3schools.com/w3css/w3css_modal.asp) appears, where a user can enter the name of a new presentation
* This modal should contain a "Create" button, where when it is clicked, the modal disappears, a new presentation is created and appears on the dashboard. A default presentation contains a single empty slide (info on this later).

#### 2.2.2. List of presentations on Dashboard 

* A unique route must exist for dashboard screen
* On the dashboard, the [card](https://m1.material.io/components/cards.html#) for each presentation should appear as rectangles with a 2:1 width:height ratio.
* Each rectangle should include the name, a thumbnail (grey square if empty), a description (no text if empty) and the number of slides it contains
* Rectangles should be evenly spaced in several rows and columns if needed, where each rectangle has a minimum of `100px` width and maximum of `300px` width.

#### 2.2.3. Basics of a presentation controls

* When a particular presentation on the dashboard is clicked, the user should be taken to a new unique route that is parameterised by the presentation ID, which always loads the first slide in the slideshow deck. This route is for editing a specific presentation in a slideshow deck.
* When on this edit presentation page, Two key controls should always be visible and functional, regardless of which slide users are on:
  * "Back" that takes users back to the dashboard.
  * "Delete Presentation" which prompts "Are you sure?", where if "Yes" is clicked, the presentation is deleted and users are taken to the dashboard. If "No" is clicked, then the prompt disappears and the page remains still.

#### 2.2.4. Title editing

* When viewing a particular presentation, the title of the presentation should be visible at all times somewhere on or above the slideshow deck regardless of which slide users are on.
  * Somewhere near the title should have some text/icon/graphic/button that user can click to bring up a modal to edit the title of the presentation.

#### 2.2.5. Creating slides & moving between

* When visiting a particular slide, a button should be visible off the slides that allows users to create a new slide.
* Creating a new slide will add another slide at the end of the slideshow deck.
* Once the slideshow deck has at least two slides, controls should appear in the bottom right corner:
  * These controls should be two arrows, left and right.
  * When users click on these arrows, it takes them to the next or previous slide
  * When users click the associated keyboard keys(**left key** and **right key** in this case), the same corresponding action should happen
  * If users are viewing the first slide, there should be no previous arrow
  * If users are viewing the last slide, there should be no next arrow

#### 2.2.6. Deleting slides

* When visiting a particular slide, a button should be visible off the slide, which allows users to delete that slide.
* If a user tried to delete the only slide in the slideshow deck, an error should appear instead asking to delete the presentation.

#### 2.2.7. Slide numbers

* When viewing a particular slide, the slide number should be visible within the slide, position at the **bottom left**. The font-size should be `1em` of any colour, and it should be visible only within a `50px` by `50px` area. When you only have one slide left, this number will just be "1".

### 2.3. Feature Set 3. Putting Elements on a slide (15%)

* Any time when users are prompted for the "size" of an element below, size is always represented in percentage(%) as a number between 0 and 100 where:
  * For width, 100 represents the full width of the deck, 50 represents half the width, etc etc
  * For height, 100 represents the full height of the deck, 50 represents half the height, etc etc
* When any element is first added to the slide, it is always positioned at the top left corner of the slide.
* Double clicking (within 0.5 seconds) on any element in a slide will allow you to edit the initial properties(discussed in later scope) that are set when this element was created, as well as an extra property called *position* that describes where the top left of the element will appear on the slide. This property is expressed as an `x` and `y` co-ordinate between `0` and `100` (similar to what is described above).
* You can order the "layer" property of each element by having the most recent created element be higher than the previous one. This will help in situations where they are layered on top of one another.
* Each element in a slide can be deleted by right clicking anywhere within its block.

#### 2.3.1. Putting TEXT on the slide

* Somewhere on the slideshow edit screen, for each slide, there should be an action that is clearly described as adding a text box to the current slide. This action can be immediately visible in a list of tools, or can be hidden away by some kind of collapsable panel.
  * When this action is clicked, a modal should appear and accept inputs from users for 
    1) The size of the text area 
    2) The text in the textarea 
    3) The font size of the text in `em` as a decimal
    4) The colour the text as a [HEX color code](https://www.w3schools.com/css/css_colors_hex.asp).
  * The text is always top-down and left-aligned.
  * If any text overflows, it can simply be cut off.
* Each block should have a soft grey border around the outside of it.

#### 2.3.2. Putting an IMAGE on the slide

* Somewhere on the slideshow edit screen, for each slide, there should be an action that is clearly described as adding an image to the current slide. This action can be immediately visible in a list of tools, or can be hidden away by some kind of collapsable panel.
  * When this action is clicked, a modal should appear and accept inputs from users for 
    1) The size of the image area 
    2) Either the URL or a base64 string encoding of the whole image itself 
    3) A description of the image for an `alt` tag
  
#### 2.3.3. Putting a VIDEO on the slide

* Somewhere on the slideshow edit screen, for each slide, there should be an action that is clearly described as adding a video to the current slide. This action can be immediately visible in a list of tools, or can be hidden away by some kind of collapsable panel.
  * When this action is clicked, a modal should appear and accept inputs from users for 
    1) The size of the video area
    2) Either the URL of the youtube video to display 
    3) Whether or not the video should auto-play
  
#### 2.3.4. Putting CODE on the slide

* Somewhere on the slideshow edit screen, for each slide, there should be an action that is clearly described as adding a code block to the current slide. Code block is presented by a `textarea`. This action can be immediately visible in a list of tools, or can be hidden away by some kind of collapsable panel.
  * When this action is clicked, a modal should appear and accept inputs from users for 
    1) The size of the textarea
    2) The code in the textarea 
    3) The font size of the text in `em` as a decimal 
* The code entered should have whitespace preserved when displayed on screen
* The code should also be syntax highlighted appropriately to the language being chosen:
  * Valid languages are C, Python, Javascript
  * This element should be able to distinguish between different programming languages based on the input automatically

#### 2.3.5. 🙉🙉🙉 Making elements movable

* For all of `2.3.1`, `2.3.2`, `2.3.3`, `2.3.4`, and `2.3.5`, change it so that:
  * When you double click on a block, it no longer displays the position as an option to edit the location of the block
  * When you click on a block once, each of the 4 corners should now have a small `5px` x `5px` solid box on it, whereby:
    * If the user clicks and drags the corners, they can increase or decrease the size of the box (maintaining aspect ratio).
    * The block cannot have any of its corners extend beyond the edges of the slide.

#### 2.3.6. 🙉🙉🙉 Making elements resizable

* For all of `2.3.1`, `2.3.2`, `2.3.3`, `2.3.4`, and `2.3.5`, change it so that:
  * When you double click on a block, it no longer displays the position as an option to edit the size of the block
  * When you click on a block once, each of the 4 corners should now have a small `5px` x `5px` solid box on it, whereby:
    * If the user clicks and drags the corners, they can increase or decrease the size of the box (maintaining aspect ratio).
    * The block cannot be resized smaller than `1%` of width or height.
    * The block cannot have any of its corners extend beyond the edges of the slide.

### 2.4. Feature Set 4. Further Features (15%)

#### 2.4.1. Font adjustment

* For each text box on the slide, on the slideshow edit screen, the user should be able to change its `font-family`.

#### 2.4.2. Theme and background picker

* There should be a button, visible on all slides, when users click on it and it brings up a modal.
* In this modal, you can specify both:
  * The current slide's background in one solid colour, or in a colour gradient; 
  * The default background solid colour or colour gradient of all slides
    * This is the colour that a slide background is set to by default instead of white.

  Note: You are free to choose from different gradient directions(E.G. top to down/left to right). It's fully up to you to design a UI that allow users to choose different background options and colours

#### 2.4.3. Preview viewing

* Each slideshow deck should have a button somewhere (immediately visible or behind a panel) that users can click to preview the presentation
* Previewing the presentation simply opens another tab/window where:
  * The slideshow deck is visible to the full size of the screen in your browser
  * The arrow controls and slide numbers are still visible and functional, clicking on the arrows should display the previous/next slide accordingly.
  * Each block should have no border around it.

#### 2.4.4. URL Updating

* For both editing a slideshow deck and previewing presentation, when on a particular slide, the slide number should be reflected in the URL such that if the page is refreshed or URL is shared, it rediects other users to that exact same slide.
 
#### 2.4.5. 🙉🙉🙉Slide transitioning

* Add at least one form of animation when transitioning between slides in the slideshow deck. Examples of this may be:
  * Swipe left/right
  * Fade in and out or cross-fade

#### 2.4.6. 🙉🙉🙉Slide Re-arranging

* A button should be accessible on every slideshow deck (either immediately, or behind a control panel) that brings up the slide re-arrange screen.
* The slide re-arrange screen should display every slide as a rectangle, where each slide has a number inside it to indicate the index of the slide among all slides.
* The rectangles should be sized such that they can all fit on the viewport (assuming less than 10 slides).
* Users can click and drag a particular slide and drop it between another two slides to re-arrange it.
* There is a close button to exit this screen.

#### 2.4.7. 🙉🙉🙉Revision History

* A button should be accessible on every slideshow deck (either immediately, or behind a control panel) that brings up the version history page.
* This should show a list of moments in history such that users can "restore", which restores all slides in the deck to a previous state.
* These previous state moments should be captured by you on every modification of the slideshow deck that occurs with a minimum of 1 minute between saves.


### 2.6. Linting

* Linting must be run from inside the `frontend` folder by running `npm run lint`.

If you would like to disable linting checks during hot reload (and just use the check on command line), then in `frontend/package.json` replace `react-scripts start` with `ESLINT_NO_DEV_ERRORS='true'; react-scripts start`. Note: This does not work on windows machines.

### 2.7. Testing

As part of this assignment you are required to write some tests for your components (component testing), and for your application as a whole (ui testing).

For **component testing**, you must:
 * Write tests for different components (3 if solo, 6 if working in a pair)
 * For each of the components, they must not have more than 50% similarity (e.g. you can't test a "Card" component and a "BigCard" component, that are virtually the same)
 * Ensure your tests have excellent **coverage** (look at all different use cases and edge cases)
 * Ensure your tests have excellent **clarity** (well commented and code isn't overly complex)
 * Ensure your tests are **designed** well (logical ordering of tests, avoid any tests that aren't necessary or don't add any meaningful value)
 * (We encourage you to only use shallow component rendering)

You can use methods discussed in lectures for component testing, or you can use `cypress`.

For **ui testing**, you must:
 * Write a test for the "happy path" of an admin that is described as:
   1. Registers successfully
   2. Creates a new presentation successfully
   3. Updates the thumbnail and name of the presentation successfully
   4. Delete a presentation successfully
   5. Add some slides in a slideshow deck successfully
   6. Switch between slides successfully
   7. Logs out of the application successfully
   8. Logs back into the application successfully
 * (If working in a pair) also required to write a test for another path through the program, describing the steps and the rationale behind this choice in `TESTING.md`

#### Advice for Component Testing
 * Find a simple primitive component you've written, and if you don't have one, write one. This could include a common button you use, or a popup, or a box, or an input. Often examples of these are just MUI or other library components you might have wrapped slightly and includes some props you've passed in
 * Simply write some unit tests that check that for a given prop input, the component behaves in a certain way (e.g. action or visual display), etc etc
 * E.G. Creating a `MyButton` that wraps a MUI `Button`.
 * E.G. A simple example is the list of answers for a question. It takes in the answers list we've defined and renders a bunch of MUI ListItems, Checkboxes, TextFields and IconButtons
 * Your app is going to be a set of pages, and those pages are made up of primitive components. But if you don't have layers of components between that it means your code is not well modularised. Another example could be if we said to you - no component should be longer than 50 lines of code. You'd probably go refactor to group common sets of primitives together into a new component.

#### Advice for UI Testing
 * For cypress, consider adding `cy.wait(1000)` if necessary to add slight pauses in your tests if you find that the page is rendering slower than cypress is trying to test.
 * If you're having issues using Cypress on WSL2, try following [this guide](https://shouv.medium.com/how-to-run-cypress-on-wsl2-989b83795fb6).

#### Other advice / help
* You are welcomed to use `enzyme` for testing if you prefer - as long as everything works by running `npm run test`.
* One topic that has helped students is [mocking fetch calls with jest](https://medium.com/fernandodof/how-to-mock-fetch-calls-with-jest-a666ae1e7752).
* The tutor will run an empty (reset) backend when running `npm run test` whilst marking.
* Some students will run into `enzyme adapter` compatibility issues. If you run into these issues you can either:
 * Use this unofficial React 17 adapter: https://www.npmjs.com/package/@wojtekmaj/enzyme-adapter-react-17; or
 * Downgrade react and react-dom to 16, though this could break other things depending on what other dependencies you're using.

#### Running tests

Tests must be run from inside the `frontend` folder by running `npm run test`. Then you might need to press `a` to run all tests.

You are welcomed to modify the `npm run test` command by updating the `test` script inside `frontend/package.json`. For example, if you would like to run standard react testing alongside cypress UI tests you can use `react-scripts test —watchAll=false && npm run cypress open` and if you've used cypress for both component and UI test, then you can replace that line with `cypress open`.

### 2.8. Other notes
* The port you can use to `fetch` data from the backend is defined in `frontend/src/config.json`
* [This article may be useful to some students](https://stackoverflow.com/questions/66284286/react-jest-mock-usenavigate)
* For users of typescript, [follow this guide](https://gitlab.cse.unsw.edu.au/COMP6080/NOW/react-typescript)
* For certain requests you may want to "poll" the backend, i.e. have the friend end repeatedly make an API call every 1 second to check for updates.

### 3.1. The Frontend

Navigate to the `frontend` folder and run `npm install` to install all of the dependencies necessary to run the ReactJS app. Then run `npm start` to start the ReactJS app.

<!-- You will not need to do any meannigful work in the backend. However, some properties that the backend takes in are defined as blank objects. These are objects that can be defined by you, as the backend will simply store your object on some routes and then return it to you on other routes (i.e. the backend doesn't need to understand the schema of some objects you pass it). The property of interest is the `questions` component. It will appear in the backend API as an empty object, but you will need to define it.

This approach we've taken is actually designed to make the assignment _easier_, as it gives you control without having to worry about backend architecture. -->

Don't forget to check out our helpful resources about [ReactJS](https://cgi.cse.unsw.edu.au/~cs6080/NOW/help/resources/reactjs).

### 3.2. The Backend (provided)

You are prohibited from modifying the backend. No work needs to be done on the backend. It's provided to you simply to power your frontend.

The backend server exists in your individual repository. After you clone this repo, you must run `npm install` in `backend` directory once.

To run the backend server, simply run `npm start` in the `backend` directory. This will start the backend.

To view the API interface for the backend you can navigate to the base URL of the backend (e.g. `http://localhost:5005`). This will list all of the HTTP routes that you can interact with.

Your backend is persistent in terms of data storage. That means the data will remain even after your express server process stops running. If you want to reset the data in the backend to the original starting state, you can run `npm run reset` in the backend directory. If you want to make a copy of the backend data (e.g. for a backup) then simply copy `database.json`. If you want to start with an empty database, you can run `npm run clear` in the backend directory.

Once the backend has started, you can view the API documentation by navigating to `http://localhost:[port]` in a web browser.

The port that the backend runs on (and that the frontend can use) is specified in `frontend/src/config.js`. You can change the port in this file. This file exists so that your frontend knows what port to use when talking to the backend.

Please note: You **CANNOT** modify the backend for bonus marks.

## 4. Constraints & Assumptions

### 4.1. Languages

 * You must implement this assignment in ReactJS. You cannot use other declarative frameworks, such as Angular, or Vue.
 * You must use ReactJS solutions wherever possible, and avoid doing any direct DOM manipulation unless completely unavoidable (check with course staff).
 * You can use any CSS libraries and UI libraries that you would like, such as react-bootstrap or material-ui.
 * You are able to use and install any library that is available to install via `npm install`. You MUST commit `package.json` changes.

### 4.2. Browser Compatibility
 * You should ensure that your programs have been tested on one of the following two browsers:
   * Locally, Google Chrome (various operating systems) - make sure is latest version.
   * On CSE machines.

### 4.3. Using code found online
 * You may use small amounts (&lt; 10 lines) of general purpose code (not specific to the assignment) obtained from a site such as Stack Overflow or other publically available resources. You should attribute clearly the source of this code in a comment with it. You can not otherwise use code written by another person.

### 4.4. Other Requriements
 * The specification is intentionally vague to allow you to build frontend components however you think are visually appropriate. Their size, positioning, colour, layout, is in virtually all cases completely up to you. We require some basic criteria, but it's mainly dictating elements and behaviour.
 * Besides those described to avoid, you may use any other packages available on npm.
 * The use of universal CSS is **banned** - you must use either CSS libraries (E.G. material-ui) or [styled components](https://styled-components.com/docs/basics).

## 5. Teamwork

This assignment may be completed in a team of two (pair). However, you are also welcome to complete it on your own, if you choose. The groups were organised and coordinated by the course coordinator separately.

If you formed a pair, you will be unable to leave your pair unless under extreme circumstances. You will be assessed together for the assignment.

If your contributions to the assignment are not approximately equal, then the teaching staff may make discretionary calls based on your gitlab history to award different marks to each student.

<b>Please note: Your contributions will be measured based on the lines and commits contributed via gitlab. Please commit via your own machine or account.</b> If you're in a pair, your contributions will not be considered yours if it is your partner who pushes the code to gitlab.

<b>Please note: When special consideration is granted for one individual in a pair, it will only either 1) extend the deadline for the person who gets special consideration (it does not extend for the other individual); or 2) Result in a scale of the mark. To determine which outcome is appropriate, the person who receives special consideration is required to email the lecturer to notify them of how the work is split up prior to deadline.</b>

## 6. Marking Criteria

Your assignment will be hand-marked by tutor(s) in the course according to the criteria below.

<table>
  <tr>
    <th>Criteria</th>
    <th>Weighting</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Functionality of the Feature Set</td>
    <td>50%</td>
    <td>
      <ul>
        <li>Features implemented that satisfy requirements as outlined in section 2.</li>
        <li>You <b>MUST</b> update the <code>progress.csv</code> file in the root folder of this repository as you complete things partially or fully. The valid values are "NO", "PARTIAL", and "YES". Updating this is necessary so that your tutor knows what to focus on and what to avoid - giving them the best understanding of your work and provide you with marks you have earned. Failure to correctly fill in this file will result in a 5% penalty.</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>Responsiveness</td>
    <td>15%</td>
    <td>
      <ul>
        <li>Features implemented in a mobile responsive way that work on screens as small as 400px wide, 700px high</li>
        <li>Responsive design will contribute up to one quarter of the marks of this section</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>UI/UX</td>
    <td>10%</td>
    <td>
      <ul>
        <li>Your application is usable and easy to navigate. No obvious usability issues or confusing layouts/flows.</li>
        <li>Your application makes intelligent use of UI/UX principles and patterns discussed in the UI/UX lectures.</li>
        <li>Describe any attempts you've made to improve the UI/UX in `UIUX.md`. This section will ONLY be marked on things described in that file.</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>Code Style</td>
    <td>10%</td>
    <td>
      <ul>
        <li>Your code is clean, well commented, with well-named variables, and well laid out as highlighted in the course style guide.</li>
        <li>Code follows common ReactJS patterns that have been discussed in lectures and as highlighted in the course style guide.</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>Linted Code</td>
    <td>5%</td>
    <td>
      <ul>
        <li>Submitted code is completely `eslint` compliant based on provided eslint configuration file. There are no partial marks.</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>Testing</td>
    <td>5%</td>
    <td>
      <ul>
        <li>60% of the marks(3/5) received from complying with requirements in section `2.7` in relation to **component testing**</li>
        <li>40% of the marks(2/5) received from complying with requirements in section `2.7` in relation to **ui testing**</li>
        <li>Describe your approach to testing in `TESTING.md`. This section will ONLY be marked on things described in that file.</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>Accessibility</td>
    <td>5%</td>
    <td>
      <ul>
        <li>Your application follows standard accessibility lessons covered in lectures.</li>
        <li>Describe any attempts you've made to improve the Accessibility in `A11Y.md`. This section will ONLY be marked on things described in that file.</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>(Bonus Marks) Extra Features</td>
    <td>5%</td>
    <td>
      <ul>
        <li>Implementation of extra features that are not included in the spec.</li>
        <li>Extra features should be non-trivial, have a clear justification for existing, and show either a form of technical, product, or creative flare.</li>
        <li>Any extra features written down in `BONUS.md` in the project folder</li>
        <li>Any bonus marks that extend your ass4 mark above 100% will bleed into other assignment marks, but cannot contribute outside of the 80% of the course that is allocated for assignment marks</li>
        <li><b>Expectations placed on solo groups will be half of that of pairs to achieve the same mark.</b></li>
        <li>If you are working individually and complete Advanced Features (section 2.5) in it's entirety (and high quality) you can receive full marks for bonus marks.</li>
      </ul>
    </td>
  </tr>
</table>

## 7. Originality of Work

The work you submit must be your own work.  Submission of work partially or completely derived from
any other person or jointly written with any other person is not permitted.

The penalties for such an offence may include negative marks, automatic failure of the course and
possibly other academic discipline. Assignment submissions will be examined both automatically and
manually for such submissions.

Relevant scholarship authorities will be informed if students holding scholarships are involved in
an incident of plagiarism or other misconduct.

Do not provide or show your assignment work to any other person &mdash; apart from the teaching
staff of COMP6080.

If you knowingly provide or show your assignment work to another person for any reason, and work
derived from it is submitted, you may be penalised, even if the work was submitted without your
knowledge or consent.  This may apply even if your work is submitted by a third party unknown to
you.

Every time you make commits or pushes on this repository, you are acknowledging that the work you
submit is your own work (as described above).

Note you will not be penalised if your work has the potential to be taken without your consent or
knowledge.

**PLEASE NOTE: To ensure the originality of your work, we are requiring that you regularly commit your work to git throughout the weeks this assignment has been released. Regular and small commits (essentially at least once a day that you work on the assignment) are critical. Failures to commit regularly (or at minimum, failures to commit in small chunks) may results in either penalties of up to 20% of result in allegations of plagiarism.**

## 8. Submission

This assignment is due *Friday 19th April, 10pm*.

To submit your assignment, you must you've pushed all of your code to your gitlab master branch. You can check if you've done this properly by seeing what code is on the gitlab site on your master branch.
 
We will collect the latest work on your master branch of gitlab at the time of submission.

It is your responsibiltiy to ensure that your code can run successfully when cloned fresh from Gitlab.

### Dryrun

You can run a dryrun to sanity check your code runs basically by:
1. Pushing your code to master on gitlab
2. On a CSE terminal (vlab or lab machine), run `6080 ass4dryrun presto GROUP_NAME` where GROUP_NAME is the name of your group

## 9. Late Submission Policy

No late submission are accepted.
