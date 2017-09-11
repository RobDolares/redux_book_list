#  Redux Book List

### React / Redux application that uses actions and reducers to show content for a book list.

Use create-react-app to quickly scaffold a project.
Migrate components into a components folder in the src directory and the styles into a styles folder in the src directory.
Link up all pages and test

Save Redux to project dependencies and import

* ``` npm install --save redux ```
* ``` npm install --save react-redux ```

* Create a books.js file inside of the data folder.
* Create containers, actions, and reducers folders as well.

You should have the following separate components:

* Components: App.js
* Containers: BookList.js
* Containers: BookDetail.js

Your app should mimic the functionality of this example:

![Assignment Mockup](/public/mockup.gif)

Create the action of selecting a book, determine its payload and make sure that it is exported properly to your reducers.

In the BookList container component, you will need to make sure there is a proper map function in place to sort through the data from your reducer.d
