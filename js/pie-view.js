const crustElements = document.querySelectorAll("[name=crust]");
const outerCrust = document.getElementById('crust-outer');
const innerCrust = document.getElementById('crust-inner');
const filling = document.getElementById('filling');
document.getElementById('options').addEventListener('change', (e) => {
    switch(e.target.name) {
        case 'crust':
            let colors = [];
            switch(e.target.value){
                case 'single':
                    colors = ['#cc923a', '#ddbf85'];
                    break;
                case 'double':
                    colors = ['#cc8742', '#e8ad75'];
                    break;
                case 'lattice':
                    colors = ['#873e13', '#d6b16a'];
                    break;
                case 'graham':
                    colors = ['#2c0602', '#9e6027'];
                    break;
                default:
                    return;
        }
        outerCrust.setAttribute('fill', colors[0]);
        innerCrust.setAttribute('fill', colors[1]);
        break;
        case 'filling':
            switch (e.target.value){
                case 'apple':
                    filling.setAttribute('fill', '#802f1a');
                    break;
                case 'cherry':
                    filling.setAttribute('fill', '#4c0008');
                    break;
                case 'cranberry':
                    filling.setAttribute('fill', '#cf232b');
                    break;
                case 'peach':
                    filling.setAttribute('fill', '#ffad0c');
                    break;
                case 'rhubarb':
                    filling.setAttribute('fill', '#d35572');
                    break;
                case 'strawberry':
                    filling.setAttribute('fill', '#f00a16');
                    break;
                case 'pumpkin':
                    filling.setAttribute('fill', '#dc6c00');
                    break;
            }
    }
});
const animateButton = document.getElementById('animate');
let isExpanded = false;
animateButton.addEventListener('click', () => {
    if (isExpanded){
        animateButton.innerHTML = 'Expand!';
        outerCrust.style.transform = 'translate(0,0) scale(1)';
        innerCrust.style.transform = 'translate(0,0) scale(1)';
        filling.style.transform = 'translate(0,0) scale(1)';
    }
    else {
        animateButton.innerHTML = 'Reassemble';
        outerCrust.style.transform = 'translate(-10px, 20px) scale(0.6)';
        innerCrust.style.transform = 'translate(-10px, 20px) scale(0.6)';
        filling.style.transform = 'translate(180px, 20px) scale(0.6)';
    }
    isExpanded = !isExpanded;
});