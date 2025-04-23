import { cn } from '@/lib/utils';
import Image from 'next/image';

interface Props {
  src: string;
  className?: string;
}

export const CartItemDetailsImage: React.FC<Props> = ({ src, className }) => {
  return <Image className={cn(' h-[100px]', className)} src={src} alt='' width={100} height={100}/>;
};
