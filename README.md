
# Gamification For Health Data Collection

It is a Health Score Calculator which collects some answers/data and tells us about how our lifestyle habbits affect our body. 

## How it works

Various set of questions related to any user’s lifestyle are asked along with asking for some basic information like the user’s height, weight, age and waist. Based on this information we are able to provdide health score to the user 

## The Score

The math used for calculating the result has been based on values and formulae used by professionals in the Healthcare  field.

Here are some of the formulas that have been used,

- Convert wt. to pounds 
  
   weight = weight / 0.45359237 

- Calculate BMI Value
  
   newbmivalue = Math.round((weight * 703) / (height * height))

- Get the Total score using the data provided by the use
  
  scoreTotal = Math.round((sleep + exercise + alcohol + smoking + health + eHealth + newbmivalue + waistPoints + age)*10) / 10

- Calculating the final score to display the risk factor  

  scoreRisk = Math.round((100 - scoreTotal)*10)/10 + 36

## Website Screenshot

![healthss](https://user-images.githubusercontent.com/94172448/168309601-216aa540-eda4-401d-9adf-9712c5ae5371.jpg)
