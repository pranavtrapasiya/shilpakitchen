'use server';

export async function submitContactForm(formData: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  try {
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
