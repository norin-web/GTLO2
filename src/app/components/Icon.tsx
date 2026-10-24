import {
  Bookmark,
  Building2,
  CircleHelp,
  Heart,
  House,
  Mail,
  MessageCircle,
  Search,
  Smartphone,
  Sparkles,
  UsersRound,
  type LucideProps,
} from "lucide-react";

const map = {
  home: House,
  phone: Smartphone,
  heart: Heart,
  help: CircleHelp,
  mail: Mail,
  search: Search,
  building: Building2,
  message: MessageCircle,
  sparkles: Sparkles,
  bookmark: Bookmark,
  contacts: UsersRound,
};

export type IconName = keyof typeof map;

/** Content files name icons by key, so they stay plain data. */
export default function Icon({ name, ...rest }: { name: IconName } & LucideProps) {
  const C = map[name];
  return <C aria-hidden="true" strokeWidth={1.8} {...rest} />;
}
