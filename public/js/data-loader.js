/**
 * Data Loader Module
 * Handles fetching and rendering of dynamic content
 */

/**
 * Constants
 */
const DATA_PATH = "data/";

/**
 * Fetch JSON data from a file
 */
async function fetchData(path) {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching data from ${path}:`, error);
    return null;
  }
}

/**
 * Show empty state message
 */
function showEmptyState(container, title, message) {
  container.innerHTML = `
    <div class="empty-state">
      <div class="empty-state-icon">🎯</div>
      <h3 class="empty-state-title">${escapeHtml(title)}</h3>
      <p class="empty-state-message">${escapeHtml(message)}</p>
    </div>
  `;
}

/**
 * Format ISO date to readable format
 */
function formatDate(isoDate) {
  const date = new Date(isoDate);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

/**
 * Escape HTML to prevent XSS
 */
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}
