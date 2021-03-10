
// function Ac() {
//  let total = document.getElementById("total")
//  total.innerHTML="0"
// }
//  function num() {
// 	 let ww = document.querySelector('.digit');
//      console.log(ww.innerText)
// 	 let aa = document.getElementsByClassName('digit')
// 	 let nums = document.getElementsByClassName('digit')[9]
// 	 console.log(nums.innerText);
//  }


class Calculator {
	constructor(displayElement) {
		this.displayElement = displayElement
		this.displayContent = ''
	}
}

const button = document.querySelectorAll('button')
const displayElement = document.querySelector('#total')

const Calculator = new Calculator(displayElement)
buttons.forEach(button => {
	button.addEventListener('click', () => {
		switch (button.dataset.type) {
			case 'operator':
			console.log('operator')
			break
			case 'ac':
				console.log('ac')
				break
				case 'equals':
					console.log('equals')
					break
					default:
						console.log('number')
						break
		}
	})	
})