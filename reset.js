var buttonReset=document.getElementById('btn-reset')

buttonReset.addEventListener('click', () => {
    clearInterval(Interval);
    inputD.value = "";       
    inputM.value = "";
    inputV.value = "";
})