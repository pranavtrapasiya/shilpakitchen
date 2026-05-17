'use server';

import { supabase } from '@/lib/supabase';

export async function subscribeToNewsletter(email: string) {
  try {
    if (!email || !email.includes('@')) {
      return { success: false, error: 'Invalid email address' };
    }

    const { data, error } = await supabase
      .from('newsletter_subscriptions')
      .insert([
        {
          email: email.trim().toLowerCase(),
          created_at: new Date().toISOString(),
        },
      ]);

    if (error) {
      console.error('Supabase newsletter error:', error);
      // Handle unique constraint (already subscribed)
      if (error.code === '23505') {
        return { success: true, message: 'You are already subscribed!' };
      }
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err) {
    console.error('Newsletter subscription error:', err);
    return { success: false, error: 'Failed to subscribe' };
  }
}
