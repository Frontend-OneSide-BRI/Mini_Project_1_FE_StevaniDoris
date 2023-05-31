const galleryItems = [
    {
        id:"1",
        alt:"Forest 1",
        category:"forest",
        src:"./assets/img/card/forest-1.jpg",
        info:"Forest 1"
    },
    {
        id:"2",
        alt:"Forest 2",
        category:"forest",
        src:"./assets/img/card/forest-2.jpg",
        info:"Forest 2"
    },
    {
        id:"3",
        alt:"Mountain 1",
        category:"mountain",
        src:"./assets/img/card/mountain-1.jpg",
        info:"Mountain 1"
    },
    {
        id:"4",
        alt:"Beach 1",
        category:"beach",
        src:"./assets/img/card/beach-1.jpg",
        info:"Beach 1"
    },
    {
        id:"5",
        alt:"Mountain 2",
        category:"mountain",
        src:"./assets/img/card/mountain-2.jpg",
        info:"Mountain 2"
    },
    {
        id:"6",
        alt:"Beach 2",
        category:"beach",
        src:"./assets/img/card/beach-2.jpg",
        info:"Beach 2"
    },
    {
        id:"7",
        alt:"Beach 3",
        category:"beach",
        src:"./assets/img/card/beach-3.jpg",
        info:"Beach 3"
    },
    {
        id:"8",
        alt:"Forest 3",
        category:"forest",
        src:"./assets/img/card/forest-3.jpg",
        info:"Forest 3"
    },
    {
        id:"9",
        alt:"Forest 4",
        category:"forest",
        src:"./assets/img/card/forest-4.jpg",
        info:"Forest 4"
    },
    {
        id:"9",
        alt:"Mountain 3",
        category:"mountain",
        src:"./assets/img/card/mountain-3.jpg",
        info:"Mountain 3"
    },
    {
        id:"10",
        alt:"Mountain 4",
        category:"mountain",
        src:"./assets/img/card/mountain-4.jpg",
        info:"Mountain 4"
    },
    {
        id:"11",
        alt:"Beach 4",
        category:"beach",
        src:"./assets/img/card/beach-4.jpg",
        info:"Beach 4"
    },
    {
        id:"12",
        alt:"Mountain 5",
        category:"mountain",
        src:"./assets/img/card/mountain-5.jpg",
        info:"Mountain 5"
    },
    {
        id:"13",
        alt:"Mountain 6",
        category:"mountain",
        src:"./assets/img/card/mountain-6.jpg",
        info:"Mountain 6"
    },
    {
        id:"14",
        alt:"Beach 5",
        category:"beach",
        src:"./assets/img/card/beach-5.jpg",
        info:"Beach 5"
    }
];

const galleryItemsContainer = document.getElementById("gallery-items");
const searchBox = document.getElementById("search-box");
const filterItems = document.querySelectorAll(".filter-item");

displayGalleryItems(galleryItems);

filterItems.forEach((item) => {
    item.addEventListener("click", () => {
        const category = item.getAttribute("data-filter");
        const filterItems =
            category === "all"
            ? galleryItems
            : galleryItems.filter((item) => item.category === category);
        displayGalleryItems(filterItems);
        setActiveFilter(item);
    });
});


searchBox.addEventListener("input", () => {
    const searchTerm = searchBox.value.toLowerCase();
    const filteredItems = galleryItems.filter((item) =>
        item.alt.toLowerCase().includes(searchTerm)
    );
    displayGalleryItems(filteredItems);
});

function displayGalleryItems(items) {
    galleryItemsContainer.innerHTML = "";
    items.forEach((item) => {
        const card = document.createElement("div");
        card.classList.add("col-lg-4", "col-md-6");
        card.innerHTML = `
        <div class="card m-2 p-2" data-target=${item.id}>
        <img src="${item.src}" class="img-fluid" alt="${item.alt}"/>
            <div class="gallery-info m-2">
                <h4>${item.info}</h4>
                <p>${item.info}</p>
                    <a
                        href="${item.src}"
                        title="${item.info}"
                    >
                        <i class="bx bx-link"></i>
                    </a>
                    <a
                        href="#"
                        title="gallery Details"
                    >
                        <i class="bx bx-plus"></i>
                    </a>
            </div>
        </div>
        `;
        galleryItemsContainer.appendChild(card);
    });
}


function setActiveFilter(item) {
    filterItems.forEeach((filter) => filter.classList.remove("filter-active"));
    item.classList.add("filter-active");
}
