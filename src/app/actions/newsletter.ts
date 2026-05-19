'use server';

export async function subscribeToNewsletter(email: string): Promise<{ success: boolean; message?: string; error?: string }> {
  try {
    if (!email || !email.includes('@')) {
      return { success: false, error: 'Invalid email address' };
    }

    const url = process.env.GOOGLE_SCRIPT_URL;
    if (!url) {
      console.warn('⚠️ Warning: GOOGLE_SCRIPT_URL environment variable is missing.');
      return { success: false, error: 'Google Sheets webhook URL is not configured.' };
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
