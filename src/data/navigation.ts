export interface NavItem {
  label: string;
  /** id of the <section> this item scrolls to */
  sectionId: string;
}

export const navItems: NavItem[] = [
  { label: 'About', sectionId: 'about' },
  { label: 'Experience', sectionId: 'experience' },
  { label: 'Projects', sectionId: 'projects' },
];
