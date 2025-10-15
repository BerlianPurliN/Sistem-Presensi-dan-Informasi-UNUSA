/**
 * Function to switch between content tabs.
 * @param {string} tabId - ID of the tab content to show (e.g., 'home', 'jadwal').
 */
function switchTab(tabId) {
  // Remove 'active' class from all buttons and content
  document.querySelectorAll(".tab-button").forEach((btn) => {
    btn.classList.remove("active", "text-white", "bg-primary", "shadow-soft");
    btn.classList.add("text-gray-700", "bg-gray-200");
  });

  document.querySelectorAll(".tab-content").forEach((content) => {
    content.classList.remove("active");
  });

  // Add 'active' class to the selected button and content
  const activeBtn = document.getElementById(`tab-${tabId}`);
  const activeContent = document.getElementById(`content-${tabId}`);

  if (activeBtn) {
    activeBtn.classList.add(
      "active",
      "text-white",
      "bg-primary",
      "shadow-soft"
    );
    activeBtn.classList.remove("text-gray-700", "bg-gray-200");
  }
  if (activeContent) {
    activeContent.classList.add("active");
  }

  // If switching to home, check if already presenced
  if (tabId === "home") {
    const nameInput = document.getElementById("full-name");
    const presensiBtn = document.getElementById("presensi-btn");
    if (sessionStorage.getItem("hasPresenced")) {
      nameInput.placeholder = "Anda sudah presensi";
      nameInput.disabled = true;
      presensiBtn.disabled = true;
      presensiBtn.textContent = "Sudah Presensi";
    } else {
      nameInput.placeholder = "Masukkan nama lengkap Anda di sini";
      nameInput.disabled = false;
      presensiBtn.disabled = false;
      presensiBtn.textContent = "Presensi";
    }
  }

  // Minor adjustment for rekap content to apply consistent padding/border
  if (tabId === "rekap") {
    const rekapContent = document.getElementById("content-rekap");
    if (rekapContent) {
      rekapContent.classList.add(
        "p-0",
        "sm:p-0",
        "border-0",
        "shadow-none",
        "bg-transparent"
      );
    }
  } else {
    const otherContents = ["content-home", "content-link"];
    otherContents.forEach((id) => {
      const content = document.getElementById(id);
      if (content) {
        content.classList.remove(
          "p-0",
          "sm:p-0",
          "border-0",
          "shadow-none",
          "bg-transparent"
        );
        content.classList.add(
          "p-6",
          "sm:p-8",
          "border",
          "border-gray-100",
          "rounded-2xl",
          "shadow-soft",
          "bg-white"
        );
      }
    });
  }
}

// Initial check on load for home tab (in case the user navigates back)
window.addEventListener("load", () => {
  switchTab("home");
});
