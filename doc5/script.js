const uploadBox = document.getElementById('uploadBox');
const fileInput = document.getElementById('fileInput');

// When user clicks anywhere in the upload box, open file chooser
uploadBox.addEventListener('click', () => {
  fileInput.click();
});

// (Optional) handle file selection display
fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    uploadBox.querySelector('p').textContent = file.name;
  }
});

// (Optional) handle drag and drop
uploadBox.addEventListener('dragover', (event) => {
  event.preventDefault();
  uploadBox.style.borderColor = '#6a11cb';
});

uploadBox.addEventListener('dragleave', () => {
  uploadBox.style.borderColor = '#ccc';
});

uploadBox.addEventListener('drop', (event) => {
  event.preventDefault();
  uploadBox.style.borderColor = '#ccc';
  const file = event.dataTransfer.files[0];
  if (file) {
    uploadBox.querySelector('p').textContent = file.name;
  }
});
