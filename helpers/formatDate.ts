import { format } from 'date-fns';

const formatDate = (date: Date) => format(new Date(date), 'yyyy-MM-dd');
export default formatDate;
