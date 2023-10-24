import moment from 'moment';
import { addMethod, date } from 'yup';

addMethod(date, 'formatFromMoment', function formatFromMoment() {
    return this.transform((value, originalValue, ctx) => {
        if (ctx.isType(value)) return value;

        value = moment(originalValue, 'DD/MM/YYYY');

        return value.isValid() ? value.toDate() : new Date('');
    });
});

// @ts-ignore
export const momentDate = () => date().formatFromMoment();
