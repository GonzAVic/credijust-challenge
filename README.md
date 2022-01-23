# Crypto Comparator
A dummy SPA build in React to compare some dynamic crypto coins

# The idea
This application is using react-router to habdle different routes ("/login", "/comparator")

I have created some modular components for the UI: `<Text />` and `<Input />`, the idea behind it is create a component system that can help scale the application by creating modular ui components. Each UI component should be responsible for all different variants of that element. For example, the `<Text />` component should know how to render a h1, h2, the default text, etc..., but also it should know how to handle the mobile versions, lets say by adjusting the font-size of all different variants.

**The Login** screen is using formik and the `<Input />` component to create and handle the form state. This view is using the Layout which wraps any view and adds a Header.

**The comparator** screen is composed by 4 main components:
- Comparator: It's responsability is to serve as a container and run the main functions so that, the Coin tables and the converter can work correctly.
- ComparatorTabs: the tabs to select which data coin should be rendered.
- ComparatorConverter: the "footer" of this Comparator component, which recieves the last values from all providers and calculates the convertion from MXN to a given coin
- CoinTable: It's a compoennt which recierves only the name of the coin, and a history, then this only responsibility is to display the data.

**🛑Improtant Note 1🛑:** The comparator has it's own folder and the reason behind it is that this component NEEDS as a children: `ComparatorTabs` `ComparatorConverter` on order to work correctly. It is a Compound component.

**🛑Improtant Note 2🛑:** The Coin Table is not inside inside the /comparator folder, ans the reason is that this `<CoinTable />` component can be used without the `<Comparator />`, that way I can display Any coin data using this `<CoinTable />`

**🛑Improtant Note 3🛑:** The comparator is quite scalable right now, it is "fully" dynamic. This component recieves 3 main props: `coins`, `coinsConfig` and `providers`. This way the implementation of a new coin is painless (see commits "Update: Adding XRP to the convertor" and "Update: Add coingecko to converter as provider" for some examples)

### How can this be more scalable?
The application can potentially has it's own "providers" data as a global variable (/utils/providers) that way, the `<Comparator />` can look for the providers information in that variable.
Since some providers recieves the coins to be feteched on the query params, there should be a function to generate those endpoints based on an array of coins.

The functionality to parse the data from different providers when fetching it is currently living inside `<Comparator />`, in order to be more scalable, I can move that funcionallity into a custom hook, that way any component can use that functionality (for exmaple the Cointable)

## How to...

### run the project
This projec tis using node v16.13.1.

1. clone this project
2. once you're on the root folder run the followinf commands...
3. `nvm` (this project contains a .nvmrc file with the correct version)
4. `npm install`
5. `npm start`

### run the tests
This project is using cypress for the tests
Once you have installed the dependencies, run following commands:
1. `npm start`
2. IN A NEW TERMINAL `npx cypress open`
3. Select the test to run


## For the UI
I took the freedom of take inspiration from the credijusto.com, to use the main colors and shapes.


# Scenario problem

### What possible risk are you able to identify in this scenario?
Since the "screens are defined by a state machine", probably the best approach is not to use routes. Now, if this is the case, some risks are:
- How to persist the data while the user is cative (relode the page, going (if need it) back and foward)
- If the applicattion is using 3rd parties services, it is in some way coupled with those parties, and if those services change or fail in some way, it will affect the applciaiton
- Scalability. sharing a state through an amount of sibling components is potentially a "props drilling" issue, and props drilling should be avoided in order to get scalability

### How would you deal with dependencies?
Creating it's own module onthe front-end. since the " stakeholders want to see the changes implemented in the application in a weekly manner" it sounds like the 3rd parties services coul potentially change, so I would use some "dependency injection" approach, so that the team/product can move from one service to another if need it.

### What testing strategy would you suggest for this scenario?
I don't have much experience on testing, but I would use cypress and mocking those 3rd paties modules.

### At the highest level possible, what would the implementation of this look like?
I would suggest create a "container component" which will be responsible for keep track of the application state related to the "state machine", then, each child screen from this container should recieve a standardized amount of props.

Basically some sort of "redux" approach. (maybe by using context, redux, or just props)
