# ReactJS Tasks

Initial boilerplate code for ReactJS related tasks.
Please consider `master` branch as base for all tasks (to create your task branch from).

## Setup
To setup all project dependencies simple run:

``npm install``

To run dev server: 

``npm start``

Server will be run on:
``http://loclalhost:3000``

To run tests

``npm test``

To run custom ESlint check 

``npm run lint``

## Tasks

1) **React TODO**

Use git branch name `todo-surname-firstname`.
Implemente TODO task using ReactJS. Rerquirements are [the same as for task-2](https://portal-ua.globallogic.com/gitlab/gl_reactjs_internship/task-2).

2) **React Rectangles**

Use git branch name `rectangles-surname-firstname`.
Create React web application which will allow user to create up to 5 rectangles with given size and position on the screen.

- The user should have the ability to `change` rectangles sizes as well as the rectangles position.
- The sum of widths `cannot be larger` than the viewport width. 
- The application should `remember` the set of the shapes, they should appear again on the screen when the app is reopened.
- The `printed version` of the page should have inverted colors (color of the background should become shape color and vice versa).

Optional: 
- Please provide at least one unit test using Jest+Enzyme (don't worry about it right now, we will discuss it later).

3) **Context API task** 

The context you are going to work with will be an edition “MODE”: ‘simple’ or ‘full’.
simple mode has 3 generated input fields.
full mode has - 5

You should add a button “Change mode” to switch between the modes.

The idea is to use a context variable with a number of fields, need to be generated

Use git branch name `context-surname-firstname`.

4) **HOC task**

Create 2 components: Visitors and Employees. Both of them should have repeatable operations: handle the wifi password.
Password will be randomly generated with 4 digits every 5 seconds. (That will be a datasource).
Once the Visitors, or Employees receive a new password, they just show it.

Output should be in format:  Visitor has a new password: 1235
Employee has a new password: 1235

If to do the same as in the example, password will be same, but the goal of exercise is to use HOC with repeatable operations: listen change of password and handle change.

Use git branch name `hoc-surname-firstname`.

5) **Webpack, babel, eslint** Note: your project still also work at least in IE11. 
Use git branch name `webpack-surname-firstname`.

- Add `SAAS(SCSS)` support to the project. Add at least one `.scss` file with some styles in it.
- Add `Promises` support to the project 
- Add `babel polyfill` to the project
- Add `fetch` support to the project.(Fetch API).
    To use fetch, please use `/api/users`. And U need to show that users list. Note: this response will be delayed for 5 seconds.
    (In case U will have free time, you can try to find how to fix it) 
- Add ability to abort `fetch` call. (Fetch API) - `AbortController`
- Update `eslint` rule to show warnings for `alert` usage.
  

6) **Unit tests**
 - Write tests for TODO task
 - Write tests for Rectangles task

7) **React Router**
- Simple routing between 2 previously created apps (for example todo list and HOC, or Rectangles). Add the links to the top of the screen, or to the sidebar to navigate between the applications.
- Add navigation links also to the applications level to change the page on some action, like click on the button. So you are going to have main navigation block + links from apps.
- Browser history/url should also be changed on app switch.

Use git branch name `simple-router-surname-firstname`.

8) **Add API calls to your TODO app**
- The data for the application should be fetched from https://jsonplaceholder.typicode.com/
- Add a loader when the user waits for response from the server
- Try to update an item with PUT and create a new TODO item with POST (if the API allows to do that)
- Add error handling, if the server responds an error (for example 404)
- You can do the requests from your React containers for the moment

Use git branch name `fetch-api-surname-firstname`.

9) **Children property. Pagination**
- Create a pagination for the list component. Inner (child) component, or list of data should receive the prop “data” from the  parent one (paginator):
```
<Pagination data={data} perPage={5}>
	<List />
</Pagination>
```
- Pagination should only have links “previous page”, “next page”.
Use git branch name `pagination-children-surname-firstname`.

10) **Animation**
- Create an accordion application. It should look like this one: https://www.w3schools.com/howto/howto_js_accordion.asp
- You can use data from ToDo, either use any fake data. The idea is to open/close the accordion body with animation. Header is always visible.
- You can use CSSTransitionGroup component.
Use git branch name `accordion-surname-firstname`.


