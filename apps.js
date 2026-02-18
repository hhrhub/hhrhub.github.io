let apps = JSON.parse(localStorage.getItem("apps")) || [];

function saveApps() {
  localStorage.setItem("apps", JSON.stringify(apps));
}

function addApp(app) {
  apps.push(app);
  saveApps();
}

function deleteApp(index) {
  apps.splice(index, 1);
  saveApps();
}
