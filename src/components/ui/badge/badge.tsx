type BadgeProps = {
  badgeText: string;
}

function Badge({badgeText}: BadgeProps): JSX.Element {

  return (
    <div className="place-card__mark"><span>{badgeText}</span></div>
  );
}

export default Badge;
