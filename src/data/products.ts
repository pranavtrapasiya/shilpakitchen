export type FAQ = {
  question: string;
  answer: string;
};

export type Review = {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
};

export type ProductData = {
  slug: string;
  name: string;
  shortDescription: string;
  price: string;
  image: string;
  rating: string;
  reviewCount: string;
  category: string;
  diet: string;
  
  // Rich content sections
  ingredients: string[];
  taste: string;
  texture: string;
  freshness: string;
  homemadeQuality: string;
  servingSuggestions: string;
  storageInstructions: string;
  occasions: string;
  travelSuitability: string;
  
  faqs: FAQ[];
  reviews: Review[];
  
  // SEO
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  
  // Internal linking
  relatedProducts: { name: string; slug: string; callToAction: string }[];
};

export const productsData: Record<string, ProductData> = {
  'farshi-puri': {
    slug: 'farshi-puri',
    name: 'Homemade Farshi Puri',
    shortDescription: 'Crispy homemade Farshi Puri made with traditional Gujarati recipes and fresh ingredients. Perfect for tea-time snacking.',
    price: '95',
    image: '/images/farsi_puri.png',
    rating: '4.8',
    reviewCount: '156',
    category: 'Gujarati Snacks',
    diet: 'Vegetarian',
    
    ingredients: ['Whole Wheat Flour (Atta)', 'Pure Ghee', 'Black Pepper', 'Cumin Seeds (Jeera)', 'Salt', 'Refined Oil for frying'],
    taste: 'A perfect balance of savory and mildly spiced flavors, featuring the earthy aroma of roasted cumin and the subtle kick of crushed black pepper.',
    texture: 'Exceptionally flaky, layered, and crispy. It shatters delightfully in the mouth, characteristic of a perfectly kneaded and deep-fried traditional puri.',
    freshness: 'Made fresh to order in small batches. We never use preservatives, ensuring you get the authentic taste of freshly prepared Gujarati snacks.',
    homemadeQuality: 'Handcrafted with love by Shilpa Kitchen, using the same recipe passed down through generations. The dough is kneaded to the perfect consistency to ensure the classic flakiness.',
    servingSuggestions: 'Best enjoyed with a hot cup of Masala Chai or Coffee. Can also be served alongside sweet mango pickle (Chhundo) or spicy green chutney for a flavor contrast.',
    storageInstructions: 'Store in an airtight container at room temperature. Keep away from direct sunlight and moisture to maintain its signature crispiness for up to 15 days.',
    occasions: 'An essential Diwali snack, perfect for monsoon evenings, daily tea-time rituals, or serving to guests during festive gatherings.',
    travelSuitability: 'Excellent for travel! These dry snacks do not spoil easily and provide a filling, hygienic home-cooked meal replacement during long train journeys or road trips.',
    
    faqs: [
      { question: 'What is Farshi Puri?', answer: 'Farshi Puri is a traditional Gujarati crispy snack made from wheat flour, layered with ghee, and fried to golden perfection. It is a popular festive and everyday snack.' },
      { question: 'How long does homemade Farshi Puri stay fresh?', answer: 'Our homemade Farshi Puri stays fresh for up to 15-20 days at room temperature when stored properly in an airtight container.' },
      { question: 'Is Farshi Puri vegetarian?', answer: 'Yes, our Farshi Puri is 100% vegetarian, made using only plant-based ingredients and pure dairy ghee.' },
      { question: 'Do you deliver across Surat?', answer: 'Yes, we provide fresh delivery across all areas in Surat. You can place your order directly via WhatsApp.' }
    ],
    reviews: [
      { id: 1, name: 'Priya Desai', rating: 5, comment: 'Absolutely delicious! The flakiness is just perfect and reminds me of my grandmother’s recipe.', date: 'October 12, 2023' },
      { id: 2, name: 'Rahul Mehta', rating: 5, comment: 'Very fresh and crispy. Ordered it for a train journey and it stayed perfectly intact.', date: 'November 05, 2023' },
      { id: 3, name: 'Ami Patel', rating: 4, comment: 'Great quality and hygienic packaging. The pepper flavor is just right.', date: 'December 20, 2023' }
    ],
    
    metaTitle: 'Homemade Farshi Puri in Surat | Shilpa Kitchen',
    metaDescription: 'Order crispy homemade Farshi Puri in Surat from Shilpa Kitchen. Fresh Gujarati snacks made with authentic taste and quality ingredients. Order via WhatsApp.',
    metaKeywords: ['Farshi Puri Surat', 'homemade Farshi Puri', 'Gujarati Farshi Puri', 'traditional Indian snacks Surat', 'Shilpa Kitchen snacks'],
    
    relatedProducts: [
      { name: 'Limbu Gathiya', slug: 'limbu-gathiya', callToAction: 'Try our Limbu Gathiya' },
      { name: 'Butter Chakri', slug: 'butter-chakri', callToAction: 'Explore Butter Chakri' }
    ]
  },
  
  'limbu-gathiya': {
    slug: 'limbu-gathiya',
    name: 'Homemade Limbu Gathiya',
    shortDescription: 'Crunchy gram flour sticks infused with a tangy lemon twist and traditional Gujarati spices. A classic savory treat.',
    price: '100',
    image: '/images/gathiya.png',
    rating: '4.9',
    reviewCount: '210',
    category: 'Gujarati Snacks',
    diet: 'Vegetarian',
    
    ingredients: ['Gram Flour (Besan)', 'Fresh Lemon Juice', 'Ajwain (Carom Seeds)', 'Turmeric', 'Salt', 'Premium Frying Oil'],
    taste: 'A tantalizing burst of tanginess from fresh lemon juice, balanced perfectly with savory besan and a hint of earthy ajwain. Very addictive!',
    texture: 'Light, airy, and exceptionally crunchy. It has a soft crunch that melts quickly in the mouth without feeling heavy or oily.',
    freshness: 'Prepared daily in hygienic conditions. The lemon zest and juice are added fresh to the dough to retain the vibrant, natural citrus notes.',
    homemadeQuality: 'Extruded using traditional brass makers, ensuring the perfect thickness and authentic texture that commercial machines cannot replicate.',
    servingSuggestions: 'An absolute must-have with fried green chilies, grated papaya sambharo, and hot jalebis for a classic Sunday Gujarati breakfast.',
    storageInstructions: 'Keep in an airtight jar. Do not expose to humid air. Stays perfectly crunchy for 2-3 weeks.',
    occasions: 'Perfect for morning breakfasts, Diwali hampers, or as a crunchy side dish alongside your regular meals.',
    travelSuitability: 'Highly recommended for travel. It is lightweight, non-messy, and the tangy flavor is refreshing during long trips.',
    
    faqs: [
      { question: 'What makes Limbu Gathiya different from regular Gathiya?', answer: 'Limbu Gathiya has a distinct tangy flavor derived from fresh lemon juice added during the dough preparation, making it more refreshing and slightly sour compared to regular gathiya.' },
      { question: 'Is it too spicy?', answer: 'No, Limbu Gathiya is very mild and tangy. It is suitable for children and those who prefer non-spicy snacks.' },
      { question: 'What is the shelf life?', answer: 'It easily lasts for 3 weeks when kept in an airtight container.' }
    ],
    reviews: [
      { id: 1, name: 'Sanjay Shah', rating: 5, comment: 'The lemon flavor is so authentic and fresh. Best gathiya in Surat without a doubt!', date: 'August 14, 2023' },
      { id: 2, name: 'Neha Choksi', rating: 5, comment: 'So crispy and light. We always order this for our Sunday breakfast.', date: 'September 02, 2023' }
    ],
    
    metaTitle: 'Homemade Limbu Gathiya in Surat | Shilpa Kitchen',
    metaDescription: 'Order fresh, tangy homemade Limbu Gathiya in Surat. Authentic Gujarati snacks made with real lemon and premium besan. Fast delivery via WhatsApp.',
    metaKeywords: ['Limbu Gathiya Surat', 'homemade Gathiya', 'Gujarati snacks delivery', 'tangy Gathiya', 'Shilpa Kitchen Gathiya'],
    
    relatedProducts: [
      { name: 'Papad Pauva', slug: 'papad-pauva', callToAction: 'Try our crispy Papad Pauva' },
      { name: 'Thepla', slug: 'thepla', callToAction: 'Pair with homemade Thepla' }
    ]
  },
  
  'butter-chakri': {
    slug: 'butter-chakri',
    name: 'Homemade Butter Chakri',
    shortDescription: 'Crispy, buttery, spiral-shaped savory snack made from rice and gram flour. The perfect melt-in-mouth tea-time companion.',
    price: '120',
    image: '/images/chakri.png',
    rating: '4.7',
    reviewCount: '185',
    category: 'Gujarati Snacks',
    diet: 'Vegetarian',
    
    ingredients: ['Rice Flour', 'Gram Flour (Besan)', 'Pure Butter', 'Sesame Seeds (Til)', 'Cumin Seeds', 'Red Chili Powder', 'Salt'],
    taste: 'Rich, buttery, and mildly spicy with a wonderful nutty flavor from the toasted sesame seeds embedded in the spirals.',
    texture: 'Crisp on the outside but crumbles and melts in the mouth instantly due to the generous use of high-quality butter in the dough.',
    freshness: 'Made in small batches to ensure the butter does not go rancid. Every bite tastes incredibly fresh and rich.',
    homemadeQuality: 'Hand-pressed into perfect spirals. We use real dairy butter rather than cheap vegetable fats, making a huge difference in the rich taste.',
    servingSuggestions: 'Serve with evening tea or coffee. Excellent for serving guests or adding to a festive snack platter.',
    storageInstructions: 'Store in an airtight container in a cool, dark place. The high butter content means it should be kept away from direct heat. Lasts for 2 weeks.',
    occasions: 'A staple Diwali snack (Murukku/Chakli), great for Janmashtami, or gifting during festivals.',
    travelSuitability: 'Good for travel, though they are fragile and should be packed in a rigid container to prevent crushing.',
    
    faqs: [
      { question: 'Is the Butter Chakri fried or baked?', answer: 'Our Butter Chakri is traditionally deep-fried in premium oil at the perfect temperature to ensure it absorbs minimal oil while remaining extremely crisp.' },
      { question: 'Does it contain garlic or onion?', answer: 'No, our Butter Chakri is completely Jain-friendly and contains no onion or garlic.' },
      { question: 'Is it hard to bite?', answer: 'Not at all! The addition of pure butter makes it very porous and crumbly, so it easily melts in your mouth.' }
    ],
    reviews: [
      { id: 1, name: 'Kavita Joshi', rating: 5, comment: 'Melts in the mouth! The butter flavor is very prominent. My kids absolutely love it.', date: 'January 10, 2024' },
      { id: 2, name: 'Ravi Kapadia', rating: 4, comment: 'Very tasty and crispy. Packaging was great, none of the chakris were broken.', date: 'February 18, 2024' }
    ],
    
    metaTitle: 'Homemade Butter Chakri in Surat | Shilpa Kitchen',
    metaDescription: 'Buy melt-in-mouth homemade Butter Chakri in Surat. Made with pure butter and premium flours. Order fresh Gujarati snacks on WhatsApp.',
    metaKeywords: ['Butter Chakri Surat', 'homemade Chakri', 'Gujarati Chakli', 'Diwali snacks Surat', 'Shilpa Kitchen Chakri'],
    
    relatedProducts: [
      { name: 'Farshi Puri', slug: 'farshi-puri', callToAction: 'Try our Farshi Puri' },
      { name: 'Limbu Gathiya', slug: 'limbu-gathiya', callToAction: 'Explore Limbu Gathiya' }
    ]
  },
  
  'thepla': {
    slug: 'thepla',
    name: 'Homemade Methi Thepla',
    shortDescription: 'Soft, flavorful Gujarati flatbread made with fresh fenugreek leaves, whole wheat, and traditional spices. The ultimate travel food.',
    price: '150',
    image: '/images/thepla.webp',
    rating: '4.9',
    reviewCount: '342',
    category: 'Gujarati Meals & Snacks',
    diet: 'Vegetarian',
    
    ingredients: ['Whole Wheat Flour', 'Fresh Fenugreek Leaves (Methi)', 'Yogurt (Curd)', 'Ginger-Green Chili Paste', 'Turmeric', 'Oil', 'Salt'],
    taste: 'Savory and slightly bitter from the fresh methi leaves, balanced by the tanginess of yogurt and the heat of ginger-chili paste.',
    texture: 'Incredibly soft and pliable. Even after days of storage, our theplas remain soft and do not turn chewy or dry.',
    freshness: 'Made fresh to order daily. We thoroughly wash and chop fresh methi leaves for every batch.',
    homemadeQuality: 'Hand-rolled and roasted perfectly on a traditional tawa. The dough is bound with yogurt and a generous amount of oil to guarantee long-lasting softness.',
    servingSuggestions: 'Best served warm or at room temperature with sweet mango pickle (Chhundo), fresh curd, or a hot cup of tea for breakfast.',
    storageInstructions: 'Can be stored at room temperature for 3-4 days. For longer shelf life, refrigerate for up to 15 days or freeze. Warm slightly before eating.',
    occasions: 'Perfect for daily breakfast, kids lunchboxes, quick dinners, or taking along on picnics and international travel.',
    travelSuitability: 'The ultimate travel companion! Theplas are famous for their long shelf life without refrigeration. They stay soft and fresh during long flights, train rides, and road trips.',
    
    faqs: [
      { question: 'How long do Theplas stay fresh during travel?', answer: 'Our Theplas are specifically made with extra oil and yogurt (no water) allowing them to easily stay fresh at room temperature for 3 to 5 days, making them perfect for long travel.' },
      { question: 'Can I freeze the Theplas?', answer: 'Yes! You can freeze them for up to a month. Just thaw them at room temperature and warm them lightly on a pan before eating.' },
      { question: 'Are they spicy?', answer: 'They have a mild, balanced spice level suitable for everyone. We can customize the spice level for bulk orders upon request.' }
    ],
    reviews: [
      { id: 1, name: 'Bhavna Parekh', rating: 5, comment: 'Took these on my flight to the US. They stayed perfectly soft for 4 days! Authentic taste.', date: 'March 15, 2024' },
      { id: 2, name: 'Harshil Jani', rating: 5, comment: 'Exactly like how my mom makes them. Very soft, right amount of methi and spices.', date: 'April 02, 2024' }
    ],
    
    metaTitle: 'Homemade Methi Thepla in Surat | Fresh Travel Food | Shilpa Kitchen',
    metaDescription: 'Order fresh, soft homemade Methi Thepla in Surat. Perfect for travel, lunchboxes, and breakfast. Authentic Gujarati recipe. Order via WhatsApp.',
    metaKeywords: ['Methi Thepla Surat', 'homemade Thepla', 'Gujarati travel food', 'order Thepla online', 'Shilpa Kitchen Thepla'],
    
    relatedProducts: [
      { name: 'Limbu Gathiya', slug: 'limbu-gathiya', callToAction: 'Pair with Limbu Gathiya' },
      { name: 'Papad Pauva', slug: 'papad-pauva', callToAction: 'Try our Papad Pauva' }
    ]
  },
  
  'papad-pauva': {
    slug: 'papad-pauva',
    name: 'Homemade Papad Pauva',
    shortDescription: 'A delightful mix of roasted flattened rice (pauva) and crispy papad bits, seasoned with sweet and spicy masala.',
    price: '80',
    image: '/images/papadi.png',
    rating: '4.6',
    reviewCount: '124',
    category: 'Gujarati Snacks',
    diet: 'Vegetarian',
    
    ingredients: ['Flattened Rice (Poha/Pauva)', 'Urad Dal Papad', 'Peanuts', 'Roasted Chana (Dalia)', 'Curry Leaves', 'Green Chilies', 'Sugar Powder', 'Spices'],
    taste: 'A wonderful sweet, spicy, and tangy flavor profile. The roasted peanuts add earthiness, while the curry leaves bring a beautiful aroma.',
    texture: 'Very light and crunchy. The mix of paper-thin roasted poha and crispy fried papad pieces provides a satisfying textural contrast.',
    freshness: 'Roasted fresh to preserve the delicate crispness of the poha. The papad pieces are freshly fried before mixing.',
    homemadeQuality: 'Carefully hand-roasted in small batches to ensure the poha doesn\'t burn, maintaining a perfectly even crunch throughout.',
    servingSuggestions: 'A perfect lightweight evening snack. Can be mixed with finely chopped onions, tomatoes, and a squeeze of lemon for a quick bhel-like chaat.',
    storageInstructions: 'Store in an airtight container away from moisture. Stays fresh for 3-4 weeks.',
    occasions: 'Ideal for diet-conscious snacking, tea-time, or serving unexpected guests quickly.',
    travelSuitability: 'Excellent for travel! Very lightweight and doesn\'t make a mess. A great low-calorie snack option on the go.',
    
    faqs: [
      { question: 'Is Papad Pauva healthy?', answer: 'Yes! The flattened rice (pauva) is roasted, not deep-fried, making it a very light and relatively low-calorie snack option compared to other fried namkeens.' },
      { question: 'Does it contain nuts?', answer: 'Yes, it contains roasted peanuts for added crunch and protein. If you have a nut allergy, please let us know.' },
      { question: 'Is it sweet or spicy?', answer: 'It has a balanced "khatta-mitha" (sweet and tangy/spicy) flavor profile that is very popular in Gujarati snacks.' }
    ],
    reviews: [
      { id: 1, name: 'Dhwani Kothari', rating: 5, comment: 'Very light and perfectly roasted. Not overly sweet like the ones you get in the market.', date: 'May 11, 2023' },
      { id: 2, name: 'Kishan Patel', rating: 4, comment: 'Great crunch and flavor. Perfect for my evening tea cravings without the guilt.', date: 'June 05, 2023' }
    ],
    
    metaTitle: 'Homemade Papad Pauva in Surat | Diet Snacks | Shilpa Kitchen',
    metaDescription: 'Order light and crispy homemade Papad Pauva in Surat. Sweet and spicy roasted poha snack perfect for diet-conscious snacking. WhatsApp delivery.',
    metaKeywords: ['Papad Pauva Surat', 'roasted diet snacks', 'homemade Pauva chivda', 'Gujarati dry snacks', 'Shilpa Kitchen Surat'],
    
    relatedProducts: [
      { name: 'Farshi Puri', slug: 'farshi-puri', callToAction: 'Try our Farshi Puri' },
      { name: 'Butter Chakri', slug: 'butter-chakri', callToAction: 'Explore Butter Chakri' }
    ]
  }
};
