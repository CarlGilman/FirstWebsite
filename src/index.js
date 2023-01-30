
//these functions should load on window loading
window.onload = function() {
	
	var modal = document.getElementById("myModal");
	var btn = document.getElementById("loginBtn");
	var shoppingClose = document.getElementById("shoppingCartClose");
	shoppingClose.onclick = function() {
	var shoppingModal = document.getElementById('shoppingModal');
		shoppingModal.style.display = "none";
		
	}
	//var span = document.querySelector('.close')
	btn.onclick = function() {
		
		//clear the modal 
		while(modal.firstChild) {
			modal.removeChild(modal.firstChild);
		}
		//building the modal on click
		var modalContent = document.createElement('div');
		modal.appendChild(modalContent);
		modalContent.classList.add('modal-content');
		
		//close function
		var closeButton = document.createElement('span');
		modalContent.appendChild(closeButton);
		closeButton.classList.add('close');
		closeButton.textContent = 'X';
		closeButton.onclick = function() {
			modal.style.display = "none";
		}
		//login line
		var loginLine = document.createElement('p');
		modalContent.appendChild(loginLine);
		loginLine.textContent = 'Please enter your login information';
		
		//login form creation
		var loginForm = document.createElement('form');
		modalContent.appendChild(loginForm);
		loginForm.setAttribute('id','form_id');
		loginForm.setAttribute('method','post');
		loginForm.setAttribute('name','myform');
		
		//login label
		var loginLabel = document.createElement('label');
		modalContent.appendChild(loginLabel);
		loginLabel.textContent = 'Username :';
		
		//login text box
		var loginTextBox = document.createElement('input');
		modalContent.appendChild(loginTextBox);
		loginTextBox.setAttribute('type','text');
		loginTextBox.setAttribute('name','username');
		loginTextBox.setAttribute('id','username');
		
		//password label
		var loginPassword = document.createElement('label');
		modalContent.appendChild(loginPassword);
		loginPassword.textContent = 'Password :'
		
		//password text box
		var passwordTextBox = document.createElement('input');
		modalContent.appendChild(passwordTextBox);
		passwordTextBox.setAttribute('type','password');
		passwordTextBox.setAttribute('name','password');
		passwordTextBox.setAttribute('id','password');
		
		//confirmation data for login info
		var confirmLogin =document.createElement('input');
		modalContent.appendChild(confirmLogin);
		confirmLogin.setAttribute('type','button');
		confirmLogin.setAttribute('value','Log in');
		confirmLogin.setAttribute('id','submit');
		confirmLogin.setAttribute('onclick','validate()');
		
	  modal.style.display = "block";
	}
	
	//shopping cart modal
	var btn = document.getElementById("shoppingCart");
	btn.onclick = function() {
	  document.getElementById('shoppingModal').style.display='block';
	}  
	
	//span.onclick = function() {
	//  modal.style.display = "none";
	//}
	
	document.getElementById('shoppingModal').style.display='none';
	
	//function to add items to a shopping cart
	const items = Array.from(document.querySelectorAll('.addToCart'));
	for(const item of items) {
		
		console.log(item);
		
		item.onclick = function(event) {
			
			//creating the elements of the shopping cart
			var productName = event.target.parentElement.querySelector('.productName').textContent;
			var productPrice = event.target.parentElement.querySelector('.productPrice').textContent;
			
			var shoppingModal = document.getElementById('shoppingModal');
			
			var shoppingCartItem = document.createElement('li');
			shoppingCartItems.appendChild(shoppingCartItem);
			shoppingCartItem.classList.add('shoppingCartItem');
			
			var shoppingCartItemName = document.createElement('p');
			shoppingCartItem.appendChild(shoppingCartItemName);
			shoppingCartItemName.textContent = productName;
			
			var shoppingCartItemPrice = document.createElement('p');
			shoppingCartItem.appendChild(shoppingCartItemPrice);
			shoppingCartItemPrice.textContent = productPrice;
			shoppingCartItemPrice.classList.add('cartPrice');
			
			var shoppingCartDeleteItem = document.createElement('button');
			shoppingCartItem.appendChild(shoppingCartDeleteItem);
			shoppingCartDeleteItem.classList.add ('ShoppingCartRemoveItem');
			shoppingCartDeleteItem.textContent ='Remove Item';
			shoppingCartDeleteItem.onclick = function(event) {
				event.target.parentElement.remove();
				totalCartCost();
			}
			
			
			
			totalCartCost();
			
			
			/*console.log(event.target); // should be button 
			console.log(event.target.parentElement); // should be li
			console.log(event.target.parentElement.querySelector('.title')); // gets element
			console.log(event.target.parentElement.querySelector('.title').textContent); // gets text

			const shoppingList = document.getElementById('myShoppingListUL');

			const newItem = document.createElement('li');
			shoppingList.appendChild(newItem);
			newItem.textContent = 'Hi' // get text content somehow;*/
  
		}
		
	}
//functions to make slideshow work	re:https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_auto
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}
}
	
var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "user" && password == "pass"){
alert ("Login successfully");
//window.localStorage.setItem(true);
/*window.location = "success.html"; // Redirecting to other page.*/
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}
/* show total value of cart items in the modal*/

function totalCartCost() {
	total = 0; 
	var cartPrices = document.querySelectorAll('.cartPrice');
	for(var cartPrice of cartPrices) {
		total += parseFloat(cartPrice.textContent.replace('€',''));
	}
	document.getElementById('totalPrice').textContent = '€'+ total.toFixed(2);
}
/* buy now button function*/
function buyNowButton () {
	//if(window.localStorage.setItem='true'
		window.alert("Items Successfully Purchased, Thank you!");
	//else
		//window.alert("please log in before purchasing!");
}




