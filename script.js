const Stats = document.querySelector('button')
const resdiv = document.createElement('div')
resdiv.id = 'result'
document.getElementById('container').appendChild(resdiv)

Stats.addEventListener('click', calculate)

function calculate() {
    const inputVal = document.getElementById('value').value
    const firstOperand = Number(inputVal.split(" ")[0])
    const operator = inputVal.split(" ")[1]
    const secondOperand = Number(inputVal.split(" ")[2])
    console.log(firstOperand + secondOperand)

    let result = 0

    switch (operator) {
        case '+':
            result = firstOperand + secondOperand
            break

        case '-':
            result = firstOperand - secondOperand

            break


        case '*':
            result = firstOperand * secondOperand

            break

        case '/':
            result = firstOperand / secondOperand

            break

    }


    document.getElementById('result').innerHTML = result
}