import moment from 'moment';

const formatDate = (date: Date) => moment(date).format('MMM Do YYY');
export default formatDate;
