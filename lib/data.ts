// Central data layer — all environment variables with typed fallbacks

export const siteData = {
  name: process.env.NEXT_PUBLIC_NAME ?? 'Saranya Sidharth',
  handle: process.env.NEXT_PUBLIC_HANDLE ?? 'saranya_sidharth',
  email: process.env.NEXT_PUBLIC_EMAIL ?? 'saranyasidharth00@gmail.com',
  phone: process.env.NEXT_PUBLIC_PHONE ?? '+91 8590935081',
  lastUpdated: process.env.NEXT_PUBLIC_LAST_UPDATED ?? 'June 2026',
} as const

export const stats = {
  followers: Number(
    process.env.NEXT_PUBLIC_FOLLOWERS ?? 5092
  ),
  profileViews: Number(
    process.env.NEXT_PUBLIC_PROFILE_VIEWS ?? 170000
  ),
  accountsReached: Number(
    process.env.NEXT_PUBLIC_ACCOUNTS_REACHED ?? 83800
  ),
  engagementRate: Number(
    process.env.NEXT_PUBLIC_ENGAGEMENT_RATE ?? 12.3
  ),
  saveRate: Number(
    process.env.NEXT_PUBLIC_SAVE_RATE ?? 5.1
  ),
  shareRate: Number(
    process.env.NEXT_PUBLIC_SHARE_RATE ?? 4.8
  ),
  reelInteractions: Number(
    process.env.NEXT_PUBLIC_REEL_INTERACTIONS ?? 15000
  ),
} as const

export const prices = {
  starter: Number(process.env.NEXT_PUBLIC_STARTER_PRICE ?? 3000),
  growth: Number(process.env.NEXT_PUBLIC_GROWTH_PRICE ?? 5000),
  premium: Number(process.env.NEXT_PUBLIC_PREMIUM_PRICE ?? 8000),
} as const

// Static demographic data
export const demographics = {
  gender: [
    { label: 'Women', value: 69.9 },
    { label: 'Men', value: 30.1 },
  ],
  age: [
    { label: '25–34 (Primary)', value: 50.5 },
    { label: '18–24', value: 41.0 },
    { label: '35–44', value: 4.6 },
  ],
  location: [
    { label: 'India', value: 88.2 },
    { label: 'UAE', value: 3.1 },
    { label: 'UK', value: 1.4 },
  ],
} as const

// Reel data with placeholder images
export const reelData = [
  {
    id: 1,
    image: '/reel1.jpg',
    title: 'Fashion Styling Reel',
    likes: 1200,
    comments: 145,
    shares: 320,
    saves: 560,
  },
  {
    id: 2,
    image: '/reel2.jpg',
    title: 'Beauty Product Review',
    likes: 980,
    comments: 128,
    shares: 245,
    saves: 420,
  },
  {
    id: 3,
    image: '/reel3.jpg',
    title: 'Lifestyle Tips',
    likes: 1450,
    comments: 198,
    shares: 380,
    saves: 680,
  },
]

// At a Glance quick summary items
export const atAGlanceItems = [
  {
    label: 'Primary Audience',
    value: 'Women 18–34 (91.5%)',
  },
  {
    label: 'Content Focus',
    value: 'Reels, Fashion, Beauty',
  },
  {
    label: 'Geographic Reach',
    value: 'India (88%) + International',
  },
  {
    label: 'Engagement Style',
    value: 'Authentic & Relatable',
  },
]

// Why Partner With Me benefits
export const whyPartnerItems = [
  {
    title: 'Authentic Voice',
    body: 'Genuine, relatable content that connects',
  },
  {
    title: 'Engaged Community',
    body: '70% female audience, ages 18–34',
  },
  {
    title: 'Reels Expertise',
    body: 'Proven track record with video content',
  },
  {
    title: 'Professional',
    body: 'Timely delivery and clear communication',
  },
  {
    title: 'High ROI',
    body: '16.5× reach multiplier on followers',
  },
  {
    title: 'Trend-Savvy',
    body: 'Always on top of latest fashion & beauty trends',
  },
]

