import { format, formatDistanceToNow, isToday, isYesterday } from 'date-fns';

export const formatMessageTime = (date) => {
  const messageDate = new Date(date);
  
  if (isToday(messageDate)) {
    return format(messageDate, 'HH:mm');
  }
  
  if (isYesterday(messageDate)) {
    return 'Yesterday';
  }
  
  return format(messageDate, 'dd/MM/yyyy');
};

export const formatDetailedTime = (date) => {
  const messageDate = new Date(date);
  return format(messageDate, 'dd MMM yyyy HH:mm');
};

export const formatLastActive = (date) => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};
