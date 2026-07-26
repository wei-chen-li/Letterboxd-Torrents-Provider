const gridEl = document.getElementById('site-grid');
const addBtn = document.getElementById('add-btn');

const editOverlay = document.getElementById('edit-overlay');
const editTitle = document.getElementById('edit-title');
const editName = document.getElementById('edit-name');
const editUrl = document.getElementById('edit-url');
const editSaveBtn = document.getElementById('edit-save');
const editCancelBtn = document.getElementById('edit-cancel');

const presetOverlay = document.getElementById('preset-overlay');
const presetListEl = document.getElementById('preset-list');
const presetCancelBtn = document.getElementById('preset-cancel');
const presetCustomBtn = document.getElementById('preset-custom');

let editingIndex = null; // null = creating a new site
let dragSrcIndex = null;

// ---------- Storage helpers ----------
async function getSites() {
  return await getStorageSites() ?? [];
}

async function setSites(sites) {
  await setStorageSites(sites);
}

// ---------- Rendering ----------
async function loadSites() {
  const sites = await getSites();
  gridEl.innerHTML = '';

  if (sites.length === 0) {
    gridEl.innerHTML = '<p class="empty-msg">No custom sites added yet.</p>';
    return;
  }

  sites.forEach((site, index) => {
    gridEl.appendChild(buildSiteBox(site, index));
  });
}

function buildSiteBox(site, index) {
  const box = document.createElement('div');
  box.className = 'site-box';
  box.draggable = true;
  box.dataset.index = index;

  const img = document.createElement('img');
  img.src = getSiteIcon(site.urlTemplate);
  img.alt = '';

  const textWrap = document.createElement('div');
  textWrap.className = 'site-text';

  const nameEl = document.createElement('span');
  nameEl.className = 'name';
  nameEl.textContent = site.name;

  const urlEl = document.createElement('span');
  urlEl.className = 'url';
  urlEl.textContent = site.urlTemplate;

  textWrap.append(nameEl, urlEl);

  const actions = document.createElement('div');
  actions.className = 'box-actions';

  const editBtn = document.createElement('button');
  editBtn.className = 'icon-btn edit';
  editBtn.title = 'Edit';
  editBtn.textContent = '✎';
  editBtn.onclick = () => openEditModal(index);

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'icon-btn delete';
  deleteBtn.title = 'Delete';
  deleteBtn.textContent = '✕';
  deleteBtn.onclick = () => removeSite(index);

  actions.append(editBtn, deleteBtn);
  box.append(img, textWrap, actions);

  // --- Drag & drop reordering ---
  box.addEventListener('dragstart', (e) => {
    dragSrcIndex = index;
    box.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', String(index));
  });

  box.addEventListener('dragend', () => {
    box.classList.remove('dragging');
    document.querySelectorAll('.site-box').forEach(el => el.classList.remove('drag-over'));
  });

  box.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    box.classList.add('drag-over');
  });

  box.addEventListener('dragleave', () => {
    box.classList.remove('drag-over');
  });

  box.addEventListener('drop', async (e) => {
    e.preventDefault();
    box.classList.remove('drag-over');
    const targetIndex = index;
    if (dragSrcIndex === null || dragSrcIndex === targetIndex) return;

    const sites = await getSites();
    const [moved] = sites.splice(dragSrcIndex, 1);
    sites.splice(targetIndex, 0, moved);
    await setSites(sites);
    dragSrcIndex = null;
    loadSites();
  });

  return box;
}

// ---------- Delete ----------
async function removeSite(index) {
  const sites = await getSites();
  sites.splice(index, 1);
  await setSites(sites);
  loadSites();
}

// ---------- Edit modal ----------
function openEditModal(index) {
  editingIndex = index;
  editTitle.textContent = 'Edit Site';
  getSites().then(sites => {
    const site = sites[index];
    editName.value = site.name;
    editUrl.value = site.urlTemplate;
    editOverlay.classList.add('open');
  });
}

function openCreateModal(preset) {
  editingIndex = null;
  editTitle.textContent = 'Add Site';
  editName.value = preset ? preset.name : '';
  editUrl.value = preset ? preset.urlTemplate : '';
  editOverlay.classList.add('open');
}

function closeEditModal() {
  editOverlay.classList.remove('open');
  editingIndex = null;
}

editCancelBtn.addEventListener('click', closeEditModal);

editSaveBtn.addEventListener('click', async () => {
  const name = editName.value.trim();
  const urlTemplate = editUrl.value.trim();

  if (!name || !urlTemplate) {
    alert('Please fill in both the name and the URL.');
    return;
  }

  const sites = await getSites();
  const record = { name, urlTemplate };

  if (editingIndex === null) {
    sites.push(record);
  } else {
    sites[editingIndex] = record;
  }

  await setSites(sites);
  closeEditModal();
  loadSites();
});

// ---------- Add (preset picker) modal ----------
function openPresetModal() {
  presetListEl.innerHTML = '';
  DEFAULT_SITES.forEach(preset => {
    const li = document.createElement('li');
    li.className = 'preset-item';

    const img = document.createElement('img');
    img.src = getSiteIcon(preset.urlTemplate);

    const name = document.createElement('span');
    name.className = 'name';
    name.textContent = preset.name;

    li.append(img, name);
    li.onclick = () => {
      closePresetModal();
      openCreateModal(preset);
    };
    presetListEl.appendChild(li);
  });
  presetOverlay.classList.add('open');
}

function closePresetModal() {
  presetOverlay.classList.remove('open');
}

addBtn.addEventListener('click', openPresetModal);
presetCancelBtn.addEventListener('click', closePresetModal);
presetCustomBtn.addEventListener('click', () => {
  closePresetModal();
  openCreateModal(null);
});

// Close modals when clicking outside them
[editOverlay, presetOverlay].forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.classList.remove('open');
  });
});

document.addEventListener('DOMContentLoaded', loadSites);
