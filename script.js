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
  
        if (matchingEntry) {
          // Display data if found
          
          nameDisplay.textContent = matchingEntry.Name;
          jenisPohonDisplay.textContent = matchingEntry.JenisPohon;
          imageUrlDisplay.src = matchingEntry.ImageUrl;
        } else {
          // Display error message if not found
          idDisplay.textContent = 'No data found for this ID.';
        }
      })
      .catch(error => console.error('Error:', error));
  });