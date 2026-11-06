import { InlineLink, SectionHeading } from '@/components/atoms';
import type { RichTextParagraph } from '@/data/profile';

export const AboutSection = ({ paragraphs }: { paragraphs: RichTextParagraph[] }) => (
  <section id="about" className="pb-16 lg:pb-20">
    <div className="w-full">
      <div className="space-y-4 text-left px-6">
        <SectionHeading>About</SectionHeading>
        {paragraphs.map((paragraph, i) => (
          <p key={i} className="text-base text-body mb-4">
            {paragraph.map((segment, j) =>
              typeof segment === 'string' ? (
                segment
              ) : (
                <InlineLink key={j} href={segment.href} external={segment.external}>
                  {segment.text}
                </InlineLink>
              )
            )}
          </p>
        ))}
      </div>
    </div>
  </section>
);
