import { Button } from '@/components/ui/button';

interface NavLinkProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

/** Sidebar nav item: a line that grows when hovered or active, followed by the label. */
export const NavLink = ({ label, active = false, onClick }: NavLinkProps) => (
  <Button variant="nav" type="button" onClick={onClick} aria-current={active ? 'true' : undefined}>
    <span
      className={`inline-block h-px mr-4 transition-all duration-200 ${
        active ? 'w-16 bg-indicator' : 'w-8 bg-indicator-idle group-hover:w-16 group-hover:bg-indicator'
      }`}
    ></span>
    {label.toUpperCase()}
  </Button>
);
