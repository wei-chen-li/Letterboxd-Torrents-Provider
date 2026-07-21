const STORAGE_KEY = "LetterboxdTorrentProviderSites";
const storageApi = (typeof browser !== "undefined" ? browser : chrome).storage.sync;

async function getSites() {
  const result = await storageApi.get(STORAGE_KEY);
  return result[STORAGE_KEY]?.length
    ? result[STORAGE_KEY]
    : DEFAULT_SITES;
}

function formatYTSpath(query) {
  let path = query;
  path = path.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // Remove diacritics
  path = path.replace(/\s\(.*?\)/g, ' ');                       // Replace content within parentheses and parentheses with space
  path = path.replace(/[':/\(\)]/g, '');                        // Remove characters like quotes, colons, slashes, and parentheses
  path = path.replace(/[^a-zA-Z0-9]/g, ' ');                    // Replace non-alphanumeric characters with space
  path = path.replace(/\s+/g, '-').replace(/^-+|-+$/g, '');     // Replace multiple spaces with a single hyphen and trim
  return path.toLowerCase();                                    // Convert to lowercase
}

function fillTemplate(template, tokens) {
  if (!template) return template;
  return Object.entries(tokens).reduce(
    (result, [key, value]) => result.split(`{{${key}}}`).join(value ?? ""),
    template
  );
}

const getServices = async (title, year, imdbID) => {
  const sites = await getSites();
  const query = `${title} ${year}`;
  const tokens = {
    query: query,
    title: title,
    year: year,
    imdb_id: imdbID,
    yts_query: formatYTSpath(query),
  };

  return sites.map((site) => {
    const built = {
      name: site.name,
      icon: site.icon,
      url: fillTemplate(site.urlTemplate, tokens),
    };
    return built;
  });
};

const getMovieInfo = () => {
  const details = document.querySelector(".details");
  const title = details?.querySelector("h1")?.innerText?.replace(/(%[0-9A-F]{2}|\s)+/gi, ' ');
  const year = details?.querySelector(".releasedate > a")?.innerText;

  const url = document.querySelector(".micro-button")?.href;
  const imdbID = url.split("/")[4];

  return [(title ?? ""), (year ?? ""), imdbID]
};

// disables the script that hides the panel
const preload = () => {
  const idk = document.querySelector('div[data-on-load="csi-availability"]');
  if (idk) idk.className = "";
};

const addService = (service) => {
  const services = document.querySelector(".services");
  const p = document.createElement('p');
  p.className = "service";

  const a = document.createElement('a');
  a.href = service.url;
  a.target = "_blank";
  a.className = "label";

  const image = document.createElement('img');
  image.src = service.icon;
  image.width = 20;
  image.height = 20;

  const brand = document.createElement('span');
  brand.className = "brand";
  brand.append(image);

  const title = document.createElement('span');
  title.className = "title";
  title.innerText = service.name;

  a.append(brand);
  a.append(title);
  p.append(a);
  services.append(p);
}

const hideOther = () => {
  document.querySelector(".services").innerHTML = "";

  document.querySelectorAll(".other").forEach((a) => {
    a.remove(); // removes every element with the class 'other'
  });
};

const init = () => {
  const styleString = `
  .watch-panel .services .service {
    display: flex !important;
  }
`;

  const style = document.createElement("style");
  style.textContent = styleString;
  document.head.append(style);
};

const insertServices = async () => {
  hideOther();
  const [title, year, imdbID] = getMovieInfo();
  const services = await getServices(title, year, imdbID);
  init();

  for (const service of services) {
    addService(service);
  }
};

const main = () => {
  const watchDiv = document?.getElementById("watch");
  const servicesPanel = watchDiv?.querySelector(".services");

  if (!servicesPanel) {
    var section = document.createElement("SECTION");
    section.classList.add("services");
    watchDiv.append(section);
  }
  insertServices();
};

preload();

window.onload = () => {
  main();
};
