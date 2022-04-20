## TestingDemoAngular

Foundation [Automated Angular Testing](https://www.udemy.com/course/testing-angular-apps/) Course to learn about testing concepts and tools, decide what to test and how. Also, how to write clean, maintainable and trustworthy tests that won't lie, track how much of the code is covered by tests, how to proceed to test different aspects of of Angular Apps, and mocking dependencies.

### Run tests... 
=> run the command `ng-test`

### Test Coverage...
=> run the comand `ng test --code-coverage`
* It will create a coverage folder in your project automatically, where we can appreciate percentages tested in our project(All files or individually).
* Click right mouse button over index.html to choose open in live Server.

<div align="center">

![Screenshot 2022-04-15 at 18 10 13](https://user-images.githubusercontent.com/43299285/163594197-8090b843-354a-4876-88a4-37d15857a538.png)

</div>

* Then you will be able to see percentages of Statements, Branches, Functions and Lines in the project already tested.

<div align="center">

![Screenshot 2022-04-15 at 18 13 16](https://user-images.githubusercontent.com/43299285/163594600-7a1a61ae-7ccf-484f-b451-715478aae628.png)

</div>

## **UNIT TESTING**

### Testing Arrays and Strings...

<div align="center">

![Screenshot 2022-04-20 at 07 47 19](https://user-images.githubusercontent.com/43299285/164159152-e40f1c5e-3821-43cd-9d5b-f7d8313ee494.png)

![Screenshot 2022-04-20 at 07 46 31](https://user-images.githubusercontent.com/43299285/164159175-73b9cec4-d343-4001-b157-58911a46b604.png)

</div>

### Testing Simple form...

<div align="center">

![Screenshot 2022-04-20 at 07 51 08](https://user-images.githubusercontent.com/43299285/164159653-b59c4652-bb61-4133-a711-43909dcb3f02.png)

![Screenshot 2022-04-20 at 07 51 40](https://user-images.githubusercontent.com/43299285/164159687-b00d44a5-4b66-4203-a475-4ca7663a1763.png)

</div>

### Testing Event Emitter...

<div align="center">

![Screenshot 2022-04-20 at 07 53 36](https://user-images.githubusercontent.com/43299285/164159927-bac7d64b-6bbf-479c-b1a2-763d944cb5e2.png)

![Screenshot 2022-04-20 at 07 53 52](https://user-images.githubusercontent.com/43299285/164159993-d7802d45-cec1-4b9d-b33e-6af284bfc5ab.png)

</div>

### Testing a Service...

Please refer to services folder to have a quick look into spies that are integral part of service unit testing. They will allow us to spy on our application function calls either in the component or even services called from them.

* **SpyOn()** with `callFake()` and `returnValue()`.

<div align="center">

![Screenshot 2022-04-20 at 08 13 57](https://user-images.githubusercontent.com/43299285/164162530-eaf7f850-3a10-4edf-a76e-6a0d8d1e33db.png)

![Screenshot 2022-04-20 at 08 13 43](https://user-images.githubusercontent.com/43299285/164162558-8398966d-9a21-425a-9b8f-4d76178cff12.png)

</div>

* **createSpyObj()** to create observable as return value and `httpClient` when setting up to build the service that is using http calls.

<div align="center">

![Screenshot 2022-04-20 at 08 08 09](https://user-images.githubusercontent.com/43299285/164161803-e4552555-9a80-4920-b4a9-c42cdfa78ef8.png)

![Screenshot 2022-04-20 at 08 10 11](https://user-images.githubusercontent.com/43299285/164162041-87af6de0-e921-492c-ad40-e5ed2cc62481.png)

</div>

## **INTEGRATION TESTING**
### Setting up Integration Test Suites...

<div align="center">

![Screenshot 2022-04-20 at 08 26 32](https://user-images.githubusercontent.com/43299285/164164155-d37b894d-4d6a-446f-ac87-ad378aec8c64.png)

</div>

### Testing properties and class Bindings...

<div align="center">

![Screenshot 2022-04-20 at 08 30 29](https://user-images.githubusercontent.com/43299285/164164775-1bdd2e44-6ca0-4f10-b65d-0b05395ba1ec.png)

![Screenshot 2022-04-20 at 08 35 33](https://user-images.githubusercontent.com/43299285/164165626-4facd7db-6d38-4863-8f7e-4b1516a3864b.png)

</div>

### Testing Event Binding (Click)...

<div align="center">

![Screenshot 2022-04-20 at 08 35 48](https://user-images.githubusercontent.com/43299285/164165710-2e860850-4253-4efa-aaf0-7f25217fcfaf.png)

</div>

### How to installing... 
* `git clone https://github.com/JoseMMorales/TestingAngular2-Mosh.git`
* `cd TestingAngular2-Mosh`
* `npm start` or `ng serve -o`

### Author...
JoseMMorales
