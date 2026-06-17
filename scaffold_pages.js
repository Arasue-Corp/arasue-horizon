const fs = require('fs');
const path = require('path');

const pages = [
  // Holding
  {
    path: 'src/app/[lang]/(holding)/newsroom/page.tsx',
    dictPath: 'dict.corporate.newsroom',
    name: 'NewsroomPage'
  },
  {
    path: 'src/app/[lang]/(holding)/contact/page.tsx',
    dictPath: 'dict.corporate.contact',
    name: 'HoldingContactPage'
  },
  // Forge
  {
    path: 'src/app/[lang]/(forge)/forge/services/page.tsx',
    dictPath: 'dict.forge.services_page',
    name: 'ForgeServicesPage',
    extra: 'scarcity'
  },
  {
    path: 'src/app/[lang]/(forge)/forge/portfolio/page.tsx',
    dictPath: 'dict.forge.portfolio_page',
    name: 'ForgePortfolioPage'
  },
  {
    path: 'src/app/[lang]/(forge)/forge/pricing/page.tsx',
    dictPath: 'dict.forge.pricing_page',
    name: 'ForgePricingPage',
    extra: 'anchoring_text'
  },
  {
    path: 'src/app/[lang]/(forge)/forge/contact/page.tsx',
    dictPath: 'dict.forge.contact_page',
    name: 'ForgeContactPage'
  },
  // Media
  {
    path: 'src/app/[lang]/(media)/media/work/page.tsx',
    dictPath: 'dict.media.work_page',
    name: 'MediaWorkPage'
  },
  {
    path: 'src/app/[lang]/(media)/media/creators/page.tsx',
    dictPath: 'dict.media.creators_page',
    name: 'MediaCreatorsPage'
  },
  {
    path: 'src/app/[lang]/(media)/media/contact/page.tsx',
    dictPath: 'dict.media.contact_page',
    name: 'MediaContactPage'
  },
  // Labs
  {
    path: 'src/app/[lang]/(labs)/labs/shop/page.tsx',
    dictPath: 'dict.labs.shop_page',
    name: 'LabsShopPage'
  },
  {
    path: 'src/app/[lang]/(labs)/labs/story/page.tsx',
    dictPath: 'dict.labs.story_page',
    name: 'LabsStoryPage'
  },
  {
    path: 'src/app/[lang]/(labs)/labs/contact/page.tsx',
    dictPath: 'dict.labs.contact_page',
    name: 'LabsContactPage'
  }
];

const generateContent = (page) => {
  const isForge = page.path.includes('(forge)');
  const isMedia = page.path.includes('(media)');
  const isLabs = page.path.includes('(labs)');
  
  let bgClass = "bg-background text-foreground";
  if (isMedia) bgClass = "bg-foreground text-background";
  if (isLabs) bgClass = "font-serif text-[#1a2e1a]";

  let extraBlock = '';
  if (page.extra) {
    extraBlock = `
          <MotionDiv 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 p-8 border border-current/10 bg-current/5 rounded-3xl"
          >
            <p className="text-lg font-bold">
              {${page.dictPath}.${page.extra}}
            </p>
          </MotionDiv>
    `;
  }

  return `import { getDictionary, Locale } from '@/i18n/dictionaries'
import { MotionDiv } from '@/components/Motion'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.lang as Locale)
  
  // Resolve title and description dynamically
  const title = (dict as any).${page.dictPath.replace('dict.', '')}?.title || '${page.name}'
  const description = (dict as any).${page.dictPath.replace('dict.', '')}?.subtitle || 'Arasue Horizon'

  return {
    title: \`\${title} | Arasue\`,
    description: description
  }
}

export default async function ${page.name}({
  params
}: {
  params: Promise<{ lang: string }>
}) {
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.lang as Locale)

  return (
    <div className="flex flex-col min-h-[80vh] pt-32 pb-24 px-6 ${bgClass}">
      <div className="max-w-5xl mx-auto w-full">
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
            {${page.dictPath}.title}
          </h1>
          <p className="text-xl md:text-2xl opacity-70 max-w-2xl">
            {${page.dictPath}.subtitle || ${page.dictPath}.content}
          </p>
        </MotionDiv>
        ${extraBlock}
        
        {/* Placeholder for future content blocks */}
        <MotionDiv 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-24 w-full h-[40vh] border border-dashed border-current/20 rounded-3xl flex items-center justify-center opacity-50"
        >
          <p className="font-mono text-sm uppercase tracking-widest">[ Content Placeholder ]</p>
        </MotionDiv>
      </div>
    </div>
  )
}
`;
}

pages.forEach(p => {
  const fullPath = path.join(__dirname, p.path);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, generateContent(p));
});

console.log('Scaffolded all pages.');
