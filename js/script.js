const progress = document.querySelectorAll('progress');


var isPrimary = document.querySelectorAll('.is-primary');
var isWarning = document.querySelectorAll('.is-warning');
var isError = document.querySelectorAll('.is-error');
var isSuccess = document.querySelectorAll('.is-success');
var progressHtml = document.querySelector('.progress-h');



function atualizaProgress() {
    var time = 1;

    isPrimary.forEach(item => {
        item.value = 0;
        setInterval(() => {
            time++
            item.value = time;

            if (time >= 80) {
                item.value = 80;
                progressHtml.value = 95;
            }
        }, 100);
    });

    isWarning.forEach(item => {
        item.value = 0;
        setInterval(() => {
            time++
            item.value = time;

            if (time >= 90) {
                item.value = 90;
            }
        }, 100);
    });

    isError.forEach(item => {
        item.value = 0;
        setInterval(() => {
            time++
            item.value = time;

            if (time >= 80) {
                item.value = 80;
            }
        }, 100);
    });

    isSuccess.forEach(item => {
        item.value = 0;
        setInterval(() => {
            time++
            item.value = time;

            if (time >= 80) {
                item.value = 80;
            }
        }, 100);
    });

}

atualizaProgress();