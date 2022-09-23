import { format } from 'date-fns';
import { dateConfig } from '../../../../config';
import { HeaderView } from './HeaderView';

export const HeaderContainer = () => {
  const date = format(new Date(), dateConfig.format1);
  return <HeaderView date={date} />;
};
