interface ProfileIntroProps {
  name: string;
  title: string;
  bio: string;
  /** lg = desktop sidebar, sm = mobile header */
  size?: 'lg' | 'sm';
}

const styles = {
  lg: { name: 'text-5xl', title: 'text-xl mt-2', bio: 'text-sm max-w-xs' },
  sm: { name: 'text-3xl', title: 'text-base mt-1', bio: 'text-xs' },
};

/** Name, job title and one-line bio. Renders two siblings so the parent's spacing applies. */
export const ProfileIntro = ({ name, title, bio, size = 'lg' }: ProfileIntroProps) => {
  const s = styles[size];
  return (
    <>
      <div>
        <h1 className={`${s.name} font-bold`}>{name}</h1>
        <p className={`${s.title} text-subtle`}>{title}</p>
      </div>
      <p className={`${s.bio} text-body leading-relaxed`}>{bio}</p>
    </>
  );
};