// Brand categories the creator works with
export const brandCategories = [
  {
    icon: '👗',
    name: 'Fashion Brands',
    description: 'Clothing, accessories, footwear',
  },
  {
    icon: '💄',
    name: 'Beauty Products',
    description: 'Makeup, skincare, cosmetics',
  },
  {
    icon: '✨',
    name: 'Lifestyle Brands',
    description: 'Home decor, wellness, self-care',
  },
  {
    icon: '💍',
    name: 'Jewelry & Accessories',
    description: 'Fashion jewelry, watches, bags',
  },
  {
    icon: '🛍️',
    name: 'E-commerce Platforms',
    description: 'Online shopping, apps, services',
  },
]

// FAQ items
export const faqItems = [
  {
    q: 'What types of collaborations do you offer?',
    a: 'I offer Reels, feed posts, Stories, product reviews, unboxing videos, and barter collaborations. Custom packages are always available.',
  },
  {
    q: 'What is your turnaround time?',
    a: 'Typically 5–7 working days after receiving the product or brief. Rush deliveries can be arranged for additional fees.',
  },
  {
    q: 'Do you offer barter collaborations?',
    a: 'Yes, I selectively accept barter collaborations for brands that align with my niche and audience. Let\'s discuss!',
  },
  {
    q: 'How do I receive the analytics report?',
    a: 'Post-publication Instagram Insights screenshots are shared within 7 days of going live (included with Growth and Premium packages).',
  },
  {
    q: 'Can I request content in a specific style?',
    a: 'Absolutely! Share your mood board, references, or brand guidelines and I\'ll incorporate them while keeping the content authentic.',
  },
  {
    q: 'What\'s your audience\'s purchase intent?',
    a: '70% of my audience actively purchases fashion/beauty products monthly. High shopping intent demographic (25–34 with disposable income).',
  },
]

// Creator values and brand safety
export const creatorValues = [
  {
    icon: '🌿',
    title: 'Brand Safety',
    body: 'I only promote products I genuinely believe in',
  },
  {
    icon: '🤝',
    title: 'Transparency',
    body: 'All paid partnerships are clearly disclosed as #ad or #sponsored',
  },
  {
    icon: '💯',
    title: 'Authenticity',
    body: 'My audience trusts me because I\'m honest and genuine',
  },
  {
    icon: '🎯',
    title: 'Niche-Aligned',
    body: 'Only fashion, beauty, and lifestyle — no mismatched brands',
  },
]

// Content performance highlights
export const contentHighlights = [
  {
    emoji: '🎬',
    title: 'Reels Powerhouse',
    body: '15K interactions - primary content format',
  },
  {
    emoji: '📈',
    title: 'Exceptional Reach',
    body: '83.8K accounts reached monthly',
  },
  {
    emoji: '👁️',
    title: 'Profile Views',
    body: '1.7L views in last 30 days',
  },
  {
    emoji: '🔗',
    title: 'Bio Link Clicks',
    body: '28+ taps driving traffic',
  },
  {
    emoji: '📊',
    title: 'Engagement Rate',
    body: 'High interaction rate on all content',
  },
  {
    emoji: '🌍',
    title: 'Geographic Reach',
    body: '88% India + 12% international',
  },
]

// Package features
export const packages = [
  {
    name: 'Starter',
    price: prices.starter,
    highlighted: false,
    features: [
      '1 Sponsored Reel (15–30 sec)',
      '3 Instagram Stories (24 hrs)',
      'Product mention in bio link',
      'Usage rights for 30 days',
      '1 round of revisions',
    ],
  },
  {
    name: 'Growth',
    price: prices.growth,
    highlighted: true,
    features: [
      '2 Sponsored Reels',
      '1 Feed Post (carousel or single)',
      '5 Instagram Stories',
      'Product review & unboxing',
      'Bio link for 60 days',
      'Usage rights for 90 days',
      '2 rounds of revisions',
      'Performance analytics report',
    ],
  },
  {
    name: 'Premium',
    price: prices.premium,
    highlighted: false,
    features: [
      '3 Sponsored Reels',
      '2 Feed Posts',
      '10 Instagram Stories',
      'Detailed product review',
      'Unboxing video',
      'Bio link for 90 days',
      'Unlimited usage rights',
      'Unlimited revisions',
      'Detailed analytics & insights',
      'Priority support',
    ],
  },
]
