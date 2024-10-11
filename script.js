const containers = document.querySelectorAll('.container');
const totalDisplay = document.querySelector('.total');
const prices = {
    '1': 10.00,
    '2': 18.00,
    '3': 24.00
};

containers.forEach(container => {
    const radioInput = container.querySelector('input[name="unit"]'); 

    radioInput.addEventListener('change', function() {
        containers.forEach(c => c.classList.remove('active'));
        
        container.classList.add('active');
        containers.style.bgcolor="#FF6B82";

        const selectedValue = radioInput.value;
        const newTotal = prices[selectedValue].toFixed(2);
        totalDisplay.textContent = `Total: $${newTotal} USD`;
    });

    container.addEventListener('click', function() {
        radioInput.checked = true; 
        radioInput.dispatchEvent(new Event('change'));
    });
});
