# **Auto Analytics**


## **Introduction**

Welcome to Auto Analytics GitHub Repository.

Auto Analytics is a ReactJS based web application with a Django based backend API server. It has Four components :-

> [Auto Analytics Web App](https://autoanalytics.vercel.app)

**1. Dashboard**: A information management tool that displays various analysis using various types of charts and tables based on the different datasets related to the automobile industry to track the status of the automobile industry and make informed decisions.
*	Included Analyses:
    * Different Customer Segments.
	* Top 5 Countries by cars production, sales & exports.
	* Top automakers worldwide by earnings, revenue, market cap & employee count.
	* Sales variation with consumer sentiment.
	* Relationship between price and mileage.
	* Sales volume comparison of top 10 brands.
	* Top 5 worst and best performers in car sales.
	* Top 5 Expensive car brands
	* Growth of passenger cars produced in India
	* The right time to launch the car using Simple Moving Average (SMA) Analyses with a prediction of months with the best performance.
	* Top Brand in cars sales month and year wise.
	* Sales in current year and month with an indicator which whether they are increased or decreased.
  <br/><br/>

**2. Data Analyzer**: A tool that allows the user to analyze the data set by applying ordering and various filters. Users can view filtered the data in a form table and can also plot line charts and bar charts using filtered data, which helps the user to visualize the data in a better way and make better decisions.
	Supported Chart Types: Multi Axes Line and Bar Chart.
* Filters: 
	* Manufacturer
	* Fuel Type
	* Transmission type
	* Price
	* Year
	* Mileage
	* Engine Volume (CC)
	* Power
     *  No. of seats
  <br/><br/>
* Order By: 
	 * Name Manufacturer Year
	 * Engine Volume (CC)
     * Power
	 * Seats
	 * Mileage
	 * Price
	 * AverageYearlySales.
  
 Any number of filters can be applied at the same time.

**3. Sales Forecast**: A sales forecasting tool that allows the user to put a link to a sales dataset, then the user can predict the future sales based on previous sales data, which can be beneficial in many ways. This feature uses the AMIRA Time series, analysis Model.
* Features: 
	* Any CSV Dataset with the first column as Dates and the second column as Numerical values (sales) is supported.
	* Users can optimise the forecasting model by using different values of "p" and "q". "p" and "q" are parameters of the ARIMA(p,d,q) equation. This model assumes the value of "d" to be 1.
	* Displays various model accuracy metrics such as Root Mean Squared Error(RMSE), Mean Absolute Percentage Error(MAPE), and Residual Sum Of Squares(RSS) Value.
	* Tells whether the given data is stationary or not using Dickey-Fuller Test.
	* Shows model accuracy by showing a visual comparison between actual and predicted values.
	* Applicable for both stationary and non-stationary datasets.
	
**4. AUTO API**: A Django based REST API, which executes queries and processes datasets and sends processed information to the frontend client in JSON format, so a user can view it to make informed decisions.
Visit AUTO-API repo for API docs and Installation details.
> [AUTOAPI Service](https://engage-autoapi.herokuapp.com)
Visit [AUTO API](https://github.com/funiex/backend-api-vehicle) Repository for Installation Process and API Docs.

## **Technologies used :-**
* **[ReactJS](https://www.djangoproject.com/)**: React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.
* **[MUI 5](https://mui.com)**: MUI offers a comprehensive suite of UI tools to help you ship new features faster. Start with Material UI, our fully-loaded component library, or bring your own design system to our production-ready components.
* **[react-chartjs-2](https://react-chartjs-2.js.org)**: React components for [Chart.js](https://www.chartjs.org), the most popular charting library.
* **[Redux Toolkit](https://redux-toolkit.js.org)**: The official, opinionated, batteries-included toolset for efficient Redux development.
* **[Styled Components](https://styled-components.com/)**: Styled-components is a popular library that is used to style React applications. It allows you to build custom components by writing actual CSS in your JavaScript.
* **[React Router V6](https://reactrouter.com)**: React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
* **[Django](https://www.djangoproject.com/)**: The web framework for perfectionists with deadlines (Django builds better web apps with less code).
* **[Django Rest Framework(DRF)](www.django-rest-framework.org/)**: A powerful and flexible toolkit for building Web APIs
* **[pandas](https://pandas.pydata.org/)**: pandas is a fast, powerful, flexible and easy to use open source data analysis and manipulation tool, built on top of the Python programming language.
* **[NumPy](https://numpy.org/)**: NumPy is a library for the Python programming language, adding support for large, multi-dimensional arrays and matrices, along with a large collection of high-level mathematical functions to operate on these arrays.
* **[Stats Model](https://www.statsmodels.org/stable/index.html)**: statsmodels is a Python module that provides classes and functions for the estimation of many different statistical models, as well as for conducting statistical tests, and statistical data exploration. An extensive list of result statistics are available for each estimator.



## Application Architecture

![](https://github.com/funiex/vehicle_analysis/blob/master/ApplicationStructure.png)





Visit [AUTO API](https://github.com/funiex/backend-api-vehicle) Repository for documantion of backend using django rest framework.


