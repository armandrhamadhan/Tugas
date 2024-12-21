// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Klik di luar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Modal Box
// Data produk
const products = [
  {
    id: 1,
    name: "Robusta Temanggung",
    description:
      " PREMIUM Robusta temanggung, setelah melalui 2x proses sortasi green bean dan roasted bean, kami siap menjualnya. Jika ingin menikmati vietname drip atau membuat es kopi susu sangat tepat pakai kopi ini.",
    price: "IDR 110K",
    discountPrice: "IDR 55K",
    image: "img/products/1.jpg",
    stars: 4,
  },
  {
    id: 2,
    name: "Florest Blend",
    description:
      "FLORIST BLEND ialah campuran dari single origin arabika brazil cerado natural, malabar honey, loa natural.",
    price: "IDR 130K",
    discountPrice: "IDR 25K",
    image: "img/products/2.jpeg",
    stars: 5,
  },
  {
    id: 3,
    name: "Arabika Gayo",
    description:
      " Arabika Gayo Super Premium merupakan kopi arabika gayo yang memiliki kualitas lebih bagus dibandingkan dengan kopi biasa pada umumnya.",
    price: "IDR 130K",
    discountPrice: "IDR 10K",
    image: "img/products/3.jpeg",
    stars: 3,
  },
];

// Event listener untuk tombol detail
document.querySelectorAll(".item-detail-button").forEach((button, index) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const product = products[index];

    // Isi konten modal
    document.getElementById("modal-image").src = product.image;
    document.getElementById("modal-image").alt = product.name;
    document.getElementById("modal-title").innerText = product.name;
    document.getElementById("modal-description").innerText =
      product.description;
    document.getElementById(
      "modal-price"
    ).innerHTML = `${product.price} <span>${product.discountPrice}</span>`;

    // Isi bintang
    const starsContainer = document.getElementById("modal-stars");
    starsContainer.innerHTML = "";
    for (let i = 0; i < 5; i++) {
      if (i < product.stars) {
        starsContainer.innerHTML +=
          '<i data-feather="star" class="star-full"></i>';
      } else {
        starsContainer.innerHTML += '<i data-feather="star"></i>';
      }
    }

    // Tampilkan modal
    document.getElementById("item-detail-modal").style.display = "flex";
  });
});

// Tutup modal
document.querySelector(".close-icon").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("item-detail-modal").style.display = "none";
});

// Klik di luar modal untuk menutup
window.addEventListener("click", (e) => {
  const modal = document.getElementById("item-detail-modal");
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
