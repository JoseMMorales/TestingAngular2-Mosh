## TestingDemoAngular

Foundation [Automated Angular Testing](https://www.udemy.com/course/testing-angular-apps/) Course to learn about testing concepts and tools, decide what to test and how. Also, how to write clean, maintainable, and trustworthy tests that won't lie, track how much of the code is covered by tests, how to proceed to test different aspects of Angular Apps, and mocking dependencies.

### Run tests... 
=> run the command `ng-test`

### Test Coverage...
=> run the command `ng test --code-coverage`
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

### Providing dependencies when testing(Service)...

* First, we provide service which we want to test, also import in this case `HttpClient` that is being used for API calls.

<div align="center">

![Screenshot 2022-04-20 at 18 05 32](https://user-images.githubusercontent.com/43299285/164274540-5137e190-fe64-42fa-8694-6369aae13757.png)

</div>

* Then we get the dependency(Service) in the test suit injecting it using TestBed.

<div align="center">

![Screenshot 2022-04-20 at 18 06 43](https://user-images.githubusercontent.com/43299285/164275075-d8bfaccd-4088-4618-8b16-53557fbb3c81.png)

</div>

### Providing Router Stub...
As this component(user-details) is using `Router` and `ActivatedRoute`.

* Stubs...

<div align="center">

![Screenshot 2022-04-20 at 18 31 32](https://user-images.githubusercontent.com/43299285/164279139-372b1c2d-ff87-4f03-9005-6f6080c20ca2.png)

</div>

* Providers...

<div align="center">

![Screenshot 2022-04-20 at 18 28 56](https://user-images.githubusercontent.com/43299285/164278691-c18793d1-7a71-427e-abf2-1e62bff1d115.png)

</div>

### Testing RouterOutlet Components...
The component that has a router-outlet can be tested out importing `RouterTestingModule`, assertions are based on different specs(app.spec and router.spec) to test `directive` present in the component and path which are added on routes to navigate through(In this case just users).

<div align="center">

![Screenshot 2022-04-20 at 18 41 49](https://user-images.githubusercontent.com/43299285/164281246-5e2aafd8-c13a-480e-b8ac-a12d02d9479e.png)

![Screenshot 2022-04-20 at 18 42 20](https://user-images.githubusercontent.com/43299285/164281120-c3452009-32c3-4feb-97b2-a266ce505e58.png)

</div>

* app.spec...

<div align="center">

![Screenshot 2022-04-20 at 18 42 02](https://user-images.githubusercontent.com/43299285/164281164-bb77bb19-7663-4f14-aab0-a9fdc704e18c.png)

</div>

* router.spec...

<div align="center">

![Screenshot 2022-04-20 at 18 42 20](https://user-images.githubusercontent.com/43299285/164281120-c3452009-32c3-4feb-97b2-a266ce505e58.png)

</div>

### Shallow Component Test and testing Nav Component...
Here we are testing `routerLink` used to go towards a specific site of the app. we can find the anchor in two approaches as you can see below.

<div align="center">

![Screenshot 2022-04-20 at 18 54 00](https://user-images.githubusercontent.com/43299285/164283054-16642fbd-2f63-4dc2-a6ad-7570d265c6cd.png)

</div>

### Testing attribute Directives...
* Building `DirectiveHostComponent` up for testing purposes, configuring Testing module declaring Directive created.

<div align="center">

![Screenshot 2022-04-20 at 19 00 44](https://user-images.githubusercontent.com/43299285/164284253-ee5a2122-fc08-45de-92fb-6458ce6dfc85.png)

![Screenshot 2022-04-20 at 19 03 20](https://user-images.githubusercontent.com/43299285/164284618-fd1284c9-42ec-4e50-8dc7-8b41f7e9b985.png)

</div>

* Then we test the two possible scenarios that this directive makes any use.

<div align="center">

![Screenshot 2022-04-20 at 19 02 39](https://user-images.githubusercontent.com/43299285/164284498-831e3faa-0caa-43c2-8b68-036b787378bd.png)

</div>

### Deal with asynchronous operations...

<div align="center">

![Screenshot 2022-04-20 at 19 06 37](https://user-images.githubusercontent.com/43299285/164285130-cbfe33dc-6d66-45d7-a6e3-9ece21be531b.png)

</div>

### How to installing... 
* `git clone https://github.com/JoseMMorales/TestingAngular2-Mosh.git`
* `cd TestingAngular2-Mosh`
* `npm start` or `ng serve -o`

### Author...
JoseMMorales
