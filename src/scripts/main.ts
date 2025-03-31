import { initApp } from "./index";

window.addEventListener("DOMContentLoaded", async () => {
    initApp();
})
    
/*

GitHub Pages might serve project from subdirectory, so make sure to adjust the base path in your
index.html and configure tailwind.config.js accordingly.
set the publicPath in Parcel’s build if you're serving from a subfolder:

parcel build index.html --public-url /your-repo-name/

Uninstall tailwind everywhere.
Reinstall using same command but with 3.4.17
*/