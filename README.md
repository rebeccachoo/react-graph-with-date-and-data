# React App - Show a Graph of Corona Cases

This single page app will show you a graph that increase and decrease of corona cases with date.
You can also put fake data to modify the graph.
<br /><br />

| Feature | Description |
| -----: | :----------- |
|  Initial state | <img src="https://github.com/rebeccachoo/react-coronavirus-track/blob/main/corona.png?raw=true"  width="400">| 



## Installation

### `npm install`

Install the app in the development mode.\ 

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm start`

Runs the app in the development mode.\ 

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Change the initial Graph data
You can put the initial data to modify the graph.
In src/components/Graph/Graph.js on line #22, you can put change the data in the array to show the initial array. The program will sort the array by date when it render.
<br />
`dateAndDataArray: {
				"2015-02": 3333,
				"2010-04": 333,
				"1984-01": 220,
				"1888-09": 100,
			},
      `

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate. 

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
