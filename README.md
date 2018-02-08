# Azure Machine Learning with Node/Vue.js webapp hands-on-lab

## Steps

1. Make an Azure Machine Learning Experiment
2. Deploy an Azure Machine Learning web service
3. Make a webapp with Node.js and Vue.js which communicates with the web service
4. Deploying the webapp to Azure (if time permits)

## Final Product

A web app which can take in user input with car data and return a price prediction.



## Project Structure

- Public folder
	- Uses Vue.js
  - Contains frontend files (HTML, CSS, JS) which are served to the user

- app.js
  - Uses Node.js
	- Uses express npm
	- Entry point for the webapp
	- Contains basic setup of server
	  - Setup express server and routes (to ml.js)
	  - Set static folder (public)
	  - Enable CORS
	  - Use bodyparser json middleware

- ml.js
  - Contains the /ml route which will send input data to the Azure Machine Learning web service and return the result as a response
