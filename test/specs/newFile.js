//const {expect} = require('chai'); // obj expect assert distrac assighnment distructivnoe prisvaivanie
//
// describe('REGISTRATION', function () {
//     before(function () {
//         browser.maximizeWindow();
//         browser.url('https://app.pasv.us/user/register');
//     });
//
//     it('should Submit button is not clickable',function () {
//         const submitButton = $("//button[@type='submit']");
//         const result = submitButton.isClickable();
//         expect(result).eq(false);
//     });
//
//     it('should Title is correct', function () {
//         const actualText = $('//h1').getText();
//         const expectedText = 'User Register';
//         expect(actualText).eq(expectedText);
//     });
//
//     it('should Fill out first name field', function () {
//         const inputFirstName = $("//input[@name='firstName']");
//         inputFirstName.setValue('Ivan');
//         // const text = inputFirstName.getValue();
//         // expect(text).eq('Ivan');
//     });
//
//     it('should input first name is valid', function () {
//         const inputFirstName = $("//input[@name='firstName']");
//         browser.keys('Tab');
//         browser.pause(3000);
//         const result = inputFirstName.getAttribute('class');
//         expect(result).contains('is-valid');
//     });
//
//     it('should Fill out last name',function () {
//         const inputLasttName = $("//input[@name='lastName']");
//         inputLasttName.setValue('Ivanov');
//     });
//
//     it('should input last name is valid', function () {
//         const inputLastName = $("//input[@name='lastName']");
//         browser.keys('Tab');
//         browser.pause(3000);
//         const result = inputLastName.getAttribute('class');
//         expect(result).contains('is-valid');
//     });
//
//     it('should Fill out email', function () {
//         const inputEmail = $("//input[@name='email']");
//         inputEmail.setValue('katilla_k@yahoo.com');
//     });
//
//     it('should input email is valid', function () {
//         const inputEmail = $("//input[@name='email']");
//         browser.keys('Tab');
//         browser.pause(3000);
//         const result = inputEmail.getAttribute('class');
//         expect(result).contains('is-valid');
//     });
//
//     it('shoul Fill out password', function () {
//         const inputEmail = $("//input[@name='password']");
//         inputEmail.setValue('Atlanta83');
//     });
//
//     it('should input password is valid', function () {
//         const inputPassword = $("//input[@name='password']");
//         browser.keys('Tab');
//         browser.pause(3000);
//         const result = inputPassword.getAttribute('class');
//         expect(result).contains('is-valid');
//     });
//
//     it('should Submit button is clickable',function () {
//        const submitButton = $("//input[@type='submit']");
//        const result = submitButton.isClickable();
//     });
//
// });

//****************************************************

// const {expect} = require('chai');
// describe('REGISTRATION PAGE',() => {
//     before(() => {
//         browser.maximizeWindow();
//         browser.url('https://stage.pasv.us/user/register');
//     });
//     it('should check if  TITLE is correct', function () {
//         const actualText = $('//h1').getText();
//         const expectedText = 'User Register';
//         expect(actualText).eq(expectedText);
//     });
//     it('should check that SUBMIT BUTTON is not clickable ', function () {
//         const submitButton = $('//button[@type="submit"]');
//         const result = submitButton.isClickable();
//         expect(result).false;
//     });
//     it('should fill out FIRST NAME field ', function () {
//         const inputFirstName = $('//input[@name="firstName"]');
//         inputFirstName.setValue('Ivan');
//     });
//     it('should input first name is valid ', function () {
//         const inputFirstName = $('//input[@name="firstName"]');
//         browser.keys('Tab')
//         const result = inputFirstName.getAttribute('class');
//         expect(result).contains('is-valid')
//     });
//     it('should fill out lastName field ', function () {
//         const inputLastName = $('//input[@name="lastName"]');
//         inputLastName.setValue('Ivanov');
//     });
//     it('should input last name is valid ', function () {
//         const inputFirstName = $('//input[@name="lastName"]');
//         browser.keys('Tab')
//         const result = inputFirstName.getAttribute('class');
//         expect(result).contains('is-valid')
//     });
//     it('should fill out lastName field ', function () {
//         const inputLastName = $('//input[@name="email"]');
//         inputLastName.setValue('michaelsmith@gmail.com');
//     });
//     it('shoud input valid phone number',function (){
//         const phone =$("//input[@name='phone']");
//         phone.setValue('14048240093');
//     });
//     it('should check if phone number is valid',function (){
//         const phone =$("//input[@name='phone']");
//         browser.keys('Tab')
//         const result = phone.getAttribute('class');
//         expect(result).contains('is-valid')
//     });
//     it('should input email is valid ', function () {
//         const inputFirstName = $('//input[@name="email"]');
//         browser.keys('Tab')
//         const result = inputFirstName.getAttribute('class');
//         expect(result).contains('is-valid')
//     });
//     it('should fill out password field ', function () {
//         const inputLastName = $('//input[@name="password"]');
//         inputLastName.setValue('123456');
//     });
//     it('should input password is valid ', function () {
//         const inputFirstName = $('//input[@name="password"]');
//         browser.keys('Tab')
//         const result = inputFirstName.getAttribute('class');
//         expect(result).contains('is-valid')
//     });
//     it('should Submit Button is  clickable ', function () {
//         const submitButton = $('//button[@type="submit"]');
//         const result = submitButton.isClickable();
//         expect(result).true;
//     });
// });
//

// describe('EDIT PROFILE', function () {
//     before(function () {
//         browser.maximizeWindow()
//         browser.url('https://stage.pasv.us/user/login')
//         $("//input[@name='email']").setValue('shopovalovihorolegovich@gmail.com');
//         $("//input[@name='password']").setValue('2804915wwW');
//         $("//button[@type='submit']").click();
//         $("//div[@id='user-section']//a[@class='dropdown-toggle nav-link']").click();
//         $("//button[text()='Settings']").click();
//         browser.pause(5000);
//     });
//
//     it('should Check size t-short',function () {
//         $("//select[@name='tShirtSize']").selectByVisibleText('Men/Unisex - XL'); 
//         browser.pause(2000); 
//     }); 
// })

//*************************************************************