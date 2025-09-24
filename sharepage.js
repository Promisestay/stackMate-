
    // Simple interactivity for the page
    document.addEventListener('DOMContentLoaded', function() {
      // Copy link functionality
      document.getElementById('copy-link').addEventListener('click', function() {
        const linkInput = document.getElementById('share-link');
        linkInput.select();
        document.execCommand('copy');
        
        // Visual feedback
        const originalText = this.innerHTML;
        this.innerHTML = '<i class="fas fa-check"></i> Copied!';
        setTimeout(() => {
          this.innerHTML = originalText;
        }, 2000);
      });
      
      // Permission selection
      const permissionOptions = document.querySelectorAll('.permission-option');
      permissionOptions.forEach(option => {
        option.addEventListener('click', function() {
          permissionOptions.forEach(opt => opt.classList.remove('selected'));
          this.classList.add('selected');
        });
      });
      
      // File selection (for demonstration)
      const fileItems = document.querySelectorAll('.file-item');
      fileItems.forEach(item => {
        item.addEventListener('click', function(e) {
          if (!e.target.classList.contains('share-btn')) {
            this.classList.toggle('selected');
          }
        });
      });
    });
  