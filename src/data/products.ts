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
  weight: string;

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
    name: 'Farshi Puri',
    shortDescription: 'Crispy homemade Farshi Puri made with traditional Gujarati recipes and fresh ingredients. Perfect for tea-time snacking.',
    price: '210',
    image: '/images/farsi_puri.png',
    rating: '4.8',
    reviewCount: '156',
    category: 'Gujarati Snacks',
    diet: 'Vegetarian',
    weight: '500gm',

    ingredients: ['All-Purpose Flour (Maida)', 'Pure Ghee', 'Black Pepper', 'Cumin Seeds (Jeera)', 'Salt', 'Groundnut Oil (Peanut Oil) for frying'],
    taste: 'A perfect balance of savory and mildly spiced flavors, featuring the earthy aroma of roasted cumin and the subtle kick of crushed black pepper.',
    texture: 'Exceptionally flaky, layered, and crispy. It shatters delightfully in the mouth, characteristic of a perfectly kneaded and deep-fried traditional puri.',
    freshness: 'Made fresh to order in small batches. We never use preservatives, ensuring you get the authentic taste of freshly prepared Gujarati snacks.',
    homemadeQuality: 'Handcrafted with love by Shilpa Kitchen, using the same recipe passed down through generations. The dough is kneaded to the perfect consistency to ensure the classic flakiness.',
    servingSuggestions: 'Best enjoyed with a hot cup of Masala Chai or Coffee. Can also be served alongside sweet mango pickle (Chhundo) or spicy green chutney for a flavor contrast.',
    storageInstructions: 'Store in an airtight container at room temperature. Keep away from direct sunlight and moisture to maintain its signature crispiness for up to 15 days.',
    occasions: 'An essential Diwali snack, perfect for monsoon evenings, daily tea-time rituals, or serving to guests during festive gatherings.',
    travelSuitability: 'Excellent for travel! These dry snacks do not spoil easily and provide a filling, hygienic home-cooked meal replacement during long train journeys or road trips.',

    faqs: [
      { question: 'What is Farshi Puri?', answer: 'Farshi Puri is a traditional Gujarati crispy snack made from all-purpose flour (maida), layered with ghee, and fried to golden perfection. It is a popular festive and everyday snack.' },
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
    name: 'Limbu Gathiya',
    shortDescription: 'Crunchy gram flour sticks infused with a tangy lemon twist and traditional Gujarati spices. A classic savory treat.',
    price: '200',
    image: '/images/gathiya.png',
    rating: '4.9',
    reviewCount: '210',
    category: 'Gujarati Snacks',
    diet: 'Vegetarian',
    weight: '500gm',

    ingredients: ['Gram Flour (Besan)', 'Fresh Lemon Juice', 'Red Pepper', 'Salt', 'Groundnut Oil (Peanut Oil) for frying'],
    taste: 'A tantalizing burst of tanginess from fresh lemon juice, balanced perfectly with savory besan and a mild kick of red pepper. Very addictive!',
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
    name: 'Butter Chakri',
    shortDescription: 'Crispy, buttery, spiral-shaped savory snack made from rice flour. The perfect melt-in-mouth tea-time companion.',
    price: '230',
    image: '/images/chakri.png',
    rating: '4.7',
    reviewCount: '185',
    category: 'Gujarati Snacks',
    diet: 'Vegetarian',
    weight: '500gm',

    ingredients: ['Rice Flour', 'Pure Butter', 'Sesame Seeds (Til)', 'Red Chili Powder', 'Salt', 'Groundnut Oil (Peanut Oil) for frying'],
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
    name: 'Methi Thepla',
    shortDescription: 'Soft, flavorful Gujarati flatbread made with fresh fenugreek leaves, whole wheat, and traditional spices. The ultimate travel food.',
    price: '190',
    image: '/images/thepla.png',
    rating: '4.9',
    reviewCount: '342',
    category: 'Gujarati Meals & Snacks',
    diet: 'Vegetarian',
    weight: '500gm',
    ingredients: ['Whole Wheat Flour', 'Fresh Fenugreek Leaves (Methi)', 'Green Chili Paste', 'Turmeric', 'Groundnut Oil (Peanut Oil)', 'Salt'],
    taste: 'Savory and slightly bitter from the fresh methi leaves, perfectly complemented by the heat of green chili paste.',
    texture: 'Incredibly soft and pliable. Even after days of storage, our theplas remain soft and do not turn chewy or dry.',
    freshness: 'Made fresh to order daily. We thoroughly wash and chop fresh methi leaves for every batch.',
    homemadeQuality: 'Hand-rolled and roasted perfectly on a traditional tawa. The dough is bound with a generous amount of oil to guarantee long-lasting softness.',
    servingSuggestions: 'Best served warm or at room temperature with sweet mango pickle (Chhundo), fresh curd, or a hot cup of tea for breakfast.',
    storageInstructions: 'Can be stored at room temperature for 3-4 days. For longer shelf life, refrigerate for up to 15 days or freeze. Warm slightly before eating.',
    occasions: 'Perfect for daily breakfast, kids lunchboxes, quick dinners, or taking along on picnics and international travel.',
    travelSuitability: 'The ultimate travel companion! Theplas are famous for their long shelf life without refrigeration. They stay soft and fresh during long flights, train rides, and road trips.',

    faqs: [
      { question: 'How long do Theplas stay fresh during travel?', answer: 'Our Theplas are specifically made with a generous amount of oil (no water) allowing them to easily stay fresh at room temperature for 3 to 5 days, making them perfect for long travel.' },
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
    name: 'Papad Pauva',
    shortDescription: 'A delightful mix of roasted flattened rice (pauva) and crispy papad bits, seasoned with sweet and spicy masala.',
    price: '200',
    image: '/images/papadi.png',
    rating: '4.6',
    reviewCount: '124',
    category: 'Gujarati Snacks',
    diet: 'Vegetarian',
    weight: '500gm',

    ingredients: ['Flattened Rice (Poha/Pauva)', 'Urad Dal Papad', 'Peanuts', 'Roasted Chana (Dalia)', 'Curry Leaves', 'Green Chilies', 'Sugar Powder', 'Spices', 'Groundnut Oil (Peanut Oil)'],
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
  },

  'methi-para': {
    slug: 'methi-para',
    name: 'Methi Para',
    shortDescription: 'Savory flaky squares infused with fenugreek leaves, offering a perfect blend of health and traditional taste.',
    price: '105',
    image: '/images/methi_para(1).png',
    rating: '4.7',
    reviewCount: '198',
    category: 'Gujarati Snacks',
    diet: 'Vegetarian',
    weight: '500gm',

    ingredients: ['Whole Wheat Flour', 'Fresh Fenugreek (Methi) Leaves', 'Salt', 'Groundnut Oil (Peanut Oil) for frying'],
    taste: 'A robust savory flavor featuring the authentic earthy bitterness of fresh fenugreek leaves.',
    texture: 'Crisp and delightfully flaky, snapping satisfyingly with every bite without being overly hard.',
    freshness: 'Made in small batches using fresh, hand-picked methi leaves for an authentic, vibrant flavor profile.',
    homemadeQuality: 'Carefully rolled and cut into perfect squares, then fried to a golden crispness, just like grandmother used to make.',
    servingSuggestions: 'Perfect alongside a steaming cup of masala chai or ginger tea, or paired with a tangy green chutney.',
    storageInstructions: 'Store in an airtight container away from direct sunlight. Stays crisp and fresh for up to 2-3 weeks.',
    occasions: 'A fantastic everyday tea-time snack, excellent for travel, and a healthy addition to a festive snack plate.',
    travelSuitability: 'Highly durable and non-messy, making it a stellar option for long flights, train rides, and road trips.',

    faqs: [
      { question: 'Is the methi flavor overpowering?', answer: 'Not at all! We use the perfect ratio of fresh methi leaves to flour, ensuring a balanced, savory taste without overwhelming bitterness.' },
      { question: 'Is it made from maida (refined flour)?', answer: 'No, we primarily use whole wheat flour to make it healthier and more authentic.' },
      { question: 'How long does it stay fresh?', answer: 'Stored properly in an airtight container, it maintains its crispness and flavor for up to 3 weeks.' }
    ],
    reviews: [
      { id: 1, name: 'Anjali Desai', rating: 5, comment: 'The fresh methi flavor is wonderful. My family goes through a packet in just two days!', date: 'October 22, 2023' },
      { id: 2, name: 'Vikram Mehta', rating: 4, comment: 'Very crispy and not overly oily. A perfect companion for my evening tea.', date: 'November 15, 2023' }
    ],

    metaTitle: 'Homemade Methi Para in Surat | Fresh Gujarati Snacks | Shilpa Kitchen',
    metaDescription: 'Order crispy, homemade Methi Para in Surat. Authentic Gujarati snacks made with fresh fenugreek leaves. Perfect for tea-time. Order via WhatsApp.',
    metaKeywords: ['Methi Para Surat', 'homemade Methi snacks', 'Gujarati dry snacks', 'tea time snacks Surat', 'Shilpa Kitchen Methi Para'],

    relatedProducts: [
      { name: 'Farshi Puri', slug: 'farshi-puri', callToAction: 'Try our Farshi Puri' },
      { name: 'Khakhra - Methi', slug: 'khakhra-methi', callToAction: 'Explore Methi Khakhra' }
    ]
  },

  'makai-pauva': {
    slug: 'makai-pauva',
    name: 'Makai Pauva',
    shortDescription: 'Flattened rice mixed with crunchy corn flakes, seasoned with signature spices and a hint of lemon juice. Light and highly nutritious.',
    price: '190',
    image: '/images/makai_pauva.png',
    rating: '4.5',
    reviewCount: '112',
    category: 'Gujarati Snacks',
    diet: 'Vegetarian',
    weight: '500gm',

    ingredients: ['Flattened Rice (Poha)', 'Corn Flakes (Makai Chivda)', 'Peanuts', 'Curry Leaves', 'Turmeric', 'Green Chilies', 'Lemon Juice', 'Spices', 'Groundnut Oil (Peanut Oil)'],
    taste: 'A delightful khatta-mitha (sweet and sour) explosion with the earthy richness of roasted peanuts and vibrant curry leaves.',
    texture: 'Exceptionally light and crispy. The combination of delicate poha and crunchy corn flakes creates a wonderful textural contrast.',
    freshness: 'Roasted to order to ensure the corn flakes and poha retain their maximum crunchiness without absorbing excess moisture.',
    homemadeQuality: 'Carefully hand-mixed and dry-roasted in traditional broad pans to achieve a perfectly even spice coating without deep frying.',
    servingSuggestions: 'Enjoy as a guilt-free mid-day snack. Can be tossed with chopped onions and tomatoes for a quick, healthy chaat.',
    storageInstructions: 'Keep in an airtight jar in a cool, dry place. Avoid using wet spoons to maintain the crunch. Lasts for 3-4 weeks.',
    occasions: 'Perfect for diet-conscious individuals, office snacking, kids\' lunchboxes, or casual evening munching.',
    travelSuitability: 'One of our best travel snacks! Very lightweight, completely dry, and provides a quick energy boost on the go.',

    faqs: [
      { question: 'Is this snack deep-fried?', answer: 'No, our Makai Pauva is predominantly dry-roasted. Only a minimal amount of oil is used for the tempering (tadka) of spices and curry leaves, making it a very healthy choice.' },
      { question: 'Is it spicy?', answer: 'It has a very mild, balanced flavor profile that leans slightly towards sweet and tangy, making it very popular with children.' },
      { question: 'Does it contain nuts?', answer: 'Yes, it contains roasted peanuts. Please be aware if you have nut allergies.' }
    ],
    reviews: [
      { id: 1, name: 'Pooja Shah', rating: 5, comment: 'Such a light and tasty snack! I keep a jar at my office desk and it\'s the perfect guilt-free munchie.', date: 'September 08, 2023' },
      { id: 2, name: 'Ritesh Patel', rating: 4, comment: 'The mix of corn flakes and poha is brilliant. Very fresh and crunchy.', date: 'October 19, 2023' }
    ],

    metaTitle: 'Homemade Makai Pauva in Surat | Healthy Diet Snacks | Shilpa Kitchen',
    metaDescription: 'Buy fresh, homemade Makai Pauva in Surat. Light, crispy, and healthy roasted corn and poha chivda. Perfect diet snack. Order on WhatsApp.',
    metaKeywords: ['Makai Pauva Surat', 'Corn Chivda', 'roasted diet snacks Surat', 'healthy Gujarati snacks', 'Shilpa Kitchen Surat'],

    relatedProducts: [
      { name: 'Papad Pauva', slug: 'papad-pauva', callToAction: 'Try Papad Pauva' },
      { name: 'Limbu Gathiya', slug: 'limbu-gathiya', callToAction: 'Add Limbu Gathiya' }
    ]
  },

  'khakhra-methi': {
    slug: 'khakhra-methi',
    name: 'Methi Khakhra',
    shortDescription: 'Healthy, fenugreek-infused thin flatbread roasted to a perfect crisp. A nutritious and delicious traditional Gujarati staple.',
    price: '90',
    image: '/images/khakhra.png',
    rating: '4.8',
    reviewCount: '275',
    category: 'Gujarati Snacks',
    diet: 'Vegetarian',
    weight: '250gm',

    ingredients: ['Whole Wheat Flour', 'Fresh Fenugreek (Methi) Leaves', 'Turmeric', 'Green Chili Paste', 'Ajwain', 'Salt'],
    taste: 'Savory with a distinct, pleasant bitterness from the methi leaves, complemented by subtle undertones of turmeric and ajwain.',
    texture: 'Paper-thin and incredibly crisp. It snaps easily and provides a highly satisfying crunch without being hard on the teeth.',
    freshness: 'Hand-rolled and slow-roasted daily. We use real, fresh methi leaves rather than dried kasuri methi for superior flavor.',
    homemadeQuality: 'Each khakhra is meticulously hand-pressed on a tawa (griddle) using a traditional wooden press to ensure it is paper-thin and evenly roasted without any raw spots.',
    servingSuggestions: 'Enjoy plain, or spread a thin layer of ghee and chaat masala on top. Perfect with morning tea, coffee, or a side of sweet mango pickle.',
    storageInstructions: 'Store in an airtight container or a zip-lock bag. Stays perfectly crisp and fresh for 2-3 months at room temperature.',
    occasions: 'The ultimate daily breakfast or evening snack. Excellent for weight-loss diets, students, and busy professionals.',
    travelSuitability: 'A must-have for international travel! They take up very little space, never spoil, and provide a taste of home anywhere in the world.',

    faqs: [
      { question: 'Is the Khakhra fried or roasted?', answer: 'Our Khakhra is 100% dry-roasted on a hot griddle. It is completely oil-free during the roasting process, making it an extremely healthy diet snack.' },
      { question: 'Are these machine-made?', answer: 'No, every single khakhra is hand-rolled and hand-roasted by our experienced artisans to ensure the authentic homemade thinness and texture.' },
      { question: 'Can I carry them on an international flight?', answer: 'Absolutely! Khakhras are one of the most popular items our customers take abroad due to their compact size and long shelf life.' }
    ],
    reviews: [
      { id: 1, name: 'Shruti Joshi', rating: 5, comment: 'The thinnest and crispiest khakhras I have ever had! The fresh methi flavor really shines through.', date: 'January 14, 2024' },
      { id: 2, name: 'Keval Desai', rating: 5, comment: 'Packed them for my son studying in Canada. They reached perfectly intact and he loves them.', date: 'February 28, 2024' }
    ],

    metaTitle: 'Homemade Methi Khakhra in Surat | Diet Snacks | Shilpa Kitchen',
    metaDescription: 'Order fresh, hand-roasted Methi Khakhra in Surat. Paper-thin, crispy, and healthy Gujarati diet snacks perfect for travel. Order via WhatsApp.',
    metaKeywords: ['Methi Khakhra Surat', 'homemade Khakhra', 'hand roasted Khakhra', 'Gujarati diet snacks', 'travel food Surat', 'Shilpa Kitchen Khakhra'],

    relatedProducts: [
      { name: 'Thepla', slug: 'thepla', callToAction: 'Try our Soft Theplas' },
      { name: 'Methi Para', slug: 'methi-para', callToAction: 'Explore Methi Para' }
    ]
  },

  'sev': {
    slug: 'sev',
    name: 'Sev',
    shortDescription: 'Fine vermicelli-like crunchy snack made from gram flour, perfect for garnishing or snacking on its own.',
    price: '200',
    image: '/images/sev.png',
    rating: '4.8',
    reviewCount: '150',
    category: 'Gujarati Snacks',
    diet: 'Vegetarian',
    weight: '500gm',

    ingredients: ['Gram Flour (Besan)', 'Turmeric', 'Salt', 'Groundnut Oil (Peanut Oil) for frying'],
    taste: 'Mildly savory with the pleasant, earthy taste of roasted besan and a hint of turmeric.',
    texture: 'Very fine, light, and exquisitely crispy. It melts in the mouth almost instantly.',
    freshness: 'Freshly pressed and fried in clean, premium oil to prevent any rancid smell and maintain a bright yellow color.',
    homemadeQuality: 'Made using authentic fine brass sieves to achieve the perfect thinness that gives it the signature melt-in-mouth texture.',
    servingSuggestions: 'A versatile snack! Eat it plain, mix with mamra (puffed rice), or use as a generous garnish over poha, chaat, bhel, or upma.',
    storageInstructions: 'Store in an airtight container away from moisture. Keep in a cool, dry place. Lasts up to 3 weeks.',
    occasions: 'Essential for Diwali, perfect for daily tea time, and a must-have pantry staple for garnishing Indian street food.',
    travelSuitability: 'Excellent for travel due to its lightweight and dry nature. Can be easily mixed with other snacks on the go.',

    faqs: [
      { question: 'Is it spicy?', answer: 'No, our regular Sev is completely non-spicy, making it perfect for kids and for garnishing spicy dishes.' },
      { question: 'Is it Nylon Sev?', answer: 'It is very fine, similar to Nylon Sev, providing the perfect delicate crunch required for chaats.' },
      { question: 'What oil is used?', answer: 'We strictly use fresh, premium refined oil. We never reuse oil, ensuring our sev is light and healthy.' }
    ],
    reviews: [
      { id: 1, name: 'Aarti Trivedi', rating: 5, comment: 'So fresh and crispy! I use it on everything from poha to bhel.', date: 'May 04, 2024' },
      { id: 2, name: 'Suresh Patel', rating: 4, comment: 'Very good quality. You can tell fresh oil was used. My kids love eating it plain.', date: 'April 20, 2024' }
    ],

    metaTitle: 'Homemade Besan Sev in Surat | Fresh Namkeen | Shilpa Kitchen',
    metaDescription: 'Order fresh, crispy homemade Besan Sev in Surat. Perfect for garnishing chaat, poha, or eating plain. Authentic Gujarati namkeen. Order via WhatsApp.',
    metaKeywords: ['Besan Sev Surat', 'homemade Sev', 'Gujarati namkeen', 'chaat sev', 'fine nylon sev', 'Shilpa Kitchen'],

    relatedProducts: [
      { name: 'Sev Mamra', slug: 'sev-mamra', callToAction: 'Try our Sev Mamra' },
      { name: 'Limbu Gathiya', slug: 'limbu-gathiya', callToAction: 'Explore Limbu Gathiya' }
    ]
  },

  'shakkar-para': {
    slug: 'shakkar-para',
    name: 'Shakkar Para',
    shortDescription: 'Sweet flaky pastry squares made with flour, pure ghee, and a delicate sugar coating. The perfect festive sweet snack.',
    price: '210',
    image: '/images/sakkar_para.png',
    rating: '4.9',
    reviewCount: '185',
    category: 'Gujarati Sweets',
    diet: 'Vegetarian',
    weight: '500gm',

    ingredients: ['Whole Wheat Flour', 'Pure Ghee', 'Sugar', 'Cardamom Powder', 'Groundnut Oil (Peanut Oil) for frying'],
    taste: 'Delightfully sweet with rich, buttery undertones from pure ghee and a delicate aroma of fresh cardamom.',
    texture: 'Crisp on the outside and flaky on the inside. It softens beautifully as it melts in the mouth.',
    freshness: 'Made fresh in small batches during festive seasons and year-round to ensure the sugar coating remains intact and the pastry stays flaky.',
    homemadeQuality: 'The dough is kneaded with generous amounts of pure ghee (moyan) which guarantees the authentic, melt-in-mouth homemade texture.',
    servingSuggestions: 'Perfect as an evening sweet treat alongside unsweetened tea or coffee, or as a dessert snack in kids\' lunchboxes.',
    storageInstructions: 'Store in an airtight container at room temperature. Keep away from heat so the sugar doesn\'t melt. Lasts for 3-4 weeks.',
    occasions: 'A must-have for Diwali, Holi, and Janmashtami. Also makes for an excellent traditional gift.',
    travelSuitability: 'Very good for travel. They are dry, don\'t spoil easily, and provide a quick energy boost.',

    faqs: [
      { question: 'Is it overly sweet?', answer: 'We maintain a perfectly balanced sweetness. The sugar coating is delicate and not cloying, allowing you to taste the richness of the ghee.' },
      { question: 'Does it contain Maida?', answer: 'We primarily use whole wheat flour mixed with a very small amount of refined flour to achieve the perfect flakiness while keeping it healthier.' },
      { question: 'How is it sweetened?', answer: 'We use a traditional sugar syrup (chashni) to lightly coat the fried squares.' }
    ],
    reviews: [
      { id: 1, name: 'Vandana Shah', rating: 5, comment: 'Just like my Dadi used to make! The cardamom flavor is wonderful and they are so flaky.', date: 'November 12, 2023' },
      { id: 2, name: 'Rajesh Parekh', rating: 5, comment: 'Perfect sweetness. A staple in our house for Diwali every year.', date: 'November 05, 2023' }
    ],

    metaTitle: 'Homemade Shakkar Para in Surat | Traditional Sweets | Shilpa Kitchen',
    metaDescription: 'Order sweet and flaky homemade Shakkar Para in Surat. Traditional Gujarati festive sweet made with pure ghee. Order online via WhatsApp.',
    metaKeywords: ['Shakkar Para Surat', 'homemade sweet snacks', 'Gujarati sweets', 'Diwali snacks Surat', 'Shilpa Kitchen'],

    relatedProducts: [
      { name: 'Farshi Puri', slug: 'farshi-puri', callToAction: 'Try our Farshi Puri' },
      { name: 'Methi Para', slug: 'methi-para', callToAction: 'Try savory Methi Para' }
    ]
  },

  'khakhra-masala': {
    slug: 'khakhra-masala',
    name: 'Masala Khakhra',
    shortDescription: 'Spiced thin flatbread roasted to perfection with an aromatic masala seasoning. A crispy and flavorful Gujarati specialty.',
    price: '90',
    image: '/images/khakhra.png',
    rating: '4.7',
    reviewCount: '162',
    category: 'Gujarati Snacks',
    diet: 'Vegetarian',
    weight: '250gm',

    ingredients: ['Whole Wheat Flour', 'Red Chili Powder', 'Turmeric', 'Cumin Powder', 'Coriander Powder', 'Salt'],
    taste: 'A robust, spicy, and savory flavor profile that hits the perfect notes of traditional Indian masalas.',
    texture: 'Paper-thin and extremely crunchy. Snaps easily and provides a deeply satisfying bite.',
    freshness: 'Hand-roasted daily. We use freshly ground spices to ensure the masala flavor is aromatic and potent.',
    homemadeQuality: 'Each khakhra is hand-pressed on a tawa to ensure uniform thinness and a perfect oil-free roast.',
    servingSuggestions: 'Excellent with a dollop of fresh yogurt or a hot cup of tea. Great base for making "Khakhra Pizza" or chaat.',
    storageInstructions: 'Keep in an airtight container or zip-lock bag. Stays fresh and crisp for 2-3 months.',
    occasions: 'Perfect for breakfast, evening tea, or late-night cravings when you want something spicy but light.',
    travelSuitability: 'Excellent travel food! Very compact, long shelf life, and completely dry.',

    faqs: [
      { question: 'Is it very spicy?', answer: 'It has a moderate spice level. It is flavorful and zesty but not overwhelmingly hot.' },
      { question: 'Is it fried?', answer: 'No, it is 100% dry-roasted on a griddle, making it a healthy, low-fat snack.' },
      { question: 'What is the shelf life?', answer: 'When stored properly in an airtight container, it easily lasts for 2-3 months.' }
    ],
    reviews: [
      { id: 1, name: 'Hemant Joshi', rating: 5, comment: 'The masala flavor is perfect! I take these to the office every day.', date: 'February 10, 2024' },
      { id: 2, name: 'Neeta Desai', rating: 4, comment: 'Very crispy and perfectly roasted. None of the pieces were burnt.', date: 'March 05, 2024' }
    ],

    metaTitle: 'Homemade Masala Khakhra in Surat | Spicy Diet Snacks | Shilpa Kitchen',
    metaDescription: 'Order fresh, spicy Masala Khakhra in Surat. Paper-thin, healthy, and roasted Gujarati diet snacks perfect for tea-time. Order via WhatsApp.',
    metaKeywords: ['Masala Khakhra Surat', 'spicy Khakhra', 'hand roasted Khakhra', 'Gujarati snacks delivery', 'Shilpa Kitchen'],

    relatedProducts: [
      { name: 'Khakhra - Jeera', slug: 'khakhra-jeera', callToAction: 'Try Jeera Khakhra' },
      { name: 'Khakhra - Methi', slug: 'khakhra-methi', callToAction: 'Try Methi Khakhra' }
    ]
  },

  'khakhra-jeera': {
    slug: 'khakhra-jeera',
    name: 'Jeera Khakhra',
    shortDescription: 'Cumin-flavored crispy thin flatbread, aromatic and perfect with tea. A mild and digestive Gujarati diet snack.',
    price: '90',
    image: '/images/khakhra.png',
    rating: '4.6',
    reviewCount: '135',
    category: 'Gujarati Snacks',
    diet: 'Vegetarian',
    weight: '250gm',

    ingredients: ['Whole Wheat Flour', 'Roasted Cumin Seeds (Jeera)', 'Salt'],
    taste: 'Mild and soothing with a prominent, earthy aroma and taste of freshly roasted cumin seeds.',
    texture: 'Paper-thin, light, and perfectly crispy.',
    freshness: 'We roast the cumin seeds right before kneading the dough to release maximum essential oils and aroma.',
    homemadeQuality: 'Hand-rolled and dry-roasted manually to ensure it is wafer-thin and perfectly crisp.',
    servingSuggestions: 'Perfect for dipping in hot tea or coffee. Excellent for upset stomachs or light breakfasts.',
    storageInstructions: 'Store in an airtight container. Stays crisp for 2-3 months.',
    occasions: 'Ideal for diet-conscious individuals, senior citizens, and children who prefer mild flavors.',
    travelSuitability: 'Very compact and long-lasting, making it a great travel companion.',

    faqs: [
      { question: 'Is it good for digestion?', answer: 'Yes! Cumin (Jeera) is known for its digestive properties, making this khakhra a very soothing and healthy snack.' },
      { question: 'Does it contain chilies?', answer: 'No, this is a completely non-spicy, mild variant suitable for everyone.' },
      { question: 'Is it roasted or fried?', answer: 'It is 100% dry-roasted on a hot griddle.' }
    ],
    reviews: [
      { id: 1, name: 'Bina Patel', rating: 5, comment: 'Very mild and aromatic. My parents absolutely love having this with their morning tea.', date: 'December 20, 2023' },
      { id: 2, name: 'Rahul Gandhi', rating: 4, comment: 'Great quality, very thin and perfectly roasted.', date: 'January 15, 2024' }
    ],

    metaTitle: 'Homemade Jeera Khakhra in Surat | Mild Diet Snacks | Shilpa Kitchen',
    metaDescription: 'Order mild, aromatic Jeera Khakhra in Surat. Healthy, roasted cumin flatbread perfect for digestion and light snacking. Order via WhatsApp.',
    metaKeywords: ['Jeera Khakhra Surat', 'cumin Khakhra', 'mild diet snacks', 'healthy Gujarati snacks', 'Shilpa Kitchen'],

    relatedProducts: [
      { name: 'Khakhra - Methi', slug: 'khakhra-methi', callToAction: 'Try Methi Khakhra' },
      { name: 'Khakhra - Masala', slug: 'khakhra-masala', callToAction: 'Try Masala Khakhra' }
    ]
  },

  'sev-mamra': {
    slug: 'sev-mamra',
    name: 'Garlic Sev Mamra',
    shortDescription: 'Light and crispy puffed rice mixed with fine sev and signature garlic-infused spices. The ultimate healthy evening snack.',
    price: '180',
    image: '/images/sev_mamra.png',
    rating: '4.4',
    reviewCount: '210',
    category: 'Gujarati Snacks',
    diet: 'Vegetarian',
    weight: '500gm',

    ingredients: ['Puffed Rice (Mamra)', 'Gram Flour Sev', 'Peanuts', 'Turmeric', 'Red Chili Powder', 'Mustard Seeds', 'Curry Leaves', 'Groundnut Oil (Peanut Oil)', 'Salt', 'Sugar Powder'],
    taste: 'A perfectly balanced sweet, spicy, and tangy mix with a garlicky undertone and the freshness of curry leaves.',
    texture: 'Very light and airy with a satisfying crunch from the roasted peanuts and sev.',
    freshness: 'Mamra is roasted fresh to remove any moisture, ensuring a loud, crisp crunch in every bite.',
    homemadeQuality: 'Carefully hand-tossed in small batches to ensure every grain of puffed rice is evenly coated with our special masala blend without becoming oily.',
    servingSuggestions: 'The perfect 4 PM snack with tea. Can be instantly upgraded to a wet bhel by adding chopped onions, tomatoes, and chutneys.',
    storageInstructions: 'Must be kept in a tightly sealed airtight container. Humidity will make the puffed rice soggy. Lasts 3-4 weeks.',
    occasions: 'Everyday snacking, office munching, and a favorite for kids\' tiffins.',
    travelSuitability: 'Excellent for travel! Extremely lightweight and provides a filling, low-calorie snack option.',

    faqs: [
      { question: 'Is it a diet snack?', answer: 'Yes! Puffed rice is naturally very low in calories, and we use minimal oil during the roasting process, making it a very healthy choice.' },
      { question: 'Does it contain garlic?', answer: 'We offer both Jain (no garlic/onion) and regular variants. Please specify your preference when ordering.' },
      { question: 'How to keep it crunchy?', answer: 'Always close the lid of the jar immediately after taking your portion, and avoid using wet hands.' }
    ],
    reviews: [
      { id: 1, name: 'Sonal Desai', rating: 5, comment: 'The best Sev Mamra I have had! Not oily at all and the masala ratio is perfect.', date: 'March 18, 2024' },
      { id: 2, name: 'Amit Choksi', rating: 5, comment: 'Very fresh and crispy. We finish a large jar every week!', date: 'April 02, 2024' }
    ],

    metaTitle: 'Homemade Sev Mamra in Surat | Healthy Evening Snacks | Shilpa Kitchen',
    metaDescription: 'Order fresh, crispy homemade Sev Mamra in Surat. Low-calorie puffed rice and sev mixture perfect for evening tea. Order via WhatsApp.',
    metaKeywords: ['Sev Mamra Surat', 'puffed rice mixture', 'healthy Gujarati chivda', 'diet snacks Surat', 'Shilpa Kitchen'],

    relatedProducts: [
      { name: 'Papad Pauva', slug: 'papad-pauva', callToAction: 'Try Papad Pauva' },
      { name: 'Makai Pauva', slug: 'makai-pauva', callToAction: 'Explore Makai Pauva' }
    ]
  }
};
