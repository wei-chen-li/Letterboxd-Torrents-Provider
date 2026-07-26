const DEFAULT_SITES = [
  {
    name: 'EXT',
    urlTemplate: 'ext.to/browse/?cat=1&q={{title}} {{year}}'
  },
  {
    name: '1337x',
    urlTemplate: '1337x.to/search/{{title}} {{year}}/1/'
  },
  {
    name: 'RARBG',
    urlTemplate: 'rargb.to/search/?category[]=movies&search={{title}} {{year}}'
  },
  {
    name: 'YTS',
    urlTemplate: 'yts.gg/movies/{{yts_query}}'
  },
  {
    name: 'The Pirate Bay',
    urlTemplate: 'thepiratebay.org/search.php?q={{imdb_id}}&video=on'
  },
  {
    name: 'Youtube',
    urlTemplate: 'www.youtube.com/results?search_query={{title}} {{year}}'
  },
];

const _STORAGE_KEY = "LetterboxdWatchSites";
const _storageApi = (typeof browser !== 'undefined' ? browser : chrome).storage.sync;

async function getStorageSites() {
  const result = await _storageApi.get(_STORAGE_KEY);
  return result[_STORAGE_KEY];
}

async function setStorageSites(sites) {
  await _storageApi.set({ [_STORAGE_KEY]: sites });
}

function normalizeUrl(url) {
  url = url.trim();
  if (!url) return '';
  try {
    return new URL(url).href;
  } catch {
    return new URL(`https://${url}`).href;
  }
}

function getSiteIcon(site_url) {
  const domain = new URL(normalizeUrl(site_url)).hostname.replace(/^www\./, '');
  const favicon = `https://www.google.com/s2/favicons?domain=${domain}`;
  return favicon;
}
