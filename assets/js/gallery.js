const galleryItems = [
    {
        id:"1",
        alt:"Forest 1",
        category:"forest",
        src:"https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        info:"Forest 1"
    },
    {
        id:"2",
        alt:"Forest 2",
        category:"forest",
        src:"https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2041&q=80",
        info:"Forest 2"
    },
    {
        id:"3",
        alt:"Mountain 1",
        category:"mountain",
        src:"https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80",
        info:"Mountain 1"
    },
    {
        id:"4",
        alt:"Beach 1",
        category:"beach",
        src:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80",
        info:"Beach 1"
    },
    {
        id:"5",
        alt:"Mountain 2",
        category:"mountain",
        src:"https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        info:"Mountain 2"
    },
    {
        id:"6",
        alt:"Beach 2",
        category:"beach",
        src:"https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        info:"Beach 2"
    },
    {
        id:"7",
        alt:"Beach 3",
        category:"beach",
        src:"https://images.unsplash.com/photo-1520942702018-0862200e6873?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        info:"Beach 3"
    },
    {
        id:"8",
        alt:"Forest 3",
        category:"forest",
        src:"https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        info:"Forest 3"
    },
    {
        id:"9",
        alt:"Forest 4",
        category:"forest",
        src:"https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
        info:"Forest 4"
    },
    {
        id:"9",
        alt:"Mountain 3",
        category:"mountain",
        src:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        info:"Mountain 3"
    },
    {
        id:"10",
        alt:"Mountain 4",
        category:"mountain",
        src:"https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        info:"Mountain 4"
    },
    {
        id:"11",
        alt:"Beach 4",
        category:"beach",
        src:"https://images.unsplash.com/photo-1476673160081-cf065607f449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
        info:"Beach 4"
    },
    {
        id:"12",
        alt:"Mountain 5",
        category:"mountain",
        src:"https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
        info:"Mountain 5"
    },
    {
        id:"13",
        alt:"Mountain 6",
        category:"mountain",
        src:"https://images.unsplash.com/photo-1547093349-65cdba98369a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        info:"Mountain 6"
    },
    {
        id:"14",
        alt:"Beach 5",
        category:"beach",
        src:"https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
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
