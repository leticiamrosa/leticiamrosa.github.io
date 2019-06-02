const progress = document.querySelectorAll('progress');


var isPrimary = document.querySelectorAll('.is-primary');
var isWarning = document.querySelectorAll('.is-warning');
var isError = document.querySelectorAll('.is-error');
var isSuccess = document.querySelectorAll('.is-success');
var isProgress = document.querySelector('.nes-progress');

var $progressHtml = document.querySelector('.progress-h');
var $progressNode = document.querySelector('.progress-node');
var $progressWebpack = document.querySelector('.progress-webpack');
var $progressArduino = document.querySelector('.progress-arduino');
var $progressRasp = document.querySelector('.progress-raspberry');
var $progressChatBot = document.querySelector('.progress-chatbot');
var $progressSass = document.querySelector('.progress-sass');



function atualizaProgress() {
    var time = 1;

    isPrimary.forEach(item => {
        item.value = 0;
        setInterval(() => {
            time++
            item.value = time;

            if (time >= 80) {
                item.value = 90;
                $progressHtml.value = 95;
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
                $progressSass.value = 75;
                
            }
        }, 100);
    });

    isError.forEach(item => {
        item.value = 0;
        setInterval(() => {
            time++
            item.value = time;

            if (time >= 80) {
                item.value = 90;
            }
        }, 100);
    });

    isSuccess.forEach(item => {
        item.value = 0;
        setInterval(() => {
            time++
            item.value = time;

            if (time >= 80) {
                item.value = 90;
                $progressArduino.value = 70;
                $progressRasp.value = 70;
                $progressWebpack.value = 70;
                $progressChatBot.value = 90;
            }
        }, 100);
    });

    isProgress.forEach(item => {
        item.value = 0;
        setInterval(() => {
            time++
            item.value = time;

            if (time >= 80) {
                item.value = 90;
                $progressArduino.value = 70;
                $progressRasp.value = 70;
                $progressWebpack.value = 70;
                $progressChatBot.value = 90;
            }
        }, 100);
    });

}

atualizaProgress();