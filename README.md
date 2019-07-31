# CarServiceClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Steps to comply with elements

## Create owner service
1. Use `ng g s shared/owner/owner` to create Owner Service
2. Fill it with CRUD operations
    * `getAll ()` :point_right: Returns All owners
    * `get (id: number)` :point_right: returns owner Object with `id`
    * `getIdbyDNI (dni: string)` :point_right: Returns `id` from owner `dni`
    * `save (owner: any)` :point_right: Saves owner Object to API
    * `remove (href: string)` :point_right: Removes owner Objecto from API

## Create owner-list Component
1. Use `ng g c owner-list` to create component
2. Initialize Owners array on `ngOnInit()` with `getAll()` from the owner service
3. On the html part of the component, using `*ngFor` to go through all items in the owners array and showing name and profession
4. Add owner and car list buttons with router

## Create owner-edit Component
1. Use `ng g c owner-edit` to create component
2. Initialize Owners array on `ngOnInit()` searching an owner with a DNI using `getIdByDNI(dni: string)` to get the ID for that owner and then `get(id: number)` to finally get the owner Object
3. Return to Owner list

> ### Used functions for this part
> - `gotoList()` :point_right: Sends the user to the owner list
> - `save(form: NgForm)` :point_right: Uses the `save(owner: any)` operation from the owner service with the form content and then back to the list
> - `remove(href)` :point_right: Removes owner Object from API using the `href` found in the owner links and the `remove(href: string)` from the owner service and then back to the list

## Asign owner to car
1. On car edit component, initialize owners array on `ngOnInit()` using the `getAll()` operation from owner service
2. On the html part of the component, and using [material design](https://material.angular.io/), add another field to the form, a select in this case, and fill it with the owners array usign `*ngFor` to iterate the options
    - The option to select is the owner name
    - The value sended by the selected option is the owner dni

> ### Used functions for this part
> - `gotoList()` :point_right: Sends the user to the car list
> - `save(form: NgForm)` :point_right: Uses the `save(car: any)` operation from the car service with the form content and then back to the list
> - `remove(href)` :point_right: Removes car Object from API using the `href` found in the car links and the `remove(href: string)` from the car service and then back to the list

## List cars with owners
1. On car edit component, initialize owners array on `ngOnInit()` using the `getAll()` operation from owner service
2. On the html part of the component, and using [material design](https://material.angular.io/), add a `<span>` tag to iterate with a `*ngFor` the owners array and inside that `<span>` tag using an `<a>` tag with a `ngIf` to check if the cars owner dni is the same as the iterable owner dni, and if it is show the owners name
    - That `<a>` tag goes to the owner edit for that owner
    - There is a button that goes to the owners list

# Extra modified files
> - App routing
>   - Added owner list, owner add and owner edit routes