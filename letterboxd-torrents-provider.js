const getServices = (title, year, imdbID) => {
  const query = `${title} ${year}`;
  return [
    {
      name: "YTS",
      url: `https://yts.mx/movies/${formatYTSpath(query)}`,
      alternative_url: `https://yts.mx/browse-movies/${title}/all/all/0/likes/${year}/all`,
      icon: "data:image/x-icon;base64,AAABAAEAEBAAAAAAAABoBQAAFgAAACgAAAAQAAAAIAAAAAEACAAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAvwAAHjMdABpTFgAeKxsAAMUAAAqdDQAhKxsAAMsAABZfFgAFtQQAHjQbACQfHAALmAsAEX8PAA2UDgAjHh8AICEfACAlHAAWZRYAAbACAAOwAgAQdhAAAagAABhdFAAcHx0ACqgIABw1GQAWYBQAHh8dAB4xHAAYYBQAA8sBABo7GQAfHiAAIR4gACMeIAAWbBQAEYkNABwgGwACtgMAIyAbAAqrCQASXBAAE1QWACEfHgAMmQoAAMAAABlRFgAExwUACqAHACMfHgAHnwoAJB8eABdQGQAhIh4ADYkOACAoHgADwgMACaUKABRzEgAHrAcAAMwAAAPXAgAfIBwAHR8fABw5GAAhIBwAHjEeAB8fHwAXURcAIR8fAB4mHAAZWxQAB5cJABCJDwAVcBMAHEEbAAK6AgAfIx0AEIAQAAmcDAAVWBUAEHERAAyKDQAfKR0AAr8FAASxAwAEtQAAFV4VABN3EQALlwoAFmEVACEhGwAdIB4AEowQAB8gHgAGuQYAE3ESAB8sHgAdMxsAALsBACAdHwACvgEAIiAfAA6IDAAPhA8AJCAfAAydCwAVahYABMQBAAK1AgAHqggAGkkYAAqmCwAgHh0AB7EFAAO4AgAiHh0ACpsJACAhHQAWZRQAICAgACIgIAADvQUAGVUYAAerBgAgKh0ACJkHACAfGwAcHh4AG0YZABJ0FAAdMB0AALwAAB4eHgAgHh4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARIcjJk4kfTlte2sXZ4csREY/LFgJPToNYTtpKTwvQDIhC4MuM3BGcoZ5XYYIUAJqcluFXiwiVEwdgDJGHIRKQzhudkYmPyA+BV+HMix1BlFSTQEjRF9nMHtjRF9GhmVib2gmRBAyHHEfKkJlX0JGclYeRFwyRl8lB1pdEEZ1RkQTRV8PLECGLQRVGodGRCxGFDVCh19EEWBmABk2h3IcXzEbh3ksNCsAJ3N0FRgiLEYSWXccQmUOFgxBV2RILCIsR1N+LHlfN0l4LEt/T4ZfXyx8bEYsQnIoRiGBHCwscjREdUWCRCwsRj9yMiEsh3qGX3oyCgMsRkBfEA8sX19dXwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",
    },
    {
      name: "The Pirate Bay",
      url: `https://thepiratebay.org/search.php?q=${imdbID}&video=on`,
      icon: "data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAQAQAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////////////////////////////////v7+//////////////////z8/P+9vb3/7Ozs////////////////////////////////////////////4uLi/0lJSf/d3d3////////////z8/P/EhIS/3Jycv/x8fH////////////////////////////x8fH/wsLC/1hYWP8AAAD/yMjI////////////5+fn/xAQEP8gICD/QkJC/1dXV/9lZWX/i4uL/4mJif9SUlL/Kioq/z09Pf9ubm7/Hh4e/2FhYf/BwcH/ubm5/2xsbP9AQED/p6en/3d3d/8UFBT/AAAA/xQUFP85OTn/ISEh/xkZGf89PT3/WVlZ/0JCQv8qKir/Jycn/3p6ev8AAAD/QUFB/z8/P/9gYGD/jo6O/9HR0f/7+/v////////////v7+//xcXF/52dnf+Dg4P/ExMT/0BAQP+/v7//AAAA/4KCgv+Ojo7/paWl/7a2tv+qqqr/pqam/6Wlpf+kpKT/ra2t/6+vr/+xsbH/5eXl/5eXl/9bW1v/1NTU/3Fxcf+YmJj/AwMD/wAAAP83Nzf/VFRU/xsbG/8AAAD/X19f/zw8PP8RERH/AAAA/0FBQf/+/v7//Pz8////////////nJyc/wAAAP8AAAD/AAAA/x8fH/8LCwv/AAAA/yYmJv8FBQX/AAAA/wAAAP8rKyv/+vr6/////////////////5ycnP8AAAD/AAAA/w8PD/8AAAD/AAAA/wAAAP8AAAD/DQ0N/wMDA/8AAAD/NjY2//r6+v////////////////+urq7/AAAA/zY2Nv/l5eX/WVlZ/x8fH/8nJyf/IyMj/9HR0f+Ghob/AAAA/1dXV///////////////////////r6+v/wAAAP8tLS3/0tLS/19fX/+ysrL/2dnZ/2VlZf+ysrL/iIiI/wAAAP9ZWVn//////////////////////6+vr/8AAAD/AAAA/wUFBf8CAgL/ExMT/xAQEP8DAwP/AwMD/wEBAf8AAAD/Wlpa//////////////////////+rq6v/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/1RUVP//////////////////////19fX/0lJSf9BQUH/Q0ND/0NDQ/9DQ0P/Q0ND/0NDQ/9DQ0P/QkJC/0JCQv+oqKj//////////////////////////////////v7+//7+/v/+/v7//v7+//7+/v/+/v7//v7+//7+/v/+/v7/////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="
    },
    {
      name: "1337x",
      url: `https://1337x.to/search/${query}/1/`,
      icon: "data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABMLAAATCwAAAAAAAAAAAAD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8ABjzcUgpA388JP9/PCT/f1AY83HAFO9sABjzbAAc93UwIPt7MBz3dzwtB4dcGPNt/////AP///wD///8A////AAM52SQHPdzXCkDg/wk/3/8IPt7XBDraFQY82wIIPdytCkDg/wg+3v8IPt3+BTvbT////wD///8A////AP///wAEOtsABjzcUgpA4P0KQOD/CT/f/wU7210FO9wxCT/e9Ak/4P8LQeD/BjzbiQU72gP///8A////AP///wD///8ABz3dAAg93QcKQeG5Bz7f/wc+4P8HPt7PCD7etQtB4f8LQeH/CkDg4gY82yMGPNsA////AP///wD///8A////AA9D3QAPQ90AFUjfRR5Q4vkUSOH/CkDg/wc94P8MQuL/C0Hh/wpA4IEGPNwABjzcAP///wD///8A////AP///wAQQ90AD0LdABpL3wItW+SlOGTn/zBd5f8eUOT/C0Hh/wU83tgEOdkVAzjZAAM42QD///8A////AP///wD///8AHE3hABxN4QAbTeEAI1PhiDdj5/88Z+j/Qm3p/zZj5/8TRuDEAzjYBAg92QAIPNkA////AP///wD///8A////AB9Q4gAfUOIAHlDhLS1b5O0zYOT/O2bo/z9p5/9HcOn/Qmzo+x1P4GEUSN0AFkndAP///wD///8A////AP///wAfUOEAH1DiASlY5aYzYOb/NWLl/zNg5eI2YuXRQ23o/0tz6v9Ba+bUKVjhGShX4QD///8A////AP///wD///8AG0zeAB9Q30gxX+j4NmPo/zll6P8pWONtJlXgPkJs6PdJcur/TXXr/zdk5YAnVuEC////AP///wD///8A////AB5P4CIsWuTTNmPn/zhk5v8zYOXeJVXjGyRT3wI5ZOarSnPr/0116/9Hcer9JVThUP///wD///8A////AP///wAoWORTOWbq0Dtn6c87Z+fULFricyNT4QAnVeAALlviQUhx6shMdOrQTnbq2C9d5oT///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A//8AAP//AADBgwAAwAMAAOADAADgBwAA8A8AAPAPAAD4DwAA8A8AAOAHAADgAwAAwAMAAMGDAAD//wAA//8AAA==",
    },
    {
      name: "RARBG",
      url: `https://rargb.to/search/?category[]=movies&search=${query}`,
      icon: "data:image/x-icon;base64,AAABAAEAEBAAAAAAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAQAQAAAAAAAAAAAAAAAAAAAAAAAD///8B////L////5n///+l////o////6H///83////Af///wv///+B////p////6P///+l////n////zf///8D////Rf///8n06en/1MnJ/9TJv//p39//////0f///wH///+N/////9TUyf/Uycn/1Mm//9/U1P/////Z////Vf///3H////vv6qf/z8KAP8/CgD/impV/////+v///97////+bSflP8/FQD/PwoA/0oVAP/Jv7T/////4f///13///9x////77+0qv9VHwD/VRUA/5R0X//////7////99/Uyf9fKhX/VR8K/1UVAP+0n5T//////////1////8F////cf///+/JtKr/aioK/18fCv+fdGr///////T09P9/SjX/aioK/18fCv+qf2r//////////4X///8B////Af///3H////v1LSq/3QqCv90Kgr/qn9q//////+qf2r/dCoK/3Q1Ff+fakr//////////7X///8H////Af///wH///9x////79+/tP+USir/ij8f/5RVNf+fX0r/ij8f/4o/H/+USir/9N/f//////H///8l////Af///wH///8B////cf///+/pyb//tHRV/7R0Vf+qakr/n1Uq/59VKv+fSir/n0oq/8mUf///////////hf///wH///8B////Af///3H////v6cm//790Vf+/f1X/yZR//+nJv//fv7T/yYp0/7R0Vf+0Xz//1LSf//////H///8h////Af///wH///9x////7+nJv/+/dFX/v3RV/9SqlP///////////fTf3/+/f1//v3RV/8mKav////T/////X////wH///8B////cf///+/pyb//v3RK/790Sv/UqpT///////////3/6en/yX9V/790Sv/Jf1X//+np/////4H///8B////Af///3H////v6cm//79qP/+/akr/1Ip0/+nJv//pyb//1JR0/79qSv+/aj//yX9f////9P////9n////Af///wH///9x////7+nJtP+/XzX/v2o//79fNf+/XzX/v181/79fNf+/XzX/v181/+m/qv/////3////Kf///wH///8B////cf///+/p1L//yXRV/8l/Vf/Jf1X/yX9V/8l/Vf/Jf1//1JR0/+nUv///////////jf///wH///8B////Af///zn///+7///////////////////////////////////////////////x////ff///wX///8B////Af///wH///8B////H////3v///+H////hf///4X///+F////hf///4X///9n////Jf///wH///8B////Af///wH///8BAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//w==",
    },
    {
      name: "TorrentGalaxy",
      url: `https://torrentgalaxy.to/torrents.php?search=${imdbID}#results`,
      icon: "data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAACMuAAAjLgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQECAxERBgUdHQ0FJCISBSckEwUnJRMFJSISBR8eDgMUFAgBAwMCAAAAAAAAAAAAAAAAAQMDAAAAAAAHIyMDCj47EApPSiYSYmI/GG1yThlwdVIZcHVSGW5zUBRmZ0MLU04sCUA9FAgqKgUAAAAAAg4OAA9VVAAILS0CDFFOEhdxcz42ka+MRZ3Lx0mh0ttKodPdSqHT3Uqh09xHns3OOpW3nB55gk0MV1MZCzo6BCjf3AAAAAAADlZUChd5eTY/m8KnUaXe+VOm4f9TpuH/U6bh/1Om4f9TpuH/U6bh/1Km3/1Gn83EIYONTA1eWREGIyMBDUZFAg5xaRs2mLV+UKXd9VKm4P9Rp9/0Tard0kyr3sZMq97FTKvdzE+o3upSpuD/Uqbg/kCexaUUe3cqD1dVBg9nYwgei485SKPTyVKm4f9Qp9/wQLLVgyrIzjUoys0oKMrNJyjLzi45uNFkTqjd3FKm4P9OpdrmKpSlVw1vZw8NfHAQMZuyY0+l3fFSpuD/RavVoh23sScScm8SDVBMFwxPShgQYF4SFrCkGz2uz3pRpt/3Uqbg/j2gw4wPhHkcD46BGD6ixolSpuD/T6fd6jGrv1gTg30hF399Px6UnGgflqBuGYWGSxR5dSUkqa88S6jazlKm4f9HpNK1GJWRKhOdkRxDpc+bUqbg/0qn18gfoqI9HpyfTy221LQ0wOvrNcHs8DC63coio65mF5uUM0On0J9SpuD/SqbXxh+gojIUqp0YRKjRlFKm4P9FptGwGqOcQy261Z03xPP8N8T1/zfE9P83xPT/Mb7hwhunpEk6psWDUqbg/0qn2MIgqaotE7uoDj2szWxRpt/6RKXPrh2tqVAywufHN8T0/zfE9P83xPT/N8T0/zXD7+YitrtfOKXBgFGm3/xGqdWeGrWsHBzLwAYst8IzTajczUmm1cMfsK5TMsTnuTfE9P83xPT/N8T0/zfE9P80xO7aIbm6Wj+lypVQp97sOrDMWRfFtQwp398BG8u/ED+w02RNp9vSMay/YirF1XI1xfHlN8T0/zfE9P82xfL0L8bhkiOytExKp9e+SKvZmSPCwR4j084DGpWTACXY1QMhysUXRa7Ybkeq144qvcQ9LM3eYTLK66AzyeyoLszjdCXGxztCq9J2Savaji3Ayicg1swHLvP0ACnm5AAu9vYAJNzWBCPPyhFDstg/RK/XPSrPzhUk39UaJd/WHCTazxRBstUvRq/ZSi7Dzhoe3NAHLOTlASfb2QAAAAAAKunnAC3u7wAm5N8CFezRBTLI1Qk3ydQEJfLsASny7wEx0tYCN8TVCRrj0QYg59sDLOfoASjh3wAu/PsAwAMAAIABAACAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAACAAQAAwAMAAA==",
    },
    {
      name: "YouTube",
      url: `https://www.youtube.com/results?search_query=${query}`,
      icon: "data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABILAAASCwAAAAAAAAAAAAD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8AAAD/EAAA/0AAAP9AAAD/cAAA/4AAAP+AAAD/gAAA/4AAAP+AAAD/QAAA/0AAAP8Q////AP///wD///8AAAD/YAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/2D///8AAAD/MAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/MAAA/1AAAP//AAD//wAA//8AAP//AAD//wAA//8QEP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/2AAAP+AAAD//wAA//8AAP//AAD//wAA//8AAP//4OD//1BQ//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP+AAAD/gAAA//8AAP//AAD//wAA//8AAP//AAD/////////////wMD//yAg//8AAP//AAD//wAA//8AAP//AAD/gAAA/4AAAP//AAD//wAA//8AAP//AAD//wAA/////////////7Cw//8gIP//AAD//wAA//8AAP//AAD//wAA/4AAAP+AAAD//wAA//8AAP//AAD//wAA//8AAP//4OD//0BA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP+AAAD/UAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/YAAA/zAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/zD///8AAAD/YAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/2D///8A////AP///wAAAP8QAAD/QAAA/0AAAP+AAAD/gAAA/4AAAP+AAAD/gAAA/4AAAP9AAAD/QAAA/xD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A//8AAP//AADAAwAAgAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAEAAMADAAD//wAA//8AAA==",
    },
  ];
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

  if ('alternative_url' in service) {
    fetch(service.url, {method:'HEAD'}).then(response => {
      if (response.status === 404) {
        a.href = service.alternative_url
        if (service.name.toLowerCase() === 'yts') {
          fetch(service.alternative_url)
            .then(response => response.text())
            .then(html => {
              const parser = new DOMParser();
              const doc = parser.parseFromString(html, 'text/html');
              const movieLinks = doc.querySelectorAll('a.browse-movie-link');
              if (movieLinks.length == 1)
                a.href = movieLinks[0].href;
            });
        }
      }
    });
  }
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

const insertServices = () => {
  hideOther();
  const [title, year, imdbID] = getMovieInfo();
  const services = getServices(title, year, imdbID);
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
