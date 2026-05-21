'use client';

import { useEffect } from 'react';

export default function ImageSecurity() {
  useEffect(() => {
    // 1. Prevent right-click context menu on all images
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'IMG' || 
        target.tagName === 'img' ||
        target.style.backgroundImage ||
        target.closest('.secure-image')
      ) {
        e.preventDefault();
      }
    };

    // 2. Prevent drag-and-drop on all images
    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'IMG' || 
        target.tagName === 'img' ||
        target.closest('.secure-image')
      ) {
        e.preventDefault();
      }
    };

    // 3. Prevent keyboard shortcuts like Ctrl+S (Save), Ctrl+Shift+I (Inspect), Ctrl+U (Source)
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent Save Page/Save Image (Ctrl + S / Cmd + S)
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
      }
      
      // Prevent Copying (Ctrl + C / Cmd + C) if focused on media
      const activeEl = document.activeElement;
      if (activeEl && (activeEl.tagName === 'IMG' || activeEl.closest('.secure-image'))) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
          e.preventDefault();
          // Write copyright text to clipboard
          navigator.clipboard.writeText('© Shilpa\'s Kitchen - All content and images are copyright protected.');
        }
      }
    };

    // 4. Intercept global copy events to prevent image copying and copy copyright text instead
    const handleCopy = (e: ClipboardEvent) => {
      const selection = window.getSelection();
      // If they are selecting or trying to copy an image, replace clipboard content with warning text
      if (!selection || selection.toString() === '') {
        e.preventDefault();
        e.clipboardData?.setData(
          'text/plain', 
          '© Shilpa\'s Kitchen - Homemade snacks are copyright protected. Standard licensing applies. Please visit https://www.shilpaskitchen.in for inquiries.'
        );
      }
    };

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('copy', handleCopy);

    // Apply draggable="false" and pointer-events to all images dynamically as a fail-safe
    const secureExistingImages = () => {
      document.querySelectorAll('img').forEach((img) => {
        img.setAttribute('draggable', 'false');
        img.setAttribute('oncontextmenu', 'return false;');
        // Inject user-select styles
        img.style.userSelect = 'none';
        img.style.webkitUserSelect = 'none';
        img.style.setProperty('-webkit-touch-callout', 'none');
      });
    };

    secureExistingImages();
    // Run observer to secure any dynamically loaded/lazy-loaded images
    const observer = new MutationObserver(() => {
      secureExistingImages();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('copy', handleCopy);
      observer.disconnect();
    };
  }, []);

  return null;
}
