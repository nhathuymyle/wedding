document.addEventListener('DOMContentLoaded', function () {
    const popupContent = document.getElementById('popupContent');
    const popupIcon = document.getElementById('popupIcon');

    // Hiện popup khi hover vào icon
    popupIcon.addEventListener('click', function () {
        popupContent.style.display = popupContent.style.display === 'none' ? 'block' : 'none';
    });
});

// Hàm mở Google Maps
function openMap1() {
    window.open('https://maps.app.goo.gl/HGeyEjyBCQTnHsHW8', '_blank');
}
// Hàm mở Google Maps
function openMap2() {
    window.open('https://maps.app.goo.gl/kEyGuL7uP75KBbbK8', '_blank');
}

// Hàm mở Google Maps
function openMap3() {
    window.open('https://maps.app.goo.gl/Lhqvvh5uwnaETF34A', '_blank');
}

