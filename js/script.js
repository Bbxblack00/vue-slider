function initVue() {
    new Vue({
        el: '#app',
        data: {
            'firstImg': true,
            'limitV1': 20,
            'limitV2': 10,
            'restV1': 0,
            'dec': 0,
            'startV1': 0,
            'startV2': 0
        },
        methods: {
            flipImg: function() {
                this.firstImg = !this.firstImg;
            },
            increaseV1: function() {
                this.limitV1 += 2;
            },
            increaseV2: function() {
                this.limitV2++;
            },
            flipValueV1: function() {
                this.restV1 = this.restV1 == 1 ? 0 : 1;
            },
            flipValueV2: function() {
                this.dec = this.dec == 1 ? 0 : 1;
            },
            increaseStart: function() {
                this.startV1 += 2;
                this.limitV1 -= 2;
            }
        }
    });
}
function init() {
    initVue();
}
// $(init);
document.addEventListener('DOMContentLoaded', init);
function getRandomValue(min, max) {
    const localMin = min;
    const localMax = max - min + 1;
    return Math.floor(Math.random() * localMax) + localMin;
}
