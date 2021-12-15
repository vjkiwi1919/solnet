
describe('Solnet-Test Automation challenge', () => {

})

it('Task Manager url', () => {
  cy.visit('http://localhost:4200/')
  //should visit the correct url location on the browser
  cy.url().should('include', 'http://localhost:4200/')
  // task manager application and presents a UI for the user to manage their tasks.
  cy.get('svg').should("be.visible")

  //Enter User name
  cy.get('[name="email"]').type("user")

  //Enter Password
  cy.get('[name="password"]').type("user")

  //Enter login button
  cy.get('mat-card-actions').click()

  //Validate Landing page
  cy.get('app-logo > svg').should('be.visible')
  cy.get('.mat-elevation-z6 > [fxflex="100%"]').should('exist')
  //cy.get('[style="margin-right: 16px;"]').
});

it('Add - My Daily Task-1', () => {

  cy.get('[placeholder="Task title"]').type("Task-1")

  cy.get('[placeholder="Task description"]').type("Excercise")


  cy.get('[type="submit"]').contains("Add", { matchCase: false },).click()
  cy.get(':nth-child(3) > .mat-card-content > [ng-reflect-ng-class="[object Object]"]').should('have.text', "Task-1")


})
it('Add - My Daily Task-2', () => {

  cy.get('[placeholder="Task title"]').type("Task-2")

  cy.get('[placeholder="Task description"]').type("work")
  cy.get('#mat-checkbox-1 > .mat-checkbox-layout > .mat-checkbox-inner-container').click()
  cy.get('[type="submit"]').contains("Add", { matchCase: false },).click()
  cy.get(':nth-child(4) > .mat-card-content > [ng-reflect-ng-class="[object Object]"]').should('have.text', "Task-2")

})
it('Add - My Daily Task-3', () => {

  cy.get('[placeholder="Task title"]').type("Task-3")

  cy.get('[placeholder="Task description"]').type("shopping")
  cy.get('[type="submit"]').contains("Add", { matchCase: false },).click()
  
})
it('Remove - My Daily Task-1', () => {
   cy.get(':nth-child(3) > .mat-card-content > .remove-icon').click()
  //Validate the Task has been successfully removed
  cy.get('.home-page').contains(':nth-child(3) > .mat-card-content > [ng-reflect-ng-class="[object Object]"]').should('not.exist')

})
//Validate marking/unmarking a task as done.
it('Marking/unmarking', () => {

  cy.get('#mat-checkbox-2 > .mat-checkbox-layout > .mat-checkbox-inner-container').click()
  //validate the task has been completed
  cy.get('.completed-task').should('have.class', "completed-task")


  //Marking as done
  cy.get('#mat-checkbox-5 > .mat-checkbox-layout > .mat-checkbox-inner-container').click()
  //validate the task has been completed
  cy.get(':nth-child(4) > .mat-card-content > .completed-task').should('have.class', "completed-task")
  //unmark the task
  cy.get('#mat-checkbox-5 > .mat-checkbox-layout > .mat-checkbox-inner-container').click()
  //validate task is present
  cy.get(':nth-child(4) > .mat-card-content > [ng-reflect-ng-class="[object Object]"]').should('have.text', "Task-3").should("be.visible")
})
//Validate all tasks page.
it('All Task Page', () => {
  cy.get(':nth-child(2) > .mat-list-item > .mat-list-item-content').click()
  //All Task Title should display
  cy.get('.mat-elevation-z6 > [fxflex="100%"]').should('have.text', "All Tasks")
  //Validate task is present
  cy.get(':nth-child(3) > .mat-card-content > .ng-star-inserted').click()

})

//Validate all tasks page.
it('Important Task', () => {
  //Click on Important Task
  cy.get(':nth-child(3) > .mat-list-item > .mat-list-item-content').click()
  //Validate Important Task page
  cy.get('.mat-elevation-z6 > [fxflex="100%"]').should('have.text', "Important Tasks")
  //Validate important Task
  cy.get('[ng-reflect-ng-class="[object Object]"]').should('have.text', "Task-2")




})













