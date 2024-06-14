document.addEventListener('DOMContentLoaded', () => {
  const data = [
    { id: '123', Name: 'Pak Mamat', JenisPohon: 'Sengon Buto', ImageUrl: 'https://www.appsheet.com/template/gettablefileurl?appName=PENGUKURAN-31277156&tableName=DATAPENGUKURANBLOK06&fileName=%2FBLOK_06%2FBLOK_06_VISUAL_POHON%2F%2FIND2023LHT079147_79021-80100_ffd9de73.FOTO%20POHON.122112.jpg' },
    { id: '456', Name: 'Pine', JenisPohon: 'Coniferous', ImageUrl: 'https://example.com/image2.jpg' },
    { id: '789', Name: 'Maple', JenisPohon: 'Deciduous', ImageUrl: 'https://example.com/image3.jpg' },
  ];

  const urlParams = new URLSearchParams(window.location.search);
  const uniqueID = urlParams.get('id');

  const matchingEntry = data.find(entry => entry.id === id);

  const nameDisplay = document.getElementById('name-display');
  const jenisPohonDisplay = document.getElementById('jenis-pohon-display');
  const perkiraanDisplay = document.getElementById('perkiraan-display');
  const heroImage = document.getElementById('hero-image');

  if (matchingEntry) {
    nameDisplay.textContent = matchingEntry.Name;
    jenisPohonDisplay.textContent = matchingEntry.JenisPohon;
    perkiraanDisplay.textContent = matchingEntry.Perkiraan;

    // Set the src attribute of the hero image
    heroImage.src = matchingEntry.ImageUrl;
  } else {
    errorMessage.textContent = 'No data found for this ID.';
  }
});
