### Hi there 👋
This is my web project! It's basically a proof of concept to get me familiarised with the basics of front-end development. 

This proyect is deployed [here](https://menegol-t.github.io/menegol-t/).

The main objective was to test my knowledge in HTML, CSS, SCSS, JavaScript & Git. It's got a couple of libraries like Bootstrap or SweetAlert2, but that's it. 

So it's a fairly unsophisticated website, but thats what improvement is all about! To date, i have improved it by replicating the "e-commerce" aspect in another proyect of mine which uses ReactJS that i'll link at the bottom, so be sure to check that out. 

I organised the JS files based on what HTML they are called from. So for example, the JS file that puts the images in the Index dinamically from a JSON file is called fromIndex.js, because that JS file is only called by the index.html

Demo functionalities:

* It has a VERY rudamentary search bar (try the key-word "madera" and click the button!). You can see all of the keywords in the "contentForPages.js" file. 

* It pulls all images dinamicaly from the /imgs folder (unlike my react proyect that uses cloud storage) via a JSON document so as to make the proyect scallable. If you put more products on the JSON, they'll be displayed automatically (provided you put the correct path to an existing image in /imgs). 

* It has a basic contact form that will save user data, you can find it in "novedades.html". The data is saved locally on local storage (unlike my reactJS proyect), but it has all the front-end logic to check if you were already registered in the past, wether you missed a data field, etc. To check the logic go to "forNovedades.js"

So, as i've said, you can see the improved [E-Commerce functionality deployed here](https://menegol-t.github.io/Aubier-TomasMenegolReactJS/) and with the code [here](https://github.com/menegol-t/Aubier-TomasMenegolReactJS).

Thank you for checking me out, have a nice day!