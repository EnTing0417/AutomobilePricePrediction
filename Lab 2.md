# 2. Deploy an Azure Machine Learning web service

In this lab, we will deploy the experiment we made as a web service.

Continue with the experiment created in Lab 1.md. Click "Run" button and select "Run" 

![](https://github.com/EnTing0417/AutomobilePricePrediction/blob/master/ManualImages/Lab%201.jpg)

After finished running , click *Set Up Web Service* at the bottom of the experiment canvas (and selecting the *Predictive Web Service* option).

![](https://github.com/EnTing0417/AutomobilePricePrediction/blob/master/ManualImages/Lab%202%20(%20Select%20Predictive%20Web%20Service%20).jpg)

You should be able to view the following image after running predictive experiment.

![](https://github.com/EnTing0417/AutomobilePricePrediction/blob/master/ManualImages/Lab%202(Predictive%20Experiment).jpg)

Select *Apply Transformation* and *Select columns in dataset with exclude normalized losses as launch selector* and click "DEL" button on your keyboard. 
Drag and link the modules.Modify the diagram to look something like below. 

![](https://github.com/EnTing0417/AutomobilePricePrediction/blob/master/ManualImages/finalexperiment.PNG)

Run the predictive experiment and click deploy web service.

You should be navigate to a dashboard as shown. Select *New Web Services Experience. 

![](https://github.com/EnTing0417/AutomobilePricePrediction/blob/master/ManualImages/Lab%203%20-%20Dashboard%20(%20Select%20New%20Web%20Services%20Experience).jpg)

After that, select the tab called Swagger API and click "Submit request".

# Make sure your swagger API appeared is exactly the same as the image below. 
![](https://github.com/EnTing0417/AutomobilePricePrediction/blob/master/ManualImages/Lab%203%20-%20Dashboard%20(Swagger%20API).jpg)

[Next Step](https://github.com/EnTing0417/AutomobilePricePrediction/blob/master/Lab%203.md)
