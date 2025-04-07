console.log("IT’S ALIVE!");

function $$ (selector, context = document) {
    return Array.from(context.querySelectorAll(selector));
}

let navLinks = $$("nav a");
let currentLink = navLinks.find(a => a.host === location.host && a.pathname === location.pathname);
currentLink?.classList.add("current");

let pages = [
    {url: "", title: "Home"},
    {url: "projects/", title: "Projects"},
    // add the rest of your pages here
];

let nav = document.createElement("nav");
document.body.prepend(nav);

for (let p of pages) {
    
    let url = p.url;
    let title = p.title;

    if (!ARE_WE_HOME && !url.startsWith("http")) {
        url = "../" + url;
    }
    
    // Create link and add it to nav
    let a = document.createElement("a");
    a.href = url;
    a.textContent = title;
    nav.append(a);
    a.classList.toggle("current", a.host === location.host && a.pathname === location.pathname);
}

const ARE_WE_HOME = document.documentElement.classList.contains("home");

document.body.insertAdjacentHTML("afterbegin", `
    <label class="color-scheme">
        Theme:
        <select>
            <!-- TODO add <option> elements here -->
        </select>
    </label>`
);
let select = document.querySelector("select");
select.addEventListener("input", function (event) {
    document.documentElement.style.setProperty("color-scheme", event.target.value);
});

localStorage.colorScheme = event.target.value;