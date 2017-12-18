var myApp = {
	mainMessage: "Welcome to the app!",

	mainGreeing() {
		console.log('Welcome');
	}
}

myApp.module1 = {
	saySomething(message) {
		console.log(myApp.mainMessage, message, "I'm the second file");
	}

	doSomething() {
		console.log('called module1 doSomething function');
	}
}

myApp.module2 = {
	doSomething() {
		console.log('called module1 doSomething function');
	}
}

(() => {
	myApp.mainGreeting();

	myApp.module1.saySomething('sup');

	function myFunc() {
		var theHeading = document.querySelector('h1');

		theHeading.textContent = myApp.mainMessage;
	}

	myFunc();
});
