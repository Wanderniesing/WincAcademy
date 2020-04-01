const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
        resolve('Ik geef antwoord na 5 seconden');
	}, 5000);
});
​
promise.then((data) => {
   console.log('Ik heb een antwoord gekregen: ' + data);
});
​
console.log('Ik watch op antwoord...');