document.addEventListener('DOMContentLoaded', (event) => {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        // Get the 'id' parameter from the URL
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
  
        // Find the matching data entry
        const matchingEntry = data.find(entry => entry.id === id);
  
        // Get references to the display elements
        
        const nameDisplay = document.getElementById('name-display');
        const jenisPohonDisplay = document.getElementById('jenis-pohon-display');
        const imageUrlDisplay = document.getElementById('hero-image');
        const nameDisplayCell = document.getElementById('name-table');
        const jabatanDisplayCell = document.getElementById('jabatan-table');
        const tinggiDisplayCell = document.getElementById('tinggi-table');
        const jenisPohonDisplayCell = document.getElementById('jenisPohon-table');
        const heroalt = document.getElementById('alt-hero');
        if (matchingEntry) {
          // Display data if found
          //nameDisplay.textContent = matchingEntry.Name;
          jenisPohonDisplay.textContent = matchingEntry.JenisPohon;
          imageUrlDisplay.src = matchingEntry.ImageUrl;
          imageUrlDisplay.alt = matchingEntry.JenisPohon;
          nameDisplayCell.textContent = matchingEntry.Name;
          jabatanDisplayCell.textContent = matchingEntry.Jabatan;
          tinggiDisplayCell.textContent = matchingEntry.TinggiPohon;
          jenisPohonDisplayCell.textContent = matchingEntry.JenisPohon;
          document.getElementById('cari-pohon').classList.add('hidden');
        } else {
          // Display error message if not found
          document.getElementById('hero-image').classList.add('hidden');
          document.getElementById('info-table').classList.add('hidden');
          document.getElementById('info-pohon').classList.add('hidden');
          
        }
      })
      .catch(error => console.error('Error:', error));
});

// Listen for form submission
  document.getElementById('cari-pohon').addEventListener('submit', function(event) {
  event.preventDefault();
  const searchId = document.getElementById('input-cari-pohon').value;
  if (searchId) {
    window.location.href = window.location.pathname + '?id=' + searchId;
  }
});