function filterCars() {
  const model = document.getElementById('search-model').value.toLowerCase();
  const city = document.getElementById('search-city').value;
  const state = document.getElementById('search-state').value;

  const vendors = document.querySelectorAll('.vendor');

  vendors.forEach(vendor => {
    const vendorCity = vendor.dataset.city;
    const vendorState = vendor.dataset.state;
    const cars = vendor.querySelectorAll('.car');
    let showVendor = false;

    cars.forEach(car => {
      const carText = car.innerText.toLowerCase();
      const matchesModel = model === '' || carText.includes(model);
      const matchesCity = city === '' || vendorCity === city;
      const matchesState = state === '' || vendorState === state;

      if (matchesModel && matchesCity && matchesState) {
        showVendor = true;
      }
    });

    vendor.style.display = showVendor ? 'block' : 'none';
  });
}
