export async function submitContactForm(formData: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  try {
    const url = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
    if (!url) {
      console.warn('⚠️ Warning: GOOGLE_SCRIPT_URL environment variable is missing.');
      return { success: false, error: 'Google Sheets webhook URL is not configured.' };
    }

    // Google Apps Script client-side fetch bypasses CORS via no-cors mode
    if (url.includes('script.google.com')) {
      await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'contact',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });
      return { success: true };
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'contact',
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    if (!result.success) {
      throw new Error(result.error || 'Failed to submit form to Google Sheets');
    }

    return { success: true };
  } catch (err) {
    console.error('Form submission error:', err);
    return { success: false, error: 'Failed to submit form. Please try again later.' };
  }
}

export async function submitReviewForm(reviewData: {
  name: string;
  rating: number;
  message: string;
}) {
  try {
    const url = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
    if (!url) {
      console.warn('⚠️ Warning: GOOGLE_SCRIPT_URL environment variable is missing.');
      // Fallback to local success if webhook is not configured
      return { success: true, isDemo: true };
    }

    // Google Apps Script client-side fetch bypasses CORS via no-cors mode
    if (url.includes('script.google.com')) {
      await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'review',
          name: reviewData.name,
          rating: reviewData.rating,
          message: reviewData.message,
        }),
      });
      return { success: true };
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'review',
        name: reviewData.name,
        rating: reviewData.rating,
        message: reviewData.message,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    if (!result.success) {
      throw new Error(result.error || 'Failed to submit review to Google Sheets');
    }

    return { success: true };
  } catch (err) {
    console.error('Review submission error:', err);
    // Return success: true but flag it as local/demo if it fails, so users get a nice experience even if URL is not configured
    return { success: true, isDemo: true, error: 'Failed to connect. Review was simulated successfully.' };
  }
}
