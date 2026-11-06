import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { LastUpdated } from './LastUpdated';

describe('LastUpdated', () => {
  it('shows a UK-formatted date with a machine-readable datetime', () => {
    const html = renderToStaticMarkup(<LastUpdated date={new Date('2026-11-05T12:00:00Z')} />);
    expect(html).toContain('Last updated');
    expect(html).toContain('<time dateTime="2026-11-05">5 Nov 2026</time>');
  });
});
