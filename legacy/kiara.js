async function fetchCarouselItems(jsonFile) {
    try {
        const response = await fetch(jsonFile);
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching carousel items:', error);
        return []; 
    }
}

async function populateCarouselFromJSON(jsonFile, carouselId) {
    const items = await fetchCarouselItems(jsonFile);
    const carouselInner = document.getElementById(carouselId + 'Items');
    let carouselItemsHtml = '';

    items.forEach((item, index) => {
        const activeClass = index === 0 ? 'active' : '';
        carouselItemsHtml += `
            <div class="carousel-item ${activeClass}">
                <h3>${item.title}</h3>
                <p>${item.content}</p>
            </div>
        `;
    });

    carouselInner.innerHTML = carouselItemsHtml;
}

document.addEventListener('DOMContentLoaded', function() {
    populateCarouselFromJSON('homeCarouselItems.json', 'homeCarousel');
    populateCarouselFromJSON('sponsorCarouselItems.json', 'sponsorCarousel');
});
