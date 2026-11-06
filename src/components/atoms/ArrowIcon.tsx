const arrows = {
  'up-right': { glyph: '↗', motion: 'group-hover:translate-x-1 group-hover:-translate-y-1' },
  right: { glyph: '→', motion: 'group-hover:translate-x-1' },
  left: { glyph: '←', motion: 'group-hover:-translate-x-1' },
} as const;

interface ArrowIconProps {
  direction?: keyof typeof arrows;
  className?: string;
}

/** Decorative arrow that nudges on hover of the closest `.group` parent. */
export const ArrowIcon = ({ direction = 'up-right', className = '' }: ArrowIconProps) => {
  const { glyph, motion } = arrows[direction];
  return (
    <span aria-hidden="true" className={`${className} transition-transform duration-200 ${motion}`.trim()}>
      {glyph}
    </span>
  );
};
