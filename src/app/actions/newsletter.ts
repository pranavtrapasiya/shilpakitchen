export async function subscribeToNewsletter(email: string): Promise<{ success: boolean; message?: string; error?: string }> {
  try {
    if (!email || !email.includes('@')) {
      return { success: false, error: 'Invalid email address' };
    }

    const url = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbxIWqShqHARcVxBp9BiFkadbSiKPUxxCzluAKQHMhUB50abt33do7L_q_VaOR_qxSAEHg/exec';
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
          type: 'newsletter',
          email: email.trim().toLowerCase(),
        }),
      });
      return { success: true, message: 'Thank you for subscribing!' };
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'newsletter',
        email: email.trim().toLowerCase(),
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    if (!result.success) {
      throw new Error(result.error || 'Failed to subscribe to newsletter');
    }

    return { success: true, message: 'Thank you for subscribing!' };
  } catch (err) {
    console.error('Newsletter subscription error:', err);
    return { success: false, error: 'Failed to subscribe. Please try again later.' };
  }
}
