import "./init.js";
// Kullanılacak kısmın import edilmesi
import SimpleLightbox from "simplelightbox";
// Ek stillerin eklenmesi
import "simplelightbox/dist/simple-lightbox.min.css";
import {images} from '../data/images.js'



const gallery = document.querySelector(".gallery");

function createGalleryItem(images) {
  const galleryitem = [];
  for (let i = 0; i < images.length; i++) {
    const { preview, original, description } = images[i];
    const liItem = document.createElement("li");
    liItem.classList.add("gallery-item");
    const a = document.createElement("a");
    a.classList.add("gallery-link");
    a.setAttribute("href", cleanUrl(original));
    const img = document.createElement("img");
    img.classList.add("gallery-image");
    img.setAttribute("src", cleanUrl(original));
    img.dataset.source = cleanUrl(original);
    img.setAttribute("alt", description);
    liItem.append(a);
    a.append(img);
    galleryitem.push(liItem);
  }
  gallery.innerHTML = "";
  gallery.append(...galleryitem);
}
createGalleryItem(images);
gallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

   new SimpleLightbox(".gallery a", {
    /* options */

    captionsData: "alt",
    captionDelay: 250,
  });
 
});
function cleanUrl(url) {
  if (url.startsWith("<") && url.endsWith(">")) {
    return url.slice(1, -1);
  }
  return url;
}
