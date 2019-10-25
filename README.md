# SafetyWing Remote Health FAQ page

## Running the app

The app was made with Create-React-App, so install the dependencies with `yarn` and run the project with `yarn start`.

## Features

The FAQ page includes the following features:

* Responsive styling that has a different layout on mobile, tablet and desktop
* Components that stick to the scroll when they reach a certain position
* The answers to the questions in the FAQ are written as markdown
* The questions and answers are searchable, and highlight the search term wherever it is found
* The questions are navigable through a navigation component which scrolls to a category when it is clicked. It also shows which category is currently active, i.e. which category the user has currently scrolled to.
* An animated category navigator on mobile, and answers that appear with an animation when a question is clicked open

Below is a little bit more explanation on some of the reasoning behind the choices that were made.

### Markdown answers

All of the main textual content of the FAQ - the questions, answers and categories - is stored in a file called content.js. I made the assumption that the answers can include e.g. images, different kinds of text boxes, lists, etc. However, I did not want to hardcode them into components because then the separation of the content and the code would not be so clean, and also eventually the codebase would include lots of different components as each answer might need new components. I considered what the real-life use case for this page could be, and realized that it would be great if the content could be edited by non-technical people as well, or come from the API of a CMS. For this purpose, I thought that markdown would be a great way to input the answers. Therefore, the answers are written as markdown, and rendered with react-markdown.

### Highlighting search

When a user searches for a term, the list of questions is filtered so that it only shows items with matches and highlights the matches. Highlighting the search term happens through crawling the DOM and whenever a text node is found, its innerHTML is changed so that a span with the class "highlight" is added around the search term. 

### Navigation between categories

Navigation between categories happens in the usePageNavigation hook, since there are three different components that render the navigation (different components for different screen sizes). The navigation works in two different ways: when the user is scrolling and when the user clicks a link. 

When the user scrolls, the active category (which is indicated with different colours in the navigation component) changes depending on which category is visible on the screen. The current logic is that the active category is the one, the start of which is at least at the top of the visible page or above it. The logic can easily be changed though; I also considered e.g. changing the active category whenever at least half of the visible page is filled with said category. In general, this solution works well with this provided content, but might not be suitable to e.g. very big screens or small categories (the first category would always be highlighted as there is no room to scroll), but that is more due to the limitations of this design and not really solvable by code. 

When the user clicks a link, the active category changes immediately to the clicked category. The automatic changing of the active category during scrolling is disabled, until the code detects that the clicked category has been reached, so that the user will not see the category change multiple times while the page scrolls to the clicked category.

### Styling

The colour theme in this project has a philosophy of containing components or items, each of which has a foreground and a background colour. This is not a perfect solution as it probably does not cover all cases (sometimes a color can not be assigned as the foreground or background of a specific item). However, I think it is good to pick a philosophy about how to structure one's theme and then follow it as much as possible in order to be consistent and keep the theme easy to use.

I used CSS grid for making the base layout for this page. This makes it trivial to e.g. switch around the order of the components on different screen sizes and change the layout later.

## Ideas for further development

The structure of the search could be slightly cleaner if the search term was set to an app state such as Redux instead of being in the state of the FAQPage component and being passed to its children as props. However, I felt that taking Redux to use just for that was slightly overkill for the purpose of this exercise. 

On very wide but very low screen sizes, the side navigation and the contact link, which are both fixed in position, will not be scrollable and may overlap. However, as the screen sizes in which this would even happen are very rare, I did not take this into account in the code. To make it absolutely foolproof, a check should be made for this so that they do not overlap and the side navigation can still be scrolled.
