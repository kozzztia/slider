
function createNavigation () {
    const navigation = document.createElement('div');
    navigation.classList.add('navigation');

    const nextBtn = document.createElement('button');
    nextBtn.classList.add(['button']);
    nextBtn.innerHTML = '<i class="fas fa-arrow-right"></i>';
    navigation.appendChild(nextBtn);

    const prevBtn = document.createElement('button');
    prevBtn.classList.add(['button']);

    prevBtn.innerHTML = '<i class="fas fa-arrow-left"></i>';
    navigation.appendChild(prevBtn);

    return navigation
}


function createSlider() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');

    
    const navigationButtons = createNavigation()
    
    slider.append(navigationButtons)
}

createSlider();
