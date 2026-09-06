import { ContactLink } from "../data/contacts";
import { Icon } from "./icon";

export const ContactIcon = ({
  icon,
  className,
}: {
  icon: ContactLink["icon"];
  className?: string;
}) => <Icon name={icon} className={className} />;
