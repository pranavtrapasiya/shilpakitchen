import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { productsData } from '@/data/products';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import ProductDetailClient from '@/components/ProductDetailClient';
import Footer from '@/components/Footer';

// Generate static params for all products
export async function generateStaticParams() {
  return Object.keys(productsData).map((slug) => ({
    slug,
  }));
}

// Generate dynamic metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = productsData[slug];
  
  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  const url = `https://www.shilpaskitchen.in/${slug}`;

  return {
    title: product.metaTitle,
    description: product.metaDescription,
    keywords: product.metaKeywords,
    alternates: {
      canonical: `/${slug}`,
    },
    openGraph: {
      title: product.metaTitle,
      description: product.metaDescription,
      url,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: `${product.name} in Surat - Shilpa Kitchen`,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: product.metaTitle,
      description: product.metaDescription,
      images: [product.image],
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = productsData[slug];

  if (!product) {
    notFound();
  }

  const productUrl = `https://www.shilpaskitchen.in/${slug}`;
  const whatsappUrl = buildWhatsAppUrl(`Hi! I'd like to order ${product.name} from Shilpa Kitchen.`);

  // Structured Data
  const productSchema = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.name,
    image: `https://www.shilpaskitchen.in${product.image}`,
    description: product.shortDescription,
    brand: {
      '@type': 'Brand',
      name: "Shilpa Kitchen",
    },
    offers: {
      '@type': 'Offer',
      url: productUrl,
      priceCurrency: 'INR',
      price: product.price,
      priceValidUntil: '2026-12-31',
      itemCondition: 'https://schema.org/NewCondition',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: "Shilpa Kitchen",
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
    },
    category: product.category,
    suitableForDiet: 'https://schema.org/VegetarianDiet',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: product.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.shilpaskitchen.in',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Products',
        item: 'https://www.shilpaskitchen.in/products',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: product.name,
        item: productUrl,
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <ProductDetailClient product={product} whatsappUrl={whatsappUrl} />
      
      <Footer />
    </>
  );
}
